export interface EnrollmentInput {
  fullName: string;
  phone: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  careerTrack: string;
}

export interface EnrollmentRecord extends EnrollmentInput {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: string[];
}
