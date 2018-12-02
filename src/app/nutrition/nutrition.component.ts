import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {

  status: string;
  products = [];
  companies = [];
  companyDetail: any;
  productDetail: any;
  isAuthenticated = false;
  seslectedModel = 'ProductforAdmin';
  currentPage = 1;
  itemskip = 0;
  id = 0;
  productcnt = 0;
  companycnt = 0;

  constructor() { }

  ngOnInit() {
  }


  getProductforAdmin() {

  this.seslectedModel = 'ProductforAdmin';
}

getCompaniesforAdmin() {

    this.seslectedModel = 'CompaniesforAdmin';

  }



}
