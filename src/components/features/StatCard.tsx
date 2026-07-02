import type { LucideIcon } from 'lucide-react';

type StatCardProps = {
  stat: {
    value: string | number;
    key: 'rating' | 'genre' | 'ageLimit';
    title: string;
    icon: LucideIcon;
    iconClassName?: string;
  };
};

const StatCard = ({ stat }: StatCardProps) => {
  const Icon = stat.icon;

  return (
    <div className='rounded-2xl border p-xl lg:p-2xl gap-md flex flex-col items-center justify-center w-full bg-black'>
      <Icon
        className={`size-6 lg:size-8 ${stat.iconClassName ? stat.iconClassName : ''}`}
      />
      <p className='text-xs text-neutral-300 lg:text-md text-center'>
        {stat.title}
      </p>
      <p className='font-semibold text-lg text-lg:text-xl text-center'>
        {typeof stat.value === 'number'
          ? `${stat.value.toFixed(1)}/10`
          : stat.value}
      </p>
    </div>
  );
};

export default StatCard;
