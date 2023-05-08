import React, { FC } from 'react';
import { EndlessCardsProps, CardProps } from '.';

export const Card: FC<CardProps> = ({
  title,
  description,
  leftLink,
  rightLink,
  href
}) => {
  return (
    <article className='rounded-sm dark:bg-neutral-800 dark:hover:bg-neutral-800/70 p-6 flex flex-col'>
      <header>
        {title && (
          <a href={href} className="">
            <h2 className="text-lg text-zinc-200 mb-2">{title}</h2>
          </a>
        )}
      </header>
      <section className="flex-1 items-start justify-start">
        {description && (
          <p className="text-base text-zinc-400">{description}</p>
        )}
      </section>
      <footer className="w-full flex-2">
        <nav className="w-full pt-4">
          <ul className="list-none p-0 m-0 flex justify-between w-full">
            {leftLink && (
              <li>
                <a href={leftLink.href} className="text-blue-400 hover:text-blue-500">
                  {leftLink.title}
                </a>
              </li>
            )}
            {rightLink && (
              <li>
                <a href={rightLink.href} className="text-blue-400 hover:text-blue-500">
                  {rightLink.title}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </footer>
    </article>
  )
}

const EndlessCards: FC<EndlessCardsProps> = ({ cards, className = 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4' }) => {
  return (
    <section className={className}>
      {cards && cards.length > 0 && cards.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          leftLink={item.leftLink}
          rightLink={item.rightLink}
          href={item.href}
        />
      ))}
    </section>
  )
};

export default EndlessCards;