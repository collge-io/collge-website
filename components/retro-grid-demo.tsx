"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import Image from "next/image";
import Logo from "../public/logo-transparent.png"

export const RetroGridDemo = () => {
  return (
    <div className="relative flex-col flex h-full w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">

      <Image alt="collge logo" src={Logo} style={{ width: "100px", objectFit: "contain" }} className="w-32" />

      <span className="pointer-events-none z-10 text-6xl whitespace-pre-wrap bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA] to-[#FAFAFA] bg-clip-text text-left font-bold leading-none tracking-tighter text-transparent">
        No More Boring <span style={{ color: "#45ea69" }}>Collge</span> Life!
      </span>

      <h5 className="text-xl mt-4 text-left">Coming soon to make <span style={{ color: "#45ea69" }}>university</span> life even better!</h5>

      <RetroGrid />
    </div >
  );
};
