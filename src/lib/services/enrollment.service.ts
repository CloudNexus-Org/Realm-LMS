import {
  createEnrollment,
  getAllEnrollments,
} from "@/repositories/enrollment.repository";
import type { EnrollmentInput, EnrollmentRecord } from "@/types/enrollment";

export async function createEnrollmentService(
  data: EnrollmentInput
): Promise<EnrollmentRecord> {
  const enrollment = await createEnrollment(data);
  return {
    id: (enrollment._id as { toString(): string }).toString(),
    fullName: enrollment.fullName,
    phone: enrollment.phone,
    age: enrollment.age,
    gender: enrollment.gender,
    careerTrack: enrollment.careerTrack,
    interestedModule: enrollment.interestedModule,
    createdAt: enrollment.createdAt,
    updatedAt: enrollment.updatedAt,
  };
}

export async function getAllEnrollmentsService(): Promise<EnrollmentRecord[]> {
  const enrollments = await getAllEnrollments();
  return enrollments.map((e) => ({
    id: (e._id as { toString(): string }).toString(),
    fullName: e.fullName,
    phone: e.phone,
    age: e.age,
    gender: e.gender,
    careerTrack: e.careerTrack,
    interestedModule: e.interestedModule,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  }));
}
