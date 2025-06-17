import Link from "next/link";
import { PropsWithChildren } from "react";

const FooterLink = ({
  href,
  children,
}: PropsWithChildren & { href: string }) => (
  <Link className="hover:underline text-blue-500" href={href}>
    {children}
  </Link>
);

export const Footer = () => (
  <footer className="flex items-center justify-center h-6 text-zinc-700 text-xs">
    <div className="flex-1 px-4 max-w-2xl">
      Built by&nbsp;
      <FooterLink href="https://www.linkedin.com/in/eliasylonen">
        Elias Ylönen
      </FooterLink>
      . All rights reserved.
    </div>
  </footer>
);
