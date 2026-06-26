import Image from "next/image";
import Link from "next/link";

const layout = {
  girl:
    "top-[22%] w-[90vw] max-w-[430px] " +
    "sm:top-[29%] sm:w-[78vw] sm:max-w-[520px] " +
    "md:top-[24%] md:w-[58vw] md:max-w-[620px] " +
    "lg:top-[20%] lg:w-[46vw] lg:max-w-[720px] " +
    "xl:top-[20%] xl:w-[42vw] xl:max-w-[760px]",

  ring:
    "top-[50%] w-[125vw] " +
    "sm:top-[50%] sm:w-[118vw] " +
    "md:top-[52%] md:w-[98vw] " +
    "lg:top-[53%] lg:w-[84vw] " +
    "xl:top-[65%] xl:w-[76vw]",

  heart:
    "left-[2%] top-[19%] w-[88px] " +
    "sm:left-[4%] sm:top-[19%] sm:w-[110px] " +
    "md:left-[5%] md:top-[18%] md:w-[150px] " +
    "lg:left-[6%] lg:top-[10%] lg:w-[190px] " +
    "xl:left-[7%] xl:top-[18%] xl:w-[250px]",

  gameboy:
    "left-[2%] bottom-[32%] w-[108px] " +
    "sm:left-[5%] sm:bottom-[28%] sm:w-[100px] " +
    "md:left-[7%] md:bottom-[28%] md:w-[120px] " +
    "lg:left-[10%] lg:bottom-[28%] lg:w-[160px] " +
    "xl:left-[13%] xl:bottom-[30%] xl:w-[220px]",

  cassette:
    "right-[3%] bottom-[31%] w-[68px] " +
    "sm:right-[4%] sm:bottom-[30%] sm:w-[85px] " +
    "md:right-[7%] md:bottom-[28%] md:w-[120px] " +
    "lg:right-[11%] lg:bottom-[28%] lg:w-[120px] " +
    "xl:right-[15%] xl:bottom-[30%] xl:w-[150px]",

  rings:
    "right-[3%] top-[20%] w-[62px] " +
    "sm:right-[4%] sm:top-[19%] sm:w-[76px] " +
    "md:right-[5%] md:top-[25%] md:w-[100px] " +
    "lg:right-[7%] lg:top-[13%] lg:w-[125px] " +
    "xl:right-[8%] xl:top-[12%] xl:w-[150px]",

  silverHeart:
    "left-[30%] top-[10%] w-[70px] " +
    "sm:right-[25%] sm:top-[15%] sm:w-[72px] " +
    "md:left-[28%] md:top-[13%] md:w-[125px] " +
    "lg:left-[32%] lg:top-[12%] lg:w-[115px] " +
    "xl:left-[40%] xl:top-[8%] xl:w-[150px]",

  glitter1:
    "left-[16%] top-[10%] w-[42px] " +
    "sm:left-[18%] sm:top-[11%] sm:w-[50px] " +
    "md:left-[17%] md:top-[10%] md:w-[70px] " +
    "lg:left-[17%] lg:top-[19%] lg:w-[90px] " +
    "xl:left-[22%] xl:top-[30%] xl:w-[110px]",

  glitter2:
    "right-[34%] top-[18%] w-[38px] " +
    "sm:right-[35%] sm:top-[20%] sm:w-[45px] " +
    "md:right-[38%] md:top-[20%] md:w-[55px] " +
    "lg:right-[36%] lg:top-[12%] lg:w-[62px] " +
    "xl:right-[32%] xl:top-[8%] xl:w-[70px]",

  text1:
    "left-[5%] bottom-[17%] max-w-[210px] text-[9px] " +
    "sm:left-[6%] sm:bottom-[16%] sm:max-w-[250px] sm:text-[10px] " +
    "md:left-[8%] md:bottom-[19%] md:max-w-[320px] md:text-[11px] " +
    "lg:left-[13%] lg:bottom-[18%] lg:max-w-[380px] lg:text-xs " +
    "xl:left-[19%] xl:bottom-[18%] xl:max-w-[420px]",

  text2:
    "right-[4%] top-[11%] max-w-[150px] text-[9px] " +
    "sm:right-[5%] sm:top-[11%] sm:max-w-[170px] sm:text-[10px] " +
    "md:right-[8%] md:top-[14%] md:max-w-[220px] md:text-[11px] " +
    "lg:right-[14%] lg:top-[15%] lg:max-w-[240px] lg:text-xs " +
    "xl:right-[22%] xl:top-[17%] xl:max-w-[260px]",

  text3:
    "left-[12%] top-[28%] max-w-[120px] text-[9px] " +
    "sm:left-[24%] sm:top-[28%] sm:max-w-[130px] sm:text-[10px] " +
    "md:left-[20%] md:top-[27%] md:max-w-[150px] md:text-[11px] " +
    "lg:left-[28%] lg:top-[25%] lg:max-w-[170px] lg:text-xs " +
    "xl:left-[30%] xl:top-[24%] xl:max-w-[180px]",
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
      <div className="relative mx-auto flex h-[52px] w-full max-w-[1920px] items-center justify-between px-5 text-white sm:px-6 md:h-[58px] md:px-8 lg:px-[38px]">
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
        className={`absolute left-1/2 ${layout.ring} z-10 max-w-[1320px] -translate-x-1/2 -translate-y-1/2 select-none`}
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
       className={`absolute ${layout.girl} left-1/2 z-30 -translate-x-1/2`}
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
          height={220}
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
     <nav className="absolute bottom-[13%] right-[5%] z-50 sm:right-[6%] md:bottom-[16%] md:right-[8%] lg:right-[13%] xl:right-[18%]">
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
      <footer className="absolute bottom-10 left-5 z-50 text-[10px] md:bottom-8 md:left-10 md:text-xs">
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
      <div className="absolute bottom-10 right-5 z-50 md:bottom-10 md:right-14">
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