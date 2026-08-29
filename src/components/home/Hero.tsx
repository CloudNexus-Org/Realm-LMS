import TerminalAnimation from "./TerminalAnimation";
import AnimatedCounters from "./AnimatedCounters";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            Realm Consulting · Career Engineering Institute
          </span>
          <h1>
            Push Your Career to <span className="accent">Production.</span>
          </h1>
          <p className="lede">
            We train future DevOps Engineers, SDEs, and Data Engineers with live
            projects, real mentors, and guaranteed placement built to ship you
            straight into your first tech job.
          </p>
          <div className="hero-ctas">
            <a href="#pricing" className="btn btn-primary">
              Choose Your Track
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#pipeline" className="btn btn-ghost">
              See How It Works
            </a>
          </div>
          <AnimatedCounters />
        </div>

        <TerminalAnimation />
      </div>
    </section>
  );
}
