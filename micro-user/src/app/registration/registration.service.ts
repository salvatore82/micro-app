import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private userUrl = 'http://localhost:8092/microuser/users';

  constructor(private http: HttpClient) { }

  saveUser(user: User, document: File): Observable<number> {
    let formInput: FormData = new FormData();
    formInput.append("document", document);
    formInput.append("user", JSON.stringify(user));
    return this.http.post<number>(this.userUrl, formInput);
  }
}
