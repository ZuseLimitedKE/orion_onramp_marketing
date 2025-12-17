"use server";

import { google } from "googleapis";
import { waitlistSchema } from "../types/zod";
export async function addToWaitlist(formData: unknown) {
  const {
    GOOGLE_SHEET_ID: spreadsheetId,
    GOOGLE_CLIENT_EMAIL: clientEmail,
    GOOGLE_PRIVATE_KEY_BASE64: privateKeyBase64,
  } = process.env;

  if (!spreadsheetId || !clientEmail || !privateKeyBase64) {
    throw new Error(
      "Invalid env setup: ensure GOOGLE_SHEET_ID, GOOGLE_CLIENT_EMAIL, and GOOGLE_PRIVATE_KEY_BASE64 are set.",
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
    const privateKey = Buffer.from(privateKeyBase64, "base64").toString(
      "utf-8",
    );

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

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

    // Add new row using batchUpdate
    const sheet = await sheets.spreadsheets.get({
      spreadsheetId,
      ranges: ['Form Responses'],
      fields: 'sheets(properties(sheetId,title))',
    });

    const formResponsesSheet = sheet.data.sheets?.find(
      s => s.properties?.title === 'Form Responses'
    );

    if (!formResponsesSheet?.properties?.sheetId) {
      throw new Error('Could not find "Form Responses" sheet');
    }

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            appendCells: {
              sheetId: formResponsesSheet.properties.sheetId,
              rows: [
                {
                  values: [
                    { userEnteredValue: { stringValue: new Date().toISOString() } },
                    { userEnteredValue: { stringValue: chain } },
                    { userEnteredValue: { stringValue: paymentVolume } },
                    { userEnteredValue: { stringValue: country } },
                    { userEnteredValue: { stringValue: fiatToCrypto } },
                    { userEnteredValue: { stringValue: email } },
                  ],
                },
              ],
              fields: 'userEnteredValue',
            },
          },
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
