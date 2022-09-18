import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http: HttpClient
  ){}

  createContact(contact: Contact) {
    return this.http.post("http://localhost:8080/contacts", contact)
  }
}
