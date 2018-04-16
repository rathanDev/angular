import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from './search-result.model';
import {HttpClient} from '@angular/common/http';

export const YOUTUBE_API_KEY = 'AIzaSyAyp48oj778FQ6NmChvBqIOUosxMcPl9Qs';
export const YOUTUBE_API_URL = '"https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {

  constructor(private http: HttpClient,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  // search(query: string): Observable<SearchResult[]> {
  search(query: string) {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
      .subscribe(response => {
        console.log(response);
      });
  }


  /*
  return this.http.get(queryUrl)
.map((response: Response) => {
return (<any>response.json()).items.map(item => {
// console.log("raw item", item); // uncomment if you want to debug
return new SearchResult({
id: item.id.videoId,
title: item.snippet.title,
description: item.snippet.description,
thumbnailUrl: item.snippet.thumbnails.high.url
});
});
});
  * */

}
