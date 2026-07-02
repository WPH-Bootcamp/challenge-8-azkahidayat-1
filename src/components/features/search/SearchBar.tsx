import { searchSchema, type SearchSchema } from '@/schemas/searchSchema';
import { SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className = '' }: SearchBarProps) => {
  const { register, handleSubmit, reset } = useForm<SearchSchema>({
    defaultValues: {
      keyword: '',
    },
    resolver: zodResolver(searchSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data: SearchSchema) => {
    reset();
    navigate(`/searchMovie?query=${data.keyword}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`relative w-full border rounded-xl pl-5xl bg-neutral-950/60 ${className}`}
    >
      <input
        type='text'
        placeholder='Search Movie'
        className='placeholder:text-sm placeholder:text-neutral-500 py-md w-full focus:outline-0'
        {...register('keyword')}
      />
      <SearchIcon className='absolute size-5 text-neutral-500 top-3 left-4' />
    </form>
  );
};

export default SearchBar;
