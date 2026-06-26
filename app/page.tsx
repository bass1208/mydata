"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const floatAnimation = {
  y: [-12, 12, -12],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black">

      {/* Background */}

      <Image
        src="/images/16-9.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Girl */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[40vw] min-w-[320px] max-w-[760px]">
        <Image
          src="/images/img_girl_main.png"
          alt=""
          width={900}
          height={1300}
          className="w-full h-auto"
        />
      </div>

      {/* Ring */}

      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 z-10 w-[70vw] max-w-[900px] h-[160px] border-[18px] border-white rounded-full opacity-90"></div>

      {/* Floating Icons */}

      <motion.div
        animate={floatAnimation}
        className="absolute left-[10%] top-[22%] z-30 w-[180px]"
      >
        <Image
          src="/images/img_mheart.png"
          alt=""
          width={300}
          height={300}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-[18%] bottom-[20%] w-[130px]"
      >
        <Image
          src="/images/img_gb.png"
          alt=""
          width={250}
          height={250}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-[12%] bottom-[18%] w-[120px]"
      >
        <Image
          src="/images/img_t1982_cp_retro.png"
          alt=""
          width={220}
          height={260}
        />
      </motion.div>

      <motion.div
        animate={floatAnimation}
        className="absolute right-[8%] top-[12%] w-[120px]"
      >
        <Image
          src="/images/img_silver_rings.png"
          alt=""
          width={220}
          height={220}
        />
      </motion.div>

      <motion.div
        animate={floatAnimation}
        className="absolute right-[24%] top-[18%] w-[120px]"
      >
        <Image
          src="/images/img_silver_heart.png"
          alt=""
          width={220}
          height={220}
        />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [.8, 1, .8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[16%] top-[12%] w-[55px]"
      >
        <Image
          src="/images/img_silver_glitter.png"
          alt=""
          width={80}
          height={80}
        />
      </motion.div>

      {/* Text */}

      <div className="absolute left-[18%] bottom-[18%] z-40 text-white max-w-sm text-sm leading-6">

        <Typewriter
          words={[
`My work goes beyond mere visual expression
I aim to convey emotions and weave stories through my art.
With imaginative imagery and vibrant colors,
I'm ready to capture your attention.`
          ]}
          cursor
          typeSpeed={25}
        />

      </div>

      <div className="absolute right-[20%] top-[18%] text-white text-sm leading-6">

        <Typewriter
          words={[
`Born in the Digital Age.
Inspired by Tokyo, 1989.
Designing Tomorrow's Nostalgia.`
          ]}
          cursor
          typeSpeed={28}
        />

      </div>

      <div className="absolute left-[30%] top-[28%] text-white text-sm leading-6">

        <Typewriter
          words={[
`Tokyo Nights.
Neon Lights.
Digital Dreams.`
          ]}
          cursor
          typeSpeed={28}
        />

      </div>

      {/* Navigation */}

      <div className="absolute right-[18%] bottom-[18%] text-white z-50">

        <p className="mb-5 tracking-[0.3em]">SIDE A</p>

        <div className="space-y-4 text-2xl font-semibold">

          <Link
            href="/about"
            className="block hover:translate-x-2 transition"
          >
            01 ABOUT
          </Link>

          <Link
            href="/web-design"
            className="block hover:translate-x-2 transition"
          >
            02 WEB DESIGN
          </Link>

          <Link
            href="/graphic"
            className="block hover:translate-x-2 transition"
          >
            03 GRAPHIC
          </Link>

        </div>

      </div>

      {/* Footer */}

      <div className="absolute left-10 bottom-10 flex items-center gap-4 text-white">

        <Image
          src="/images/icon_world.png"
          alt=""
          width={32}
          height={32}
        />

        <div>

          <p>© TIKLE1982</p>

          <p className="text-sm opacity-70">
            Korean Designer based in Tokyo
          </p>

        </div>

      </div>

    </main>
  );
}