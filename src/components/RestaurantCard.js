export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card no-image">
      <div className="restaurant-card-body">
        <h3 className="restaurant-card-title">{restaurant.name}</h3>

        <p className="restaurant-card-meta">
          {restaurant.cuisine} • {restaurant.neighborhood}
        </p>

        <p className="restaurant-card-desc">
          {restaurant.description}
        </p>

        <div className="restaurant-card-actions">
          <a
            href={restaurant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Visit Website
          </a>

          <a
            href={restaurant.map}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}
