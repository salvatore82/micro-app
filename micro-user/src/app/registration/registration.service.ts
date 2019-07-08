import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Message } from '@stomp/stompjs';
import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { WebSocketConfig } from './websocket.config';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private userUrl = 'http://localhost:8092/microuser/users';

  public message: Observable<Message>;

  constructor(private http: HttpClient, private stompService: StompService) {
    let stompConfig: StompConfig = {
      url: WebSocketConfig.uri,
      headers: {
      },
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: false
    };
  }

  public connectWebSocket() {
    //this.wsstate = this.stompService.state.pipe(map((state: number) => StompState[state]));
    this.message = this.stompService.subscribe(WebSocketConfig.topic);
  }

  public getSocketDataObservable() {
    return this.message;
  }

  saveUser(user: User, document: File): Observable<number> {
    let formInput: FormData = new FormData();
    formInput.append("document", document);
    formInput.append("user", JSON.stringify(user));
    return this.http.post<number>(this.userUrl, formInput);
  }
}
