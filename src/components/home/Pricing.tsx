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
            Every module includes 3 months of training and a 3-month paid
            internship. The difference is how far we go on placement.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Module 3 — Foundation */}
          <div className="price-card reveal">
            <span className="module-tag">Module 3</span>
            <h3>Foundation</h3>
            <div className="price">
              ₹59,999<span>/ one-time</span>
            </div>
            <div className="price-note">Inclusive of all taxes</div>
            <ul className="price-features">
              <li><CheckIcon />3 months structured training</li>
              <li><CheckIcon />3-month paid internship</li>
              <li><CheckIcon />Live projects &amp; mentorship</li>
            </ul>
            <a href="#contact" className="btn btn-ghost on-light price-cta">
              Choose Module 3
            </a>
          </div>

          {/* Module 2 — Accelerator (featured) */}
          <div className="price-card featured reveal">
            <span className="price-badge">Most Popular</span>
            <span className="module-tag">Module 2</span>
            <h3>Accelerator</h3>
            <div className="price">
              ₹99,999<span>/ one-time</span>
            </div>
            <div className="price-note">Inclusive of all taxes</div>
            <ul className="price-features">
              <li><CheckIcon />3 months structured training</li>
              <li><CheckIcon />3-month paid internship</li>
              <li><CheckIcon />5 guaranteed interview vouchers</li>
              <li><CheckIcon />Live projects &amp; mentorship</li>
            </ul>
            <a href="#contact" className="btn btn-primary price-cta">
              Choose Module 2
            </a>
          </div>

          {/* Module 1 — Guaranteed */}
          <div className="price-card reveal">
            <span className="module-tag">Module 1</span>
            <h3>Guaranteed</h3>
            <div className="price">
              ₹1,49,999<span>/ one-time</span>
            </div>
            <div className="price-note">Inclusive of all taxes</div>
            <ul className="price-features">
              <li><CheckIcon />3 months structured training</li>
              <li><CheckIcon />3-month paid internship</li>
              <li><CheckIcon /><strong>Guaranteed placement</strong></li>
              <li><CheckIcon />Live projects &amp; mentorship</li>
            </ul>
            <a href="#contact" className="btn btn-ghost on-light price-cta">
              Choose Module 1
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
