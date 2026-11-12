import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a href="#home" className="logo" onClick={closeMenu}>
        PlatForm Technology
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="site-navigation"
        className={menuOpen ? "site-nav is-open" : "site-nav"}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#shop" onClick={closeMenu}>Shop</a>
        <a href="#repairs" onClick={closeMenu}>Repairs</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a
        href="#repairs"
        className="book-repair-button"
        onClick={closeMenu}
      >
        Book a repair
      </a>
    </header>
  );
}

export default Navbar;