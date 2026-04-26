import Link from "next/link";
import Image from "next/image";

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
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ai365"
            width={64}
            height={26}
            className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
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
