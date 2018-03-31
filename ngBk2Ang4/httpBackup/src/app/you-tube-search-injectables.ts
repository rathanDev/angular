import {
  YoutubeSearchService,
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL
} from 'you-tube-search-service';

export const youTubeSearchInjectables: Array<any> = [
  {provide: YoutubeSearchService, useClass: YoutubeSearchService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
