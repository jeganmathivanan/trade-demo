import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
  } from '@/components/ui/sheet';
import { AvatarIcon, DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
  import React from 'react';
import { Sidebar } from './Sidebar';
  
  export const Navbar = () => {
    return (
      <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Sheet>
            <SheetTrigger>
                <Button variant="ghost"  size="icon" className="rounded-full h-11 w-11">
                    <DragHandleHorizontalIcon className='h-7 w-7' />
                </Button>
            </SheetTrigger>
            <SheetContent  className = "W-72 border-r-0 flex flex-col justify-center" side='left'>
              <SheetHeader>
                <SheetTitle>
                    <div className="text-3xl flex justify-center items-center gap-1">
<Avatar>
    <AvatarImage src="https://media.istockphoto.com/id/919509810/photo/new-virtual-money-concept-gold-bitcoins-is-digital-crypto-currency-use-blockchain-technology.jpg?s=1024x1024&w=is&k=20&c=XG_z0UOP3RHw6eJ1LOzuwOWwvdkv_qv3mr4APBDIbVk="/ >
</Avatar>
<div>
    <span className="font-bold text-orange-700"> demo</span>
    <span> App</span>
</div>
                    </div>
                </SheetTitle>
              </SheetHeader>
              <Sidebar/> 
            </SheetContent>
          </Sheet>
          <p className="text-sm lg:text-base cursor-pointer">
            Demo Trade
          </p>
          <div className='p-0 ml-9'>
            <Button variant="outline" className="flex items-center gap-3">
                <MagnifyingGlassIcon/>
                <span>Search</span>

            </Button>

          </div>
        </div>
        <div>

            <Avatar>
                <AvatarFallback>

                    z
                </AvatarFallback>
            </Avatar>
        </div>
      </div>
    );
  };
  