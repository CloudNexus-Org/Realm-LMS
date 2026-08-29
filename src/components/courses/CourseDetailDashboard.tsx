"use client";

import { useState } from "react";
import { Course, CourseModule } from "@/types/course";
import CourseSidebar from "./CourseSidebar";
import CourseHeader from "./CourseHeader";
import CourseBanner from "./CourseBanner";
import CourseMeta from "./CourseMeta";
import ModuleAccordion from "./ModuleAccordion";
import CourseVideoPlayer from "./CourseVideoPlayer";

interface CourseDetailDashboardProps {
  course: Course;
}

export default function CourseDetailDashboard({ course }: CourseDetailDashboardProps) {
  // Active Video Player state (null = show standard outline view; or { module, videoIndex })
  const [activeVideoState, setActiveVideoState] = useState<{
    module: CourseModule;
    videoIndex: number;
  } | null>(null);

  const handleOpenVideoPlayer = (module: CourseModule, videoIndex: number = 0) => {
    setActiveVideoState({
      module,
      videoIndex,
    });
  };

  const handleBackToOutline = () => {
    setActiveVideoState(null);
  };

  return (
    <div className="course-detail-container">
      {/* 1. Left Sidebar Navigation (Always Open & Collapsible) */}
      <CourseSidebar course={course} />

      {/* 2. Main Area: Switches between Standard Outline and YouTube-style Video Player */}
      <main className="course-main-content">
        {activeVideoState ? (
          /* YouTube Video Player + Playlist View */
          <CourseVideoPlayer
            course={course}
            activeModule={activeVideoState.module}
            initialVideoIndex={activeVideoState.videoIndex}
            onBackToOutline={handleBackToOutline}
          />
        ) : (
          /* Standard Course Outline View */
          <>
            <CourseHeader
              course={course}
              onPreviewVideo={() => {
                if (course.modules.length > 0) {
                  handleOpenVideoPlayer(course.modules[0], 0);
                }
              }}
            />
            <CourseBanner course={course} />
            <CourseMeta course={course} />
            <ModuleAccordion
              modules={course.modules}
              onSelectVideo={(mod, vIdx) => handleOpenVideoPlayer(mod, vIdx)}
            />
          </>
        )}
      </main>
    </div>
  );
}
