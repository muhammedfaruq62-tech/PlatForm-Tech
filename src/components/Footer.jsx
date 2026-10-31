function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="logo">
            Mobile & Technology Service
          </a>
          <p>Your local shop for great tech and friendly service.</p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#shop">Shop categories</a>
          <a href="#products">Featured products</a>
          <a href="#repairs">Repair services</a>
        </div>

        <div className="footer-column">
  <h3>Contact</h3>

  <a href="tel:+96877381538">+96877381538</a>

  <a href="mailto:hello@example.com">hello@example.com</a>

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=J6P2%2B7RW%2C%20Seeb"
    target="_blank"
    rel="noopener noreferrer"
  >
    J6P2+7RW, Seeb — Get directions
  </a>

</div>
</div>

<div className="footer-bottom">
  <span>© {new Date().getFullYear()} PlatFormTechnology</span>
</div>

<a
  className="whatsapp-button"
  href={`https://api.whatsapp.com/send?phone=96877381538&text=${encodeURIComponent(
    "Hi, I found your website and would like to know more about your products and repair services. Do you sell mobile phones, laptops, gaming devices, printers, and tech accessories?\n\nمرحباً، وجدت موقعكم وأود معرفة المزيد عن منتجاتكم وخدمات الصيانة. هل تبيعون الهواتف المحمولة وأجهزة الكمبيوتر المحمولة وأجهزة الألعاب والطابعات والإكسسوارات التقنية؟"
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Message us on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="whatsapp-icon"
  >
    <path
      fill="currentColor"
      d="M16 .5A15.4 15.4 0 0 0 2.7 23.7L.5 31.5l8-2.1A15.5 15.5 0 1 0 16 .5Zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.2-4.6-.3-.5A12.8 12.8 0 1 1 16 28.7Zm7-9.6c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z"
    />
  </svg>
  <span>Chat with us</span>
</a>
</footer>
  );
}

export default Footer;