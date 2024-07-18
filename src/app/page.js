import { Heading, Subtitle, Title } from "@/components/Typography";
import Container from "@/components/Container";
import { ButtonSecondary } from "@/components/Button";
import Link from "next/link";
import Section from "@/components/Section";
import { Card, CardDescription, CardImage, CardTitle } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  const departments = [
    {
      title: "Kids",
      desc: "Our church is dedicated to teaching our little ones the truth about Jesus Christ. They are taught the basic principles of the bible.",
      img: {
        src: "/images/IMG_0468.png",
        alt: "Kids Department",
      },
    },
    {
      title: "Youth",
      desc: "Join our youth department as they embark on their journey toward the truth, to learn more about Jesus Christ.",
      img: {
        src: "/images/IMG_0477.png",
        alt: "Youth Department",
      },
    },
    {
      title: "Ladies",
      desc: "Come and have fellowship with our ladies' department to help the family serve God.",
      img: {
        src: "/images/IMG_0473.png",
        alt: "Ladies Department",
      },
    },
    {
      title: "Mens",
      desc: "Be a part of our men's department as they lead, guide, and teach the youth and childrens to be faithful to God.",
      img: {
        src: "/images/IMG_0470.png",
        alt: "Mens Department",
      },
    },
  ];

  const pastors = [
    {
      title: "Edwin and Ruth Fernan",
      desc: "Bishop & First Lady",
      img: {
        src: "/images/bishop.jpg",
        alt: "Edwin and Ruth Fernan",
      },
    },
    {
      title: "John David Fernan",
      desc: "Senior Pastor",
      img: {
        src: "/images/pastor-david.jpg",
        alt: "John David Fernan",
      },
    },
    {
      title: "John Paul Tan",
      desc: "Pastor",
      img: {
        src: "/images/pastor-paul.jpg",
        alt: "John Paul Tan",
      },
    },
  ];

  return (
    <main>
      <Section
        className="bg-pastor-pointing bg-top bg-cover"
        id="#hero-section"
      >
        <Container>
          <div className="max-w-[35rem] pt-52 pb-16">
            <Title className="text-white">Oneness Apostolic</Title>

            <Subtitle className="text-white mb-12">
              Join the Apostolic Sanctuary of Canada: a church committed to
              bringing the whole gospel to the whole world.
            </Subtitle>

            <ButtonSecondary className="mr-5 mb-3 lg:mb-0">
              <Link href="/location">Join our church</Link>
            </ButtonSecondary>

            <ButtonSecondary>
              <Link href="/about">Learn who we are</Link>
            </ButtonSecondary>
          </div>
        </Container>
      </Section>

      <Section id="#about-section">
        <Container>
          <Heading className="text-[#333]">Learn about us</Heading>

          <div className="max-w-[50rem] mb-10">
            <p className="text-[#333]">
              We are a Filipino Pentecostal Church and our mission is to Carry
              out the Commission of our Lord Jesus Christ; to preach, teach and
              make disciples; to serve and help our communities through various
              ministries and programs; to be the modern day disciples and
              apostles of our Lord Jesus Christ to carry the Gospel to all
              nations and people.
            </p>
          </div>

          <div className="flex gap-3 flex-col md:flex-row">
            <div className="w-full h-80 bg-[#333] rounded-md overflow-hidden">
              <Image
                className="h-full object-cover"
                src="/images/IMG_0460.png"
                width={2000}
                height={2000}
                alt="Church Congregation"
              />
            </div>
            <div className="w-full h-80 bg-[#333] rounded-md overflow-hidden">
              <Image
                className="h-full object-cover"
                src="/images/IMG_0462.png"
                width={2000}
                height={2000}
                alt="Church Congregation"
              />
            </div>
            <div className="w-full h-80 bg-[#333] rounded-md overflow-hidden">
              <Image
                className="h-full object-cover"
                src="/images/419885993_681986480775594_9056033824979247708_n.jpg"
                width={2000}
                height={2000}
                alt="Church Congregation"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-[50rem] mx-auto mb-10">
            <Heading className="text-[#333]">
              Get connected with our community
            </Heading>
            <p className="text-[#333]">
              We believe that spiritual connections with God and with each other
              are important for our spiritual growth. We are a community
              dedicated to grow in spiritual truth refined on the teaching of
              Jesus Christ, our Lord, and Savior.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {departments.map((department, index) => (
              <Card key={index}>
                <CardImage src={department.img.src} alt={department.alt} />
                <CardTitle>{department.title}</CardTitle>
                <CardDescription>{department.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-36 relative bg-gradient-to-t from-black/80 to-black/20">
        <div className="absolute top-0 h-full -z-10 ">
          <Image
            className="object-cover h-full"
            src="/images/praise-and-worship-1.jpg"
            width={2000}
            height={2000}
            alt="sunday worship"
          />
        </div>
        <Container className="text-center">
          <div className="max-w-[50rem] mx-auto mb-10">
            <Heading>Join our upcoming church services</Heading>
            <p>
              We offer 2 different church service: Friday service and Sunday
              service. Friday service focuses on prayer and devotion. Sunday is
              our congregational service where we all gather together to worship
              and hear the word of God.
            </p>
          </div>

          <Link href="/services">
            <ButtonSecondary>Ministries and Services</ButtonSecondary>
          </Link>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <div className="max-w-[50rem] mx-auto mb-10">
            <Heading className="text-[#333]">
              Upcoming Events and Services
            </Heading>
            <p className="text-[#333]">
              Please check the announcements, reminders, and upcoming services
              and events.
            </p>
          </div>

          <div>
            <div className="h-[40rem] bg-[#333] rounded-md"></div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <div className="max-w-[50rem] mx-auto mb-10">
            <Heading className="text-[#333]">Pastors of our church</Heading>
            <p className="text-[#333]">
              Please check the announcements, reminders, and upcoming services
              and events.
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            {pastors.map((department, index) => (
              <Card key={index}>
                <CardImage src={department.img.src} alt={department.alt} />
                <CardTitle>{department.title}</CardTitle>
                <CardDescription>{department.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
