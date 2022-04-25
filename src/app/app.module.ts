import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { StreamersTableComponent } from './components/streamers-table/streamers-table.component';
import { NewStreamerDialogComponent } from './components/new-streamer-dialog/new-streamer-dialog.component';
import { EditStreamerDialogComponent } from './components/edit-streamer-dialog/edit-streamer-dialog.component';
import { FilterStreamerDialogComponent } from './components/filter-streamer-dialog/filter-streamer-dialog.component';
import { StatsComponent } from './pages/stats/stats.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UploadCsvDialogComponent } from './components/upload-csv-dialog/upload-csv-dialog.component';
import { E404Component } from './components/e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StreamersTableComponent,
    NewStreamerDialogComponent,
    EditStreamerDialogComponent,
    FilterStreamerDialogComponent,
    StatsComponent,
    UploadCsvDialogComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
