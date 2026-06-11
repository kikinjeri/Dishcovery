"use client";

import { dishes } from "@/data/dishes";
import { notFound } from "next/navigation";

export default function DishPage({ params }) {
  const dish = dishes.find((d) => d.slug === params.slug);

  if (!dish) return notFound();

  return (
    <div className="dish-page container">
      <h1 className="dish-title">{dish.name}</h1>
      <p className="dish-cuisine">{dish.cuisine}</p>

      <section className="dish-section">
        <h2>About this dish</h2>
        <p>
          This dish is popular in Ottawa thanks to the city’s diverse food
          culture. Soon this section will be AI‑generated.
        </p>
      </section>

      <section className="dish-section">
        <h2>Where to eat it in Ottawa</h2>
        <p>
          Coming soon: AI‑recommended restaurants in Ottawa that serve {dish.name}.
        </p>
      </section>

      <section className="dish-section">
        <h2>How to make it at home</h2>
        <p>
          Soon you’ll see a full recipe, ingredients, and where to buy them.
        </p>
      </section>
    </div>
  );
}
