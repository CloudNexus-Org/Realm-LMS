import { NextRequest, NextResponse } from "next/server";
import { enrollmentSchema } from "@/lib/validations/enrollment";
import {
  createEnrollment,
  getAllEnrollments,
} from "@/lib/services/enrollment.service";

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const parsed = enrollmentSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.errors.map(
        (e) => `${e.path.join(".")}: ${e.message}`
      );
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const enrollment = await createEnrollment(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message: "Enrollment request created successfully",
        data: enrollment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enrollment creation error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enrollments = await getAllEnrollments();

    return NextResponse.json(
      { success: true, data: enrollments },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enrollment fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
