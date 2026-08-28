import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEnrollment extends Document {
  fullName: string;
  phone: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  careerTrack: string;
  interestedModule: string;
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
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Must be at least 16 years old"],
      max: [100, "Age must be 100 or below"],
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
    interestedModule: {
      type: String,
      required: [true, "Interested module is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Enrollment: Model<IEnrollment> =
  mongoose.models.Enrollment ||
  mongoose.model<IEnrollment>("Enrollment", enrollmentSchema);

export default Enrollment;
