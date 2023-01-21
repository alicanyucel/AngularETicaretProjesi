import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() total: number;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
payment()
{
  this.myEvent.emit({total:this.total})
  document.getElementById("paymentCloseBtn").click();
}
}
