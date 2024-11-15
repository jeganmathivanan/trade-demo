import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { ActivityLogIcon, BookmarkIcon, DashboardIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { CreditCardIcon, LandmarkIcon } from 'lucide-react'

import React from 'react'
import { useNavigate } from 'react-router-dom'
const menu = [
    {name:"Home", path:'/', icon:<HomeIcon className='h-6 w-6'/>},
    {name:"Portfolio", path:'/portfolio', icon:<DashboardIcon className='h-6 w-6'/>},
    {name:"Watchlist", path:'/watchlist', icon:<BookmarkIcon className='h-6 w-6'/>},
    {name:"Activity", path:'/activity', icon:<ActivityLogIcon className='h-6 w-6'/>},
   {name:"Wallet", path:'/wallet', icon:<ActivityLogIcon className='h-6 w-6'/>},
    {name:"Payment Details", path:'/payment-details', icon:<ActivityLogIcon className='h-6 w-6'/>},
    {name:"Withdrawal", path:'/withdrawal', icon:<CreditCardIcon className='h-6 w-6'/>},
    {name:"Stock Details", path:'/stock-details', icon:<PersonIcon className='h-6 w-6'/>},
    {name:"Logout", path:'/logout', icon:<ActivityLogIcon  className='h-6 w-6'/>},
    {name:"Profile", path:'/profile', icon:<PersonIcon className='h-6 w-6'/>},

]

export const Sidebar = () => {
  const navigate = useNavigate();


  return (
    <div className='mt-10 space-y-5'>
         {menu.map((item)=>(
            <div key={item.name}>
            <SheetClose className='w-full'>
            <Button variant="outline" className="flex item-center gap-5 py-6 w-full "
            onClick = {()=>navigate(item.path)}>
                <span className='w-8'>{item.icon}</span>
                <p>{item.name}</p>
            </Button>
            </SheetClose>
        </div>
         ))}

    </div>
  )
}
