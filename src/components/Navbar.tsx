import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const { data: session, status } = useSession();

  return (
    <main className="flex flex-col items-center justify-center">
      <header className="flex w-full flex-col items-center justify-center px-2">
        <nav className="flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-400 lg:w-[700px] px-2">
          <h4 className="font-black">Chronia</h4>
          {status === "authenticated" ? (
            <button className="rounded-lg border-[1px] border-neutral-400 px-3 py-1 ">
              <p className="text-xs">{session?.user.email}</p>
            </button>
          ) : status === "loading" ? (
            ""
          ) : (
            <p>Sign in</p>
          )}
        </nav>
      </header>
      <section>{children}</section>
    </main>
  );
}

export default Navbar;
