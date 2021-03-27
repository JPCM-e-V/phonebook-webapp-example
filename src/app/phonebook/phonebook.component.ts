import { Component, AfterViewInit, OnInit , ViewChild} from '@angular/core';

import {Contact} from '../contact'
import {CONTACTS} from '../mock-contacts'
import {PhonebookService} from '../phonebook-service.service'
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements AfterViewInit, OnInit {
  dataSource: ContactsDataSource

 @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private phonebookService: PhonebookService) {
  }

  ngOnInit(): void {
    this.dataSource = new ContactsDataSource(this.phonebookService);
    this.dataSource.loadContacts(0, 3);
  }
  ngAfterViewInit(): void {
    this.paginator.page
    .pipe(
        tap(() => this.loadContactsPage())
    )
    .subscribe();
  }

  loadContactsPage() {
    this.dataSource.loadContacts(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize);
  }
}

export class ContactsDataSource implements DataSource<Contact> {
  private contactSubject = new BehaviorSubject<Contact[]>([])
  constructor(private phonebookService: PhonebookService) {}

  connect(collectionViewer: CollectionViewer): Observable<Contact[]> {
    return this.contactSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.contactSubject.complete();
  }

  loadContacts(offset: number, pagesize: number): void {
    this.phonebookService.list(offset, pagesize).pipe()
    .subscribe(contacts => this.contactSubject.next(contacts['contacts']));
  }
}
