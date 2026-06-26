import Image from "next/image";
import Link from "next/link";

const layout = {
  girl: "top-[28%] md:top-[18%]",
  ring: "top-[52%] md:top-[55%]",

  heart: "left-[5%] top-[20%] w-[88px] md:left-[57%] md:top-[21%] md:w-[220px]",
  gameboy:
    "left-[6%] bottom-[30%] w-[58px] md:left-[13%] md:bottom-[24%] md:w-[140px]",
  cassette:
    "right-[5%] bottom-[30%] w-[58px] md:right-[15%] md:bottom-[20%] md:w-[130px]",
  rings:
    "right-[4%] top-[18%] w-[70px] md:right-[18%] md:top-[12%] md:w-[150px]",
  silverHeart:
    "right-[24%] top-[15%] w-[64px] md:right-[28%] md:top-[11%] md:w-[130px]",

  glitter1:
    "left-[18%] top-[14%] w-[46px] md:left-[17%] md:top-[12%] md:w-[110px]",
  glitter2:
    "right-[35%] top-[14%] w-[42px] md:right-[32%] md:top-[10%] md:w-[70px]",

  text1:
    "left-[6%] bottom-[17%] max-w-[210px] text-[10px] md:left-[19%] md:bottom-[18%] md:max-w-[420px] md:text-xs",
  text2:
    "right-[5%] top-[14%] max-w-[160px] text-[10px] md:right-[22%] md:top-[17%] md:max-w-[260px] md:text-xs",
  text3:
    "left-[33%] top-[25%] max-w-[120px] text-[10px] md:left-[30%] md:top-[24%] md:max-w-[180px] md:text-xs",
};

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
      <header className="absolute left-0 top-0 z-[100] w-full border-b border-white/80">
        <div className="relative mx-auto flex h-[52px] w-full items-center justify-between px-5 text-white md:h-[58px] md:px-[38px]">
          <div className="w-[130px] text-[10px] font-medium leading-[1.08] tracking-[0.02em] md:w-[260px] md:text-[14px]">
            <p>DIGITAL DREAMS</p>
            <p>ANALOG HEART</p>
          </div>

          <div className="absolute left-1/2 top-1/2 flex h-[30px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 text-[10px] font-medium tracking-[0.04em] md:h-[38px] md:w-[230px] md:text-[14px]">
            TIKLE1982
          </div>

          <div className="flex w-[130px] items-center justify-end gap-2 md:w-[260px] md:gap-[14px]">
            <div className="relative h-[22px] w-[62px] md:h-[36px] md:w-[108px]">
              <Image
                src="/images/img_barcode.png"
                alt="Barcode"
                fill
                priority
                className="object-contain"
              />
            </div>

            <p className="hidden whitespace-nowrap text-[14px] font-medium tracking-[0.02em] md:block">
              2026 Tokyo Japan
            </p>
          </div>
        </div>
      </header>

      {/* Halo Ring */}
      <div
        className={`absolute left-1/2 ${layout.ring} z-10 w-[115vw] max-w-none -translate-x-1/2 -translate-y-1/2 select-none md:w-[76vw] md:max-w-[1320px]`}
      >
        <Image
          src="/images/wt_ring.png"
          alt="Halo Ring"
          width={1600}
          height={420}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Main Girl */}
      <div
        className={`absolute ${layout.girl} left-1/2 z-30 w-[86vw] max-w-[520px] -translate-x-1/2 md:w-[42vw] md:max-w-[760px]`}
      >
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
      <div className={`float-slow absolute ${layout.heart} z-40`}>
        <Image src="/images/img_mheart.png" alt="" width={330} height={330} />
      </div>

      <div className={`float-fast absolute ${layout.gameboy} z-40`}>
        <Image src="/images/img_gb.png" alt="" width={320} height={320} />
      </div>

      <div className={`float-rotate absolute ${layout.cassette} z-40`}>
        <Image
          src="/images/img_t1982_cp_retro.png"
          alt=""
          width={280}
          height={320}
        />
      </div>

      <div className={`float-slow absolute ${layout.rings} z-40`}>
        <Image
          src="/images/img_silver_rings.png"
          alt=""
          width={240}
          height={240}
        />
      </div>

      <div className={`float-fast absolute ${layout.silverHeart} z-40`}>
        <Image
          src="/images/img_silver_heart.png"
          alt=""
          width={260}
          height={260}
        />
      </div>

      <div className={`twinkle absolute ${layout.glitter1} z-40`}>
        <Image
          src="/images/img_silver_glitter.png"
          alt=""
          width={160}
          height={160}
        />
      </div>

      <div className={`twinkle absolute ${layout.glitter2} z-40`}>
        <Image
          src="/images/img_silver_glitter.png"
          alt=""
          width={140}
          height={140}
        />
      </div>

      {/* Typewriter Texts */}
      <div
        className={`type-text type-1 absolute ${layout.text1} z-50 whitespace-pre-line leading-relaxed`}
      >
        My work goes beyond mere visual expression{"\n"}
        I aim to convey emotions and weave stories through my art.{"\n"}
        With imaginative imagery and vibrant colors,{"\n"}
        I’m ready to capture your attention.
      </div>

      <div
        className={`type-text type-2 absolute ${layout.text2} z-50 whitespace-pre-line leading-relaxed`}
      >
        Born in the Digital Age.{"\n"}
        Inspired by Tokyo, 1989.{"\n"}
        Designing Tomorrow’s Nostalgia.
      </div>

      <div
        className={`type-text type-3 absolute ${layout.text3} z-50 whitespace-pre-line leading-relaxed`}
      >
        Tokyo Nights.{"\n"}
        Neon Lights.{"\n"}
        Digital Dreams.
      </div>

      {/* Navigation */}
      <nav className="absolute bottom-[14%] right-[6%] z-50 md:bottom-[17%] md:right-[18%]">
        <p className="mb-4 text-xs font-bold md:mb-6 md:text-sm">SIDE A</p>

        <div className="space-y-3 text-base font-bold md:space-y-4 md:text-2xl">
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
      <footer className="absolute bottom-6 left-5 z-50 text-[10px] md:bottom-8 md:left-10 md:text-xs">
        <Image
          src="/images/icon_world.png"
          alt=""
          width={60}
          height={60}
          className="mb-2 w-[42px] md:mb-3 md:w-[60px]"
        />
        <p>© TIKLE1982</p>
        <p className="mt-1 md:mt-2">Korean Designer based in tokyo</p>
      </footer>

      {/* SNS Icons */}
      <div className="absolute bottom-6 right-5 z-50 md:bottom-10 md:right-14">
        <div className="flex items-center justify-center gap-[18px] md:gap-[34px]">
          <a
            href="https://www.instagram.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image
              src="/icon/icon_insta.png"
              alt="Instagram"
              width={50}
              height={50}
              className="h-auto w-[34px] md:w-[50px]"
            />
          </a>

          <a
            href="https://x.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image
              src="/icon/icon_x.png"
              alt="X"
              width={50}
              height={50}
              className="h-auto w-[34px] md:w-[50px]"
            />
          </a>
        </div>
      </div>
    </main>
  );
}