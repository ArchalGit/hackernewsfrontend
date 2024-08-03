import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatPaginatorModule,
    DragDropModule,
    MatDialogModule,
    MatTabsModule,
    MatAutocompleteModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
