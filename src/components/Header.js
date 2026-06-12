import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-left">

        {/* Hybrid Ottawa‑Eats Logo */}
        <Link href="/" className="nav-logo">
          <span>Ottawa</span>
          <span>Eats</span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#featured">Featured Dishes</Link></li>
            <li><Link href="/restaurants">Restaurants</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
