import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

const P = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => (
  <p className={className ?? "mb-5"}>{children}</p>
);

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-ibm-plex-sans)] min-h-screen text-zinc-800">
      <header className="flex-1 flex justify-center">
        <div className="flex-1 flex items-center max-w-2xl px-5 h-32">
          <Link href={"/"} className="active:scale-95">
            nomadia.club
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section>
          <div className="max-w-2xl px-5 pb-16">
            <P>Hi, I'm Elias!</P>
            <Image
              className="mb-5 object-cover overflow-hidden w-64 h-64"
              src="/images/elias.jpg"
              width={256}
              height={256}
              alt="Elias Ylönen in Chicago"
            />
            <P>
              I host workation <b>trips for</b> the most{" "}
              <b>kind and driven people</b>.
            </P>
            <P>
              The next trip will be an extended weekend in Croatia in the end of
              August. I'll lock in the dates asap and welcome the first people
              to join!
            </P>
            <P className="mb-0">There is</P>
            <ul className="pl-1 pb-5">
              <li>
                - A super beautiful location e.g. a seaside villa for everyone
              </li>
              <li>
                - Access to a great coworking space with a fast internet and
                quiet places to call from
              </li>
              <li>
                - Completely optional things to do together, for example
                meditation or yoga
              </li>
              <li>- No schedule and full freedom to relax and work</li>
            </ul>
            <P>
              If you'd like to join, text me! Good ideas and questions also
              always welcome.
            </P>
            <WhatsAppButton />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
