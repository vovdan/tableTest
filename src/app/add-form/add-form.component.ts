import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from 'src/models/payment';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public payment: Payment = { name: '', cost: '', months:[] };

  @Output()
  public submit:EventEmitter<Payment>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public submitOnClick(){
    this.submit.emit({name:this.payment.name, cost:this.payment.cost, months:[]});
  }
}
