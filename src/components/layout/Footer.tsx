export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-row">
          <div className="foot-brand">
            <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
              <rect
                x="1"
                y="1"
                width="28"
                height="28"
                rx="7"
                stroke="#2DD4BF"
                strokeWidth="1.6"
              />
              <path
                d="M9 20V10h5.2c2.2 0 3.8 1.5 3.8 3.5S16.4 17 14.2 17H12l4 3"
                stroke="#2DD4BF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Realm Consulting
          </div>
          <div className="foot-links">
            <a href="#tracks">Career Tracks</a>
            <a href="#pipeline">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="foot-legal">
          $ realm-consulting --build career &amp;&amp; deploy job · Terms &amp;
          conditions applied
        </div>
      </div>
    </footer>
  );
}
