import React from "react";
import { useSession } from "next-auth/react";
import { TiThumbsOk } from "react-icons/ti";
import Tracker from "@/components/Tracker";

function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 px-4">
      <div className="flex items-center gap-1">
        <TiThumbsOk size={30} />
        <h2>Hello {session?.user.name}!</h2>
      </div>
      <Tracker />
    </div>
  );
}

export default Home;
