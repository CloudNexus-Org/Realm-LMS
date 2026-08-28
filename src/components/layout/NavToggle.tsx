"use client";

import { useState, useCallback } from "react";

export default function NavToggle() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <ul className={`nav-links${open ? " open" : ""}`}>
        <li>
          <a href="#tracks" onClick={handleLinkClick}>
            Career Tracks
          </a>
        </li>
        <li>
          <a href="#pipeline" onClick={handleLinkClick}>
            How It Works
          </a>
        </li>
        <li>
          <a href="#pricing" onClick={handleLinkClick}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#why" onClick={handleLinkClick}>
            Why Us
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-cta">
        <a href="#pricing" className="btn btn-ghost">
          View Pricing
        </a>
        <a href="#contact" className="btn btn-primary">
          Enroll Now
        </a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
}
