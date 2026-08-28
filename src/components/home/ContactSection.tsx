import EnrollmentForm from "@/components/enrollment/EnrollmentForm";

export default function ContactSection() {
  return (
    <section className="dark-section" id="contact">
      <div className="wrap contact-wrap">
        <div className="contact-info">
          <span className="eyebrow" style={{ color: "var(--cyan-300)" }}>
            Enroll Now
          </span>
          <h2 style={{ marginTop: "14px" }}>Let&apos;s deploy your career.</h2>
          <p>
            Tell us which track you&apos;re aiming for and an advisor will walk
            you through modules, pricing, and start dates.
          </p>

          <div className="contact-detail">
            <div className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div>
              <div className="lbl">Address</div>
              <div className="val">
                Building No. 28, Sec/Loc 2nd Stage, BTM Layout City, Bangalore
                South, Karnataka 560076
              </div>
            </div>
          </div>
          <div className="contact-detail">
            <div className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div>
              <div className="lbl">Phone</div>
              <div className="val">+91 92010 04208</div>
            </div>
          </div>
          <div className="contact-detail">
            <div className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M2 7l10 6 10-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div>
              <div className="lbl">Email</div>
              <div className="val">admissions@realmconsulting.in</div>
            </div>
          </div>
        </div>

        <EnrollmentForm />
      </div>
    </section>
  );
}
