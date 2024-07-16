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
      src: "/home.svg",
    },
    {
      text: "About",
      href: "/about",
      src: "/user-group.svg",
    },
    {
      text: "Services",
      href: "/services",
      src: "/open-book.svg",
    },
    {
      text: "Events",
      href: "/events",
      src: "/calendar-days.svg",
    },
    {
      text: "Location",
      href: "/location",
      src: "/map-pin.svg",
    },
  ];

  useEffect(() => {
    // Add active class on the first nav item
    const navItems = document.querySelectorAll(".nav-item");
    navItems[0].classList.add("active");
  });

  return (
    <header>
      <Navbar className="bg-white fixed w-full h-full lg:h-fit">
        <Container className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <NavbarBrand className="mb-10 lg:mb-0">
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
          <Nav className="h-full space-y-1 lg:space-y-0 lg:flex lg:gap-4 lg:font-medium">
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink
                  className="flex items-center gap-4 lg:block lg:gap-0 lg:px-4"
                  href={item.href}
                >
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
          <Button className="font-semibold p-2 flex items-center gap-4 w-full lg:w-fit">
            <Image
              src="/user-circle.svg"
              width={28}
              height={28}
              alt="user circle"
            ></Image>
            Login
          </Button>
        </Container>
      </Navbar>
    </header>
  );
}
