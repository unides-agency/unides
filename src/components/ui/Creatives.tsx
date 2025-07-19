import { use } from "react";
import { getCreatives, type Creative } from "~/lib/creatives";

async function creativeList(): Promise<Creative[]> {
  let creatives = [] as Creative[];
  try {
    const allCreatives = await getCreatives();
    creatives = allCreatives
  } catch (error) {
    console.error("Failed to load creatives:", error);
  }
  return creatives;
}

export default function Creatives() {
  const creatives = use(creativeList());

  if (!creatives || creatives.length === 0) {
    return <div className="text-center text-gray-500">No creatives available.</div>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Creatives</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creatives.map((creative) => (
          <div key={creative.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{creative.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
