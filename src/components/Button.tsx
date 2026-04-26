import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all rounded-sm";
  const styles = {
    primary:
      "bg-accent text-background-primary hover:bg-amber-400 active:bg-amber-600",
    secondary:
      "border border-border text-text-primary hover:border-text-secondary bg-transparent",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
