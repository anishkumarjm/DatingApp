import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state: boolean=false;
@Input() usersFromHomeComponent: any;
@Output() cancelRegister = new EventEmitter();
model: any={};
  constructor(private accountservice: AccountService) { }

ngOnInit(): void {
}

register(){
  this.accountservice.register(this.model).subscribe(
    Response=> {console.log(Response);}
  )
console.log(this.model)
}
cancel(){
  this.cancelRegister.emit(false);

}
}
