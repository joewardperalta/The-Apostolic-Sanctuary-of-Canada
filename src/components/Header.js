"use client";

import Container from "@/components/Container";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "./Button";

export default function Header() {
  const navItems = [
    {
      text: "Home",
      href: "/",
      src: "/icons/home.svg",
    },
    {
      text: "About",
      href: "/about",
      src: "/icons/user-group.svg",
    },
    {
      text: "Services",
      href: "/services",
      src: "/icons/open-book.svg",
    },
    {
      text: "Events",
      href: "/events",
      src: "/icons/calendar-days.svg",
    },
    {
      text: "Location",
      href: "/location",
      src: "/icons/map-pin.svg",
    },
  ];

  useEffect(() => {
    // Add active class on the first nav item
    const navItems = document.querySelectorAll(".nav-item");
    navItems[0].classList.add("active");
  });

  return (
    <Navbar>
      <Container className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <NavbarBrand>
          <Link href="/">
            <div className="bg-white w-fit p-2 rounded-lg">
              <Image
                src="/church-logo.png"
                width={130}
                height={130}
                alt="user circle"
              ></Image>
            </div>
          </Link>
        </NavbarBrand>
        <Nav>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink href={item.href}>
                <Image
                  className="lg:hidden"
                  src={item.src}
                  width={28}
                  height={28}
                  alt="Home"
                />
                <span>{item.text}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <Button className="flex items-center gap-4 w-full bg-transparent text-black lg:w-fit">
          <Image
            src="/icons/user-circle.svg"
            width={28}
            height={28}
            alt="user circle"
          ></Image>
          Login
        </Button>
      </Container>
    </Navbar>
  );
}
