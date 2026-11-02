import laptopImage from "../assets/lapi.jpeg";
import Ps5Image from "../assets/ps 5.jpeg";
import phoneImage from "../assets/iphone.jpeg";
import HeadphoneImage from "../assets/headset.jpeg";
import PhonestandImage from "../assets/phone stand.jpeg";
import IpadImage from "../assets/ipad.jpeg";
import CctvImage from "../assets/cctv.jpeg";
import DesktopImage from "../assets/Desktop.jpeg";
import keyboardImage from "../assets/Keyboard.jpeg";
import WatchImage from "../assets/Watch.jpeg";
import MouseImage from "../assets/Mouse.jpeg";

const products = [
  {
    name: "Smartphone",
    description: "128GB · Available in multiple colors",
    price: "OMR 150.000",
    image: phoneImage,
  },
  {
    name: "Laptop",
    description: "HP laptop · Windows Core i5",
    price: "OMR 120.000",
    image: laptopImage,
  },
  {
    name: "PS5 Gaming PC",
    description: "Wireless · PS5 Gaming PC",
    price: "OMR 28.000",
    image: Ps5Image,
  },
  {
    name: "Headphones",
    description: "Premium · P9 headphone sound",
    price: "OMR 10.500",
    image: HeadphoneImage,
  },
  {
    name: "Phone Stand",
    description: "Mobile · Table phone stand",
    price: "OMR 2.000",
    image: PhonestandImage,
  },
  {
    name: "iPad",
    description: "Apple iPad · 7th generation",
    price: "OMR 55.000",
    image: IpadImage,
  },
  {
    name: "CCTV",
    description: "Security camera · 2K",
    price: "OMR 25.000",
    image: CctvImage,
  },
  {
    name: "Desktop",
    description: "Dell desktop · 24-inch, Core i5",
    price: "OMR 95.500",
    image: DesktopImage,
  },
  {
    name: "Keyboard",
    description: "Wireless · Black keyboard",
    price: "OMR 7.000",
    image: keyboardImage,
  },
  {
    name: "Watch",
    description: "Smart watch · 1.52-inch display",
    price: "OMR 12.000",
    image: WatchImage,
  },
  {
    name: "PS5 Controller",
    description: "PS5 gaming controller",
    price: "OMR 10.500",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mouse",
    description: "Wireless · Black mouse",
    price: "OMR 3.000",
    image: MouseImage,
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products" id="products">
      <div className="section-heading">
        <p className="eyebrow">Good gear, good to go</p>
        <h2>Featured products</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;