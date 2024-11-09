import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Table,TableRow, TableBody, TableCaption, TableCell, TableHead, TableHeader } from '@/components/ui/table'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AssetTable() {
  const navigate = useNavigate();
  return (
 
      <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader> 
      <TableRow>
        <TableHead className="w-[100px]">Coin</TableHead>
        <TableHead>Symbol</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>24h</TableHead>
        <TableHead className="text-right">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
        <TableCell onClick={()=>navigate('/market/bitcoin/')} className="font-medium flex items-center gaps-2">
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
  )
}

export default AssetTable