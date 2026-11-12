function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <p className="eyebrow">PLATFORM TECHNOLOGY · SEEB, OMAN</p>

        <h1>
          Reliable technology.
          <br />
          Support you can trust.
        </h1>

        <p className="hero-description">
          Shop mobile phones, laptops, gaming devices, printers, and accessories.
          Need a repair? Our team is here to help keep your devices working.
        </p>

        <div className="hero-arabic" lang="ar-OM" dir="rtl">
          <h2>تقنية موثوقة، وخدمة تعتمدون عليها</h2>
          <p>
            تسوّقوا الهواتف المحمولة واللابتوبات وأجهزة الألعاب والطابعات
            والإكسسوارات. وإذا احتاج جهازكم إلى صيانة، فريقنا جاهز لمساعدتكم.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#shop">
            Shop products
            <span lang="ar-OM" dir="rtl">تسوّقوا المنتجات</span>
          </a>

          <a href="#repairs">
            Book a repair
            <span lang="ar-OM" dir="rtl">احجزوا صيانة</span>
          </a>
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