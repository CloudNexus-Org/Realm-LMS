import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEnrollment extends Document {
  fullName: string;
  phone: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  careerTrack: string;
  createdAt: Date;
  updatedAt: Date;
}

const enrollmentSchema = new Schema<IEnrollment>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [100, "Full name must be at most 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: {
        values: ["Male", "Female", "Other"],
        message: "Gender must be Male, Female, or Other",
      },
    },
    careerTrack: {
      type: String,
      required: [true, "Career track is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

if (process.env.NODE_ENV === "development" && mongoose.models.Enrollment) {
  delete (mongoose.models as Record<string, unknown>).Enrollment;
}

const Enrollment: Model<IEnrollment> =
  mongoose.models.Enrollment ||
  mongoose.model<IEnrollment>("Enrollment", enrollmentSchema);

export default Enrollment;
