import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryListRoutingModule } from './story-list-routing.module';
import { StoryListComponent } from './story-list.component';


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
import { MatCardModule } from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StoryListComponent
  ],
  imports: [
    CommonModule,
    StoryListRoutingModule,
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
    MatCardModule,
    MatInputModule,
    Ng2SearchPipeModule
  ]
})
export class StoryListModule { }
