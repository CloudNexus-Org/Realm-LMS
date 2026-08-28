import { prisma } from "@/lib/prisma";
import type { EnrollmentSchemaType } from "@/lib/validations/enrollment";

export async function createEnrollment(data: EnrollmentSchemaType) {
  return prisma.enrollment.create({
    data: {
      fullName: data.fullName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      careerTrack: data.careerTrack,
    },
  });
}

export async function getAllEnrollments() {
  return prisma.enrollment.findMany({
    orderBy: { createdAt: "desc" },
  });
}
