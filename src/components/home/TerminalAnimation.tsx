"use client";

import { useEffect, useRef } from "react";

const lines = [
  { text: '<span class="prompt">$</span> realm-consulting --init career', pause: 400 },
  { text: '<span class="comment">&gt; selecting track...</span>', pause: 350 },
  { text: "  track: devops | full-stack | ai-ml | iot", pause: 350 },
  { text: '<span class="comment">&gt; starting pipeline...</span>', pause: 350 },
  { text: '  [1/3] inquire ................ <span class="ok">done</span>', pause: 250 },
  { text: '  [2/3] train (3 months) ....... <span class="ok">done</span>', pause: 250 },
  { text: '  [3/3] deploy to job .......... <span class="amber">in progress</span>', pause: 500 },
  { text: '<span class="prompt">$</span> status: <span class="ok">BUILD PASSING</span> · 100% PLACEMENT RATIO', pause: 0 },
];

export default function TerminalAnimation() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    el.innerHTML = "";

    let lineIndex = 0;
    let cancelled = false;

    function typeLine() {
      if (cancelled || !el) return;
      if (lineIndex >= lines.length) {
        const caret = document.createElement("span");
        caret.className = "caret";
        el.appendChild(caret);
        return;
      }

      const raw = lines[lineIndex].text;
      const div = document.createElement("div");
      el.appendChild(div);

      const plain = raw.replace(/<[^>]+>/g, "");
      let i = 0;
      const speed = 14;

      function step() {
        if (cancelled) return;
        if (i <= plain.length) {
          div.textContent = plain.slice(0, i);
          i++;
          setTimeout(step, speed);
        } else {
          div.innerHTML = raw;
          const currentPause = lines[lineIndex].pause;
          lineIndex++;
          setTimeout(typeLine, currentPause);
        }
      }
      step();
    }

    typeLine();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="terminal">
        <div className="term-bar">
          <span></span>
          <span></span>
          <span></span>
          <span className="term-title">&nbsp;</span>
        </div>
        <div className="term-body" ref={bodyRef}></div>
      </div>
      <div className="badge-row">
        <span className="ci-badge">
          <span className="dot"></span>BUILD: PASSING
        </span>
        <span className="ci-badge amber">
          <span className="dot"></span>PLACEMENT: 100%
        </span>
      </div>
    </div>
  );
}
