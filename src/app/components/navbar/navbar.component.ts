import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@app/services/data.service';
import { FilterStreamerDialogComponent } from '../filter-streamer-dialog/filter-streamer-dialog.component';
import { NewStreamerDialogComponent } from '../new-streamer-dialog/new-streamer-dialog.component';
import { UploadCsvDialogComponent } from '../upload-csv-dialog/upload-csv-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addStreamerDialog(){
    const dialogRef = this.dialog.open(NewStreamerDialogComponent,
      {
        maxWidth: '1000px',
        width: '80vw',
        autoFocus: false,
        panelClass: 'custom-dialog-container',
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // console.log(result);
        this.dataService.addStreamer(result).subscribe(
          data=>{
            this.dataService.reloadStreamers().subscribe();
          }
        );
      }
    });
  }

  uploadCSVDialog(){
    const dialogRef = this.dialog.open(UploadCsvDialogComponent,
      {
        maxWidth: '1000px',
        width: '80vw',
        autoFocus: false,
        panelClass: 'custom-dialog-container',
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // console.log(result);
        this.dataService.uploadCSV(result).subscribe(
          data=>{
            this.dataService.reloadStreamers().subscribe();
          }
        );
      }
    });
  }
}
