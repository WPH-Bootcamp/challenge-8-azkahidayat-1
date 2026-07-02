import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/common/Logo';
import { useState } from 'react';

type OffCanvasMenuProps = {
  className?: string;
};

const OffCanvasMenu = ({ className = '' }: OffCanvasMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      <Sheet open={open} onOpenChange={setOpen}>
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
          </SheetHeader>
          <div className='flex flex-col gap-xl px-4'>
            {/* <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Link to='/'>
                <p className='font-regular text-neutral-25 text-md'>Home</p>
              </Link>
            </SheetPrimitive.Close>

            <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Link to='/favorite'>
                <p className='font-regular text-neutral-25 text-md'>Favorite</p>
              </Link>
            </SheetPrimitive.Close> */}

            <NavLink
              to='/'
              end
              className={({ isActive }: { isActive: boolean }) =>
                `text-md  ${isActive ? 'text-primary-300 font-bold' : 'text-neutral-25 font-regular'}`
              }
            >
              <span className='hover:underline'>Home</span>
            </NavLink>

            <NavLink
              to='/favorite'
              className={({ isActive }: { isActive: boolean }) =>
                `text-md ${isActive ? 'text-primary-300 font-bold' : 'text-neutral-25 font-regular'}`
              }
            >
              <span className='hover:underline'>Favorite</span>
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OffCanvasMenu;
