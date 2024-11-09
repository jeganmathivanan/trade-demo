import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

function PaymentDetailsForms() {
    const form=useForm({
        resolver:"",
        defaultValue:{
            accountHolderName:"",
            ifsc:"",
            accountNumber:"",
            bankName:""
        }
    })

    const onSubmit=(data)=>{
        console.log(data);
    }
  return (
    <div className='px-10 py-2'>
        <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)}
           className='space-y-6'>
            <FormField
  control={form.control}
  name="accountHolderName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Account Holder Name</FormLabel>
      <FormControl>
        <Input name="accountHolderName" className="border w-full border-gray-700 p-5" placeholder="code with jegan" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="IFSC code"
  render={({ field }) => (
    <FormItem>
      <FormLabel>IFSC Code</FormLabel>
      <FormControl>
        <Input className="border w-full border-gray-700 p-5" placeholder="code with jegan" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>



<FormField
  control={form.control}
  name="accountNumber"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Account number</FormLabel>
      <FormControl>
        <Input name="ifsc" className="border w-full border-gray-700 p-5" placeholder="**********5679" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>


<FormField
  control={form.control}
  name="Confirm Account Holder"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Confirm Account Holder </FormLabel>
      <FormControl>
        <Input className="border w-full border-gray-700 p-5" placeholder="confirm account nimber" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



<FormField
  control={form.control}
  name="bankName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bank Name</FormLabel>
      <FormControl>
        <Input className="border w-full border-gray-700 p-5" placeholder="Yes Bank" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/> 
<DialogClose>
<Button type="submit" className="w-full py-5"> Submit</Button>

</DialogClose>
           </form>
        </Form>
    </div>
  )
}

export default PaymentDetailsForms