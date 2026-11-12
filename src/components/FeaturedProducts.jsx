const products = [
  {
    name: "Smartphone",
    nameArabic: "هاتف ذكي",
    description: "128GB · Available in multiple colors",
    descriptionArabic: "سعة 128 جيجابايت · متوفر بألوان متعددة",
    price: "OMR 150.000",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Laptop",
    nameArabic: "لابتوب",
    description: "HP laptop · Windows Core i5",
    descriptionArabic: "لابتوب HP · نظام Windows ومعالج Core i5",
    price: "OMR 120.000",
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "PS5 Gaming PC",
    nameArabic: "جهاز ألعاب PS5",
    description: "Wireless · PS5 Gaming PC",
    descriptionArabic: "لاسلكي · جهاز ألعاب PS5",
    price: "OMR 28.000",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Headphones",
    nameArabic: "سماعات رأس",
    description: "Premium · P9 headphone sound",
    descriptionArabic: "سماعات P9 · صوت مميز",
    price: "OMR 10.500",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Phone Stand",
    nameArabic: "حامل هاتف",
    description: "Mobile · Table phone stand",
    descriptionArabic: "حامل هاتف للاستخدام على الطاولة",
    price: "OMR 2.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGD-N0bmuysnA2Qai92PHj2bvZgZhQDWyLU0XO8P8iobeSZnOCorCTxY&s=10",
  },
  {
    name: "iPad",
    nameArabic: "آيباد",
    description: "Apple iPad · 7th generation",
    descriptionArabic: "آيباد من آبل · الجيل السابع",
    price: "OMR 55.000",
    image:
      "https://www.trustedreviews.com/wp-content/uploads/sites/7/2019/12/IMG_0128.jpeg",
  },
  {
    name: "CCTV",
    nameArabic: "كاميرا مراقبة",
    description: "Security camera · 2K",
    descriptionArabic: "كاميرا أمنية · دقة 2K",
    price: "OMR 25.000",
    image:
      "https://images.unsplash.com/photo-1481597262637-0545b18186ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Desktop",
    nameArabic: "كمبيوتر مكتبي",
    description: "Dell desktop · 24-inch, Core i5",
    descriptionArabic: "كمبيوتر Dell مكتبي · شاشة 24 بوصة ومعالج Core i5",
    price: "OMR 95.500",
    image:
      "https://itechezy.com/wp-content/uploads/2024/11/Refurbished-dell-Computer-set-Intel-3800-vostro-i3-4th-Gen-SFF-2.png",
  },
  {
    name: "Keyboard",
    nameArabic: "لوحة مفاتيح",
    description: "Wireless · Black keyboard",
    descriptionArabic: "لوحة مفاتيح لاسلكية · باللون الأسود",
    price: "OMR 7.000",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Watch",
    nameArabic: "ساعة ذكية",
    description: "Smart watch · 1.52-inch display",
    descriptionArabic: "ساعة ذكية · شاشة 1.52 بوصة",
    price: "OMR 12.000",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "PS5 Controller",
    nameArabic: "يد تحكم PS5",
    description: "PS5 gaming controller",
    descriptionArabic: "يد تحكم لألعاب PS5",
    price: "OMR 10.500",
    image:
      "https://battlebeavercustoms.com/cdn/shop/files/ps5-smartpad-fps-3441809.jpg?v=1785804376&width=1214",
  },
  {
    name: "Mouse",
    nameArabic: "فأرة",
    description: "Wireless · Black mouse",
    descriptionArabic: "فأرة لاسلكية · باللون الأسود",
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
        <p className="featured-arabic-heading" lang="ar-OM" dir="rtl">
          منتجات مميزة
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <div className="product-arabic" lang="ar-OM" dir="rtl">
              <h4>{product.nameArabic}</h4>
              <p>{product.descriptionArabic}</p>
            </div>

            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;