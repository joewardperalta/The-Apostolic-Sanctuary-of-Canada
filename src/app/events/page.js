import Container from "@/components/Container";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoEventsPlaceholder from "@/components/NoEventsPlaceholder";

export default function Events() {
  return (
    <>
      <Header />
      <main>
        <Section className="space-y-10">
          <Container className="text-center mb-12 flex items-center flex-col">
            <Title className="text-[#333]">Upcoming Events</Title>
            <Subtitle className="text-[#333] max-w-[35rem]">
              Please check our upcoming events and save a date to your
              calendars.
            </Subtitle>
          </Container>
        </Section>

        <NoEventsPlaceholder className="pt-0" />
      </main>

      <Footer />
    </>
  );
}
