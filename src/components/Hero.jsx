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
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="People working together with laptops and technology"
        />
      </div>
    </section>
  );
}

export default Hero;