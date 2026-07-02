import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { ArrowLeft, SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/features/search/SearchBar';

type OffCanvasSearchProps = {
  className?: string;
};

const OffCanvasSearch = ({ className = '' }: OffCanvasSearchProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size={'icon-xs'}>
            <SearchIcon className='size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent className='inset-x-0'>
          <SheetHeader className='text-neutral-25'>
            <div className='flex gap-xl items-center'>
              <SheetPrimitive.Close data-slot='sheet-close' asChild>
                <Button
                  variant='ghost'
                  className=' text-neutral-25'
                  size='icon-xs'
                >
                  <ArrowLeft className='size-6' />
                  <span className='sr-only'>Close</span>
                </Button>
              </SheetPrimitive.Close>
              <SearchBar />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OffCanvasSearch;
