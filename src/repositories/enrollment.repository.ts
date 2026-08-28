import { connectToDatabase } from "@/lib/mongodb";
import Enrollment, { IEnrollment } from "@/models/enrollment.model";
import type { EnrollmentInput } from "@/types/enrollment";

export async function createEnrollment(
  data: EnrollmentInput
): Promise<IEnrollment> {
  await connectToDatabase();
  const enrollment = new Enrollment(data);
  return enrollment.save();
}

export async function getAllEnrollments(): Promise<IEnrollment[]> {
  await connectToDatabase();
  return Enrollment.find({}).sort({ createdAt: -1 }).lean<IEnrollment[]>();
}
