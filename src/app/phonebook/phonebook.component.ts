import { Component, OnInit } from '@angular/core';

import {Contact} from '../contact'
import {CONTACTS} from '../mock-contacts'
import {PhonebookService} from '../phonebook-service.service'

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  contacts: Contact[]

  constructor(private phonebookService: PhonebookService) {
    this.contacts = CONTACTS
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.phonebookService.list().subscribe(res => {this.contacts = res['contacts']});
  }
}
