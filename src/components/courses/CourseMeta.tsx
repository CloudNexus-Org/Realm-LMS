import { Course } from "@/types/course";

interface CourseMetaProps {
  course: Course;
}

export default function CourseMeta({ course }: CourseMetaProps) {
  return (
    <div className="course-info-meta-row">
      <div className="meta-left-wrap">
        <h2 className="course-heading-title">{course.title}</h2>
        <div className="meta-stats-row">
          {/* Total Modules */}
          <div className="meta-stat-pill">
            <div className="meta-stat-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <div className="meta-stat-text">
              <span className="meta-stat-label">Total Modules</span>
              <span className="meta-stat-val">
                {course.totalModules < 10 ? `0${course.totalModules}` : course.totalModules}
              </span>
            </div>
          </div>

          {/* Activities */}
          <div className="meta-stat-pill">
            <div className="meta-stat-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
            <div className="meta-stat-text">
              <span className="meta-stat-label">Activities</span>
              <span className="meta-stat-val">{course.totalActivities}</span>
            </div>
          </div>

          {/* Course Level */}
          <div className="meta-stat-pill">
            <div className="meta-stat-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <div className="meta-stat-text">
              <span className="meta-stat-label">Course Level</span>
              <span className="meta-stat-val">{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor info */}
      <div className="instructor-badge-right">
        <div className="instructor-avatar-circle">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
          />
        </div>
        <div className="instructor-text">
          <span className="instructor-name-label">
            Instructor: {course.instructor.name}
          </span>
          <span className="instructor-email-label">
            {course.instructor.email}
          </span>
        </div>
      </div>
    </div>
  );
}
