import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug, getAllCourses } from "@/data/courses";
import CourseSidebar from "@/components/courses/CourseSidebar";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseBanner from "@/components/courses/CourseBanner";
import CourseMeta from "@/components/courses/CourseMeta";
import ModuleAccordion from "@/components/courses/ModuleAccordion";

interface CourseOutlinePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allCourses = getAllCourses();
  return allCourses.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseOutlinePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Outline | Realm Consulting",
    };
  }

  return {
    title: `${course.shortTitle} — Course Outline | Realm Consulting`,
    description: course.description,
  };
}

export default async function CourseOutlinePage({
  params,
}: CourseOutlinePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="course-detail-container">
      {/* Left Sidebar */}
      <CourseSidebar course={course} />

      {/* Main Outline Content */}
      <main className="course-main-content">
        <CourseHeader course={course} />
        <CourseBanner course={course} />
        <CourseMeta course={course} />
        <ModuleAccordion modules={course.modules} />
      </main>
    </div>
  );
}
