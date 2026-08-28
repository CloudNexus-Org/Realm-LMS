import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "80px auto",
        padding: "40px 24px",
        textAlign: "center",
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #eaecf0",
      }}
    >
      <h2 style={{ fontSize: "24px", color: "#101828", marginBottom: "12px" }}>
        Course Not Found
      </h2>
      <p style={{ color: "#667085", marginBottom: "24px", fontSize: "14.5px" }}>
        The course track you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="btn btn-primary"
        style={{ display: "inline-flex", textDecoration: "none" }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
