"use client";

import { useState } from "react";
import { CourseModule } from "@/types/course";

interface ModuleAccordionProps {
  modules: CourseModule[];
  onSelectVideo?: (module: CourseModule, videoIndex: number) => void;
}

export default function ModuleAccordion({
  modules,
  onSelectVideo,
}: ModuleAccordionProps) {
  // Map of open module IDs
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    modules.forEach((mod, idx) => {
      // First module expanded by default
      initial[mod.id] = mod.isExpandedByDefault ?? idx === 0;
    });
    return initial;
  });

  // Track which module's 3-dot dropdown is open
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Track hidden info state per module
  const [hiddenInfo, setHiddenInfo] = useState<Record<string, boolean>>({});

  const toggleModule = (id: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleDropdown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const toggleHideInfo = (id: string) => {
    setHiddenInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className="modules-accordion-list"
      onClick={() => {
        if (activeDropdown) setActiveDropdown(null);
      }}
    >
      {modules.map((module) => {
        const isOpen = !!openModules[module.id];
        const isMenuOpen = activeDropdown === module.id;
        const isInfoHidden = !!hiddenInfo[module.id];

        return (
          <div key={module.id} className="module-card">
            {/* Header */}
            <div
              className="module-header"
              onClick={() => toggleModule(module.id)}
            >
              <div className="module-header-left">
                <svg
                  className={`module-toggle-chevron ${isOpen ? "open" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span className="module-number">{module.number}</span>
                <h3 className="module-header-title">{module.title}</h3>
              </div>

              <div className="module-header-right">
                <button
                  type="button"
                  className="module-dots-action-btn"
                  onClick={(e) => toggleDropdown(e, module.id)}
                  aria-label="Module options"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                </button>

                {/* 3-dots Dropdown Menu */}
                {isMenuOpen && (
                  <div className="module-dropdown-menu">
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => onSelectVideo?.(module, 0)}
                    >
                      <span>▶</span> Play Video Lessons
                    </button>
                    <button type="button" className="dropdown-item">
                      <span>✎</span> Edit
                    </button>
                    <button type="button" className="dropdown-item">
                      <span>⚙</span> Settings
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => onSelectVideo?.(module, 0)}
                    >
                      <span>👁</span> Preview
                    </button>
                    <button type="button" className="dropdown-item">
                      <span>⊕</span> Add
                    </button>
                    <button type="button" className="dropdown-item">
                      <span>☁</span> Upload
                    </button>
                    <button type="button" className="dropdown-item">
                      <span>✨</span> Ai Assistant
                    </button>
                    <button type="button" className="dropdown-item danger">
                      <span>🗑</span> Delete users
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Expanded Body */}
            {isOpen && (
              <div className="module-body">
                <p className="module-description-text">{module.description}</p>

                {!isInfoHidden && (
                  <div className="module-included-wrap">
                    <span className="module-included-title">What&apos;s included</span>
                    <div className="module-chips-row">
                      <button
                        type="button"
                        className="module-item-chip interactive-video-chip"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectVideo?.(module, 0);
                        }}
                        title="Click to open Video Player & Playlist"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <span>{module.videosCount} videos</span>
                        <span className="chip-play-hint">▶ Watch</span>
                      </button>
                      <span className="module-item-chip">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        {module.readingsCount} readings
                      </span>
                      <span className="module-item-chip">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        {module.assignmentsCount} assignments
                      </span>
                      <span className="module-item-chip">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        {module.quizCount} Quiz
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="hide-info-toggle"
                  onClick={() => toggleHideInfo(module.id)}
                >
                  {isInfoHidden
                    ? "Show info about module content ˄"
                    : "Hide info about module content ˅"}
                </button>

                {/* Actions Row */}
                <div className="module-actions-row">
                  <button type="button" className="btn-add-activity">
                    + Add activity
                  </button>
                  <button type="button" className="btn-module-action-outline">
                    ☁ Upload activity
                  </button>
                  <button type="button" className="btn-module-action-outline">
                    ⬇ Import activity
                  </button>
                  <button type="button" className="btn-module-ai-action">
                    ✨ Create activity with AI
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
