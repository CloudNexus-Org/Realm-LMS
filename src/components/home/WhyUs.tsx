const reasons = [
  {
    num: "01",
    title: "Comprehensive curriculum",
    desc: "Covering every layer of the tools and technologies employers actually use.",
  },
  {
    num: "02",
    title: "Hands-on experience",
    desc: "Real-world projects and simulations, not just recorded lectures.",
  },
  {
    num: "03",
    title: "Placement assistance",
    desc: "Dedicated support through guaranteed placement and job readiness.",
  },
  {
    num: "04",
    title: "Industry expertise",
    desc: "Learn from professionals with deep, current domain knowledge.",
  },
  {
    num: "05",
    title: "Career growth",
    desc: "A direct path to career opportunities across in-demand tech roles.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="light-section">
      <div className="wrap why-grid">
        <div>
          <div className="section-head reveal" style={{ marginBottom: "14px" }}>
            <span className="eyebrow" style={{ color: "#0E8F80" }}>
              Why Realm Consulting
            </span>
            <h2>Built like infrastructure, not a classroom.</h2>
          </div>
          <ul className="why-list reveal">
            {reasons.map((r) => (
              <li key={r.num}>
                <span className="why-num">{r.num}</span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="why-panel reveal">
          <span className="eyebrow">By the numbers</span>
          <h3>The pipeline works because the market&apos;s hiring.</h3>
          <p>
            Career tracks are chosen to match where demand is growing fastest
            right now.
          </p>
          <div className="mini-stats">
            <div className="item">
              <div className="num">$25.5B</div>
              <div className="lbl">Projected DevOps market by 2028</div>
            </div>
            <div className="item">
              <div className="num">1.7L+</div>
              <div className="lbl">DevOps jobs open worldwide</div>
            </div>
            <div className="item">
              <div className="num">$455B</div>
              <div className="lbl">Digital ad spend, 2024</div>
            </div>
            <div className="item">
              <div className="num">$50B</div>
              <div className="lbl">Design market by 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
