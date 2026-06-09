// components/FeaturedDishes.js

export default function FeaturedDishes() {
  const dishes = [
    {
      name: "Poutine",
      cuisine: "Canadian",
      description: "Crispy fries topped with cheese curds and rich gravy.",
      image: "/images/dishes/poutine.jpg",
      slug: "poutine",
    },
    {
      name: "Beavertail",
      cuisine: "Canadian",
      description: "Iconic Canadian fried pastry with sweet toppings.",
      image: "/images/dishes/beavertail.jpg",
      slug: "beavertail",
    },
    {
      name: "Classic Cheeseburger",
      cuisine: "American",
      description: "A juicy grilled beef patty with melted cheese and toppings.",
      image: "/images/dishes/cheeseburger.jpg",
      slug: "classic-cheeseburger",
    },
    {
      name: "Butter Chicken",
      cuisine: "Indian",
      description: "Creamy tomato-based curry with tender chicken pieces.",
      image: "/images/dishes/butter-chicken.jpg",
      slug: "butter-chicken",
    },
    {
      name: "Ramen",
      cuisine: "Japanese",
      description: "Rich broth with noodles, toppings, and deep umami flavour.",
      image: "/images/dishes/ramen.jpg",
      slug: "ramen",
    },
    {
      name: "Tacos al Pastor",
      cuisine: "Mexican",
      description: "Marinated pork tacos with pineapple and fresh cilantro.",
      image: "/images/dishes/tacos-al-pastor.jpg",
      slug: "tacos-al-pastor",
    },
    {
      name: "Shawarma",
      cuisine: "Middle Eastern",
      description: "Slow‑roasted meat wrapped in warm pita with toppings.",
      image: "/images/dishes/shawarma.jpg",
      slug: "shawarma",
    },
    {
      name: "Jerk Chicken",
      cuisine: "Caribbean",
      description: "Spicy, smoky grilled chicken with Jamaican seasoning.",
      image: "/images/dishes/jerk-chicken.jpg",
      slug: "jerk-chicken",
    },
  ];

  return (
    <section className="featured-dishes">
      <h2>Featured Dishes</h2>
      <p>Discover popular dishes across Ottawa — and where to find or cook them.</p>

      <div className="dishes-grid">
        {dishes.map((dish) => (
          <a key={dish.slug} href={`/dishes/${dish.slug}`} className="dish-card">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p className="cuisine">{dish.cuisine}</p>
              <p className="description">{dish.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
