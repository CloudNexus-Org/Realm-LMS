const tracks = [
  {
    icon: "DO",
    title: "DevOps Engineering",
    desc: "Master CI/CD, containers and cloud infrastructure — the discipline shortening every company's release cycle.",
    chips: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    stat: "1,70,000+ open roles worldwide",
  },
  {
    icon: "AI",
    title: "AI / Machine Learning",
    desc: "Build and ship models across healthcare, finance and retail — where automation is rewriting the job description.",
    chips: ["Python", "TensorFlow", "scikit-learn", "Pandas", "OpenCV"],
    stat: "High global demand, every sector",
  },
  {
    icon: "FS",
    title: "Full Stack Development",
    desc: "Front-end finesse, back-end wizardry, database mastery — go from idea to a fully deployed, scalable web app.",
    chips: ["React", "Node.js", "Spring Boot", "MySQL", "Kafka"],
    stat: "End-to-end product engineering",
  },
  {
    icon: "IoT",
    title: "Internet of Things",
    desc: "Connect devices, sensors and systems that talk to each other — and build the automation layer behind them.",
    chips: ["Embedded C", "Sensors", "Edge Compute", "MQTT"],
    stat: "Smarter devices, connected careers",
  },
  {
    icon: "MK",
    title: "Digital Marketing",
    desc: "Own brand strategy, performance campaigns and analytics in a field that never stops evolving.",
    chips: ["SEO", "Analytics", "Paid Media", "Content"],
    stat: "$455B global digital ad spend, 2024",
  },
  {
    icon: "GD",
    title: "Graphic Designing",
    desc: "Visual communication, brand systems and design tooling that shapes how products and stories get seen.",
    chips: ["Figma", "Adobe CC", "Typography", "UI Systems"],
    stat: "$50B projected market by 2026",
  },
];

export default function CareerTracks() {
  return (
    <section className="light-section" id="tracks">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "#0E8F80" }}>
            Choose Your Stack
          </span>
          <h2>Six career tracks. One placement pipeline.</h2>
          <p>
            Every track pairs hands-on tooling with live mentorship — pick the
            stack that matches where the market&apos;s hiring.
          </p>
        </div>

        <div className="track-grid">
          {tracks.map((track) => (
            <div key={track.icon} className="track-card reveal">
              <div className="track-icon">{track.icon}</div>
              <h3>{track.title}</h3>
              <p className="desc">{track.desc}</p>
              <div className="chip-row">
                {track.chips.map((chip) => (
                  <span key={chip} className="tool-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <span className="track-stat">{track.stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
