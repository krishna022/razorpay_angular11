import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

declare var Razorpay: any;  // Declear RazorPay

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paymentForm: any; submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router){ }
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact:['', Validators.required],
      address: [''],
      amount: ['', Validators.required],
    });
  }

  get f() { return this.paymentForm.controls; }




razorpay_payment_id:any; response:any;
// Online Payment Area //
options = {
   "key": "rzp_test_ikO4k5aofb12TL",
   "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
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


onOpenGateway(){
this.options.amount = this.paymentForm.value.amount+'00'; // Overwriting the Amount value of Option from input data
this.options.prefill.name = this.paymentForm.value.name; // Overwriting the client Name of Option from input data
this.options.prefill.email = this.paymentForm.value.email; // Overwriting the client Email of Option from input data
this.options.prefill.contact = this.paymentForm.value.mobile;  // Overwriting the client Mobile of Option from input data
this.options.notes.address = this.paymentForm.value.address;   // Overwriting the client Address of Option from input data
var rzp1 = new Razorpay(this.options);
rzp1.open();
console.log("Payment GetWay Opened");
}

}
