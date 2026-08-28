import Link from "next/link";

export default function FullStackDevelopmentPage() {
  return (
    <div className="enrollments-header" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <span className="eyebrow">Career Track</span>
        <h1 style={{ marginTop: "14px" }}>Full Stack Development</h1>
        <p style={{ marginTop: "16px" }}>
          Content coming soon.
        </p>
        <div style={{ marginTop: "30px" }}>
          <Link href="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
