"use client";

import { dishes } from "@/data/dishes";

export default function FeaturedDishes() {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Dishes</h2>
        <p className="section-subtitle">
          Taste of Ottawa: where to eat each dish — or how to make it at home.
        </p>

        <div className="featured-grid">
          {dishes.map((dish) => (
            <a key={dish.slug} href={`/dishes/${dish.slug}`} className="dish-card">
              {dish.image && (
                <img src={dish.image} alt={dish.name} className="dish-image" />
              )}

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
