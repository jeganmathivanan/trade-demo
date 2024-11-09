import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React from 'react';

function TopupForm() {
  // States for amount and payment method
  const [amount, setAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('RAZORPAY');

  // Handle amount change
  const handleAmountChange = (e) => {
    setAmount(e.target.value); // Capture the input value
  };

  // Handle payment method change
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value); // Set the selected payment method
  };

  const handleSubmit = (e) =>{
    console.log(amount, paymentMethod);
    
  }

  return (
    <div className='pt-10 space-y-5'>
      {/* Amount input section */}
      <div>
        <h1 className='pb-1'>Enter Amount</h1>
        <Input
          onChange={handleAmountChange}  // Handle input changes
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>

      {/* Payment method selection */}
      <div>
        <h1 className="pt-1">Select Payment Method</h1>
        <RadioGroup 
          onValueChange={handlePaymentMethodChange} // Handle radio button change
          className="flex"
          value={paymentMethod}  // Bind state to the selected radio button
        >
          {/* Razorpay radio button */}
          <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
            <RadioGroupItem
              icon={<DotFilledIcon />}  // Correct icon prop usage
              className="h-9 w-9"  // Adjusted class names for proper size
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-5 w-32">
<img src="https://w7.pngwing.com/pngs/586/552/png-transparent-razorpay-hd-logo-thumbnail.png"
/>
              </div>

            </Label>
             {/* Add label for accessibility */}
          </div>
          <div className='flex items-center space-x-2 border p-3 px-5 rounded-md'>
            <RadioGroupItem
              icon={<DotFilledIcon />}  // Correct icon prop usage
              className="h-9 w-9"  // Adjusted class names for proper size
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-5 w-32">
<img src="https://w7.pngwing.com/pngs/586/552/png-transparent-razorpay-hd-logo-thumbnail.png"
/>
              </div>

            </Label>
             {/* Add label for accessibility */}
          </div>

          {/* Add more payment methods here, if needed */}
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  );
}

export default TopupForm;
