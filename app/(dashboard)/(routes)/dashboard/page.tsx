import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      dashboard page <UserButton afterSignOutUrl="/" />{" "}
    </div>
  );
}
