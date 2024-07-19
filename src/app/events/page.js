import Container from "@/components/Container";
import Section from "@/components/Section";
import { Title, Subtitle, Heading } from "@/components/Typography";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <Section className="space-y-10">
        <Container className="text-center mb-12 flex items-center flex-col">
          <Title className="text-[#333]">Upcoming Events</Title>
          <Subtitle className="text-[#333] max-w-[35rem]">
            Please check our upcoming events and save a date to your calendars.
          </Subtitle>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container className="flex justify-center">
          <div className="max-w-96 text-center flex items-center flex-col">
            <Image
              className="object-cover mb-3"
              src="/images/football.png"
              width={150}
              height={150}
              alt="football"
            />
            <h6 className="text-[#333] font-bold text-xl mb-1">
              No events has been posted yet
            </h6>
            <p className="text-[#333]">
              Be away that any upcoming events will be posted here.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
