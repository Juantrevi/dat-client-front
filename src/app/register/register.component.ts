import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  //Comunication between parent to child component
  @Input() usersFromHomeComponent: any;
  //Comunication between child to parent component
  @Output() cancelRegister = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  
  }

  register(){
    console.log(this.model);
  }

  cancel(){
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
