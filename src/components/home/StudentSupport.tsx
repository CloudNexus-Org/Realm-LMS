const supportItems = [
  {
    n: "4.8/5",
    title: "TA-Rated Support",
    desc: "Average doubt-resolution rating from students on the platform, every single day.",
  },
  {
    n: "Live",
    title: "Real Projects",
    desc: "Build industry-standard Mini, Major and Capstone projects — not toy exercises.",
  },
  {
    n: "1:1",
    title: "Live Mentorship",
    desc: "Schedule mock interviews and get direct time with working industry experts.",
  },
  {
    n: "Certified",
    title: "Recognized Credential",
    desc: "Earn an industry-recognized certificate on completing your bootcamp.",
  },
];

export default function StudentSupport() {
  return (
    <section className="light-section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "#0E8F80" }}>
            Student Support
          </span>
          <h2>You&apos;re never stuck waiting for an answer.</h2>
          <p>
            A scalable support system means doubts get resolved same-day — not
            next week.
          </p>
        </div>
        <div className="support-grid">
          {supportItems.map((item) => (
            <div key={item.title} className="support-card reveal">
              <div className="n">{item.n}</div>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
