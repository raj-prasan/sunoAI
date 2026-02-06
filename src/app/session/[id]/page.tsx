import Footer from "@/app/(home)/Footer";
import { Id } from "../../../../convex/_generated/dataModel";
import JournalEditor from "./JournalEditor";
import FloatingChatButton from "./FloatingChatButton";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <JournalEditor sessionId={id as Id<"sessions">} />
      <Footer />
      <FloatingChatButton userId="SUNO AI" userAvatar="https://res.cloudinary.com/dby6qs2rb/image/upload/v1770360777/output-onlinepngtools_q6qbpp.png" />
    </>
  );
}
