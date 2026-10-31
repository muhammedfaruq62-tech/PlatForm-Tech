import PhonerepairImage from "../assets/Phone repair1.jpeg";
import LaptoprepairImage from "../assets/Laptop Repair 2.jpeg";
import PS5repairImage from "../assets/PS 5 repair.jpeg";
import ControllerrepairImage from "../assets/controller repair.jpeg";
import printerImage from "../assets/printer repair.jpeg";
import AppleWatchImage from "../assets/Apple watch.jpeg";

const shopWhatsApp = "96877381538";

const services = [
  {
    title: "Phone Repairs",
    description: "Screen, battery, and charging-port repairs.",
    image: PhonerepairImage ,
    message:
      "Hi, I need help repairing my phone. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح هاتفي. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Laptop Repairs",
    description: "Diagnostics, upgrades, and troubleshooting.",
    image: LaptoprepairImage ,
    message:
      "Hi, I need help repairing my laptop. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز الكمبيوتر المحمول. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "PS5 Repairs",
    description: "Console troubleshooting and repair.",
    image: PS5repairImage ,
    message:
      "Hi, I need help repairing my PS5. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح جهاز PS5. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Controller Repairs",
    description: "Help with controller buttons, sticks, and connections.",
    image: ControllerrepairImage ,
    message:
      "Hi, I need help repairing my gaming controller. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح وحدة التحكم بالألعاب. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },
  {
    title: "Printer Repairs",
    description: "Printer troubleshooting and maintenance.",
    image: printerImage ,
    message:
      "Hi, I need help repairing my printer. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح الطابعة. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
  },

   {
    title: "Watch Repairs",
    description: "Printer troubleshooting and maintenance.",
    image: AppleWatchImage ,
    message:
      "Hi, I need help repairing my printer. Could you tell me how to arrange a repair?\n\nمرحباً، أحتاج إلى إصلاح الطابعة. هل يمكنكم إخباري بكيفية ترتيب عملية الإصلاح؟",
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