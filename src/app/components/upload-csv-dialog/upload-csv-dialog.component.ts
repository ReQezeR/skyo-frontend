import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-csv-dialog',
  templateUrl: './upload-csv-dialog.component.html',
  styleUrls: ['./upload-csv-dialog.component.scss']
})
export class UploadCsvDialogComponent{

  shortLink: string = "";
  loading: boolean = false;
  file: File|null = null;

  constructor(public dialogRef: MatDialogRef<UploadCsvDialogComponent>) { }

  onChange(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }

  closeDialog() {
    const formData = new FormData();

    formData.append("data", this.file!);
    this.dialogRef.close(formData);
  }
}
