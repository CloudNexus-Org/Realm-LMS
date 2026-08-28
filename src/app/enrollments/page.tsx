import { getAllEnrollments } from "@/lib/services/enrollment.service";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EnrollmentsPage() {
  const enrollments = await getAllEnrollments();

  return (
    <>
      <div className="enrollments-header">
        <div className="wrap">
          <span className="eyebrow">Admin</span>
          <h1>Enrollment Records</h1>
          <p>All submitted enrollment requests, newest first.</p>
        </div>
      </div>

      <div className="enrollments-content">
        <div className="wrap">
          <div style={{ marginBottom: "20px" }}>
            <Link href="/" className="btn btn-ghost on-light">
              ← Back to Home
            </Link>
          </div>

          {enrollments.length === 0 ? (
            <div className="enrollments-empty">
              <div className="empty-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 9h6M9 13h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p>No enrollment records found.</p>
            </div>
          ) : (
            <div className="enrollments-table-wrap">
              <table className="enrollments-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Career Track</th>
                    <th>Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.map((enrollment, index) => (
                    <tr key={enrollment.id}>
                      <td>{index + 1}</td>
                      <td>{enrollment.fullName}</td>
                      <td>{enrollment.phone}</td>
                      <td>
                        {new Date(enrollment.dateOfBirth).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </td>
                      <td>{enrollment.gender}</td>
                      <td>{enrollment.careerTrack}</td>
                      <td>
                        {new Date(enrollment.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
