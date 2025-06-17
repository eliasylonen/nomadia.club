import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

const P = ({ children }: PropsWithChildren) => (
  <p className="mb-5">{children}</p>
);

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-ibm-plex-sans)] min-h-screen">
      <header className="flex-1 flex justify-center">
        <div className="flex-1 flex items-center max-w-2xl px-5 h-32">
          nomadia.club
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section>
          <div className="max-w-2xl px-5">
            <P>Hi, I'm Elias!</P>
            <P>I host workation trips for the most kind and driven people.</P>
            <P>
              The next trip will be an extended weekend in Croatia in the end of
              August. I'll lock in the dates asap and welcome the first people
              to join!
            </P>
            <P>There is</P>
            <ul className="pl-1">
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
              If you might be interested, text me! Good ideas and questions also
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
