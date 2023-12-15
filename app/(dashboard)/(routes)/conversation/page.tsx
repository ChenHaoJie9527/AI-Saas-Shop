import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";

export default function ConversationPage() {
  return (
    <div>
      <Heading
        title="ConversationPage"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
}
