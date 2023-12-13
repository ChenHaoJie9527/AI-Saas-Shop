import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-700 text-[#Fff]">
        <div>Hello Sidebar</div>
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  );
}
