import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">

        <Link href="/" className="header-logo">
          Dishcovery
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/featured-restaurants">Featured Restaurants</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
