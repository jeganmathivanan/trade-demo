import React from 'react'
import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Table,TableRow, TableBody, TableCaption, TableCell, TableHead, TableHeader } from '@/components/ui/table'
function Portfolio() {
  return (
    <div className="px-5 mt-5 lg:p-20">
        <h1 className='font-bold text-3xl pb-5'> Portfolio</h1>
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader> 
      <TableRow>
        <TableHead className="w-[100px]">Coin</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Unit</TableHead>
        <TableHead>Change</TableHead>
        <TableHead className="text-right">Change%</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
        <TableCell className="font-medium flex items-center gaps-2">
          <Avatar className="Z-50">
          <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"></AvatarImage>
          </Avatar></TableCell>
        <span>BitCoin</span>
        <TableCell>98765423</TableCell>
        <TableCell>9887754</TableCell>
        <TableCell>-0.2344</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow> )}
      
    </TableBody>
  </Table>
  </div>
  )
}

export default Portfolio