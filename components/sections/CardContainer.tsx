import { CardProps } from '@/lib/types/cards';
import { CardContainerProps } from '@/lib/types/cards';
export default function CardContainer<T extends object>({
  Card,
  cardDataArray,
  className = '',
  hasBackgroundGlow = false,
}: CardContainerProps<T>) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-space px-4 gap-3 mb-3 ${className}`}
    >
      {cardDataArray?.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
      {hasBackgroundGlow && (
        <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none">
          <div className="h-[40vh] w-[80vw] bg-[image:var(--light-fill-gradient)] opacity-30 blur-3xl rounded-full" />
        </div>
      )}
    </div>
  );
}
