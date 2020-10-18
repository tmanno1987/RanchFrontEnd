import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkoutFG: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutFG = this.fb.group({
      customer: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        addr: [''],
        city: [''],
        state: [''],
        zip: [''],
        phone: ['']
      })
    });
  }

  onSubmit() {
    console.log("Submit button pushed..");
    console.log(this.checkoutFG.get('customer').value);
  }
}
