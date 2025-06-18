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
          <div className="max-w-2xl px-5">
            <P>Hi, we are Katarina and Elias!</P>
            <Image
              className="mb-5 object-cover overflow-hidden w-64 h-64"
              src="/images/katarina-elias.jpeg"
              width={1024}
              height={1024}
              alt="Katarina and Elias"
            />
            <P>
              We organize <b>weekend getaways for</b> the most{" "}
              <b>kind and driven people</b>.
            </P>
            <P>
              The next trip will be an extended weekend in Pula, Croatia from{" "}
              <b>28th to 31st of August.</b>
            </P>
            <P className="mb-0">There is</P>
            <ul className="pl-1">
              <li>
                - A super beautiful residence in the heart of the city for
                everyone
              </li>
              <li>
                - A great coworking space nearby with a fast internet and quiet
                places to call from
              </li>
              <li>
                - Completely optional things to do together:
                <ul className="pl-3">
                  <li>- meditation</li>
                  <li>- yoga</li>
                  <li>- winery tour</li>
                  <li>- coworking</li>
                  <li>- beach</li>
                  <li>- truffle hunt</li>
                </ul>
              </li>
              <li>- No schedule and full freedom to relax and work</li>
            </ul>
          </div>
          <div className="max-w-2xl overflow-x-auto flex snap-x snap-mandatory scrollbar-hidden py-5 scrollbar-hide">
            {[
              "/images/pula-1.avif",
              "/images/pula-2.avif",
              "/images/pula-3.avif",
              "/images/pula-4.avif",
              "/images/pula-5.webp",
            ].map((src, index) => (
              <div key={index} className="snap-start pl-5 shrink-0 last:pr-5">
                <Image
                  src={src}
                  alt={`nomadia.club stay in Pula ${index + 1}`}
                  width={240}
                  height={240}
                  className="h-64 w-64 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="max-w-2xl px-5 pb-16">
            <P>
              If you'd like to join, text us! Good ideas and questions also
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
