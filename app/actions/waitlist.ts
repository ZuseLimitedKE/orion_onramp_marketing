"use server";

import { google } from "googleapis";
import * as z from "zod";

const waitlistSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .nonempty({ message: "Email is required" }),
  chain: z
    .string()
    .nonempty({ message: "Please select the chain you're building on" })
    .max(100, { message: "Chain name must be less than 100 characters" }),
  paymentVolume: z.enum(
    ["0-10", "11-100", "100+"],
    "Please select your payment volume",
  ),
  country: z
    .string()
    .nonempty({ message: "Please enter your country" })
    .max(100, { message: "Country name must be less than 100 characters" }),
  fiatToCrypto: z.enum(["yes", "no"], "Please select an option"),
});

export async function addToWaitlist(formData: unknown) {
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
          // row[0] still refers to the email column since the range is now F:F
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
