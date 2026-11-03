const products = [
  {
    name: "Smartphone",
    description: "128GB · Available in multiple colors",
    price: "OMR 150.000",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Laptop",
    description: "HP laptop · Windows Core i5",
    price: "OMR 120.000",
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "PS5 Gaming PC",
    description: "Wireless · PS5 Gaming PC",
    price: "OMR 28.000",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Headphones",
    description: "Premium · P9 headphone sound",
    price: "OMR 10.500",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Phone Stand",
    description: "Mobile · Table phone stand",
    price: "OMR 2.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGD-N0bmuysnA2Qai92PHj2bvZgZhQDWyLU0XO8P8iobeSZnOCorCTxY&s=10",
  },
  {
    name: "iPad",
    description: "Apple iPad · 7th generation",
    price: "OMR 55.000",
    image:
      "https://www.trustedreviews.com/wp-content/uploads/sites/7/2019/12/IMG_0128.jpeg",
  },
  {
    name: "CCTV",
    description: "Security camera · 2K",
    price: "OMR 25.000",
    image:
      "https://images.unsplash.com/photo-1481597262637-0545b18186ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Desktop",
    description: "Dell desktop · 24-inch, Core i5",
    price: "OMR 95.500",
    image:
      "https://itechezy.com/wp-content/uploads/2024/11/Refurbished-dell-Computer-set-Intel-3800-vostro-i3-4th-Gen-SFF-2.png",
  },
  {
    name: "Keyboard",
    description: "Wireless · Black keyboard",
    price: "OMR 7.000",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Watch",
    description: "Smart watch · 1.52-inch display",
    price: "OMR 12.000",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "PS5 Controller",
    description: "PS5 gaming controller",
    price: "OMR 10.500",
    image:
      "https://battlebeavercustoms.com/cdn/shop/files/ps5-smartpad-fps-3441809.jpg?v=1785804376&width=1214",
  },
  {
    name: "Mouse",
    description: "Wireless · Black mouse",
    price: "OMR 3.000",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80",
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