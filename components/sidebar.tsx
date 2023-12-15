"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-yellow-500",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-green-500",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-blue-500",
  },
  {
    label: "Setting",
    icon: SettingsIcon,
    href: "/setting",
    color: "text-red-500",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log("pathname", pathname);
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
        <div className="space-y-1">
          {routes.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-zinc-500"
                )}
              >
                <div className="flex items-center flex-1">
                  <item.icon className={cn("w-5 h-5 mr-3", item.color)} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
