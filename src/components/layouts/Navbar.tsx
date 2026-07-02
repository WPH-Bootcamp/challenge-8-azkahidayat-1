import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Logo from '../ui/Logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-xl h-16'>
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size={'icon-xs'}>
            <MenuIcon className='size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent className='inset-x-0'>
          <SheetHeader className='text-neutral-25'>
            <div className='flex justify-between items-center'>
              <Logo />
              <SheetPrimitive.Close data-slot='sheet-close' asChild>
                <Button
                  variant='ghost'
                  className=' text-neutral-25'
                  size='icon-xs'
                >
                  <XIcon className='size-6' />
                  <span className='sr-only'>Close</span>
                </Button>
              </SheetPrimitive.Close>
            </div>
            <div className='mt-6 flex flex-col gap-xl'>
              <SheetPrimitive.Close data-slot='sheet-close' asChild>
                <Link to='/'>
                  <SheetTitle className='font-regular text-md'>Home</SheetTitle>
                </Link>
              </SheetPrimitive.Close>
              <SheetPrimitive.Close data-slot='sheet-close' asChild>
                <Link to='/favorite'>
                  <SheetTitle className='font-regular text-md'>
                    Favorite
                  </SheetTitle>
                </Link>
              </SheetPrimitive.Close>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
