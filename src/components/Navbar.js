"use client";
import Link from "next/link";

export function Navbar({ children, className = "" }) {
  return (
    <nav
      className={
        "navbar sticky left-0 top-0 py-3 w-full bg-white z-50 " + className
      }
    >
      {children}
    </nav>
  );
}

export function NavbarBrand({ children, href, className = "" }) {
  return <div className={"navbar-brand" + " " + className}>{children}</div>;
}

export function Nav({ children, className = "" }) {
  return (
    <ul
      className={
        "nav fixed w-full left-full flex flex-col items-center justify-center h-full text-2xl font-medium gap-3 transition-all duration-1000 bg-white z-40 lg:relative lg:left-0 lg:flex-row lg:w-fit lg:text-base " +
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

export function NavLink({ children, href, className = "", onClick, id }) {
  return (
    <Link
      className={
        "nav-link p-2 flex items-center gap-4 transition-all duration-1000 lg:block lg:gap-0 lg:px-4 " +
        className
      }
      href={href}
      id={id}
    >
      {children}
    </Link>
  );
}

export function HamburgerButton({ className }) {
  return (
    <button
      className={
        "hamburger-button flex flex-col gap-1 w-10 z-50 p-2 rounded-md transition-all duration-1000 lg:hidden " +
        className
      }
    >
      <div className="w-full h-1 bg-black rounded-full"></div>
      <div className="w-full h-1 bg-black rounded-full"></div>
      <div className="w-full h-1 bg-black rounded-full"></div>
    </button>
  );
}
