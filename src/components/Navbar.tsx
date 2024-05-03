import React, { ReactNode, useEffect, useRef } from "react";
import { useSession, signIn } from "next-auth/react";
import TooltipProfile from "./TooltipProfile";
import { useOpen } from "@/store/OpenStore";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const { data: session, status } = useSession();
  const tooltipProfileRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const { openTooltipProfile, setOpenTooltipProfile } = useOpen();

  const router = useRouter();

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
      <header className="sticky top-0 z-50  flex w-full flex-col items-center justify-center px-2 ">
        <nav className="flex h-[60px] w-full items-center  justify-between border-b-[1px] border-neutral-400 px-2 backdrop-blur backdrop-saturate-200 lg:w-[800px]">
          <div
            onClick={() => router.push("/")}
            className="flex cursor-pointer items-center gap-1"
          >
            <Image
              src="/chronia.png"
              alt="Chronia Logo"
              height={18}
              width={18}
            />
            <h4 className="font-black">Chronia</h4>
          </div>
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
            <button
              className="rounded-[7px] bg-black px-5 py-1 text-[12px] text-sm font-medium text-white hover:bg-neutral-800"
              onClick={() => signIn("google")}
            >
              Sign in
            </button>
          )}
        </nav>
      </header>
      <section className="z-20 w-[800px]">{children}</section>
    </main>
  );
}

export default Navbar;
