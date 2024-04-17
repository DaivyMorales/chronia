import React, { ReactNode, useEffect, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import TooltipProfile from "./TooltipProfile";
import Image from "next/image";
import { useOpen } from "@/store/OpenStore";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const { data: session, status } = useSession();
  const tooltipProfileRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const { openTooltipProfile, setOpenTooltipProfile } = useOpen();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipProfileRef.current &&
        !tooltipProfileRef.current.contains(event.target as Node)
      ) {
        setOpenTooltipProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openTooltipProfile, setOpenTooltipProfile]);

  return (
    <main className="flex flex-col items-center justify-center" ref={mainRef}>
      <header className="sticky top-0  z-50  flex w-full flex-col items-center justify-center px-2">
        <nav className="flex h-[60px] w-full items-center  justify-between border-b-[1px] border-neutral-400 px-2 backdrop-blur backdrop-saturate-200 lg:w-[700px]">
          <h4 className="font-black">Chronia</h4>
          {status === "authenticated" ? (
            <button
              onClick={() => {
                setOpenTooltipProfile(!openTooltipProfile);
              }}
              className="relative flex items-center justify-center gap-1 rounded-lg border-[1px] border-neutral-400 px-3 py-1 shadow-md "
            >
              {openTooltipProfile && (
                <TooltipProfile tooltipProfileRef={tooltipProfileRef} />
              )}
              {session.user.image && (
                <Image
                  src={session.user.image}
                  height={15}
                  width={15}
                  className="rounded-full"
                  alt=""
                />
              )}
              <p className="text-xs">{session?.user.email}</p>
            </button>
          ) : status === "loading" ? (
            ""
          ) : (
            <p onClick={() => signIn("google")}>Sign in</p>
          )}
        </nav>
      </header>
      <section className="z-20">{children}</section>
    </main>
  );
}

export default Navbar;
