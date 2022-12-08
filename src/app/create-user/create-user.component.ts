import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private userService: UserService, public user:UserService) { }
  submit(user:any){
    this.userService.createUser(user).subscribe(data => {
      alert(data)
    })
  }
}
