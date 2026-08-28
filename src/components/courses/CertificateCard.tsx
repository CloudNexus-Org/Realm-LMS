import { CertificateInfo } from "@/types/course";

interface CertificateCardProps {
  certificate: CertificateInfo;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="cert-preview-graphic-box">
      <div className="cert-lock-badge">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>

      <h4 className="cert-preview-title">
        {certificate.credentialNote || "Certificate on completion"}
      </h4>

      <div className="cert-placeholder-lines">
        <div className="cert-line-pill"></div>
        <div className="cert-line-pill short"></div>
      </div>

      <div className="cert-signature-draw">
        Dr. Daniel Scott
      </div>
    </div>
  );
}
