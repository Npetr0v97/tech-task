import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-center">
      <h1 className="text-4xl font-bold text-[var(--typography-active)] mb-4">
        404
      </h1>
      <p className="text-lg text-[var(--typography-secondary)] mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <div className="flex flex-row gap-2">
        <Link
          href="/"
          className="px-5 py-1 sm:px-8 sm:py-2 bg-[var(--button-primary)] text-[var(--typography-active)] border-[var(--brand-color)] border-1 rounded hover:bg-[var(--green-800)] cursor-pointer transition"
        >
          Go home
        </Link>
        <Link
          href="/rewards"
          className="px-5 py-1 sm:px-8 sm:py-2 bg-[var(--button-primary)] text-[var(--typography-active)] border-[var(--brand-color)] border-1 rounded hover:bg-[var(--green-800)] cursor-pointer transition"
        >
          Go to Rewards
        </Link>
      </div>
    </div>
  );
}
