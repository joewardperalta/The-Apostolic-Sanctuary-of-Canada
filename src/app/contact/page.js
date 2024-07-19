import Header from "@/components/Header";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { Title, Subtitle } from "@/components/Typography";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header />

      <main>
        <Section className="space-y-10">
          <Container className="text-center mb-12 flex items-center flex-col">
            <Title className="text-[#333]">Contact us</Title>
            <Subtitle className="text-[#333] max-w-[35rem]">
              We&apos;re here to help with any questions that you may have. Feel
              free to contact us and we&apos;ll get back at you.
            </Subtitle>
          </Container>
        </Section>

        <Container className="flex flex-col lg:flex-row lg:gap-16">
          <Section className="pt-0 w-full">
            <div className="w-full">
              <form className="space-y-7 text-[#333]">
                <div className="flex gap-10">
                  <div className="w-full flex flex-col gap-3">
                    <label className="font-bold" for="firstname">
                      First name
                    </label>
                    <input
                      className="border-2 p-3 w-full rounded-md"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-3">
                    <label className="font-bold" for="lastname">
                      Last name
                    </label>
                    <input
                      className="w-full border-2 p-3 rounded-md"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="font-bold" for="email">
                    Email
                  </label>
                  <input
                    className="w-full border-2 p-3 rounded-md"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="font-bold" for="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className="w-full border-2 p-3 rounded-md"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label className="font-bold" for="message">
                    Message
                  </label>
                  <textarea
                    className="w-full border-2 p-3 rounded-md"
                    id="message"
                    name="message"
                    rows={10}
                    placeholder="Leave us a message..."
                  />
                </div>

                <ButtonPrimary className="md:w-full" type="submit">
                  Send Message
                </ButtonPrimary>
              </form>
            </div>
          </Section>

          <Section className="pt-0 w-full flex flex-col gap-16">
            <div>
              <h3 className="font-semibold text-2xl text-[#333] mb-2">
                Call us
              </h3>
              <p className="mb-5 text-[#333]">
                Call us Mon-Fri from 10am to 5pm.
              </p>
              <div className="flex gap-3">
                <Image
                  src="/icons/phone.svg"
                  width={24}
                  height={24}
                  alt="phone"
                ></Image>
                <Link
                  className="text-[#333] border-b-2 border-[#333] font-semibold flex"
                  href="tel:416-421-0994"
                >
                  (416) 421-0994
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-[#333] mb-2">
                Visit us
              </h3>
              <p className="mb-5 text-[#333]">
                Chat to us in person at our local church in Toronto, Canada
              </p>
              <div className="flex gap-3">
                <Image
                  src="/icons/map-pin.svg"
                  width={24}
                  height={24}
                  alt="phone"
                ></Image>
                <Link
                  className="text-[#333] border-b-2 border-[#333] font-semibold flex"
                  href="https://www.google.com/maps/dir//1177+Finch+Ave+W+%233,+Toronto,+ON+M3J+2E9/@43.7648201,-79.5636178,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b2f3051c56469:0xce4780a9dd79ca75!2m2!1d-79.4812171!2d43.7648497?entry=ttu"
                  target="_blank"
                >
                  1177 Finch Ave W #3, Toronto, ON M3J 2E9
                </Link>
              </div>
            </div>
          </Section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
