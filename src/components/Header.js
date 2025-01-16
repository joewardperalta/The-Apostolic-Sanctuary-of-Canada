"use client";

import Container from "@/components/Container";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  HamburgerButton,
} from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const navItems = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Events",
      href: "/events",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    // Add active class on the first nav item
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks.forEach((link) => {
      path == link.id ? link.classList.add("active") : "";
    });
  });

  return (
    <Navbar>
      <Container className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="navbar-brand-wrapper flex items-center justify-between">
          <NavbarBrand>
            <Link href="/">
              <Image
                className="md:w-48"
                src="/images/church-logo.png"
                width={160}
                height={160}
                alt="church logo"
              ></Image>
            </Link>
          </NavbarBrand>
          <HamburgerButton />
        </div>

        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.text}>
              <NavLink href={item.href} id={item.href}>
                {item.text}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
