import React from 'react'
import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Table,TableRow, TableBody, TableCaption, TableCell, TableHead, TableHeader } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'

function Watchlist() {
    const handleRemoveToWatchlist=(value)=>{
        console.log(value)
    }
  return (
    <div className="px-5 mt-5 lg:p-20">
        <h1 className='font-bold text-3xl pb-5'> Portfolio</h1>
        <Table className="border">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader> 
      <TableRow>
        <TableHead className="py-5">Coin</TableHead>
        <TableHead>Symbol</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>24h</TableHead>
        <TableHead className="text-right">Price</TableHead>
        <TableHead className="text-right">REMOVE</TableHead>

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
        <TableCell className="text-right">
            <Button varient="ghost" onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">
            <BookmarkFilledIcon className='w-6 h-6'/>
            </Button></TableCell>
      </TableRow> )}
      
    </TableBody>
  </Table>
  </div>
  )
}

export default Watchlist