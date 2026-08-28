"use client";

import { useState } from "react";
import { Course } from "@/types/course";
import CertificateCard from "./CertificateCard";

interface CourseInfoTabsProps {
  course: Course;
}

export default function CourseInfoTabs({ course }: CourseInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<"info" | "outline" | "resources" | "reviews">("info");
  const [expandedDesc, setExpandedDesc] = useState(false);

  return (
    <div className="preview-right-column">
      {/* Title & Description */}
      <div>
        <p className="course-category-tag">{course.category}</p>
        <h2 className="course-full-title">{course.title}</h2>
        <div className="course-full-desc-wrap">
          <p className="course-full-desc-p">{course.fullDescription[0]}</p>
          {expandedDesc && course.fullDescription.length > 1 && (
            <p className="course-full-desc-p">{course.fullDescription[1]}</p>
          )}
          {course.fullDescription.length > 1 && (
            <button
              type="button"
              className="btn-see-more-toggle"
              onClick={() => setExpandedDesc(!expandedDesc)}
            >
              {expandedDesc ? "See Less ˄" : "See More ˅"}
            </button>
          )}
        </div>
      </div>

      {/* Tabs Row */}
      <div className="preview-tabs-row">
        <button
          type="button"
          className={`preview-tab-btn ${activeTab === "info" ? "active" : ""}`}
          onClick={() => setActiveTab("info")}
        >
          Course Info
        </button>
        <button
          type="button"
          className={`preview-tab-btn ${activeTab === "outline" ? "active" : ""}`}
          onClick={() => setActiveTab("outline")}
        >
          Course Outline
        </button>
        <button
          type="button"
          className={`preview-tab-btn ${activeTab === "resources" ? "active" : ""}`}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
        <button
          type="button"
          className={`preview-tab-btn ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content: Course Info */}
      {activeTab === "info" && (
        <>
          {/* What You'll Learn Section */}
          <div className="learn-outcomes-section">
            <h3 className="section-subhead-title">What&apos;ll you learn</h3>
            <div className="outcomes-grid-2col">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="outcome-check-item">
                  <span className="check-circle-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Earn Your Certificate Section */}
          <div className="certificate-promo-card">
            <div className="cert-left-info">
              <h3 className="cert-left-title">{course.certificate.title}</h3>
              <p className="cert-left-desc">{course.certificate.description}</p>
            </div>
            <CertificateCard certificate={course.certificate} />
          </div>
        </>
      )}

      {/* Tab Content: Course Outline Preview */}
      {activeTab === "outline" && (
        <div className="learn-outcomes-section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 className="section-subhead-title">Modules ({course.modules.length})</h3>
            <a
              href={`/courses/${course.slug}/outline`}
              className="btn-preview-cta"
              style={{ fontSize: "12.5px", padding: "7px 16px" }}
            >
              Open Full Outline Workspace →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {course.modules.map((m) => (
              <div
                key={m.id}
                style={{
                  border: "1px solid var(--c-border)",
                  borderRadius: "12px",
                  padding: "16px",
                  background: "#fafafa",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontWeight: 700, color: "var(--c-primary)" }}>{m.number}</span>
                  <h4 style={{ margin: 0, fontSize: "15px", color: "var(--c-text-main)" }}>{m.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--c-text-sub)" }}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Resources */}
      {activeTab === "resources" && (
        <div className="learn-outcomes-section">
          <h3 className="section-subhead-title">Included Course Resources</h3>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "var(--c-text-sub)" }}>
            <li>Full Lifetime access to video lectures, slides, and architectural blueprints</li>
            <li>GitHub starter repositories and production-ready starter templates</li>
            <li>Interactive mock interview questions and solution guides</li>
            <li>Private Slack / Discord community for TA support & live doubt solving</li>
          </ul>
        </div>
      )}

      {/* Tab Content: Reviews */}
      {activeTab === "reviews" && (
        <div className="learn-outcomes-section">
          <h3 className="section-subhead-title">Student Reviews ({course.rating} ★)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ border: "1px solid var(--c-border)", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>Ananya K.</span>
                <span style={{ color: "#f59e0b" }}>★★★★★</span>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--c-text-sub)" }}>
                &ldquo;The curriculum matches exactly what companies test in interviews. The hands-on project assignments helped me secure an offer within 2 months.&rdquo;
              </p>
            </div>
            <div style={{ border: "1px solid var(--c-border)", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>Vikram S.</span>
                <span style={{ color: "#f59e0b" }}>★★★★★</span>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--c-text-sub)" }}>
                &ldquo;Crystal clear modules with great mentor sessions. The paid internship stage is unmatched.&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
