"use client";

import { useEffect, useState } from "react";

export default function FeaturedDishes() {
  const allDishes = [
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

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const shuffled = [...allDishes]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    setFeatured(shuffled);
  }, []);

  return (
    <section className="featured-section luxe-section">
      <div className="container">

        <h2 className="section-title luxe-title">Discover Ottawa's favourite dishes.</h2>

        <p className="section-subtitle luxe-subtitle">
          <br />
          <span className="luxe-highlight">
            Order it tonight or cook it yourself — Ottawa‑Eats helps you do both.
          </span>
        </p>

        <div className="featured-grid luxe-grid">
          {featured.map((dish) => (
            <a
              key={dish.slug}
              href={`/dishes/${dish.slug}`}
              className="dish-card luxe-card"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="dish-image luxe-image"
              />

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
