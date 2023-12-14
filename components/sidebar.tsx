"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full w-full bg-[#111827] text-[#fff]">
      <div className="px-3 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={"/logo.png"} />
          </div>
          <h1 className={cn("font-bold text-2xl", montserrat.className)}>
            AI Saas
          </h1>
        </Link>
      </div>
    </div>
  );
}