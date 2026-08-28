import { NextRequest } from "next/server";
import {
  handleCreateEnrollment,
  handleGetAllEnrollments,
} from "@/controllers/enrollment.controller";

export async function POST(request: NextRequest) {
  return handleCreateEnrollment(request);
}

export async function GET() {
  return handleGetAllEnrollments();
}
