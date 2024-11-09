import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import AccountVerificationForm from './AccountVerificationForm'

function Profile() {
    const handleEnableTwoStepVerification = () =>{
        console.log("two step verification");
        
    }
  return (
    <div className='flex flex-col items-center mb-5'>
<div className='pt-10 w-full lg:w-[60%]'>
<Card>
    <CardHeader className="pb-9">
    <CardTitle >
     Your Information
    </CardTitle> 
    </CardHeader>
    <CardContent>
        <div className='lg:flex gap-32'>
          <div className='space-y-7'>
<div className='flex'>
<p className='w-[9rem]'>Email :</p>
<p className='text-gray-500'>jegan@gmail.com</p>
</div>

<div className='flex'>
<p className='w-[9rem]'>Full name :</p>
<p className='text-gray-500'>Jegan M</p>
</div>


<div className='flex'>
<p className='w-[9rem]'>DOB</p>
<p className='text-gray-500'>23/09/2003</p>
</div>


<div className='flex'>
<p className='w-[9rem]'>Nationality :</p>
<p className='text-gray-500'>Earthian</p>
</div>
          </div>
          <div className='space-y-7'>
<div className='flex'>
<p className='w-[9rem]'>Email :</p>
<p className='text-gray-500'>jegan@gmail.com</p>
</div>

<div className='flex'>
<p className='w-[9rem]'>Full name :</p>
<p className='text-gray-500'>Jegan M</p>
</div>


<div className='flex'>
<p className='w-[9rem]'>DOB</p>
<p className='text-gray-500'>23/09/2003</p>
</div>


<div className='flex'>
<p className='w-[9rem]'>Nationality :</p>
<p className='text-gray-500'>Earthian</p>
</div>
          </div>
        </div>
    </CardContent>
    
</Card>
<div className='mt-6'>
    <Card className="w-full">
        <CardHeader className="flex items-center gap-3">
            <CardTitle>
                2 step Verification
            </CardTitle>
            {false ?<Badge className={"space-x-2 text-white bg-green-600"}>
                <VerifiedIcon/>
                <span>Enabled</span>
            </Badge>:
            <Badge className="bg-orange-500"> Disable</Badge>}
        </CardHeader>
        <CardContent>
            <div>
                <Dialog>
                    <DialogTrigger> 
                        <Button>
                            Enabled Two step Verification
                        </Button>
                         </DialogTrigger>
                         <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
Verify your account
                                </DialogTitle>
                            </DialogHeader>
                            <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                         </DialogContent>
                </Dialog>
            </div>
        </CardContent>
    </Card>
</div>
</div>
    </div>
  )
}

export default Profile