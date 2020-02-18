import { Component, OnInit } from "@angular/core";
import { SalesPerson } from "./sales-person";

@Component({
  selector: "app-sales-person-list",
  templateUrl: "./sales-person-list-bootstrap.component.html",
  styleUrls: ["./sales-person-list.component.css"]
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anoop", "Gupta", "aaa@getMaxListeners.com", 500),
    new SalesPerson("Sarthak", "Gupta", "sarthakgupta98@gmail.com", 1000),
    new SalesPerson("Gupta", "Sarthak", "aaabbb@gmail.com", 10000)
  ];

  constructor() {}

  ngOnInit(): void {}
}
