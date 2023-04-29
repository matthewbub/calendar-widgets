export interface EndlessCardMeta {
  title: string;
  href: string;
  description: string;
  rightLink?: {
    title: string;
    href: string;
  }
  leftLink?: {
    title: string;
    href: string;
  }
}

export interface CardProps extends EndlessCardMeta { };

export interface EndlessCardsProps {
  cards: CardProps[];
  className?: string;
}