import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../interface/card-interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  isCardAccepted(cardNumber : string[]){
    let body = {
      cardNumber
    }
    
    return this.httpClient.post<CreditCard>(`http://localhost:3004/payment`,body)
  }
}
