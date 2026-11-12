import ownerPhoto from "../assets/owner-photo.jpeg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-photo">
        <img src={ownerPhoto} alt="Owner of PlatForm Technology" />
      </div>

      <div className="about-content">
        <p className="eyebrow">About PlatForm Technology</p>
        <h2>Good technology, with people here to help.</h2>

        <p>
          PlatForm Technology is a local shop for the devices and services
          people rely on every day. We sell phones, laptops, gaming equipment,
          printers, and accessories, and we offer repairs to help get your
          devices working again.
        </p>

        <div className="about-arabic" lang="ar-OM" dir="rtl">
          <p className="eyebrow">عن بلاتفورم تكنولوجي</p>
          <h3>تقنية زينة وخدمة قريبة منكم</h3>

          <p>
            بلاتفورم تكنولوجي محلّكم للأجهزة والخدمات التقنية. نبيع الهواتف
            واللابتوبات وأجهزة الألعاب والطابعات والإكسسوارات، ونقدم خدمات
            صيانة لمختلف الأجهزة.
          </p>

          <p>
            هدفنا نسهّل عليكم استخدام التقنية ونقدم لكم خدمة طيبة ونصيحة واضحة.
          </p>
        </div>

        <p className="about-owner">Locally owned and here to help.</p>
      </div>
    </section>
  );
}

export default About;