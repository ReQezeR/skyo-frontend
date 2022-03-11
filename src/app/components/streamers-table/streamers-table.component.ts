import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Streamer } from '@app/models';
import { DataService } from '@app/services/data.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FilterStreamerDialogComponent } from '../filter-streamer-dialog/filter-streamer-dialog.component';

@Component({
  selector: 'app-streamers-table',
  templateUrl: './streamers-table.component.html',
  styleUrls: ['./streamers-table.component.scss']
})
export class StreamersTableComponent implements OnInit {

  streamers: Streamer[] = [] as any;
  dataSource: any;

  isLoading = false;
  totalRows = 0;
  pageSize = 25;
  currentPage = 1;
  pageSizeOptions: number[] = [25,50,100];

  columns: any[] = [
    'id', 
    'channel', 
    'watch_time', 
    'stream_time', 
    'peak_viewers', 
    'average_viewers', 
    'followers', 
    'followers_gained', 
    'views_gained', 
    'partnered', 
    'mature',
    'language',
    'edit'
  ];

  activeFilters = {
    'id': false,
    'channel': false, 
    'watch_time': false, 
    'stream_time': false, 
    'peak_viewers': false, 
    'average_viewers': false, 
    'followers': false, 
    'followers_gained': false, 
    'views_gained': false, 
    'partnered': false, 
    'mature': false,
    'language': false
  }

  activeFilter = '';
  activeFilterValue: any;

  constructor(private dataService: DataService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataService.streamersObservable.subscribe(
      (data)=>{
        console.log("data");
        
        this.streamers = data;
        this.totalRows = this.dataService.totalStreamersNumber;
        this.dataSource = new MatTableDataSource(this.streamers);
        this.dataSource.sort = this.sort;
      }
    );
    this.dataService.getStreamers(1, this.pageSize);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.totalRows = this.dataService.totalStreamersNumber;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    
    this.loadData();
  }

  loadData(){
    this.isLoading = true;
    if(this.activeFilter != ""){
      let filter = this.activeFilter+"="+this.activeFilterValue+"&";
      this.dataService.filterStreamers(this.currentPage+1, this.pageSize, filter).subscribe(
        (_)=>{}
      );
    }else{
      this.dataService.getStreamers(this.currentPage+1, this.pageSize).subscribe(
        (_)=>{}
      );
    }

  }

  filterStreamerDialog(prop_name: string){
    if(prop_name in this.activeFilters){

      // @ts-ignore
      if(this.activeFilters[prop_name]==true){
        // @ts-ignore
        this.activeFilters[prop_name] = false;
        this.activeFilter = '';
        this.activeFilterValue = null;
        this.currentPage = 0;
        this.loadData();
      }
      else{
        const dialogRef = this.dialog.open(FilterStreamerDialogComponent,
          {
            maxWidth: '1000px',
            width: '80vw',
            panelClass: 'custom-dialog-container',
            data: prop_name
          }
        );
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            if(prop_name in this.activeFilters){
              if(prop_name != this.activeFilter){
                // @ts-ignore
                this.activeFilters[this.activeFilter] = false;
              }
              // @ts-ignore
              this.activeFilters[prop_name] = true;
              this.activeFilter = prop_name;
              this.activeFilterValue = result.value;
            }
            
            let filter = prop_name+"="+result.value+"&";
            this.dataService.filterStreamers(1, this.pageSize, filter).subscribe(
              (_)=>{}
            );
          }
        });
      }
    }
  }
}
