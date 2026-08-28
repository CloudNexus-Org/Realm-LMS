import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCourseBySlug, getAllCourses } from "@/data/courses";
import CoursePreviewCard from "@/components/courses/CoursePreviewCard";
import CourseInfoTabs from "@/components/courses/CourseInfoTabs";

interface CourseEnrollPageProps {
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
}: CourseEnrollPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Preview Course | Realm Consulting",
    };
  }

  return {
    title: `Preview Course: ${course.shortTitle} | Realm Consulting`,
    description: course.description,
  };
}

export default async function CourseEnrollPage({
  params,
}: CourseEnrollPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="preview-modal-wrapper">
      {/* Modal Top Header */}
      <div className="preview-modal-header">
        <h1 className="preview-modal-title">Preview Course</h1>
        <Link
          href={`/courses/${course.slug}`}
          className="preview-close-btn"
          aria-label="Close preview"
          title="Back to course outline"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Link>
      </div>

      {/* Two Column Layout Matching Reference Image 1 */}
      <div className="preview-two-columns-layout">
        {/* Left Column: Preview card, Price, CTA, Instructor, Course Detail, Tools */}
        <CoursePreviewCard course={course} />

        {/* Right Column: Title/Category, Tabs, What'll you learn, Certificate Section */}
        <CourseInfoTabs course={course} />
      </div>
    </div>
  );
}
