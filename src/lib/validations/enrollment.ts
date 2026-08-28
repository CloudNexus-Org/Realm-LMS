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

  dateOfBirth: z
    .string()
    .min(1, "Please enter your date of birth")
    .refine(
      (val) => {
        const dob = new Date(val);
        if (isNaN(dob.getTime())) return false;
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 16 && age <= 100;
      },
      { message: "You must be between 16 and 100 years old" }
    ),

  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),

  careerTrack: z
    .string()
    .min(1, "Please select a career track")
    .trim(),
});

export type EnrollmentSchemaType = z.infer<typeof enrollmentSchema>;
