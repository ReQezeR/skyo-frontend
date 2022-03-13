import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Streamer } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  }),
  observe: 'response' as const
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private streamersSubject = new BehaviorSubject<Streamer[]>([]);
  public streamersObservable = new Observable<any>();
  private streamers: Streamer[] = [];
  public totalStreamersNumber = 0;

  lastPage = 0;
  lastSize = 25;


  constructor(private http: HttpClient) {
    this.streamersObservable = this.streamersSubject.asObservable();
    this.getStreamers(1, 25).subscribe(
      (data)=>{}
    );
  }

  reloadStreamers(){
    return this.getStreamers(this.lastPage, this.lastSize);
  }

  getStreamers(page: number, size?: number){
    this.lastPage = page;
    if(size){
      this.lastSize = size;
    }
    return this.http.get<any>('/api/objects?page='+page+'&size='+size).pipe(map(result => {
      this.streamers = [];
      result.items.forEach((streamer: any)=>{
        this.streamers.push(new Streamer(streamer))
      })
      this.totalStreamersNumber = result.total

      this.updateStreamers(this.streamers);
      return this.streamers;
    }));
  }

  addStreamer(streamer: Streamer){
    return this.http.put<any>('/api/object', JSON.parse(JSON.stringify(streamer))).pipe(map(result => {
      console.log(result)
      const streamer = new Streamer(result);
      // this.tasks[columnId].push(task);
      // this.tasksSubject.next(this.tasks);
      return streamer;
    }));
  }

  editStreamer(streamer: Streamer){
    return this.http.post<any>('/api/object/'+streamer.id, JSON.parse(JSON.stringify(streamer))).pipe(map(result => {
      const streamer = new Streamer(result);
      return streamer;
    }));
  }


  updateStreamers(data: any){
    this.streamersSubject.next(data);
  }

  filterStreamers(page: number, size?: number, filter: string = ""){
    this.lastPage = page;
    if(size){
      this.lastSize = size;
    }
    return this.http.get<any>('/api/object?'+filter+'page='+page+'&size='+size).pipe(map(result => {
      this.streamers = [];
      result.items.forEach((streamer: any)=>{
        this.streamers.push(new Streamer(streamer))
      })
      this.totalStreamersNumber = result.total

      this.updateStreamers(this.streamers);
      return this.streamers;
    }));
  }

  getStats() {
    return this.http.get<any>('api/stats');
  }
}
