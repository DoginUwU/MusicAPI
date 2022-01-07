interface IYoutubeAPIConstructor {
  key: string;
  proxy?: string;
}
interface IYoutubeSearchOptions {
  maxResults?: number;
  pageToken?: string;
  type?: "video" | "playlist" | "channel";
  videoDuration?: "any" | "long" | "medium" | "short";
  safeSearch?: "none" | "moderate" | "strict";
  regionCode?: string;
  order?: "date" | "rating" | "relevance" | "title" | "viewCount";
  channelId?: string;
}
interface IYoutubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeItemResult[];
}
interface IYoutubeItemResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    mp4?: string;
  };
}
export type {
  IYoutubeAPIConstructor,
  IYoutubeSearchOptions,
  IYoutubeSearchResponse,
  IYoutubeItemResult,
};
