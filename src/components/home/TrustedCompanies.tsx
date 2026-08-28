export default function TrustedCompanies() {
  const companies = [
    "CVS Pharmacy",
    "TD Bank",
    "Bank of America",
    "ITE",
    "Bhashini",
    "VSN",
  ];

  return (
    <div className="trusted">
      <div className="wrap">
        <p>Engineers we&apos;ve placed now build for</p>
        <div className="logo-row">
          {companies.map((name) => (
            <span key={name} className="logo-chip">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
