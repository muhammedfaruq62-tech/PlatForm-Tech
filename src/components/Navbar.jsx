function Navbar() {
  return (
    <header>
      <a href="#home" className="logo">
  PlatForm Technology
       </a>
      <nav>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#repairs">Repairs</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

     <a href="#repairs" className="book-repair-button">
  Book a repair
</a>
    </header>
  );
}

export default Navbar;