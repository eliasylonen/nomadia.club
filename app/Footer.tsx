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
  <footer className="flex items-center justify-center text-zinc-700 text-xs">
    <div className="flex-1 p-5 max-w-2xl">
      Built by&nbsp;
      <FooterLink href="https://www.linkedin.com/in/katarina-kerner-6548ba1b4">
        Katarina
      </FooterLink>{" "}
      and{" "}
      <FooterLink href="https://www.linkedin.com/in/eliasylonen">
        Elias
      </FooterLink>
      . All rights reserved.
    </div>
  </footer>
);
