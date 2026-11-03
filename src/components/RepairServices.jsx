const shopWhatsApp = "96877381538";

const services = [
  {
    title: "Phone Repairs",
    description: "Screen, battery, and charging-port repairs.",
    image:
      "https://images.unsplash.com/photo-1639776739505-1e55563c9938?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    message:
      "Hi, I need help repairing my phone. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح هاتفي. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Laptop Repairs",
    description: "Diagnostics, upgrades, and troubleshooting.",
    image:
      "https://media.istockphoto.com/id/2198022863/photo/top-view-of-computer-master-repairing-laptop-motherboard-with-screwdriver-surrounded-by.jpg?s=2048x2048&w=is&k=20&c=6yy_CKq72EHJU5ZZeOVcDq3REY-GaFOT2dNotSGHNhM=",
    message:
      "Hi, I need help repairing my laptop. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز الكمبيوتر المحمول. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "PS5 Repairs",
    description: "Console troubleshooting and repair.",
    image:
      "https://images.unsplash.com/photo-1721333089620-2f1f3a647dc8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    message:
      "Hi, I need help repairing my PS5. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز PS5. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Controller Repairs",
    description: "Help with controller buttons, sticks, and connections.",
    image:
      "https://media.istockphoto.com/id/1182989101/photo/broken-gamepad-joystick-on-white-backrgound.jpg?s=1024x1024&w=is&k=20&c=AGI_5niGOwmb9adwGDFrvxqCEBCSCzllBykZl_g-F5Q=",
    message:
      "Hi, I need help repairing my gaming controller. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح وحدة التحكم بالألعاب. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Printer Repairs",
    description: "Printer troubleshooting and maintenance.",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80",
    message:
      "Hi, I need help repairing my printer. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح الطابعة. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Watch Repairs",
    description: "Help with smartwatch screens, batteries, and setup.",
    image:
      "https://images.unsplash.com/photo-1719744755528-797de46cbbff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    message:
      "Hi, I need help repairing my watch. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح ساعتي. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
];

function RepairServices() {
  return (
    <section className="repair-services" id="repairs">
      <div className="repair-intro">
        <p className="eyebrow">When tech has a bad day</p>

        <h2>
          We’ll get you
          <br />
          <span>back to it.</span>
        </h2>

        <p>
          Choose the device that needs attention. We’ll help you figure out the
          next step.
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=${shopWhatsApp}&text=${encodeURIComponent(
            "Hi, I have a question about your repair services.\n\nمرحباً، لدي سؤال عن خدمات الصيانة لديكم."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask us about repairs
        </a>
      </div>

      <div className="repair-grid">
        {services.map((service, index) => (
          <a
            className="repair-card"
            href={`https://api.whatsapp.com/send?phone=${shopWhatsApp}&text=${encodeURIComponent(
              service.message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            key={service.title}
          >
            <img
              className="repair-image"
              src={service.image}
              alt={service.title}
            />

            <span className="repair-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <span className="repair-link">Ask about this repair →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default RepairServices;