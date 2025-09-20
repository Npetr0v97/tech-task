export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="flex flex-col items-center">
        {/* Spinner animation*/}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--brand-color)] mb-4"></div>

        <p className="text-[var(--typography-secondary)] text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
