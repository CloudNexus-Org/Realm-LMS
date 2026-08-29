import CourseDetail from "@/components/courses/CourseDetail";
import { courses } from "@/data/courses";
import { fullStackModules } from "@/data/fullstack-modules";

export default function FullStackDevelopmentPage() {
  return <CourseDetail course={courses["full-stack-development"]} detailedModules={fullStackModules} />;
}
