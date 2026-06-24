"use client";

import { useState, type PointerEvent } from "react";
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

const STEP = 120;

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [moved, setMoved] = useState(false);

  const getPosition = (index: number) => {
    const baseAngle = 90 + index * STEP;
    const angle = baseAngle + rotation;
    const rad = (angle * Math.PI) / 180;

    const yValue = Math.sin(rad);
    const isCenter = yValue > 0.92;

    return {
      x: Math.cos(rad),
      y: yValue,
      scale: isCenter ? 1.1 : 0.4,
      zIndex: Math.round(yValue * 100),
      opacity: isCenter ? 1 : 0.6,
    };
  };

  const snapToNearest = (currentRotation: number) => {
    const nearest = Math.round(currentRotation / STEP) * STEP;
    setRotation(nearest);
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setStartRotation(rotation);
    setMoved(false);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const diff = e.clientX - dragStartX;

    if (Math.abs(diff) > 5) {
      setMoved(true);
    }

    setRotation(startRotation + diff * 0.45);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    snapToNearest(rotation);
  };

  const handleItemClick = (index: number) => {
    if (moved) return;

    const targetRotation = -index * STEP;
    setRotation(targetRotation);
  };

  return (
    <main
      className="
        relative min-h-screen overflow-hidden
        bg-cover bg-center
        font-[family-name:var(--font-geist-sans)]
      "
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      {/* Logo */}
      <div
        className="
          absolute left-1/2 z-0 pointer-events-none
          top-[50px] -translate-x-1/2
          md:top-[140px]
        "
      >
        <Image
          className="float-typo w-[80vw] max-w-[340px] h-auto md:w-[400px]"
          src={cdsLogo}
          alt="cds logo"
          priority
        />
      </div>

      {/* Carousel */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          -translate-y-[40px]
          md:-translate-y-[20px]
        "
      >
        <div
          className="
            relative
            w-[100vw] max-w-[760px]
            h-[320px] md:h-[420px]
            touch-pan-y select-none
          "
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {items.map((item, index) => {
            const pos = getPosition(index);

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleItemClick(index)}
                className="
                  absolute left-1/2 top-1/2
                  flex flex-col items-center
                  cursor-pointer
                  transition-transform duration-700 ease-out
                "
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
                  transitionDuration: isDragging ? "0ms" : "700ms",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                  className="
                    pointer-events-none select-none
                    w-[150px] h-auto md:w-[250px]
                  "
                  priority
                  draggable={false}
                />

                <p className="mt-[8px] text-center text-black text-[13px] md:text-[16px]">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-10
          flex flex-col items-center justify-end
          pb-[36px] md:pb-[140px]
        "
      >
        <div
          className="
            flex items-center justify-center
            gap-[34px] mb-[34px]
            md:gap-[60px] md:mb-[60px]
          "
        >
          <a
            href="https://www.instagram.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image
              src={iconInsta}
              alt="Instagram"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] h-auto"
            />
          </a>

          <a
            href="https://jp.pinterest.com/tiklej/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-down"
          >
            <Image
              src={iconPint}
              alt="Pinterest"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] h-auto"
            />
          </a>

          <a
            href="https://x.com/bass1208"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link float-up"
          >
            <Image
              src={iconX}
              alt="X"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] h-auto"
            />
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