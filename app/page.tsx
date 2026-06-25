"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import bg from "/public/img/16-9.jpeg";
import cdsLogo from "/public/img/cds_1.png";
import girl from "/public/img/girl.png";
import imgImac from "/public/img/img_imac.png";
import imgGb from "/public/img/img_gb.png";
import iconInsta from "/public/icon/icon_insta.png";
import iconPint from "/public/icon/icon_pint.png";
import iconX from "/public/icon/icon_x.png";

const items = [
  { key: "gb", label: "Game", src: imgGb, width: 250, height: 250, href: "/game" },
  { key: "girl", label: "Hobby", src: girl, width: 150, height: 150, href: "/hobby" },
  { key: "imac", label: "Design", src: imgImac, width: 250, height: 250, href: "/design" },
];

export default function Home() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);

  const getPosition = (index: number) => {
    const total = items.length;
    const diff = (index - activeIndex + total) % total;

    const angleMap = [90, 210, 330];
    const angle = angleMap[diff];
    const rad = (angle * Math.PI) / 180;
    const isCenter = diff === 0;

    return {
      x: Math.cos(rad),
      y: Math.sin(rad),
      scale: isCenter ? 1.1 : 0.4,
      zIndex: isCenter ? 30 : 20,
      opacity: isCenter ? 1 : 0.6,
    };
  };

  const handleItemClick = (index: number) => {
    if (index === activeIndex) {
      router.push(items[index].href);
      return;
    }

    setActiveIndex(index);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="absolute left-1/2 z-0 pointer-events-none top-[80px] -translate-x-1/2 md:top-[140px]">
        <Image
          className="float-typo w-[80vw] max-w-[340px] h-auto md:w-[400px]"
          src={cdsLogo}
          alt="cds logo"
          priority
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center -translate-y-[40px] md:-translate-y-[20px]">
        <div className="relative w-[100vw] max-w-[760px] h-[320px] md:h-[420px]">
          {items.map((item, index) => {
            const pos = getPosition(index);
            const isCenter = index === activeIndex;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleItemClick(index)}
                className={`
                  group absolute left-1/2 top-1/2
                  flex flex-col items-center
                  transition-all duration-700 ease-in-out
                  ${isCenter ? "cursor-pointer" : "cursor-pointer"}
                `}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translate3d(
                      calc(${pos.x} * min(300px, 32vw)),
                      calc(${pos.y} * min(95px, 12vw)),
                      0
                    )
                    scale(${pos.scale})
                  `,
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                }}
              >
                <div
                  className={`
                    relative transition-transform duration-300 ease-out
                    ${isCenter ? "group-hover:scale-[1.15]" : ""}
                  `}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    priority={isCenter}
                    className="pointer-events-none select-none w-[150px] h-auto md:w-[250px]"
                  />

                  {isCenter && (
                    <span
                      className="
                        absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        text-[12px] md:text-[14px]
                        tracking-[0.2em]
                        text-black
                        bg-white/70
                        px-4 py-2
                        rounded-full
                        whitespace-nowrap
                        pointer-events-none
                      "
                    >
                      VIEW PROJECT
                    </span>
                  )}
                </div>

                <p className="mt-[8px] text-center text-black text-[13px] md:text-[16px]">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end pb-[36px] md:pb-[140px]">
        <div className="flex items-center justify-center gap-[34px] mb-[34px] md:gap-[60px] md:mb-[60px]">
          <a href="https://www.instagram.com/bass1208" target="_blank" rel="noopener noreferrer" className="icon-link float-up" onClick={(e) => e.currentTarget.blur()}>
            <Image src={iconInsta} alt="Instagram" width={50} height={50} className="w-[40px] md:w-[50px] h-auto" />
          </a>

          <a href="https://jp.pinterest.com/tiklej/" target="_blank" rel="noopener noreferrer" className="icon-link float-down" onClick={(e) => e.currentTarget.blur()}>
            <Image src={iconPint} alt="Pinterest" width={50} height={50} className="w-[40px] md:w-[50px] h-auto" />
          </a>

          <a href="https://x.com/bass1208" target="_blank" rel="noopener noreferrer" className="icon-link float-up" onClick={(e) => e.currentTarget.blur()}>
            <Image src={iconX} alt="X" width={50} height={50} className="w-[40px] md:w-[50px] h-auto" />
          </a>
        </div>

        <div className="text-center text-[12px] md:text-[14px] leading-[14px] text-black">
          <p className="mb-[8px]">© TIKLE</p>
          <p>Creative Design Studio based in tokyo</p>
        </div>
      </div>
    </main>
  );
}