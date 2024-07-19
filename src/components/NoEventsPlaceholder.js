import Section from "./Section";
import Container from "./Container";
import Image from "next/image";

export default function NoEventsPlaceholder({ className }) {
  return (
    <Section className={className}>
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
            Be aware that any upcoming events will be posted here.
          </p>
        </div>
      </Container>
    </Section>
  );
}
