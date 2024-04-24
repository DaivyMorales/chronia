import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import Head from "next/head";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="shortcut icon" href="/chronia-logo.png" type="image/png" />
      </Head>
      <main className={`${bricolage.className}`}>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
