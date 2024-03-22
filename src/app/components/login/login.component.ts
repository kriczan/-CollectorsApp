import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../model/IUser';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: IUser = { id: 0, username: '' };

  constructor(private router: Router, private userService: UserService) { }

  setUsername() {
    if (this.user.username && this.user.username.trim() !== '') {
      this.userService.loginUser(this.user).subscribe(result => {
        localStorage.setItem("userId", result.id.toString());
        this.router.navigate(['/home']);
      })
    }
  }
}
