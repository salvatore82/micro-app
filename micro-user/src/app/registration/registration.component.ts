import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from './registration.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Registration';
  user = new User;
  file: File;
  private datasubscription: Subscription;
  registered: boolean;
  validated: boolean;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationService.connectWebSocket();
    this.datasubscription = this.registrationService.getSocketDataObservable().subscribe(this.onData);
    //this.statesubscription = this.websocketService.getSocketStateObservable().subscribe(this.onStateChange);
  }

  saveUser() {
    this.registrationService.saveUser(this.user, this.file).subscribe(id => {
      this.user.id = id;
    });
  }

  clear() {
    this.user = new User;
    //this.file = null;
    this.registered = false;
    this.validated = false;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  private onData = (message: Message) => {
    console.log(message.body);
    if (message.body === 'REGISTERED') {
      this.registered = true;
    } else if (message.body === 'VALID') {
      this.validated = true;
    }
    //this.output = this.output.concat(message.body.concat(' '));
    //this.uiData = JSON.parse(message.body);
  }

  private onStateChange = (state: String) => {
    console.log('WS connection state changed ' + state);
  }

  ngOnDestroy() {
    this.datasubscription.unsubscribe();
    //this.statesubscription.unsubscribe();
  }

}
