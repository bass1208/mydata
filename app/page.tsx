import Image from "next/image";
import Link from "next/link";

const layout = {
  girl: "bottom-[-50px]",
  ring: "top-[44%]",
  text1: "bottom-[18%] left-[19%]",
  text2: "right-[22%] top-[17%]",
  text3: "left-[30%] top-[24%]",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Header */}
{/* Header */}
<header className="absolute left-0 top-0 z-[100] w-full border-b border-white/80">
  <div className="relative mx-auto flex h-[52px] w-full items-center justify-between px-5 text-white md:h-[58px] md:px-[38px]">
    {/* Left */}
    <div className="w-[130px] text-[10px] font-medium leading-[1.08] tracking-[0.02em] md:w-[260px] md:text-[14px]">
      <p>DIGITAL DREAMS</p>
      <p>ANALOG HEART</p>
    </div>

    {/* Center Capsule */}
    <div className="absolute left-1/2 top-1/2 flex h-[30px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 text-[10px] font-medium tracking-[0.04em] md:h-[38px] md:w-[230px] md:text-[14px]">
      TIKLE1982
    </div>

    {/* Right */}
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
  className={`absolute left-1/2 ${layout.ring} z-10 w-[76vw] max-w-[1320px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none`}
>

      {/* Main Girl */}
<div
  className={`absolute ${layout.girl} left-1/2 z-30 w-[72vw] max-w-[760px] -translate-x-1/2 md:w-[42vw]`}
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
  {/* Typewriter Texts */}
<div
  className={`type-text type-1 absolute ${textPosition.text1} z-50 hidden max-w-[420px] whitespace-pre-line text-xs leading-relaxed md:block`}
>
  My work goes beyond mere visual expression{"\n"}
  I aim to convey emotions and weave stories through my art.{"\n"}
  With imaginative imagery and vibrant colors,{"\n"}
  I’m ready to capture your attention.
</div>

<div
  className={`type-text type-2 absolute ${textPosition.text2} z-50 hidden whitespace-pre-line text-xs leading-relaxed md:block`}
>
  Born in the Digital Age.{"\n"}
  Inspired by Tokyo, 1989.{"\n"}
  Designing Tomorrow’s Nostalgia.
</div>

<div
  className={`type-text type-3 absolute ${textPosition.text3} z-50 hidden whitespace-pre-line text-xs leading-relaxed md:block`}
>
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
{/* SNS Icons */}
<div className="absolute bottom-8 right-8 z-50 md:right-14 md:bottom-10">
  <div className="flex items-center justify-center gap-[24px] md:gap-[34px]">
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
        className="h-auto w-[40px] md:w-[50px]"
      />
    </a>

    <a
      href="https://jp.pinterest.com/tiklej/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link float-down"
    >
      <Image
        src="/icon/icon_pint.png"
        alt="Pinterest"
        width={50}
        height={50}
        className="h-auto w-[40px] md:w-[50px]"
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
        className="h-auto w-[40px] md:w-[50px]"
      />
    </a>
  </div>
</div>
    </main>
  );
}