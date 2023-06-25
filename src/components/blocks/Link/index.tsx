import Link from "next/link";

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default ({ children, href, className }: LinkProps) => (
  <Link
    href={href}
    className={`font-semibold text-blue-500 hover:underline ${className}`}
  >
    {children}
  </Link>
);
