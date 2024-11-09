import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input'
import React from 'react'

export default function WithdrawalForm() {
   // States for amount and payment method
   const [amount, setAmount] = React.useState('');
 
   // Handle amount change
   const handleChange = (e) => {
     setAmount(e.target.value); // Capture the input value
   };
 
   // Handle payment method change
   const handlePaymentMethodChange = (value) => {
     setPaymentMethod(value); // Set the selected payment method
   };
 
   const handleSubmit = (e) =>{
     console.log(amount);
     
   }
  return (
    <div className='pt-10 space-y-5'>
     <div className='flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4'>
      <p>Available Balance</p>
      <p>$9000</p>
     </div>


<div className='flex flex-col items-center'>
  <h1> Enter Withdrawal amount</h1>
  <div className='flex items-center justify-center'>
      <Input type='number' onChange={handleChange} value={amount} className="withdrawalInout py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center" />

     </div>
</div>

<div>
  <p className="pb-2"> Transfer to</p>
  <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
    <img className="h-8 w-8" src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png"/>
<div>
<p className="text-xl font-bold">Yes Bank</p>
<p className="text-xs">
 **************1651
</p>
</div>
  </div>
</div>
<DialogClose>


<Button onClick={handleSubmit} className="w-full py-7 text-xl"> withdraw</Button>
</DialogClose>
    </div>
  
  )
}
