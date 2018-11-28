import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpclient: HttpClient, private router: Router)
  {}

  onSubmit(form: NgForm) {

       this.router.navigate(["/home"]);
}
       ngOnInit() {
       }


}
