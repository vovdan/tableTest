import { Component } from '@angular/core';
import { Payment } from '../models/payment';

import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public sumCost=0;
  public payments: Payment[]=[];
  public onAdd(payment: Payment){
    console.log(payment);
    this.payments=[... this.payments, payment];
  }

  public onPaymentsChange(payments: Payment[]){
    this.payments=payments;
    this.calculateCost();
  }
  private calculateCost(){
    this.sumCost=0;
    this.payments.forEach(payment=>{
      payment.months.forEach(month=>{
        let daysInMonth=moment().month(month).daysInMonth();
        this.sumCost+=daysInMonth*(+payment.cost);
      })
    })  
  }


}
