import { useEffect, useState } from "react";

type Health = { ok: boolean; service: string; time: string };
type Aircraft = { id: number; name: string; range_nm: number; seats: number };

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const h = await fetch("/api/health").then((r) => r.json());
        setHealth(h);
        const a = await fetch("/api/aircraft").then((r) => r.json());
        setAircraft(a);
      } catch (e: any) {
        setError(e?.message ?? "failed to fetch");
      }
    })();
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>AeroMatch</h1>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <pre>{health ? JSON.stringify(health, null, 2) : "Loading health…"}</pre>
      <ul>
        {aircraft.map((ac) => (
          <li key={ac.id}>
            {ac.name} ({ac.seats} seats)
          </li>
        ))}
      </ul>
    </main>
  );
}
