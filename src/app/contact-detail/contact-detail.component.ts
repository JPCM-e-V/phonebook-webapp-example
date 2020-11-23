import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Contact} from '../contact'
import {PhonebookService} from '../phonebook-service.service'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  name: string;

  constructor(private route: ActivatedRoute, private phonebookService: PhonebookService) {
    this.name = this.route.snapshot.paramMap.get('name');
    this.contact = { name:name, phoneNumber: 0}
  }

  ngOnInit(): void {
    this.phonebookService.getContact(this.name).subscribe(res => {this.contact = res});
  }

  delete(): void {
    this.phonebookService.delete(this.contact.name).subscribe();
  }

  save(): void {
    this.phonebookService.save(this.contact.name, this.contact.phoneNumber).subscribe();
  }
}
