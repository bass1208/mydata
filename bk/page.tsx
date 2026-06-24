"use client";

import { useState } from "react";
import Image from "next/image";
import bg from "./public/16-9.jpeg";
import cdsLogo from "./public/cds_1.png";
import girl from "./public/girl.png";
import imgImac from "./public/img_imac.png";
import imgGb from "./public/img_gb.png";
import iconInsta from "./public/icon_insta.png";
import iconPint from "./public/icon_pint.png";
import iconX from "./public/icon_x.png";

export default function Home() {
  const [rotations, setRotations] = useState({ gb: 0, girl: 0, imac: 0 });
  const [dragState, setDragState] = useState<{
    key: "gb" | "girl" | "imac" | null;
    startX: number;
    startAngle: number;
  }>({ key: null, startX: 0, startAngle: 0 });

  const handlePointerDown = (
    key: "gb" | "girl" | "imac"
  ) => (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({ key, startX: event.clientX, startAngle: rotations[key] });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.key) return;
    const deltaX = event.clientX - dragState.startX;
    setRotations((current) => ({
      ...current,
      [dragState.key!]: dragState.startAngle + deltaX,
    }));
  };

  const handlePointerUp = () => {
    setDragState({ key: null, startX: 0, startAngle: 0 });
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
      <div
        className="absolute inset-0 flex items-center justify-center"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="relative flex items-center justify-center">
          <div
            className="absolute left-[-40%] top-1/2 float-up"
            style={{ transform: `translateY(-50%) rotate(${rotations.gb}deg)` }}
            onPointerDown={handlePointerDown("gb")}
          >
            <Image
              src={imgGb}
              alt="img gb"
              width={140}
              height={140}
              className="pointer-events-auto cursor-grab"
            />
          </div>
          <div
            className="relative float-typo"
            style={{ transform: `rotate(${rotations.girl}deg)` }}
            onPointerDown={handlePointerDown("girl")}
          >
            <Image
              src={girl}
              alt="girl"
              width={350}
              height={350}
              className="opacity-100 pointer-events-auto cursor-grab"
            />
          </div>
          <div
            className="absolute right-[-40%] top-1/2 float-down"
            style={{ transform: `translateY(-50%) rotate(${rotations.imac}deg)` }}
            onPointerDown={handlePointerDown("imac")}
          >
            <Image
              src={imgImac}
              alt="img imac"
              width={140}
              height={140}
              className="pointer-events-auto cursor-grab"
            />
          </div>
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
            <Image
              src={iconInsta}
              alt="Instagram"
              width={50}
              height={50}
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
            />
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
