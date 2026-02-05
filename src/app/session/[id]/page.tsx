export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Session ID: {id}</h1>
        <p className="text-gray-600">
          You are viewing session with ID:{" "}
          <span className="font-mono bg-gray-100 px-2 py-1 rounded">{id}</span>
        </p>
      </div>
    </div>
  );
}
