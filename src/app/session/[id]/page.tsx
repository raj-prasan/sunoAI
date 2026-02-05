import JournalEditor from "./JournalEditor";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <JournalEditor sessionId={id} />;
}
