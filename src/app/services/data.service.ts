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
  

  constructor(private http: HttpClient) { 
    this.streamersObservable = this.streamersSubject.asObservable();
    this.getStreamers(1, 25).subscribe(
      (data)=>{}
    );
  }

  getStreamers(page: number, size?: number){
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


  updateStreamers(data: any){
    this.streamersSubject.next(data);
  }
}
