import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    ContactDetailComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule, MatPaginatorModule]
})
export class AppModule { }
