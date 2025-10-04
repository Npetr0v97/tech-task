import { IconProps } from './icon';

export type SimpleTextProps = {
  value: string | { label: string; text: string };
  className?: string;
};

export type FooterProps = {
  text: string;
};

export type ComplexViewProps = {
  items: {
    Component: React.ComponentType<unknown>;
    className?: string;
  }[];
  className?: string;
};

export type DetailProps = {
  label: string;
  value: string | number;
  firstElement?: boolean;
  finalElement?: boolean;
};

export type UserDetailsProps = {
  username: string;
  imgUrl?: string;
};

export type SummaryViewProps = {
  text: string;
  Icon?: React.ComponentType<IconProps>;
  className?: string;
};

export type ClaimButtonProps = {
  value: string | number;
  Icon: React.ComponentType<IconProps>;
};

export type TableViewProps = {
  headers: string[];
  rowLabels: string[];
  data: (string | number)[][];
  className?: string;
};

export type CardProps<
  TMain extends object,
  TTopLeft extends object,
  TTopRight extends object,
  TBottomLeft extends object,
  TBottomRight extends object
> = {
  MainContent: React.ComponentType<TMain>;
  mainContentProps: TMain;

  topLeftComponent?: React.ComponentType<TTopLeft>;
  topLeftProps?: TTopLeft;

  topRightComponent?: React.ComponentType<TTopRight>;
  topRightProps?: TTopRight;

  bottomLeftComponent?: React.ComponentType<TBottomLeft>;
  bottomLeftProps?: TBottomLeft;

  bottomRightComponent?: React.ComponentType<TBottomRight>;
  bottomRightProps?: TBottomRight;

  customHeight?: number;
};

export type CardContainerProps<
  TMain extends object,
  TTopLeft extends object,
  TTopRight extends object,
  TBottomLeft extends object,
  TBottomRight extends object
> = {
  Card: React.ComponentType<
    CardProps<TMain, TTopLeft, TTopRight, TBottomLeft, TBottomRight>
  >;
  cardDataArray: CardProps<
    TMain,
    TTopLeft,
    TTopRight,
    TBottomLeft,
    TBottomRight
  >[];
  className?: string;
  hasBackgroundGlow?: boolean;
  cardHeight?: number;
};
