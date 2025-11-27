"use server";

import { google } from "googleapis";
import { waitlistSchema } from "../types/zod";
export async function addToWaitlist(formData: unknown) {
  if (
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    throw new Error(
      "Invalid env setup , ensure you have the required env variables for the Google Sheet API",
    );
  }

  const validation = waitlistSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "Invalid data",
    };
  }

  const { email, chain, paymentVolume, country, fiatToCrypto } =
    validation.data;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Form Responses!F:F";

    // Check for duplicate emails
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows) {
      for (const row of rows) {
        if (row[0] === email) {
          //NOTE: row[0]  refers to the email column since the range is  F:F
          return {
            success: false,
            message: "This email has already been used",
          };
        }
      }
    }

    // Add new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Form Responses",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [new Date(), chain, paymentVolume, country, fiatToCrypto, email],
        ],
      },
    });

    return {
      success: true,
      message: "You've been added to the waitlist!",
    };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
