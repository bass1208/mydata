"use client";

import { useState } from "react";
import Image from "next/image";

import bg from "/public/img/16-9.jpeg";
import cdsLogo from "/public/img/cds_1.png";
import girl from "/public/img/img_mclane.png";
import imgImac from "/public/img/img_imac.png";
import imgGb from "/public/img/img_gb.png";
import iconInsta from "/public/icon/icon_insta.png";
import iconPint from "/public/icon/icon_pint.png";
import iconX from "/public/icon/icon_x.png";

const items = [
  { key: "gb", label: "Game", src: imgGb, width: 250, height: 250 },
  { key: "img_mclane", label: "Hobby", src: girl, width: 150, height: 150 },
  { key: "imac", label: "Design", src: imgImac, width: 250, height: 250 },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);

  const getPosition = (index: number) => {
    const total = items.length;
    const diff = (index - activeIndex + total) % total;

    const angleMap = [90, 210, 330];
    const angle = angleMap[diff];
    const rad = (angle * Math.PI) / 180;

    const radiusX = 300;
    const radiusY = 95;

    const isCenter = diff === 0;

return {
  x: Math.cos(rad) * radiusX,
  y: Math.sin(rad) * radiusY,

  // 중앙일 때만 확대
  scale: isCenter ? 1.25 : 0.4,

  zIndex: isCenter ? 30 : 20,

  // 양옆은 살짝 흐리게
  opacity: isCenter ? 1 : 0.6,
};
  };

  return (
    <div
      className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: `url(${(bg as any)?.src ?? bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "140px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          className="float-typo"
          src={cdsLogo}
          alt="cds logo"
          width={400}
          height={225}
          priority
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[760px] h-[420px]">
          {items.map((item, index) => {
            const pos = getPosition(index);

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="absolute left-1/2 top-1/2 flex flex-col items-center transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translate3d(${pos.x}px, ${pos.y}px, 0)
                    scale(${pos.scale})
                  `,
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                  className="pointer-events-none select-none"
                  priority={index === activeIndex}
                />
                <p className="mt-[10px] text-center text-black">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end pb-[140px]">
        <div className="flex items-center justify-center gap-[60px] mb-[60px]">
          <a
            href="https://www.instagram.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image src={iconInsta} alt="Instagram" width={50} height={50} />
          </a>

          <a
            href="https://jp.pinterest.com/tiklej/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-down"
          >
            <Image src={iconPint} alt="Pinterest" width={50} height={50} />
          </a>

          <a
            href="https://x.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image src={iconX} alt="X" width={50} height={50} />
          </a>
        </div>

        <div className="text-center text-[14px] leading-[10px] text-black">
          <p className="mb-[10px]">© TIKLE</p>
          <p>Creative Design Studio based in tokyo</p>
        </div>
      </div>
    </div>
  );
}