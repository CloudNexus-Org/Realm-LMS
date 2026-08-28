import NavToggle from "./NavToggle";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="#home" className="brand">
          <svg className="mark" viewBox="0 0 30 30" fill="none">
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
        </a>
        <NavToggle />
      </nav>
    </header>
  );
}
