import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug, getAllCourses } from "@/data/courses";
import CourseDetailDashboard from "@/components/courses/CourseDetailDashboard";

interface CourseOverviewPageProps {
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
}: CourseOverviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Detail | Realm Consulting",
    };
  }

  return {
    title: `${course.shortTitle} — Course Detail | Realm Consulting`,
    description: course.description,
  };
}

export default async function CourseOverviewPage({
  params,
}: CourseOverviewPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailDashboard course={course} />;
}

