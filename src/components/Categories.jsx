const categories = [
  {
    name: "Mobile Phones",
    nameArabic: "الهواتف المحمولة",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    name: "Laptops",
    nameArabic: "أجهزة اللابتوب",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    name: "Gaming Gear",
    nameArabic: "أجهزة الألعاب",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600",
  },
  {
    name: "Printers",
    nameArabic: "الطابعات",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600",
  },
  {
    name: "Accessories",
    nameArabic: "الإكسسوارات",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
];

function Categories() {
  return (
    <section className="categories" id="shop">
      <div className="section-heading">
        <p className="eyebrow">Find your next favorite</p>
        <h2>A little bit of everything.</h2>
        <p className="categories-arabic-heading" lang="ar-OM" dir="rtl">
          اكتشفوا ما يناسبكم
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <a className="category-card" href="#products" key={category.name}>
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <h3>{category.name}</h3>
              <h4 className="category-title-arabic" lang="ar-OM" dir="rtl">
                {category.nameArabic}
              </h4>
              <span>Explore category →</span>
              <span className="category-cta-arabic" lang="ar-OM" dir="rtl">
                استكشفوا القسم
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;