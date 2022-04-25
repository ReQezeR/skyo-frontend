import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


const number_props = ['id', 'watch_time', 'stream_time', 'peak_viewers', 'average_viewers', 'followers', 'followers_gained', 'views_gained'];
const string_props = ['channel', 'language'];
const bool_props = ['partnered', 'mature'];
@Component({
  selector: 'app-filter-streamer-dialog',
  templateUrl: './filter-streamer-dialog.component.html',
  styleUrls: ['./filter-streamer-dialog.component.scss']
})
export class FilterStreamerDialogComponent{
  formType: string = '';

  form = this.formBuilder.group({
    string_data: [''],
    number_data: [''],
    bool_data: [false]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public prop_name: string, public dialogRef: MatDialogRef<FilterStreamerDialogComponent>, private formBuilder: FormBuilder) {
    this.resetData(prop_name);
  }

  resetData(prop_name: string){
    if(number_props.findIndex((value)=>value==prop_name)!=-1){
      // console.log("number");
      this.formType='number';
      
    }else if(string_props.findIndex((value)=>value==prop_name)!=-1){
      // console.log("string");
      this.formType='string';

    }else if(bool_props.findIndex((value)=>value==prop_name)!=-1){
      // console.log("bool");
      this.formType='bool';

    }
  }

  closeDialog() {
    if (this.form.valid){
      if(this.formType=='string'){
        this.dialogRef.close({
          value: this.form.controls['string_data'].value
        });
      }else if(this.formType=='number'){
        this.dialogRef.close({
          value: this.form.controls['number_data'].value
        });
      }else if(this.formType=='bool'){
        this.dialogRef.close({
          value: this.form.controls['bool_data'].value
        });
      }
    }
  }
}
