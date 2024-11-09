import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'

function TransferForm() {
  const [formData, setFormData] = React.useState({
    amount:'',
    walletId:'',
    purpose:'',
  })

  const handleChange=(e)=>{
setFormData({...formData,[e.target.name]: e.target.value })
  }

  const handleSubmit=()=>{
  console.log(formData);
  
  }
  return (
    <div className="pt-10 space-py-5">
      <div>
        <h1 className="pb-1">
          Enter Amount
        </h1>
        <Input name="amount" onChange={handleChange} value={FormData.amount}
        className="py-7"
        placeholder="$9999"/>
      </div>

      <div>
        <h1 className="pb-1">
          Wallet Id
        </h1>
        <Input name="walletId" onChange={handleChange} value={FormData.walletId}
        className="py-7"
        placeholder="$9#ADER444"/>
      </div>

      <div>
        <h1 className="pb-1">
          Wallet Id
        </h1>
        <Input name="purpose" onChange={handleChange} value={FormData.purpose}
        className="py-7"
        placeholder="gift for your friend....."/>
      </div>
      <DialogClose>
      <Button onClick={handleSubmit} className="w-full py-7 mt-5">submit</Button>
      </DialogClose>
   
    </div>
  )
}

export default TransferForm