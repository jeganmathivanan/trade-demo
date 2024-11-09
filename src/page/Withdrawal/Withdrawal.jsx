import React from 'react'
import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Table,TableRow, TableBody, TableCaption, TableCell, TableHead, TableHeader } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
function Withdrawal() {
  return (
    <div className="px-5 mt-5 lg:p-20">
        <h1 className='font-bold text-3xl pb-5'> Withdrawal</h1>
        <Table className="border">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader> 
      <TableRow>

        <TableHead className="py-5">Date & Time</TableHead>
        <TableHead>Method</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
        {/* <TableHead>order Type</TableHead>
        <TableHead className="">Profit/Loss</TableHead>
        <TableHead className="">Value</TableHead> */}

     </TableRow>
    </TableHeader>
    <TableBody>
      {[1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
      {/* <TableCell>BTC</TableCell> */}
       <TableCell><p>
        2024/05/31
        </p>
        <p className='text-gray-400'>12:39:32</p></TableCell>
        {/* <TableCell className="font-medium flex items-center gaps-2">
          <Avatar className="Z-50">
          <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"></AvatarImage>
          </Avatar>
        <span>BitCoin</span>
        </TableCell> */}
        <TableCell>Bank Amount</TableCell>
        <TableCell>9887754</TableCell>
        <TableCell>-0.2344</TableCell>
        {/* <TableCell className="">$250.00</TableCell>
        <TableCell className="">$250.00</TableCell> */}
      </TableRow> )}
      
    </TableBody>
  </Table>
  </div>
  )
}

export default Withdrawal