
const shopWhatsApp = "96877381538";

const services = [
  {
    title: "Phone Repairs",
    description: "Screen, battery, and charging-port repairs.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    message:
      "Hi, I need help repairing my phone. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح هاتفي. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Laptop Repairs",
    description: "Diagnostics, upgrades, and troubleshooting.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    message:
      "Hi, I need help repairing my laptop. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز الكمبيوتر المحمول. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "PS5 Repairs",
    description: "Console troubleshooting and repair.",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
    message:
      "Hi, I need help repairing my PS5. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز PS5. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Controller Repairs",
    description: "Help with controller buttons, sticks, and connections.",
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
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