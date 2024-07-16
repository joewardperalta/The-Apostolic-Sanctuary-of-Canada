import Link from "next/link";

export function Navbar({ children, className = "" }) {
  return (
    <nav
      className={
        "navbar py-5 lg:py-2 bg-white fixed w-full h-full lg:h-fit lg:relative" +
        " " +
        className
      }
    >
      {children}
    </nav>
  );
}

export function NavbarBrand({ children, href, className = "" }) {
  return (
    <div className={"navbar-brand mb-10 lg:mb-0" + " " + className}>
      {children}
    </div>
  );
}

export function Nav({ children, className = "" }) {
  return (
    <ul
      className={
        "nav font-semibold h-full space-y-1 lg:space-y-0 lg:flex lg:gap-4 lg:font-medium" +
        " " +
        className
      }
    >
      {children}
    </ul>
  );
}

export function NavItem({ children, className = "" }) {
  return (
    <li className={"nav-item rounded-md text-gray-600" + " " + className}>
      {children}
    </li>
  );
}

export function NavLink({ children, href, className = "" }) {
  return (
    <Link
      className={
        "nav-link p-2 flex items-center gap-4 lg:block lg:gap-0 lg:px-4" +
        " " +
        className
      }
      href={href}
    >
      {children}
    </Link>
  );
}
