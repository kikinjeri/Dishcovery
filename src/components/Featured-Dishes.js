"use client";

export default function FeaturedDishes() {
  const dishes = [
    {
      name: "Poutine",
      cuisine: "Canadian",
      slug: "poutine",
      image: "/images/dishes/poutine.jpg",
    },
    {
      name: "Beavertail",
      cuisine: "Canadian",
      slug: "beavertail",
      image: "/images/dishes/beavertail.jpg",
    },
    {
      name: "Ramen",
      cuisine: "Japanese",
      slug: "ramen",
      image: "/images/dishes/ramen.jpg",
    },
    {
      name: "Classic Cheeseburger",
      cuisine: "American",
      slug: "classic-cheeseburger",
      image: "/images/dishes/cheeseburger.jpg",
    },
    {
      name: "Jerk Chicken",
      cuisine: "Caribbean",
      slug: "jerk-chicken",
      image: "/images/dishes/jerk-chicken.jpg",
    },
    {
      name: "Tacos al Pastor",
      cuisine: "Mexican",
      slug: "tacos-al-pastor",
      image: "/images/dishes/tacos-al-pastor.jpg",
    },
    {
      name: "Shawarma",
      cuisine: "Middle Eastern",
      slug: "shawarma",
      image: "/images/dishes/shawarma.jpg",
    },
  ];

  // Shuffle and pick 4
  const featured = [...dishes].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="featured-section">
      <div className="container">

        {/* Ottawa-Eats Title */}
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Ottawa‑Eats
        </h2>

        {/* CTA / Micro-Hero */}
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          Discover Ottawa’s favourite dishes. <br />
          <strong style={{ color: "var(--color-primary)" }}>
            Order it tonight or cook it yourself — Ottawa‑Eats helps you do both.
          </strong>
        </p>

        {/* Featured Dishes Grid */}
        <div className="featured-grid">
          {featured.map((dish) => (
            <a key={dish.slug} href={`/dishes/${dish.slug}`} className="dish-card">
              <img src={dish.image} alt={dish.name} className="dish-image" />

              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p className="cuisine">{dish.cuisine}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
