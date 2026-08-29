"use client";

import { useState } from "react";
import { Course, CourseModule } from "@/types/course";

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  instructor: string;
  description: string;
}

interface CourseVideoPlayerProps {
  course: Course;
  activeModule: CourseModule;
  initialVideoIndex?: number;
  onBackToOutline: () => void;
}

export default function CourseVideoPlayer({
  course,
  activeModule,
  initialVideoIndex = 0,
  onBackToOutline,
}: CourseVideoPlayerProps) {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(initialVideoIndex);
  const [activeTab, setActiveTab] = useState<"overview" | "notes" | "resources">("overview");

  // 5 structured module video lessons based on the active module topic
  const moduleVideos: VideoItem[] = [
    {
      id: "vid-1",
      title: `1. Introduction to ${activeModule.title}: Primitives & Architecture`,
      duration: "14:20",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      instructor: course.instructor.name,
      description: `Comprehensive foundational walkthrough of ${activeModule.title}. In this session, we dissect core concepts, environment configurations, and setup primitives.`,
    },
    {
      id: "vid-2",
      title: `2. Deep Dive: Core Principles, Scripting & Commands`,
      duration: "18:45",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      instructor: course.instructor.name,
      description: `Step-by-step practical implementation. We write automated scripts, configure utilities, and understand internal mechanisms under heavy loads.`,
    },
    {
      id: "vid-3",
      title: `3. Advanced Architecture, Automation & Workflow Design`,
      duration: "22:15",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      instructor: course.instructor.name,
      description: `Exploring enterprise patterns and continuous integration workflows. Connecting components and managing runtime state.`,
    },
    {
      id: "vid-4",
      title: `4. Live Debugging, Common Pitfalls & Performance Tuning`,
      duration: "16:30",
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      instructor: course.instructor.name,
      description: `Hands-on troubleshooting session. Diagnosing production bottlenecks, inspecting system logs, and optimizing performance.`,
    },
    {
      id: "vid-5",
      title: `5. Industry Capstone Project: Production Deployment & Review`,
      duration: "25:10",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      instructor: course.instructor.name,
      description: `Final end-to-end module capstone project. Packaging the solution, deploying with CI pipelines, and conducting a final review.`,
    },
  ];

  const currentVideo = moduleVideos[currentVideoIdx] || moduleVideos[0];

  return (
    <div className="yt-player-container">
      {/* Top Breadcrumb Navigation */}
      <div className="yt-top-breadcrumb-bar">
        <button
          type="button"
          className="btn-back-outline-pill"
          onClick={onBackToOutline}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Course Outline</span>
        </button>

        <div className="yt-current-module-badge">
          <span className="badge-num">Module {activeModule.number}</span>
          <span className="badge-title">{activeModule.title}</span>
        </div>
      </div>

      {/* Main 2-Column YouTube Layout (Video Player Left + Playlist Right) */}
      <div className="yt-main-layout-grid">
        {/* LEFT / CENTER: Video Player + Details */}
        <div className="yt-player-left-col">
          {/* Video Player Card */}
          <div className="yt-video-frame">
            <video
              key={currentVideo.videoUrl}
              src={currentVideo.videoUrl}
              controls
              autoPlay
              playsInline
              poster={currentVideo.thumbnail}
              className="yt-html5-video-player"
            />
          </div>

          {/* Video Title & Meta */}
          <div className="yt-video-info-box">
            <h1 className="yt-video-headline">{currentVideo.title}</h1>

            <div className="yt-video-meta-row">
              <div className="yt-instructor-meta">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="yt-instructor-avatar"
                />
                <div className="yt-instructor-text">
                  <span className="yt-instructor-name">
                    {course.instructor.name}
                  </span>
                  <span className="yt-instructor-role">
                    {course.instructor.title}
                  </span>
                </div>
              </div>

              <div className="yt-action-pills-row">
                <button type="button" className="yt-action-pill like-pill">
                  <span>👍</span> 1.4k
                </button>
                <button type="button" className="yt-action-pill">
                  <span>💾</span> Save
                </button>
                <button type="button" className="yt-action-pill">
                  <span>🔗</span> Share
                </button>
              </div>
            </div>

            {/* Video Tabs: Overview, Notes, Resources */}
            <div className="yt-video-tabs-bar">
              <button
                type="button"
                className={`yt-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                type="button"
                className={`yt-tab-btn ${activeTab === "notes" ? "active" : ""}`}
                onClick={() => setActiveTab("notes")}
              >
                Lecture Notes
              </button>
              <button
                type="button"
                className={`yt-tab-btn ${activeTab === "resources" ? "active" : ""}`}
                onClick={() => setActiveTab("resources")}
              >
                Code &amp; Resources
              </button>
            </div>

            {/* Tab Content */}
            <div className="yt-tab-content-panel">
              {activeTab === "overview" && (
                <div className="tab-pane-overview">
                  <p>{currentVideo.description}</p>
                  <div className="key-takeaways-box">
                    <h4>Key Objectives in this Lesson:</h4>
                    <ul>
                      <li>Master foundational concepts and operational commands.</li>
                      <li>Write scalable scripts with error handling and logging.</li>
                      <li>Implement production verification pipelines.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="tab-pane-notes">
                  <p>
                    <strong>Timestamp 02:15:</strong> System Architecture overview and memory layout.
                  </p>
                  <p>
                    <strong>Timestamp 07:40:</strong> Writing production scripts with environment flags.
                  </p>
                  <p>
                    <strong>Timestamp 12:10:</strong> Hands-on verification and terminal test cases.
                  </p>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="tab-pane-resources">
                  <div className="resource-item-row">
                    <span>📦 Starter Project Repository (.zip)</span>
                    <button type="button" className="btn-resource-dl">Download</button>
                  </div>
                  <div className="resource-item-row">
                    <span>📄 Cheatsheet &amp; Command Reference (.pdf)</span>
                    <button type="button" className="btn-resource-dl">Download</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: YouTube Style Playlist Card (Exact Match to Image 2) */}
        <div className="yt-playlist-sidebar-card">
          {/* Playlist Top Header */}
          <div className="yt-playlist-header">
            <div className="yt-playlist-title-info">
              <h3 className="yt-playlist-heading">
                Module {activeModule.number} — {activeModule.title}
              </h3>
              <p className="yt-playlist-sub">
                Course Playlist · {currentVideoIdx + 1} / {moduleVideos.length} videos
              </p>
            </div>

            <button
              type="button"
              className="yt-playlist-close-btn"
              onClick={onBackToOutline}
              title="Close Playlist"
              aria-label="Close Playlist"
            >
              ✕
            </button>
          </div>

          {/* Playlist Video Items List */}
          <div className="yt-playlist-items-scroll">
            {moduleVideos.map((video, idx) => {
              const isPlaying = idx === currentVideoIdx;

              return (
                <div
                  key={video.id}
                  className={`yt-playlist-item ${isPlaying ? "playing" : ""}`}
                  onClick={() => setCurrentVideoIdx(idx)}
                >
                  {/* Playing Indicator */}
                  <div className="yt-item-play-state">
                    {isPlaying ? (
                      <span className="yt-playing-icon">▶</span>
                    ) : (
                      <span className="yt-item-index">{idx + 1}</span>
                    )}
                  </div>

                  {/* Thumbnail with Duration Tag */}
                  <div className="yt-item-thumb-frame">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="yt-item-thumb-img"
                    />
                    <span className="yt-item-duration-tag">{video.duration}</span>
                  </div>

                  {/* Info: Title & Author */}
                  <div className="yt-item-info">
                    <h4 className="yt-item-title">{video.title}</h4>
                    <span className="yt-item-author">{video.instructor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
