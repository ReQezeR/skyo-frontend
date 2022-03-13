import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  statsData: any

  pieColors = [
    { name: "true", value: '#32a852' },
    { name: "false", value: '#a83252' }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStats().subscribe((data) => {
      this.statsData = data;
    });
  }

}
