import { CardProps } from '@/lib/types/cards';

export default function Card<T extends object>({
  topLeftComponent,
  topRightComponent,
  bottomLeftComponent,
  bottomRightComponent,
  MainContent,
  mainContentProps,
}: CardProps<T>) {
  return (
    <div
      className={`flex flex-col w-full font-bold  items-center justify-center border-1 border-[var(--stroke-main)] rounded-lg overflow-hidden  min-h-[120px]`}
    >
      {(topLeftComponent || topRightComponent) && (
        <div className="w-full h-8 flex justify-between items-center flex-3 px-2 sm:px-3 border-b-1 border-[var(--stroke-main)] bg-(image:--background-gradient) min-h-[55px]">
          <div>{topLeftComponent ?? ''}</div>
          <div>{topRightComponent ?? ''}</div>
        </div>
      )}
      <div className="flex w-full justify-center items-center flex-6 bg-(image:--second-gradient)">
        <MainContent {...mainContentProps} />
      </div>
      {(bottomLeftComponent || bottomRightComponent) && (
        <div className="w-full h-8 flex justify-between items-center flex-3 px-2 sm:px-3 border-t-1 border-[var(--stroke-main)] bg-(image:--background-gradient) min-h-[55px]">
          <div>{bottomLeftComponent ?? ''}</div>
          <div>{bottomRightComponent ?? ''}</div>
        </div>
      )}
    </div>
  );
}
