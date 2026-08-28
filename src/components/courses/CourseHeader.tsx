import Link from "next/link";
import { Course } from "@/types/course";

interface CourseHeaderProps {
  course: Course;
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="outline-topbar">
      <div className="outline-title-wrap">
        <h1>
          Course outline
          <span className="learn-more-tag" title="Course curriculum settings">
            Learn more ⓘ
          </span>
        </h1>
        <p className="outline-subtitle">
          {course.subtitle ||
            "Develop your course outline and contents and set up the drip feed to schedule lesson delivery"}
        </p>
      </div>

      <div className="outline-actions">
        <button type="button" className="btn-outline-action">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Deep Feed
        </button>

        <Link
          href={`/courses/${course.slug}`}
          className="btn-preview-cta"
          id="course-preview-btn"
        >
          Preview
        </Link>
      </div>
    </div>
  );
}
