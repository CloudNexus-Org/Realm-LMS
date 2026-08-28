import { z } from "zod";

export const enrollmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters")
    .trim(),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(
      /^[+]?[\d\s\-()]{7,20}$/,
      "Please enter a valid phone number"
    ),

  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .int("Age must be a whole number")
    .min(16, "You must be at least 16 years old")
    .max(100, "Age must be 100 or below"),

  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),

  careerTrack: z
    .string()
    .min(1, "Please select a career track")
    .trim(),

  interestedModule: z
    .string()
    .min(1, "Please select a module")
    .trim(),
});

export type EnrollmentSchemaType = z.infer<typeof enrollmentSchema>;
