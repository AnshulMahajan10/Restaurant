import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seslectedModel = 'none';

  constructor() { }

  ngOnInit() {
  }



  selectCategory() {

  this.seslectedModel = 'Category';
}

selectSubCategory() {

    this.seslectedModel = 'subcategory';

  }

  selectNutrition() {

      this.seslectedModel = 'nutrition';

    }

}
