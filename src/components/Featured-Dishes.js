"use client";

import { dishes } from "@/data/dishes";

export default function FeaturedDishes() {
  // Filter dishes that actually have images in /public/images/dishes
  const dishesWithImages = dishes.filter((dish) => dish.image);

  // Shuffle and pick 4
  const featured = [...dishesWithImages]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Dishes</h2>
        <p className="section-subtitle">
          Taste of Ottawa: where to eat each dish — or how to make it at home.
        </p>

        <div className="featured-grid">
          {featured.map((dish) => (
            <a key={dish.slug} href={`/dishes/${dish.slug}`} className="dish-card">
              <img
                src={dish.image}
                alt={dish.name}
                className="dish-image"
              />

              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p className="cuisine">{dish.cuisine}</p>
                {dish.description && (
                  <p className="description">{dish.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
