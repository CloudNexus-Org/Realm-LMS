import Link from "next/link";

const tracks = [
  {
    icon: "DO",
    slug: "devops",
    title: "DevOps Engineering",
    desc: "Master CI/CD, containers and cloud infrastructure — the discipline shortening every company's release cycle.",
    chips: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    stat: "1,70,000+ open roles worldwide",
  },
  {
    icon: "AI",
    slug: "ai-ml",
    title: "AI / Machine Learning",
    desc: "Build and ship models across healthcare, finance and retail — where automation is rewriting the job description.",
    chips: ["Python", "TensorFlow", "scikit-learn", "Pandas", "OpenCV"],
    stat: "High global demand, every sector",
  },
  {
    icon: "FS",
    slug: "development",
    title: "Full Stack Development",
    desc: "Front-end finesse, back-end wizardry, database mastery — go from idea to a fully deployed, scalable web app.",
    chips: ["React", "Node.js", "Spring Boot", "MySQL", "Kafka"],
    stat: "End-to-end product engineering",
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
          <h2>Three career tracks. One placement pipeline.</h2>
          <p>
            Every track pairs hands-on tooling with live mentorship — pick the
            stack that matches where the market&apos;s hiring.
          </p>
        </div>

        <div className="track-grid">
          {tracks.map((track) => (
            <Link
              key={track.icon}
              href={`/courses/${track.slug}`}
              className="track-card reveal"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
