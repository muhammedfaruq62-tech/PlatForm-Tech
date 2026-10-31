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
import ps5ControllerImage from "../assets/ps5 Controller.jpeg";
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
  description: "HP laptop .  Window corei5",
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
    description: "Premium · P9, Headphone sound",
    price: "OMR 10.500",
    image:  HeadphoneImage ,
  },

  {
    name: "Phonestand",
    description: "Moblie · Table, phone stand",
    price: "OMR 2.000",
    image: PhonestandImage ,
  },

  {
    name: "Ipad",
    description: "Apple ipad · 7th, Generation",
    price: "OMR 55.000",
    image: IpadImage ,
  },

  {
    name: "CCTV",
    description: "Security · Camera, 2k",
    price: "OMR 25.000",
    image: CctvImage ,
  },

  {
    name: "Desktop",
    description: "Dell Desktop · 24inch, Corei5",
    price: "OMR 95.500",
    image: DesktopImage ,
  },

  {
    name: "Keyboard",
    description: "Wireless · Black, Keyboard",
    price: "OMR 7.000",
    image: keyboardImage ,
  },

  {
    name: "Watch",
    description: "Smart Watch · with, 1.52inch",
    price: "OMR 12.000",
    image: WatchImage ,
  },

  {
    name: "PS5 Controller",
    description: "PS5· Gaming, Controller",
    price: "OMR 10.500",
    image: ps5ControllerImage ,
  },

  {
    name: "Mouse",
    description: "Wireless · Black, Mouse",
    price: "OMR 3.000",
    image: MouseImage ,
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