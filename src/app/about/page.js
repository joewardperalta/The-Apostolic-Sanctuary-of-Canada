import Section from "@/components/Section";
import Container from "@/components/Container";
import { Title, Subtitle, Heading } from "@/components/Typography";
import Image from "next/image";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Section
        className="relative bg-gradient-to-t from-black/80 to-black/10"
        id="#hero-section"
      >
        <Container>
          <div className="absolute left-0 top-0 h-full -z-10 ">
            <Image
              className="h-full object-cover"
              src="/images/441345341_751628763811365_140825220746230540_n.jpg"
              width={2000}
              height={2000}
              alt="ladies"
            ></Image>
          </div>

          <div className="max-w-[35rem] pt-52 pb-16">
            <Title className="text-white">Learn more about us</Title>

            <Subtitle className="text-white mb-12">
              The Apostolic Sanctuary of Canada is a oneness pentecostal church
              that focuses on teaching about the salvation of our soul written
              in Acts 2:38.
            </Subtitle>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16">
          <div className="flex justify-between gap-10 items-center">
            <div className="lg:w-full lg:max-w-[40rem]">
              <Heading className="text-[#333]">Our Mission</Heading>
              <p className="text-[#333]">
                To Carry out the Commission of our Lord Jesus Christ; to preach,
                teach and make disciples; to serve and help our communities
                through various ministries and programs; to be the modern day
                disciples and apostles of our Lord Jesus Christ to carry the
                Gospel to all nations and people.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] -ml-14 mt-12 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-10 items-center">
            <div className="lg:w-full lg:max-w-[40rem]">
              <Heading className="text-[#333]">Our Commitment</Heading>
              <p className="text-[#333]">
                Our Commitment is to preserve the holiness of the Church, to
                preserve the principles and truths of the Bible; to adopt those
                principles and truths into our daily lives.
              </p>
              <p className="text-[#333]">
                We commit to be a hospitable body of Jesus Christ. We do not
                tolerate racism, sexism, any form of bullying, hatred, abuse of
                authority, pride and the sins that beset the Church, of which
                God hates. We endeavour to maintain the unity, forgiving one
                another and to love and serve one another in the goal of being
                faithful, unified body of Christ. We commit to these virtues to
                be able to reach and minister in our communities. We accept all
                people regardless of background, ethnicity, or sexual
                orientation for the sake of the Gospel to reach them and
                minister with the love of God.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] mt-10 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] -ml-14 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-10 items-center">
            <div className="lg:w-full lg:max-w-[40rem]">
              <Heading className="text-[#333]">
                Our Rights and Privileges
              </Heading>
              <p className="text-[#333]">
                We hold the right and privilege to be Apostolic in worship, in
                lifestyle and in all conduct. We have the right to worship God
                and express our beliefs in our House of Worship, the Apostolic
                Sanctuary of Canada Inc. These rights are written and in
                according to the Canada Charter of Rights and Freedoms - Section
                2(a), as well as the Bylaws set forth by our Church. We at all
                costs, hold to these rights and privileges.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
              <div className="hidden w-[18rem] rounded-md overflow-hidden h-[22rem] -ml-14 mt-10 lg:block">
                <Image
                  className="h-full object-cover"
                  src="/images/IMG_0157.png"
                  width={2000}
                  height={2000}
                  alt="Pastor preaching"
                ></Image>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-10 flex-col lg:items-center lg:flex-row">
            <div className="lg:w-full lg:max-w-[40rem]">
              <Heading className="text-[#333]">Our Articles of Faith</Heading>
              <p className="text-[#333]">
                Tap or click the Link below to read our Articles of Faith.
              </p>
            </div>
            <div className="w-full lg:w-fit">
              <Link
                href="/files/TASC Articles of Faith 2023.pdf"
                target="_blank"
              >
                <ButtonPrimary>Read our Articles of Faith</ButtonPrimary>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
