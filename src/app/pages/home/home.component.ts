import { Component, OnInit } from '@angular/core';
import { Streamer } from '@app/models';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
}
