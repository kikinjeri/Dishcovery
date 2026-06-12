"use client";

export default function HomePage() {
  return (
    <main className="oe-home">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <span>Ottawa</span>
            <span>Eats</span>
          </div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#featured">Featured Dishes</a>
            <a href="/restaurants">Restaurants</a>
          </div>
        </div>
      </nav>

      {/* SEARCH BAR */}
      <section className="oe-search-section">
        <div className="oe-search-container">
          <input
            type="text"
            placeholder="Search for a dish, cuisine, or craving…"
            className="oe-search"
          />
        </div>
      </section>

      {/* HERO */}
      <section className="oe-simple-hero">
        <h1 className="oe-logo">Ottawa‑Eats</h1>

        <h2 className="oe-simple-title">
          Discover Ottawa’s favourite dishes.
        </h2>

        <p className="oe-simple-sub">
          From shawarma on Bank Street to ramen in Centretown, Ottawa‑Eats
          connects you to dishes, recipes, and local spots.
        </p>

        <div className="oe-simple-cta">
          <button className="oe-btn oe-btn-primary">Cook it</button>
          <button className="oe-btn oe-btn-secondary">Order it</button>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section id="featured" className="oe-featured">
        <div className="oe-featured-inner">

          <h3 className="oe-section-title">Featured Dishes</h3>

          <div className="oe-featured-grid">

            <div className="oe-dish-card">
              <img src="/images/dishes/shawarma.jpg" alt="Shawarma" />
              <h4>Chicken Shawarma</h4>
              <p className="oe-card-meta">Middle Eastern</p>
              <div className="oe-card-actions">
                <button className="oe-pill-btn">Cook it</button>
                <button className="oe-pill-btn">Order it</button>
              </div>
            </div>

            <div className="oe-dish-card">
              <img src="/images/dishes/ramen.jpg" alt="Ramen" />
              <h4>Tonkotsu Ramen</h4>
              <p className="oe-card-meta">Japanese</p>
              <div className="oe-card-actions">
                <button className="oe-pill-btn">Cook it</button>
                <button className="oe-pill-btn">Order it</button>
              </div>
            </div>

            <div className="oe-dish-card">
              <img src="/images/dishes/poutine.jpg" alt="Poutine" />
              <h4>Classic Poutine</h4>
              <p className="oe-card-meta">Canadian</p>
              <div className="oe-card-actions">
                <button className="oe-pill-btn">Cook it</button>
                <button className="oe-pill-btn">Order it</button>
              </div>
            </div>

            <div className="oe-dish-card">
              <img src="/images/dishes/butter-chicken.jpg" alt="Butter Chicken" />
              <h4>Butter Chicken</h4>
              <p className="oe-card-meta">Indian</p>
              <div className="oe-card-actions">
                <button className="oe-pill-btn">Cook it</button>
                <button className="oe-pill-btn">Order it</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
