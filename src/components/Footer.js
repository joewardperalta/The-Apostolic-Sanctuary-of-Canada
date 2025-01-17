import Section from "./Section";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Nav, NavLink, NavItem } from "./Navbar";

export default function Footer() {
  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/apostolicsanctuarycanada",
      img: {
        src: "/icons/facebook.svg",
        alt: "Facebook",
      },
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@theapostolicsanctuaryofcan4004",
      img: {
        src: "/icons/youtube.svg",
        alt: "Youtube",
      },
    },
    {
      name: "Gmail",
      href: "mailto:myapostolicsanctuary@gmail.com",
      img: {
        src: "/icons/google-plus.svg",
        alt: "Gmail",
      },
    },
  ];

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

  return (
    <Section className="footer bg-[#333]">
      <Container>
        <div className="py-20">
          <ul className="flex gap-5 justify-center mb-6">
            {socials.map((social, index) => (
              <li key={index}>
                <Link
                  className="bg-white p-1.5 inline-block rounded-full"
                  href={social.href}
                  target="_blank"
                >
                  <Image
                    src={social.img.src}
                    width={32}
                    height={32}
                    alt={social.img.alt}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mb-0 text-center text-xs">
            &copy;Copyright. All rights reserved to The Apostolic Sanctuary of
            Canada.
          </p>
        </div>
      </Container>
    </Section>
  );
}
