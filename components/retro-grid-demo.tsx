"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import Image from "next/image";
import Logo from "../public/logo-transparent.png"
import { useRouter } from "next/navigation";

export const RetroGridDemo = () => {

  const router = useRouter()

  return (
    <div className="relative flex-col flex h-full w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 ">

      <Image alt="collge logo" src={Logo} style={{ width: "100px", objectFit: "contain" }} className="w-32" />

      <span className="text-5xl font-bold mt-4 text-left">
        No More Boring <span style={{ color: "#45ea69" }}>Collge</span> Life!
      </span>

      <h5 className="text-xl mt-4 text-left">Coming soon to make <span style={{ color: "#45ea69" }}>university</span> life even better!</h5>

      <button onClick={() => router.push("/interest")} className="text-sm mt-8 py-4 px-5 bg-[#45ea69] rounded-full  text-[#FAFAFA] border-none" type="button">Register Interest</button>

      <RetroGrid />
    </div >
  );
};
