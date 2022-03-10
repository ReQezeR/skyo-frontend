export class Streamer {
    id: number;
    channel: string;
    watch_time: number;
    stream_time: number;
    peak_viewers: number;
    average_viewers: number;
    followers: number;
    followers_gained: number;
    views_gained: number;
    partnered: boolean;
    mature: boolean;
    language: string;
  
    constructor(object: any) {
        this.id = object?.id || 0;
        this.channel = object?.channel || '';
        this.watch_time = object?.watch_time || 0;
        this.stream_time = object?.stream_time || 0;
        this.peak_viewers = object?.peak_viewers || 0;
        this.average_viewers = object?.average_viewers || 0;
        this.followers = object?.followers || 0;
        this.followers_gained = object?.followers_gained || 0;
        this.views_gained = object?.views_gained || 0;
        this.partnered = object?.partnered;
        this.mature = object?.mature;
        this.language = object?.language || '';
    }

    // getValue(variableName: string){
    //     return self[variableName];
    // }
}