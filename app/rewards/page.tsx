import Hero from '@/components/sections/Hero';
import Card from '@/components/sections/Card';
export default function Rewards() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <Card />
      <h1>This is the rewards page</h1>
    </div>
  );
}
