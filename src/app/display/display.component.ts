import { Component } from '@angular/core';
import { UserDetailsServiceService } from '../user-details-service.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  users: any[] = [];
  dialog: any;


  constructor(private userDetailsService: UserDetailsServiceService) {
   
  }

  ngOnInit(): void {
   
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }
  
  removeRow(): void {
    if (this.users.length > 0) {
      this.users.pop();
    }
  }
  removeRow1(user: any) {
    // Remove the selected user from the users array
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
  openRegistrationDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '400px', // Adjust the width as needed
    });
  }
  
}
