export interface Instructor {
  name: string;
  title: string;
  email: string;
  avatar: string;
  badge?: string;
  bio: string;
  profileLink?: string;
}

export interface CourseModule {
  id: string;
  number: string;
  title: string;
  description: string;
  videosCount: number;
  readingsCount: number;
  assignmentsCount: number;
  quizCount: number;
  isExpandedByDefault?: boolean;
}

export interface CertificateInfo {
  title: string;
  description: string;
  credentialNote: string;
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  subtitle: string;
  description: string;
  fullDescription: string[];
  coverImage: string;
  previewVideoImage: string;
  price: number;
  originalPrice: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  totalModules: number;
  totalActivities: number;
  totalCourses: number;
  totalAssignments: number;
  totalQuizzes: number;
  rating: number;
  reviewsCount: string;
  lastUpdated: string;
  instructor: Instructor;
  modules: CourseModule[];
  learningOutcomes: string[];
  tools: string[];
  certificate: CertificateInfo;
}
