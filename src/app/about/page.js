import Section from "@/components/Section";
import Container from "@/components/Container";
import { Title, Subtitle, Heading } from "@/components/Typography";

export default function About() {
  return (
    <main>
      <Section className="bg-top bg-cover bg-[#333]" id="#hero-section">
        <Container>
          <div className="max-w-[35rem] pt-52 pb-16">
            <Title className="text-white">Learn more about us</Title>

            <Subtitle className="text-white mb-12">
              <p>
                The Apostolic Sanctuary of Canada is a oneness pentecostal
                church that focuses on teaching about the salvation of our soul
                written in Acts 2:38.
              </p>
            </Subtitle>
          </div>
        </Container>
      </Section>

      <Section>
        <Container></Container>
      </Section>
    </main>
  );
}
