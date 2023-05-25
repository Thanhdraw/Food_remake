import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  contacts: any[] = [];

  constructor() {}

  addContact(contact: any) {
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }
}
