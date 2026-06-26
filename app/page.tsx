import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/images/16-9.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Header */}
      <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/70 px-6 py-3 text-xs md:px-10">
        <div className="leading-tight">
          <p>DIGITAL DREAMS</p>
          <p>ANALOG HEART</p>
        </div>

        <div className="rounded-full border border-white/80 px-16 py-2">
          TIKLE1982
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <div className="h-8 w-24 bg-white/90" />
          <p>2026 Tokyo Japan</p>
        </div>
      </header>

      {/* Halo */}
      <div className="absolute left-1/2 top-[43%] z-10 h-[9vw] w-[68vw] max-w-[1280px] -translate-x-1/2 rounded-full border-[10px] border-white md:border-[16px]" />

      {/* Main Girl */}
      <div className="absolute bottom-0 left-1/2 z-30 w-[72vw] max-w-[760px] -translate-x-1/2 md:w-[42vw]">
        <Image
          src="/images/img_girl_main.png"
          alt="main visual"
          width={900}
          height={1200}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Floating Icons */}
      <div className="float-slow absolute left-[7%] top-[21%] z-40 w-[120px] md:w-[220px]">
        <Image src="/images/img_mheart.png" alt="" width={300} height={300} />
      </div>

      <div className="float-fast absolute left-[13%] bottom-[24%] z-40 w-[80px] md:w-[140px]">
        <Image src="/images/img_gb.png" alt="" width={220} height={220} />
      </div>

      <div className="float-rotate absolute right-[15%] bottom-[20%] z-40 w-[80px] md:w-[130px]">
        <Image
          src="/images/img_t1982_cp_retro.png"
          alt=""
          width={220}
          height={260}
        />
      </div>

      <div className="float-slow absolute right-[8%] top-[12%] z-40 hidden w-[150px] md:block">
        <Image
          src="/images/img_silver_rings.png"
          alt=""
          width={240}
          height={240}
        />
      </div>

      <div className="float-fast absolute right-[28%] top-[11%] z-40 hidden w-[130px] md:block">
        <Image
          src="/images/img_silver_heart.png"
          alt=""
          width={220}
          height={220}
        />
      </div>

      <div className="twinkle absolute left-[17%] top-[12%] z-40 w-[70px] md:w-[110px]">
        <Image
          src="/images/img_silver_glitter.png"
          alt=""
          width={160}
          height={160}
        />
      </div>

      <div className="twinkle absolute right-[32%] top-[10%] z-40 hidden w-[70px] md:block">
        <Image
          src="/images/img_silver_glitter.png"
          alt=""
          width={140}
          height={140}
        />
      </div>

      {/* Typewriter Texts */}
      <div className="type-text type-1 absolute bottom-[18%] left-[19%] z-50 hidden max-w-[420px] whitespace-pre-line text-xs leading-relaxed md:block">
        My work goes beyond mere visual expression{"\n"}
        I aim to convey emotions and weave stories through my art.{"\n"}
        With imaginative imagery and vibrant colors,{"\n"}
        I’m ready to capture your attention.
      </div>

      <div className="type-text type-2 absolute right-[22%] top-[17%] z-50 hidden whitespace-pre-line text-xs leading-relaxed md:block">
        Born in the Digital Age.{"\n"}
        Inspired by Tokyo, 1989.{"\n"}
        Designing Tomorrow’s Nostalgia.
      </div>

      <div className="type-text type-3 absolute left-[30%] top-[24%] z-50 hidden whitespace-pre-line text-xs leading-relaxed md:block">
        Tokyo Nights.{"\n"}
        Neon Lights.{"\n"}
        Digital Dreams.
      </div>

      {/* Navigation */}
      <nav className="absolute bottom-[10%] right-[8%] z-50 md:bottom-[17%] md:right-[18%]">
        <p className="mb-6 text-sm font-bold">SIDE A</p>

        <div className="space-y-4 text-lg font-bold md:text-2xl">
          <Link href="/about" className="block transition hover:translate-x-2">
            01 ABOUT
          </Link>

          <Link
            href="/web-design"
            className="block transition hover:translate-x-2"
          >
            02 WEB DESIGN
          </Link>

          <Link href="/graphic" className="block transition hover:translate-x-2">
            03 GRAPHIC
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <footer className="absolute bottom-8 left-6 z-50 text-xs md:left-10">
        <Image
          src="/images/icon_world.png"
          alt=""
          width={60}
          height={60}
          className="mb-3"
        />
        <p>© TIKLE1982</p>
        <p className="mt-2">Korean Designer based in tokyo</p>
      </footer>

      <style jsx global>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes floatFast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(14px);
          }
        }

        @keyframes floatRotate {
          0%,
          100% {
            transform: translateY(0) rotate(-4deg);
          }
          50% {
            transform: translateY(-16px) rotate(5deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.75;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        .float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .float-fast {
          animation: floatFast 4.5s ease-in-out infinite;
        }

        .float-rotate {
          animation: floatRotate 5.5s ease-in-out infinite;
        }

        .twinkle {
          animation: twinkle 3.5s ease-in-out infinite;
        }

        .type-text {
          overflow: hidden;
          width: 0;
          border-right: 1px solid white;
          animation-fill-mode: forwards;
        }

        .type-1 {
          animation: typing1 4s steps(150) 0.5s forwards,
            cursor 0.8s step-end infinite;
        }

        .type-2 {
          animation: typing2 3s steps(90) 4.8s forwards,
            cursor 0.8s step-end infinite;
        }

        .type-3 {
          animation: typing3 2.4s steps(60) 8.2s forwards,
            cursor 0.8s step-end infinite;
        }

        @keyframes typing1 {
          from {
            width: 0;
          }
          to {
            width: 420px;
          }
        }

        @keyframes typing2 {
          from {
            width: 0;
          }
          to {
            width: 260px;
          }
        }

        @keyframes typing3 {
          from {
            width: 0;
          }
          to {
            width: 130px;
          }
        }

        @keyframes cursor {
          50% {
            border-color: transparent;
          }
        }

        @media (max-width: 768px) {
          .type-text {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}