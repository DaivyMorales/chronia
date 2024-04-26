import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { api } from "@/utils/api";
import InputQuestionExample from "@/components/InputQuestionExample";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { TiRefreshOutline } from "react-icons/ti";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  const { data: session, status } = useSession();

  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const router = useRouter();

  console.log(session?.user.email);

  return (
    <>
      <Head>
        <title>Chornia</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex grid min-h-screen w-full grid-cols-2 gap-4 px-3 text-center lg:grid-cols-2">
        <div className=" flex h-screen w-full flex-col items-start justify-center gap-5 text-center ">
          <h1 className="relative text-left text-3xl lg:text-5xl">
            Improve your precious <br />
            <Image
              src="/svgs/lines.excalidraw.svg"
              alt="lines"
              width={40}
              height={40}
              className="absolute -top-8 left-6"
            />
            mental health with{" "}
            <span className="relative bg-blue-100 text-blue-600">
              <img
                src="/svgs/diamond.png"
                className="absolute -right-6 -top-6 h-[50px] w-[50px]"
                alt="diamond svg"
              />
              Journaling
            </span>
          </h1>
          <p className="text-left text-[16px] text-neutral-600">
            Explore your personal life areas with help of the{" "}
            <span className="font-bold text-neutral-900">AI</span> ⚡️ <br />{" "}
            Write, reflects and grow --- Start healing now!
          </p>

          <ul className="flex flex-col items-start justify-start gap-2 text-sm">
            <li>✅ To yourself, you aren't judged</li>
            <li>✅ Implement Journaling Habit</li>
            <li>✅ GPT-4 Natural lenguage</li>
          </ul>
          <div className="relative">
            <motion.button
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: "0.3deg" }}
              whileTap={{ scale: 0.7 }}
              className="relative flex items-center gap-2 rounded-lg border-[1px] border-dashed border-blue-500 px-6 py-2 font-bold text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Get Started Now 🧠
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-0 top-14"
            >
              <img
                src="/svgs/arrow-top.svg"
                className=" h-[70px] w-[70px]"
                alt="arrow svg"
              />
              <img
                src="/svgs/cure-yourself.png"
                className="w-[100px] "
                alt="cure yourselft"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex h-full items-center justify-end">
            <div className="flex flex-col items-center justify-center gap-20">
              <div className="relative relative z-10 flex w-[325px] gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 p-4 shadow-md backdrop-blur backdrop-saturate-200">
                <div className="absolute -top-16 flex flex-col items-center">
                  <p className="text-[9px] font-normal text-neutral-500">
                    Ask youself...
                  </p>
                  <img
                    src="/svgs/arrow-bottom.png"
                    className="h-[45px]"
                    alt=""
                  />
                </div>
                <img
                  src="/me.jpeg"
                  className="h-[27px] w-[27px] rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold">Daivy</p>{" "}
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <p className="text-left text-[12px] text-neutral-700 ">
                      <span className="font-bold text-black">1.</span> Have
                      there been any significant changes in your social life?
                    </p>

                    <div className="rounded-full bg-blue-600 px-5 py-[2px]">
                      <p className="text-[8px] text-white">Social Life</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-start gap-2 rounded-xl p-4">
                <div className="absolute -top-12 right-0 flex flex-col items-center">
                  <p className="text-[12px] font-normal text-neutral-500">
                    According to your daily journals, Get IA reflection
                  </p>
                  <img
                    src="/svgs/arrow-bottom.png"
                    className="h-[45px] rotate-45 scale-x-[-1]"
                    alt=""
                  />
                </div>
                <div className="box relative z-10 flex gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 bg-gradient-to-r from-transparent to-blue-200 p-4 shadow-md backdrop-blur backdrop-saturate-200">
                  <span className="text-[25px] ">🌎</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-normal">Social life</p>{" "}
                      <span className="rounded-full bg-neutral-800 px-2 py-[2px] text-[8px] text-white">
                        1 question answered
                      </span>
                    </div>

                    <div className="h-3 w-[250px] rounded-full bg-gray-200">
                      <div
                        className="flex h-3 items-center justify-center rounded-full bg-blue-600"
                        style={{ width: "71%" }}
                      >
                        <p className="text-[8px] font-normal text-white">71%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatedText
                  text="During these three months, you have demonstrated a conscious
                  effort to balance your work and family responsibilities with
                  your social life. Although you have faced challenges in
                  finding time to socialize, you have taken initiatives to
                  maintain meaningful connections with friends and
                  acquaintances. It is encouraging to see that you have
                  organized social events and participated in group activities
                  to expand your social network. However, there is always room
                  for improvement in time management and prioritizing social
                  relationships. Continuing to find that balance between your
                  commitments and your social well-being will allow you to
                  maintain a fulfilling and enriching life."
                />
                <motion.button
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-md flex items-center gap-1 rounded-md px-6 py-2 font-medium text-neutral-400 hover:bg-neutral-300"
                >
                  New Example <TiRefreshOutline size={13} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
