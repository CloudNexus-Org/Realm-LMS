import CourseDetail from "@/components/courses/CourseDetail";
import { courses } from "@/data/courses";
import { aimlModules } from "@/data/aiml-modules";

export default function AIMachineLearningPage() {
  return <CourseDetail course={courses["ai-machine-learning"]} detailedModules={aimlModules} />;
}
