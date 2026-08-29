"use client";

import { useEffect, useRef } from "react";

export default function PipelineAnimation() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(track);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pipeline reveal">
      <div className="pipeline-track" ref={trackRef}>
        <div className="pipeline-line" ref={lineRef}>
          <div className="fill"></div>
        </div>

        <div className="stage">
          <div className="stage-node">01</div>
          <span className="stage-tag">Stage / Inquire</span>
          <h4>Select your module</h4>
          <p>
            Talk to an advisor and pick the track and pricing module that fits
            your goals and timeline.
          </p>
        </div>
        <div className="stage">
          <div className="stage-node">02</div>
          <span className="stage-tag">Stage / Train</span>
          <h4>3 months of training</h4>
          <p>
            Hands-on learning with 75% minimum attendance, live projects, and
            weekly assignments with real deadlines.
          </p>
        </div>
        <div className="stage">
          <div className="stage-node">03</div>
          <span className="stage-tag">Stage / Deploy</span>
          <h4>Land your first job</h4>
          <p>
            Resume-ready and interview-tested. Top performers get a direct route
            into our hiring partner network.
          </p>
        </div>
      </div>
    </div>
  );
}
