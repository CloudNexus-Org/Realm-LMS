"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const numEls = container.querySelectorAll("[data-count]");
            numEls.forEach((el) => {
              const target = parseInt(
                el.getAttribute("data-count") || "0",
                10
              );
              const prefix = el.getAttribute("data-prefix") || "";
              const suffix = el.getAttribute("data-suffix") || "";
              let cur = 0;
              const duration = 1200;
              const stepTime = 16;
              const steps = duration / stepTime;
              const inc = target / steps;
              const timer = setInterval(() => {
                cur += inc;
                if (cur >= target) {
                  cur = target;
                  clearInterval(timer);
                }
                el.textContent = prefix + Math.floor(cur) + suffix;
              }, stepTime);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hero-stats" ref={containerRef}>
      <div className="stat-item">
        <div className="num">
          <span data-count="50" data-suffix="+">
            0+
          </span>
        </div>
        <div className="label">Hiring Partners</div>
      </div>
      <div className="stat-item">
        <div className="num">
          <span data-count="6" data-prefix="₹">
            ₹0
          </span>
          <span style={{ fontSize: "15px", marginLeft: "2px" }}>LPA</span>
        </div>
        <div className="label">Average Salary</div>
      </div>
      <div className="stat-item">
        <div className="num">
          <span data-count="100" data-suffix="%">
            0%
          </span>
        </div>
        <div className="label">Placement Ratio</div>
      </div>
    </div>
  );
}
