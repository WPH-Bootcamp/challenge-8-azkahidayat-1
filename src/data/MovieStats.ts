import { ClapperboardIcon, Smile, Star, type LucideIcon } from 'lucide-react';

type StatsItem = {
  key: 'rating' | 'genre' | 'ageLimit';
  title: string;
  icon: LucideIcon;
  iconClassName?: string;
};

export const statsConfig: StatsItem[] = [
  {
    key: 'rating',
    title: 'Rating',
    icon: Star,
    iconClassName: 'fill-[#E4A802] text-[#E4A802]',
  },
  {
    key: 'genre',
    title: 'Genre',
    icon: ClapperboardIcon,
  },
  {
    key: 'ageLimit',
    title: 'AgeLimit',
    icon: Smile,
  },
];
