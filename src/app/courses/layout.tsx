import "@/styles/courses.css";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="course-page-scope">{children}</div>;
}
