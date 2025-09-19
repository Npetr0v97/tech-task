import { IconProps } from './icon';

export type SimpleTextProps = {
  value: string | { label: string; text: string };
  className?: string;
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

export type CardProps<T extends object> = {
  topLeftComponent?: React.ReactNode;
  topRightComponent?: React.ReactNode;
  bottomLeftComponent?: React.ReactNode;
  bottomRightComponent?: React.ReactNode;
  MainContent: React.ComponentType<T>;
  mainContentProps: T;
};

export type CardContainerProps<T extends object> = {
  Card: React.ComponentType<CardProps<T>>;
  cardDataArray: CardProps<T>[];
  className?: string;
  hasBackgroundGlow?: boolean;
};
