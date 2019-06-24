import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketConfig } from './websocket.config';
import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public message: Observable<Message>;
  //public wsstate: Observable<string>;

  constructor(private stompService: StompService) {
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

  /*public getSocketStateObservable() {
    return this.wsstate;
  }*/
}
