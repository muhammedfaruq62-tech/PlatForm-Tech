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
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "iPad",
    description: "Apple iPad · 7th generation",
    price: "OMR 55.000",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "CCTV",
    description: "Security camera · 2K",
    price: "OMR 25.000",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Desktop",
    description: "Dell desktop · 24-inch, Core i5",
    price: "OMR 95.500",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
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