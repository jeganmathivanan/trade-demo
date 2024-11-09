import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { ReloadIcon, UpdateIcon } from '@radix-ui/react-icons'
import { CopyIcon, DollarSign, ShuffleIcon, Upload, UploadIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import TopupForm from './TopupForm'
import WithdrawalForm from './WithdrawalForm'
import TransferForm from './TransferForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

function Wallet() {
  return (
    <div className="flex flex-col items-center">
        <div className="pt-10 w-full lg:w-[60%]">
            <Card>
            <CardHeader className='pb-9'>
<div className="flex justify-between items-center">
<div className='flex items-center gaps-5'>
<WalletIcon size={30}/>
<div>
    <CardTitle className="text-2xl">My Wallet</CardTitle>
    <div className="flex items-center gaps-2">
        <p className='text-gray-200 text-sm'>
            #A475Ed
        </p>
        <CopyIcon size={15} className="cursor-pointer hover:text-slate-300"/>
    </div>
</div>
</div>
<div>
<ReloadIcon className='w-6 h-6 cursor-pointer hover:text-gray-400'/>

</div>
</div>

            </CardHeader>
<CardContent>
    <div className="flex items-center">
<DollarSign/>
<span className="text-2xl font-semibold">
20000
</span>
    </div>
    <div className="flex gap-7 mt-5">
        <Dialog>
            <DialogTrigger>
                <div className="h-24 w-24 hover:text-grey-400 cursor-pointer
                flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon/>
                    <span className='text-sm mt-2'> Add Money</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Top up Your Wallet
                    </DialogTitle>
                </DialogHeader>
                <TopupForm/>
            </DialogContent>
        </Dialog>
        <Dialog>
            <DialogTrigger>
                <div className="h-24 w-24 hover:text-grey-400 cursor-pointer
                flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon/>
                    <span className='text-sm mt-2'> Withdrawal</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Request withdrawal
                    </DialogTitle>
                </DialogHeader>
                <WithdrawalForm/>
            </DialogContent>
        </Dialog>
        <Dialog>
            <DialogTrigger>
                <div className="h-24 w-24 hover:text-grey-400 cursor-pointer
                flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <ShuffleIcon/>
                    <span className='text-sm mt-2'>Transfer</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                       Transfer to other wallet
                    </DialogTitle>
                </DialogHeader>
            <TransferForm/>
            </DialogContent>
        </Dialog>
    </div>
</CardContent>
            </Card>
            <div className="py-5 pt-10"> 
            <div className='flex gap-2 items-center pb-5'>
                <h1 className='text-2xl font-semiBold'>History
                   
                </h1>
                <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400'/>
            </div> 
            <div className='space-y-5'>
                <div>
                    <Card className="px-5 flex justify-between items-center p-2">
                      <div className="flex items-center gap-5">
<Avatar>
    <AvatarFallback>
        <ShuffleIcon className=""/>
    </AvatarFallback>
</Avatar>
<div className="space-y-1"><h1>buy Asset
    </h1>
    <p className='text-sm text-gray-500'> 2024-06-02</p>
    </div>
                      </div>
                      <div>
                        <p className={"text-green-500"}>999 USD</p>
                      </div>
                    </Card>
                </div>


{[1,1,1,1,1,1,1].map((item,i)=><div key={i}>
                    <Card className="px-5 flex justify-between items-center p-2">
                      <div className="flex items-center gap-5">
<Avatar>
    <AvatarFallback>
        <ShuffleIcon className=""/>
    </AvatarFallback>
</Avatar>
<div className="space-y-1"><h1>buy Asset
    </h1>
    <p className='text-sm text-gray-500'> 2024-06-02</p>
    </div>
                      </div>
                      <div>
                        <p className={"text-green-500"}>999 USD</p>
                      </div>
                    </Card>
                </div> )}

            </div>
            </div>
        </div>
       
    </div>
  )
}

export default Wallet