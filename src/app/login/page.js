"use client";
import { ButtonPrimary } from "@/components/Button";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Heading } from "@/components/Typography";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
  }

  return (
    <Section className="h-screen">
      <Container className="max-w-[30rem] flex items-center justify-center">
        <div className="w-full">
          <div className="mb-8">
            <Heading className="text-[#333]">Login as admin</Heading>
          </div>

          <div>
            <form className="space-y-6" method="post" onSubmit={handleSubmit}>
              <input
                className="p-2 border-b-2 w-full focus-visible:outline-none"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              <br />
              <input
                className="p-2 border-b-2 w-full focus-visible:outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <br />
              <ButtonPrimary className="btn md:w-full" type="submit">
                Login
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
