# razorpay_angular11
Razorpay Payment Gateway For Angular 7, 8, 9, 10, 11


Razorpay:
Download/Clone the Git Code.

Run `npm install` // It will install all required node_modules.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



For Existing Project:

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
Add this Above script path to "index.html" file.

Then in the ".component.ts" file

options = {
   "key": "rzp_test_ikO4k5aofb12TL",
   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
   "currency": "INR",
   "name": "Company Name",
   "description": "Description of your Company",
   "image": "your_company_logu.png",  // Your Company Logo with Complete Path https://example.com/assets/image/logo.png
   "handler": (response)=>{
     alert(response.razorpay_payment_id); // When You get Payment success 
     console.log(response.razorpay_payment_id);
   },
   "modal": {
     "ondismiss": function(){
       console.log('Opps! Payment failed. Please Try Again'); // When User Closed the Payment Gateway tab
     }
     },
   "prefill": {
       "name": "",
       "email": "",
       "contact": ""
   },
   "notes": {
       "address": ""
   },
   "theme": {
       "color": "#F37254"
   }
}; 


// On click Call this Function

onOpenGateway(){
rzp1.open();
console.log("Payment GetWay Opened");
}


