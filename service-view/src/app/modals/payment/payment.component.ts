import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetailFilmComponent } from 'src/app/component/detail-film/detail-film.component';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public validationCard = true
  public cardNumber : string
  public dateCard : string
  public csv: string
  constructor(
    public dialogRef: MatDialogRef<DetailFilmComponent>,
    public paymentService :PaymentService) { }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  payer(){
    this.paymentService.isCardAccepted([this.cardNumber,this.dateCard,this.csv]).subscribe(verificationCard => {
      if(verificationCard.verification){
        this.dialogRef.close({event : 'close', data : verificationCard});
      }
      else{
        this.validationCard = false
      }
      
    })
  }

}
