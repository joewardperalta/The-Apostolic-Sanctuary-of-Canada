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
import { Button, ButtonPrimary, ButtonSecondary } from "./Button";

export default function Header() {
  const navItems = [
    {
      text: "Home",
      href: "/",
    },
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
      text: "Location",
      href: "/location",
    },
    {
      text: "Login",
      href: "/login",
    },
  ];

  useEffect(() => {
    // Add active class on the first nav item
    // const navItems = document.querySelectorAll(".nav-item");
    // navItems[0].classList.add("active");
  });

  return (
    <Navbar>
      <Container className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="navbar-brand-wrapper flex items-center justify-between">
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/church-logo.png"
                width={130}
                height={130}
                alt="church logo"
              ></Image>
            </Link>
          </NavbarBrand>
          <HamburgerButton></HamburgerButton>
        </div>

        <Nav>
          {navItems.map((item) => (
            <NavItem key={item.text}>
              <NavLink href={item.href}>{item.text}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
