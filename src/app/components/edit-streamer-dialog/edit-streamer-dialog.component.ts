import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Streamer } from '@app/models';

@Component({
  selector: 'app-edit-streamer-dialog',
  templateUrl: './edit-streamer-dialog.component.html',
  styleUrls: ['./edit-streamer-dialog.component.scss']
})
export class EditStreamerDialogComponent{

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

  constructor(@Inject(MAT_DIALOG_DATA) public streamerData: Streamer, public dialogRef: MatDialogRef<EditStreamerDialogComponent>, private formBuilder: FormBuilder) { 
    this.resetForm(streamerData);
  }

  resetForm(data: Streamer){
    this.form = this.formBuilder.group({
      name: [data.channel, Validators.required],
      watch_time: [data.watch_time, Validators.required],
      stream_time: [data.stream_time, Validators.required],
      peak_viewers: [data.peak_viewers, Validators.required],
      average_viewers: [data.average_viewers, Validators.required],
      followers: [data.followers, Validators.required],
      followers_gained: [data.followers_gained, Validators.required],
      views_gained: [data.views_gained, Validators.required],
      partnered: [data.partnered],
      mature: [data.mature],
      language: [data.language, Validators.required]
    });
  }

  closeDialog() {
    if (this.form.valid) {
      this.dialogRef.close(new Streamer(
        {
          id: this.streamerData.id,
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
