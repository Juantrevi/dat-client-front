import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  //Comunication between parent to child component
  //@Input() usersFromHomeComponent: any;
  //Comunication between child to parent component
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
  
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => {
        console.log(error);
      },
    });
  }

  cancel(){
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}