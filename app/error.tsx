'use client';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: { message: string; code: number };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-center">
      <h1 className="text-4xl font-bold text-[var(--typography-active)] mb-4">
        {error?.code ?? 404}
      </h1>
      <p className="text-lg text-[var(--typography-secondary)] mb-6">
        Ooops, you&apos;ve stumbled on something. {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="px-5 py-1 sm:px-8 sm:py-2 bg-[var(--button-primary)] text-[var(--typography-active)] border-[var(--brand-color)] border-1 rounded hover:bg-[var(--green-800)] cursor-pointer transition"
      >
        Try again
      </button>
    </div>
  );
}
