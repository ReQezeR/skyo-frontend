import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Streamer } from '@app/models';

@Component({
  selector: 'app-new-streamer-dialog',
  templateUrl: './new-streamer-dialog.component.html',
  styleUrls: ['./new-streamer-dialog.component.scss']
})
export class NewStreamerDialogComponent{

  form = this.formBuilder.group({
    name: ['', Validators.required],
    watch_time: ['', Validators.required],
    stream_time: ['', Validators.required],
    peak_viewers: ['', Validators.required],
    average_viewers: ['', Validators.required],
    followers: ['', Validators.required],
    followers_gained: ['', Validators.required],
    views_gained: ['', Validators.required],
    partnered: [false],
    mature: [false],
    language: ['', Validators.required]
  });

  constructor(public dialogRef: MatDialogRef<NewStreamerDialogComponent>, private formBuilder: FormBuilder) { }

  closeDialog() {
    if (this.form.valid) {
      this.dialogRef.close(new Streamer(
        {
          channel: this.form.controls['name'].value, 
          watch_time: this.form.controls['watch_time'].value,
          stream_time: this.form.controls['stream_time'].value,
          peak_viewers: this.form.controls['peak_viewers'].value,
          average_viewers: this.form.controls['average_viewers'].value,
          followers: this.form.controls['followers'].value,
          followers_gained: this.form.controls['followers_gained'].value,
          views_gained: this.form.controls['views_gained'].value,
          partnered: this.form.controls['partnered'].value,
          mature: this.form.controls['mature'].value,
          language: this.form.controls['language'].value
        })
      );
    }
  }
}
