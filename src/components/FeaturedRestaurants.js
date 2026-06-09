import RestaurantCard from "./RestaurantCard";

const featuredRestaurants = [
  {
    name: "El Camino",
    cuisine: "Mexican",
    neighborhood: "ByWard Market",
    description: "Known for tacos al pastor and bold Mexican flavours.",
    website: "https://eatelcamino.com/",
    map: "https://maps.google.com/?q=El+Camino+Ottawa",
    image: "/images/elcamino.jpg",
  },
  {
    name: "Kinton Ramen",
    cuisine: "Japanese",
    neighborhood: "Centretown",
    description: "Rich broth, handmade noodles, and Ottawa’s favourite ramen bowls.",
    website: "https://kintonramen.com/location/ottawa",
    map: "https://maps.google.com/?q=Kinton+Ramen+Ottawa",
    image: "/images/kinton.jpg",
  },
  {
    name: "Curry Palace",
    cuisine: "Indian",
    neighborhood: "The Glebe",
    description: "Authentic Indian dishes with a modern twist, including butter chicken.",
    website: "https://thecurrypalace.ca",
    map: "https://maps.google.com/?q=Curry+Palace+Ottawa",
    image: "/images/curry.jpg",
  },
];

export default function FeaturedRestaurants() {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Restaurants</h2>

        <div className="featured-grid">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
