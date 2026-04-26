import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Industries", href: "/industries" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-primary">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-text-primary text-base font-semibold tracking-tight hover:text-accent transition-colors"
        >
          ai365
        </Link>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-text-tertiary whitespace-nowrap">
          &copy; 2025 ai365.business
        </p>
      </div>
    </footer>
  );
}
