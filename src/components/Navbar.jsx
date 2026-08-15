import "./Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🩸</span>
        <span>BloodFinder</span>
      </div>

      <nav className="navbar-links">
        <a href="/">Home</a>
        <a href="/find-blood">Find Blood</a>
        <a href="/blood-banks">Blood Banks</a>
        <a href="/become-donor">Become a Donor</a>
        <a href="/emergency" className="emergency-link">
          Emergency
        </a>
      </nav>

      <button className="nav-action">Get Help</button>
    </header>
  );
}

export default Navbar;