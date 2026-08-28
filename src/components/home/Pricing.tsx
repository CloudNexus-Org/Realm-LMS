function CheckIcon() {
  return (
    <svg className="check" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="light-section" style={{ background: "var(--paper-100)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "#0E8F80" }}>
            Select Your Module
          </span>
          <h2>Pricing built around outcomes, not just hours.</h2>
          <p>
            Our module includes 3 months of training and guaranteed placement.
            Everything you need to launch your tech career.
          </p>
        </div>

        <div className="pricing-grid" style={{ maxWidth: "480px", margin: "0 auto", gridTemplateColumns: "1fr" }}>
          <div className="price-card featured reveal">
            <span className="price-badge">Our Program</span>
            <span className="module-tag">Foundation</span>
            <h3>Guaranteed Placement</h3>
            <div className="price">
              ₹1,49,999<span>/ one-time</span>
            </div>
            <div className="price-note">Inclusive of all taxes</div>
            <ul className="price-features">
              <li>
                <CheckIcon />3 months structured training
              </li>
              <li>
                <CheckIcon />
                <strong>Guaranteed placement</strong>
              </li>
              <li>
                <CheckIcon />
                Live projects &amp; mentorship
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary price-cta">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
