import Section from "@/components/Section";
import Container from "@/components/Container";
import { Title, Subtitle, Heading } from "@/components/Typography";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <Section className="space-y-10">
          <Container className="text-center mb-12">
            <Title className="text-[#333]">Ministries and Services</Title>
            <Subtitle className="text-[#333]">
              Join us on our weekly services and be a part of our ministry.
            </Subtitle>
          </Container>

          <Container className="flex gap-10 items-center">
            <div className="w-full">
              <Heading className="text-[#333]">Sunday Service</Heading>
              <p className="text-[#333]">
                See you every Sunday starting at 10:30am for prayer and
                devotion, 11am for praise and worship, 12:30pm for the preaching
                and will end at 2pm. You are more than welcome to stay after the
                service for fellowship.
              </p>
            </div>

            <div className="flex gap-10">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/419885993_681986480775594_9056033824979247708_n.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white -ml-14 mt-12 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/420135669_684944447146464_4976343403298649820_n.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </Container>

          <Container className="flex gap-10 items-center lg:flex-row-reverse">
            <div className="w-full">
              <Heading className="text-[#333]">Friday Service</Heading>
              <p className="text-[#333]">
                See you every Friday starting at 8:00pm for praise and worship,
                8:40pm for victory report, 9:00pm for the exhortation, and
                prayer and devotion at 9:30pm until 10:00pm. We hope to see you
                soon!
              </p>
            </div>

            <div className="flex gap-10">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/341359580_750348520046794_2293879956820106252_n.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white -ml-14 mt-12 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/341694663_1537194117054783_5419895242153169832_n.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </Container>

          <Container className="flex gap-10 items-center">
            <div className="w-full">
              <Heading className="text-[#333]">Christian Education</Heading>
              <p className="text-[#333]">
                Christian Education Program is seasonal and usually starts every
                Sunday at 10:00am and ends at 11:00am. This March 2024 the
                Christian Education Program will begin and so the time for
                prayer and devotion will be adjusted at 9:30am.
              </p>
            </div>

            <div className="flex gap-10">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/aaron-burden--uj3Y7r1BeM-unsplash.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] p-2 shadow-lg shadow-black/30 bg-white -ml-14 mt-12 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/aaron-burden-TNlHf4m4gpI-unsplash.jpg"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
