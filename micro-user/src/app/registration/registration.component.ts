import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User;
  file: File;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }


  saveUser() {
    this.registrationService.saveUser(this.user, this.file).subscribe(id => {
      this.user.id = id;
    });
  }

  clear() {
    this.user = new User;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

}
