export class Payment {
    paymentId:number;
    paymentMode:String;
    amount:number;
  
   
    constructor(
       paymentId:number,
       paymentMode:String,
       amount:number,
       
    ){
       this.paymentId=paymentId;
       this.paymentMode=paymentMode;
       this.amount= amount;
    
    }
}