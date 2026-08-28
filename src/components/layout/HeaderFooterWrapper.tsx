"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface HeaderFooterWrapperProps {
  children: React.ReactNode;
}

export default function HeaderFooterWrapper({
  children,
}: HeaderFooterWrapperProps) {
  const pathname = usePathname();
  const isCoursePage = pathname?.startsWith("/courses");

  if (isCoursePage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
