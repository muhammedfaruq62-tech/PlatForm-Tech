import heroImage from "../assets/hero 1.png";
function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <p className="eyebrow">Your local tech people</p>

        <h1>
          Your tech.
          <br />
          Taken care of.
        </h1>

        <p className="hero-description">
          Shop the latest devices and accessories, or let our friendly experts
          help repair the tech you already own.
        </p>

        <div className="hero-buttons">
          <a href="#shop">Explore the shop</a>
          <a href="#repairs">Book a repair</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage} alt="Technology products"
        />
      </div>
    </section>
  );
}

export default Hero;