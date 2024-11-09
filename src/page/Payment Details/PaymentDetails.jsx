import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import PaymentDetailsForms from './PaymentDetailsForms'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

function PaymentDetails() {
  return (
    <div className='px-20'>
        <h1 className='text-3xl font-bold py-10'> Paymenr Details</h1>

        <Card>
            <CardHeader>
                <CardTitle>
                    Yes Bank
                </CardTitle>
                    <CardDescription>
                        A/C No :
                        *******************1651
                    </CardDescription>
                
            </CardHeader>
            <CardContent>
                <div className='flex items-center'>
                    <p className="w-32">A/c Holder :</p>

<p className="text-gray-400">Code with jegan</p>

                </div>
                <div className="flex items-center">
    <p className="w-32">IFSC</p>
    <p className="text-gray-400">YES123456</p>
</div>
            </CardContent>
        </Card>
        <Dialog>
  <DialogTrigger><Button className="py-6">Add payment details</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Patment Details</DialogTitle>
     <PaymentDetailsForms/>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default PaymentDetails