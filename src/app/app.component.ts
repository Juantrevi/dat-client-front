import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Dating app';
  users: any;
  LINK_ADDRESS: string = 'https://localhost:5001/';

  //When ever we create a new instance of a class, the constructor is called
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    //The get method returns an observable, so we need to subscribe to it to get the data
    this.http.get(this.LINK_ADDRESS + 'api/users').subscribe({
      
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request completed');
      }

    })

  }





}
