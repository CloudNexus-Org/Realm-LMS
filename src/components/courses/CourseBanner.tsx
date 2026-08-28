import { Course } from "@/types/course";

interface CourseBannerProps {
  course: Course;
}

export default function CourseBanner({ course }: CourseBannerProps) {
  return (
    <div className="course-banner-card">
      <img
        src={course.coverImage}
        alt={course.title}
        className="course-banner-img"
      />

      <button type="button" className="change-cover-badge" aria-label="Change Cover">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
        Change Cover
      </button>

      <div className="banner-inset-avatar">
        <img
          src={course.instructor.avatar}
          alt={course.instructor.name}
        />
      </div>
    </div>
  );
}
