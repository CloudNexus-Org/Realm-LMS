"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseData } from "@/data/courses";
import type { DetailedModule } from "@/data/fullstack-modules";

const TABS = ["Course Info", "Course Outline", "Resources", "Reviews"] as const;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--cyan-400)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ReadingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

interface CourseDetailProps {
  course: CourseData;
  detailedModules?: DetailedModule[];
}

export default function CourseDetail({ course, detailedModules }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Course Info");
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]));
  const [previewLesson, setPreviewLesson] = useState<{ moduleIdx: number; lessonIdx: number } | null>(null);

  function toggleModule(index: number) {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handlePreview(moduleIdx: number, lessonIdx: number) {
    if (previewLesson?.moduleIdx === moduleIdx && previewLesson?.lessonIdx === lessonIdx) {
      setPreviewLesson(null);
    } else {
      setPreviewLesson({ moduleIdx, lessonIdx });
      if (!openModules.has(moduleIdx)) {
        setOpenModules((prev) => new Set(prev).add(moduleIdx));
      }
    }
  }

  return (
    <div className="course-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="wrap">
          <Link href="/" className="course-back-link">
            ← Back to Home
          </Link>
          <div className="course-hero-content">
            <div className="course-hero-info">
              <span className="eyebrow" style={{ color: "var(--cyan-300)" }}>
                {course.category}
              </span>
              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="course-duration">{course.duration} program</span>
                <span className="course-meta-dot">•</span>
                <span>Guaranteed Placement</span>
              </div>
            </div>
            <div className="course-hero-pricing">
              <div className="course-price-card">
                <div className="course-price">
                  {course.price}
                  <span className="course-original-price">{course.originalPrice}</span>
                </div>
                <div className="course-price-note">Inclusive of all taxes</div>
                <Link href="/#contact" className="btn btn-primary course-enroll-btn">
                  Enroll Now →
                </Link>
                <p className="course-guarantee">Placement guaranteed or money back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="course-tabs-section">
        <div className="wrap">
          <div className="course-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`course-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="course-content-section">
        <div className="wrap">
          {activeTab === "Course Info" && (
            <div className="course-tab-panel">
              <h2>About This Program</h2>
              <p className="course-info-text">{course.description}</p>

              <h3>What You&apos;ll Learn</h3>
              <ul className="course-learn-list">
                {course.modules.map((mod) => (
                  <li key={mod.title}>
                    <CheckCircleIcon />
                    <span>{mod.title}</span>
                  </li>
                ))}
              </ul>

              <h3>Program Highlights</h3>
              <div className="course-highlights">
                <div className="course-highlight-card">
                  <span className="highlight-number">{detailedModules ? detailedModules.length : course.modules.length}</span>
                  <span className="highlight-label">Modules</span>
                </div>
                <div className="course-highlight-card">
                  <span className="highlight-number">3</span>
                  <span className="highlight-label">Months Duration</span>
                </div>
                <div className="course-highlight-card">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-label">Placement Rate</span>
                </div>
                <div className="course-highlight-card">
                  <span className="highlight-number">24/7</span>
                  <span className="highlight-label">Community Support</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Course Outline" && (
            <div className="course-tab-panel">
              <h2>Course Outline</h2>
              {detailedModules ? (
                <>
                  <div className="course-outline-banner">
                    <LockIcon />
                    <span>Sign in to unlock all lessons</span>
                  </div>
                  <p className="course-outline-subtitle">
                    {detailedModules.length} modules •{" "}
                    {detailedModules.reduce((sum, m) => sum + m.lessonsCount, 0)} lessons
                  </p>
                  <div className="course-outline">
                    {detailedModules.map((mod, moduleIdx) => (
                      <div
                        key={mod.id}
                        className={`course-module ${openModules.has(moduleIdx) ? "open" : ""}`}
                      >
                        <button
                          className="course-module-header"
                          onClick={() => toggleModule(moduleIdx)}
                        >
                          <div className="course-module-title">
                            <ChevronIcon open={openModules.has(moduleIdx)} />
                            <span>{mod.title}</span>
                            <LockIcon />
                          </div>
                          <div className="course-module-meta">
                            <span className="module-lesson-count">{mod.lessonsCount} Lessons</span>
                          </div>
                        </button>
                        {openModules.has(moduleIdx) && (
                          <div className="course-module-body">
                            <div className="module-content-label">Module Content</div>

                            {/* Video Preview Panel */}
                            {previewLesson && previewLesson.moduleIdx === moduleIdx && (
                              <div className="lesson-preview-panel">
                                <div className="preview-video-container">
                                  <div className="preview-play-btn">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
                                      <polygon points="10 8 16 12 10 16 10 8" fill="white" />
                                    </svg>
                                  </div>
                                  <span className="preview-coming-soon">Preview — Coming Soon</span>
                                </div>
                                <div className="preview-info-bar">
                                  <span className="preview-lesson-title">
                                    {mod.lessons[previewLesson.lessonIdx]?.title}
                                  </span>
                                  <button
                                    className="preview-close"
                                    onClick={() => setPreviewLesson(null)}
                                    aria-label="Close preview"
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            )}

                            <ul className="lesson-list">
                              {mod.lessons.map((lesson, lessonIdx) => (
                                <li key={`${mod.id}-${lessonIdx}`} className="lesson-item">
                                  <div className="lesson-left">
                                    <span className="lesson-icon">
                                      {lesson.type === "reading" ? <ReadingIcon /> : <PlayIcon />}
                                    </span>
                                    <div className="lesson-info">
                                      <span className="lesson-title">{lesson.title}</span>
                                      <span className="lesson-duration">{lesson.duration}</span>
                                    </div>
                                  </div>
                                  <div className="lesson-right">
                                    {lesson.previewAvailable ? (
                                      <button
                                        className="lesson-preview-btn"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handlePreview(moduleIdx, lessonIdx);
                                        }}
                                      >
                                        Preview
                                      </button>
                                    ) : null}
                                    <span className="lesson-lock">
                                      {lesson.previewAvailable ? (
                                        <span className="lesson-radio" />
                                      ) : (
                                        <LockIcon />
                                      )}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="course-outline-subtitle">
                    {course.modules.length} modules covering everything from foundations to advanced topics.
                  </p>
                  <div className="course-outline">
                    {course.modules.map((mod, index) => (
                      <div
                        key={mod.title}
                        className={`course-module ${openModules.has(index) ? "open" : ""}`}
                      >
                        <button
                          className="course-module-header"
                          onClick={() => toggleModule(index)}
                        >
                          <div className="course-module-title">
                            <span className="course-module-number">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                          <ChevronIcon open={openModules.has(index)} />
                        </button>
                        {openModules.has(index) && (
                          <ul className="course-module-topics">
                            {mod.topics.map((topic) => (
                              <li key={topic}>{topic}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === "Resources" && (
            <div className="course-tab-panel">
              <h2>Included Course Resources</h2>
              <p className="course-resources-subtitle">
                Everything you need to succeed, included with your enrollment.
              </p>
              <ul className="course-resources-list">
                {course.resources.map((resource) => (
                  <li key={resource}>
                    <CheckCircleIcon />
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="course-tab-panel">
              <h2>Student Reviews</h2>
              <p className="course-reviews-subtitle">
                Hear from graduates who completed this program.
              </p>
              <div className="course-reviews-grid">
                {course.reviews.map((review) => (
                  <div key={review.name} className="course-review-card">
                    <div className="course-review-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} filled={i < review.rating} />
                      ))}
                    </div>
                    <p className="course-review-text">&ldquo;{review.text}&rdquo;</p>
                    <div className="course-review-author">
                      <div className="course-review-avatar">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <span className="course-review-name">{review.name}</span>
                        <span className="course-review-role">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Instructor Section */}
      <section className="course-instructor-section">
        <div className="wrap">
          <h2>Your Instructor</h2>
          <div className="course-instructor-card">
            <div className="course-instructor-avatar">
              {course.instructor.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="course-instructor-info">
              <div className="course-instructor-header">
                <h3>{course.instructor.name}</h3>
                <span className="course-instructor-badge">{course.instructor.badge}</span>
              </div>
              <span className="course-instructor-role">{course.instructor.role}</span>
              <p className="course-instructor-bio">{course.instructor.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
