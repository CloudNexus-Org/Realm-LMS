"use client";

import { useState } from "react";
import Link from "next/link";
import { Course } from "@/types/course";

interface CoursePreviewCardProps {
  course: Course;
}

export default function CoursePreviewCard({ course }: CoursePreviewCardProps) {
  const [couponApplied, setCouponApplied] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const displayPrice = couponApplied
    ? Math.round(course.price * 0.8)
    : course.price;

  return (
    <div className="preview-left-column">
      {/* Video Preview Thumbnail Card */}
      <div className="preview-video-card">
        <img
          src={course.previewVideoImage}
          alt={course.title}
          className="preview-video-thumb"
        />
        <div
          className="play-overlay-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className="play-circle-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <span className="play-btn-text">
            {isPlaying ? "Pause Preview" : "Preview Course"}
          </span>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "-6px" }}>
        <Link
          href={`/courses/${course.slug}/outline`}
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--c-primary)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          View Full Course Outline &amp; Modules →
        </Link>
      </div>

      {/* Pricing & Coupon Row */}
      <div className="price-coupon-row">
        <div className="price-display-wrap">
          <span className="price-main">₹{displayPrice.toLocaleString("en-IN")}</span>
          <span className="price-original">₹{course.originalPrice.toLocaleString("en-IN")}</span>
        </div>

        <button
          type="button"
          className="btn-apply-coupon"
          onClick={() => setCouponApplied(!couponApplied)}
        >
          {couponApplied ? "✓ Coupon Applied (20% OFF)" : "Apply Coupon"}
        </button>
      </div>

      {/* CTA Button Row */}
      <div className="cta-enroll-row">
        <Link
          href={`/courses/${course.slug}/outline`}
          className="btn-enroll-gradient-cta"
          id="preview-enrol-cta-btn"
        >
          <span>Enrol Now</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>

        <button
          type="button"
          className={`btn-wishlist-heart ${isWishlisted ? "active" : ""}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Add to wishlist"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* Instructor Profile Card */}
      <div className="instructor-profile-card">
        <div className="instructor-profile-head">
          <div className="instructor-profile-avatar">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
            />
          </div>
          <div className="instructor-profile-meta">
            <h4 className="instructor-profile-name">{course.instructor.name}</h4>
            <p className="instructor-profile-role">{course.instructor.title}</p>
          </div>
          {course.instructor.badge && (
            <span className="top-instructor-badge">{course.instructor.badge}</span>
          )}
        </div>

        <p className="instructor-bio-text">{course.instructor.bio}</p>

        <a href={course.instructor.profileLink || "#"} className="instructor-view-profile-link">
          View Profile
        </a>
      </div>

      {/* Course Detail Card */}
      <div className="course-detail-summary-card">
        <h4 className="detail-summary-title">Course Detail</h4>
        <ul className="detail-summary-list">
          <li className="detail-summary-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>{course.rating} ({course.reviewsCount})</span>
          </li>
          <li className="detail-summary-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>{course.totalCourses} Courses</span>
          </li>
          <li className="detail-summary-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span>{course.totalAssignments} Assignments</span>
          </li>
          <li className="detail-summary-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>{course.totalQuizzes} Total Quizes</span>
          </li>
          <li className="detail-summary-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Last Update: {course.lastUpdated}</span>
          </li>
        </ul>
      </div>

      {/* Tools Will You Use Card */}
      <div className="tools-summary-card">
        <h4 className="tools-summary-title">Tools will you use</h4>
        <div className="tools-tags-cloud">
          {course.tools.map((tool) => (
            <span key={tool} className="tool-badge-item">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
