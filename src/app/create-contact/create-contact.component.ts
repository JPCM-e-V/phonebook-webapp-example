import { Component, OnInit } from '@angular/core';

import {Contact} from '../contact'
import {PhonebookService} from '../phonebook-service.service'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact;
  name: string;

  constructor(private phonbookService: PhonebookService) {
    this.contact = { name:name, phoneNumber: 0}
  }

  ngOnInit(): void {
  }

  save(): void {
    this.phonbookService.save(this.contact.name, this.contact.phoneNumber).subscribe();
  }
}
