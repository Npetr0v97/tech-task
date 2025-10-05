'use client';
import { CardProps } from '@/lib/types/cards';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { TableViewProps } from '@/lib/types/cards';
export default function Card<
  TMain extends object,
  TTopLeft extends object,
  TTopRight extends object,
  TBottomLeft extends object,
  TBottomRight extends object
>({
  topLeftComponent: TopLeft,
  topLeftProps,
  topRightComponent: TopRight,
  topRightProps,
  bottomLeftComponent: BottomLeft,
  bottomLeftProps,
  bottomRightComponent: BottomRight,
  bottomRightProps,
  MainContent,
  mainContentProps,
  customHeight = 112,
}: CardProps<TMain, TTopLeft, TTopRight, TBottomLeft, TBottomRight>) {
  // Dynamic loading for heavier compoents such as the Table. All the "heavy" components can be added to a list
  const DynamicTable = dynamic(() => import('../ui/TableView'), {
    loading: () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4"
      >
        Loading table...
      </motion.div>
    ),
  });

  const Content = (
    MainContent.displayName === 'TableView' ? DynamicTable : MainContent
  ) as React.ComponentType<TMain | TableViewProps>;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col w-full font-bold  items-center justify-center border-1 border-[var(--green-800)] rounded-[5px] overflow-hidden  h-[${customHeight}px]`}
    >
      {(TopLeft || TopRight) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="w-full flex justify-between items-center px-2 md:px-3 py-[11px] border-b-1 border-[var(--stroke-main)] bg-[var(--green-900)]"
        >
          <div>{TopLeft && <TopLeft {...(topLeftProps as TTopLeft)} />}</div>
          <div>
            {TopRight && <TopRight {...(topRightProps as TTopRight)} />}
          </div>
        </motion.div>
      )}
      <div className="flex w-full justify-center items-center flex-6 bg-(image:--second-gradient)">
        <Content {...mainContentProps} />
      </div>
      {(BottomLeft || BottomRight) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="w-full flex justify-between items-center px-2 sm:px-3 border-t border-[var(--stroke-main)] bg-[image:var(--background-gradient)]"
        >
          <div>
            {BottomLeft && <BottomLeft {...(bottomLeftProps as TBottomLeft)} />}
          </div>
          <div>
            {BottomRight && (
              <BottomRight {...(bottomRightProps as TBottomRight)} />
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
