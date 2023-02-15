import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {
  sortBy = 'id';
  orderBy = false;
  cards:any[] = [
  {
      "id": 200,"first_name": "Hamid","last_name": "Lesnyiu","card_number": "5042767031536225",
      "exp_month": "6","exp_year": "2029","cvv": "333","status": "active"
  },{
    "id": 202,
    "first_name": "Imran","last_name": "Khan","card_number": "6042748031536225",
    "exp_month": "9","exp_year": "2025","cvv": "783","status": "active"
  },{
    "id": 203,"first_name": "Nany","last_name": "Shah","card_number": "8042890931536225",
    "exp_month": "12","exp_year": "2022","cvv": "908","status": "active"
  }];
  constructor() { }

  ngOnInit(): void {
  }
  handleOrderBy(sortBy:string,orderBy:boolean){
    this.sortBy = sortBy;
    this.orderBy = !orderBy;
  }
}
