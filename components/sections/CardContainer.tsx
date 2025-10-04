import { CardContainerProps } from '@/lib/types/cards';
export default function CardContainer<
  TMain extends object,
  TTopLeft extends object,
  TTopRight extends object,
  TBottomLeft extends object,
  TBottomRight extends object
>({
  Card,
  cardDataArray,
  hasBackgroundGlow = false,
  cardHeight = 112,
}: CardContainerProps<TMain, TTopLeft, TTopRight, TBottomLeft, TBottomRight>) {
  return (
    <div
      className={`w-full flex flex-col ${
        hasBackgroundGlow ? 'bg-(image:--light-fill-gradient)' : ''
      } z-[-0] md:flex-row justify-space px-3 gap-3 pb-3`}
    >
      {cardDataArray?.map((cardData, index) => (
        <Card key={index} {...cardData} customHeight={cardHeight} />
      ))}
    </div>
  );
}
