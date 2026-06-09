import Searchbar from "./Searchbar";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container flex-col hero-content">
        <h1 className="hero-title">
          Discover the Best Dishes in Ottawa
        </h1>

        <p className="hero-subtitle">
          Search by dish, cuisine, or restaurant — we’ll show you where to find it.
        </p>

        <Searchbar />
      </div>
    </section>
  );
}
