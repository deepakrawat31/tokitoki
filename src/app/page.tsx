"use client";

import { useState } from "react";

export default function Home() {
  const [helpTab, setHelpTab] = useState(false);

  return (
    <main className="flex min-h-dvh gap-2 p-2">
      <section className="w-full max-w-xs rounded bg-emerald-800"></section>
      <section className="flex flex-1 items-center justify-center rounded bg-emerald-200">
        <button
          onClick={() => setHelpTab(!helpTab)}
          className="rounded bg-emerald-800 p-2"
        >
          AI
        </button>
      </section>
      {helpTab && (
        <section className="w-full max-w-xs rounded bg-emerald-800"></section>
      )}
    </main>
  );
}
