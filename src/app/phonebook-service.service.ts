import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Contact } from './contact';

@Injectable({ providedIn: 'root' })
export class PhonebookService {

  constructor(private http:HttpClient) { }

  list(): Observable<Contact[]> {
    var url = 'http://localhost:5000/list';
    return this.http.get<Contact[]>(url);
  }

  getContact(name: string): Observable<Contact> {
    // TODO: send the message _after_ fetching the hero
    var url = `http://localhost:5000/get/${name}`;
    return this.http.get<Contact>(url);
  }

  save(name: string, phonenumber: number): Observable<any> {
    var url = 'http://localhost:5000/add';
    return this.http.post(url, {'name': name, 'number': phonenumber}, {responseType: 'text'});
  }

  delete(name: string): Observable<any> {
    var url = `http://localhost:5000/delete/${name}`;
    return this.http.delete(url, {responseType: 'text'});
  }
}
