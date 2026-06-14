import Image from "next/image";
import Searchbar from "@/components/Searchbar";
import "@/components/styles/components.css";


export const metadata = {
  title: "Ottawa‑Eats | Discover Ottawa’s Favourite Dishes",
  description:
    "Discover Ottawa’s favourite dishes, recipes, and local restaurants. Search by craving and see where to get it or how to make it.",
};

const popularDishes = [
  {
    name: "Poutine",
    image: "/images/dishes/poutine.jpg",
    description: "Ottawa’s late‑night classic.",
  },
  {
    name: "Shawarma",
    image: "/images/dishes/shawarma.jpg",
    description: "Bank Street’s favourite wrap.",
  },
  {
    name: "Ramen",
    image: "/images/dishes/ramen.jpg",
    description: "Slow‑simmered broth and noodles.",
  },
  {
    name: "Tacos al Pastor",
    image: "/images/dishes/tacos-al-pastor.jpg",
    description: "Marinated pork, pineapple, cilantro.",
  },
];

const featuredRestaurants = [
  {
    name: "Shawarma Palace",
    url: "https://shawarmapalace.ca",
  },
  {
    name: "El Camino",
    url: "https://eatelcamino.com",
  },
  {
    name: "Sansotei Ramen",
    url: "https://sansotei.com",
  },
  {
    name: "La Noodle",
    url: "https://lanoodle.ca",
  },
  {
    name: "The Smoque Shack",
    url: "https://thesmoqueshack.com",
  },
];

function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ottawa‑Eats",
    url: "https://ottawa-eats.example.com",
    description:
      "Discover Ottawa’s favourite dishes, recipes, and local restaurants. Search by craving and see where to get it or how to make it.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ottawa-eats.example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export default function HomePage() {
  return (
    <>
      {/* SEO: JSON‑LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
      />

      <main className="oe-home" role="main">
        {/* 1. HERO */}
        <section
          id="hero"
          className="hero"
          aria-labelledby="hero-heading"
          aria-describedby="hero-subtitle"
        >
          <div className="container hero-content">
            <div className="hero-copy">
              <h1 id="hero-heading" className="hero-title">
                Discover Ottawa’s favourite dishes.
              </h1>

              <p id="hero-subtitle" className="hero-subtitle">
                See where to get it or how to make your favorite local eats.
              </p>

              <Searchbar />

              <p className="hero-microcopy">
                Try “ramen”, “shawarma”, “Little Italy”, “vegan”, “poutine”…
              </p>
            </div>
          </div>
        </section>

        {/* 2. POPULAR DISHES */}
        <section
          id="featured-dishes"
          className="featured-section"
          aria-labelledby="featured-dishes-heading"
        >
          <div className="container">
            <h2 id="featured-dishes-heading" className="section-title">
              Popular in Ottawa right now
            </h2>

            <p className="section-subtitle">
              Explore iconic dishes and choose where to get them or how to make
              them.
            </p>

            <div
              className="featured-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {popularDishes.map((dish) => (
                <article
                  key={dish.name}
                  className="dish-card"
                  aria-label={dish.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={400}
                    height={240}
                    className="dish-image"
                  />

                  <div
                    className="dish-info"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <h3>{dish.name}</h3>
                    <p className="description">{dish.description}</p>

                    <div
                      className="dish-actions"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        marginTop: "auto",
                      }}
                      aria-label={`Actions for ${dish.name}`}
                    >
                      <a
                        href={`/where-to-get-it?dish=${encodeURIComponent(
                          dish.name
                        )}`}
                        className="button button-primary"
                        style={{
                          textAlign: "center",
                          fontSize: "0.9rem",
                          padding: "0.5rem 0.75rem",
                        }}
                      >
                        Where to get it
                      </a>
                      <a
                        href={`/recipes?dish=${encodeURIComponent(dish.name)}`}
                        className="button button-secondary"
                        style={{
                          textAlign: "center",
                          fontSize: "0.9rem",
                          padding: "0.5rem 0.75rem",
                        }}
                      >
                        How to make it
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEATURED RESTAURANTS */}
        <section
          id="featured-restaurants"
          className="featured-section"
          aria-labelledby="featured-restaurants-heading"
        >
          <div className="container">
            <h2 id="featured-restaurants-heading" className="section-title">
              Explore how local Ottawa restaurants craft dishes like these,
              including:
            </h2>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem 1.5rem",
              }}
            >
              {featuredRestaurants.map((r) => (
                <li key={r.name}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cuisine-link"
                    style={{ fontWeight: "600" }}
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. IDENTITY STRIP */}
        <section className="identity-strip">
          <div className="container">
            <p>Made in Ottawa 🇨🇦 for food lovers everywhere.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Ottawa‑Eats · © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
