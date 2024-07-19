import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Typography";
import Container from "@/components/Container";
import Image from "next/image";

export default function Location() {
  return (
    <>
      <Section className="space-y-10">
        <Container className="text-center">
          <Title className="text-[#333]">Church Location</Title>
          <Subtitle className="text-[#333]">
            We are located on 1177 Finch Ave West Unit 3. Look for The Apostolic
            Sanctuary of Canada.
          </Subtitle>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="flex justify-center">
          <div className="text-center flex items-center flex-col rounded-md overflow-hidden w-full min-h-[40rem] lg:min-w-[60rem]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23051.086424011763!2d-79.50181646523436!3d43.7648497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f3051c56469%3A0xce4780a9dd79ca75!2sThe%20Apostolic%20Sanctuary%20of%20Canada%20Inc.!5e0!3m2!1sen!2sca!4v1721409696646!5m2!1sen!2sca"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
