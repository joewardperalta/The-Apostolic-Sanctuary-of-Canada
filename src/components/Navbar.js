import Link from "next/link";

export function Navbar({ children, className = "" }) {
  return <nav className={"navbar py-5" + " " + className}>{children}</nav>;
}

export function NavbarBrand({ children, href, className = "" }) {
  return <div className={"navbar-brand" + " " + className}>{children}</div>;
}

export function Nav({ children, className = "" }) {
  return (
    <ul className={"nav font-semibold h-full" + " " + className}>{children}</ul>
  );
}

export function NavItem({ children, className = "" }) {
  return (
    <li className={"nav-item rounded-md" + " " + className}>{children}</li>
  );
}

export function NavLink({ children, href, className = "" }) {
  return (
    <Link className={"nav-link p-2" + " " + className} href={href}>
      {children}
    </Link>
  );
}
