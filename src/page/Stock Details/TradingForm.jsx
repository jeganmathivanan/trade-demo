import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { BookMarkedIcon, DotIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { useState } from 'react'
import StockChart from '../Home/StockChart'

function TradingForm() {
    const [orderType, setOrderType] = useState("BUY")
    const handleChange=()=>{

    }
  return (
    <div className="space-y-10 p-5">
        <div>
            <div className="flex gap-4 items-center justify-between">
                <Input className="py-7 focus:outline-none"
                 placeholder = "Enter Amounr...."
                 onChange={handleChange}
                 type="number"
                 name="amount"


                />
                <div>
                    <p className="border text-2xl flex justify-center">
4563
                    </p>

                </div>

            </div>
            {true&&<h1 className='text-red-600'>insuffient wallet balance to buy</h1>}
        </div>
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
                {/* <Button>
                    {true ?(<BookmarkFilledIcon  className="h-6 w-6"/>):( <BookMarkedIcon className="h-6 w-6"/>) }
                    
                   
                </Button> */}


                {/* <Dialog>
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
                         </DialogContent>
                </Dialog> */}
            </div>
          </div>
          
            </div>
            <div className="flex items-center justify-between">
                <p>order type</p>
                <p>Market order</p>
            </div>
            <div className="flex items-center justify-between">
<p>{orderType=="BUY"?"Available case":"Available Quantity"}</p>
<p>
{orderType=="BUY"?9000:23.08}
</p>
            </div>
            <div>
                <Button className={`w-full py-6 ${orderType=="SELL"?"bg-red-600 text-white":""}`}>{orderType}</Button>
                <Button varient="link" className="w-full mt-5 text-xl" onClick={()=>setOrderType(orderType=="BUY"?"SELL":"BUY")}>{orderType=="BUY"?"Or sell" : "or Buy"}</Button>
            </div>
            
    </div>
  )
}

export default TradingForm