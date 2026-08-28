"use client";

import { useState } from "react";
import Link from "next/link";
import { Course } from "@/types/course";

interface CourseSidebarProps {
  course: Course;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  const [contentsOpen, setContentsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("outline");

  return (
    <aside className="course-sidebar">
      {/* Header with back link */}
      <div className="sidebar-header">
        <Link href={`/courses/${course.slug}`} className="sidebar-back-link" title="Back to Overview">
          <svg
            className="sidebar-back-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>{course.shortTitle}</span>
        </Link>
        <button
          className="sidebar-dots-btn"
          aria-label="Sidebar options"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
            <circle cx="5" cy="12" r="2" />
          </svg>
        </button>
      </div>

      {/* Nav List */}
      <nav className="sidebar-nav">
        {/* Section 1: Contents */}
        <div className="sidebar-group">
          <div
            className="sidebar-group-title"
            onClick={() => setContentsOpen(!contentsOpen)}
          >
            <span className="group-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              Contents
            </span>
            <svg
              className="chevron-icon"
              style={{ transform: contentsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {contentsOpen && (
            <ul className="sidebar-items-list">
              <li>
                <button
                  type="button"
                  className={`sidebar-item-btn ${activeItem === "outline" ? "active" : ""}`}
                  onClick={() => setActiveItem("outline")}
                >
                  Course outline
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`sidebar-item-btn ${activeItem === "layout" ? "active" : ""}`}
                  onClick={() => setActiveItem("layout")}
                >
                  Course page layout
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Section 2: Course settings */}
        <div className="sidebar-group">
          <div
            className="sidebar-group-title"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <span className="group-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Course settings
            </span>
            <svg
              className="chevron-icon"
              style={{ transform: settingsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {settingsOpen && (
            <ul className="sidebar-items-list">
              {["General", "Access", "Pricing", "User progress", "Course player", "Video library", "Automations"].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={`sidebar-item-btn ${activeItem === item.toLowerCase() ? "active" : ""}`}
                    onClick={() => setActiveItem(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Section 3: Insights */}
        <div className="sidebar-group">
          <div
            className="sidebar-group-title"
            onClick={() => setInsightsOpen(!insightsOpen)}
          >
            <span className="group-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Insights
            </span>
            <svg
              className="chevron-icon"
              style={{ transform: insightsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          {insightsOpen && (
            <ul className="sidebar-items-list">
              {[
                "Dashboard",
                "Course insights",
                "AI Course insights",
                "Activity matrix",
                "Users",
                "Certificates",
                "Gradebook",
                "Pending reviews",
                "Course forms",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={`sidebar-item-btn ${activeItem === item.toLowerCase() ? "active" : ""}`}
                    onClick={() => setActiveItem(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
}
