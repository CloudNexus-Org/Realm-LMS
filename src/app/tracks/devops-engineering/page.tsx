import CourseDetail from "@/components/courses/CourseDetail";
import { courses } from "@/data/courses";
import { devopsModules } from "@/data/devops-modules";

export default function DevOpsEngineeringPage() {
  return <CourseDetail course={courses["devops-engineering"]} detailedModules={devopsModules} />;
}
