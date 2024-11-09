import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { BookMarkedIcon, DotIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import TradingForm from './TradingForm'
import StockChart from '../Home/StockChart'

function StockDetails() {
  return (
    <div className="p-5 mt-5">
        <div classs="flex justify-between">
            <div className="flex gap-5 items-center">
            <div className="flex gap-5 item-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"}
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400"></p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1122342324533</span>
                  <span>(-0.23244769%)</span>
                </p>
              </div>
              
            </div>
            <div>
                <Button>
                    {true ?(<BookmarkFilledIcon  className="h-6 w-6"/>):( <BookMarkedIcon className="h-6 w-6"/>) }
                    
                   
                </Button>


                <Dialog>
                    <DialogTrigger> 
                        <Button size="lg">
Trade                        </Button>
                         </DialogTrigger>
                         <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
Verify your account
                                </DialogTitle>
                            </DialogHeader>
                            <TradingForm/>
                         </DialogContent>
                </Dialog>
            </div>
          </div>
          
            </div>
           

        </div>
        <div className='mt-14'>
            <StockChart/>

            </div>
    </div>
  )
}

export default StockDetails