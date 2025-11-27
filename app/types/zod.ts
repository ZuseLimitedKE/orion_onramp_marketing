import * as z from "zod";
export const waitlistSchema = z.object({
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
