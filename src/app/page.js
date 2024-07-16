import { Subtitle, Title } from "@/components/Typography";
import Container from "@/components/Container";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="bg-pastor-pointing bg-top bg-cover min-h-[45rem]"
        id="#hero-section"
      >
        <Container>
          <div className="max-w-[40rem] pt-80">
            <Title className="text-white">Oneness Apostolic</Title>

            <Subtitle className="text-white mb-12">
              Join the Apostolic Sanctuary of Canada: a church committed to
              bringing the whole gospel to the whole world.
            </Subtitle>

            <ButtonSecondary className="text-white mr-5 mb-3 lg:mb-0">
              <Link href="/location">Join our church</Link>
            </ButtonSecondary>

            <ButtonSecondary className="text-white">
              <Link href="/about">Learn about us</Link>
            </ButtonSecondary>
          </div>
        </Container>
      </section>
    </main>
  );
}
