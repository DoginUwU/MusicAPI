import ytdl from "ytdl-core";
import api from "./axios";
import { IYoutubeSearchResponse } from "../@types/youtube";

const search = async (query: string): Promise<IYoutubeSearchResponse> => {
  const response = await api?.get<IYoutubeSearchResponse>("search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: query,
      type: "video",
    },
  });
  if (!response) throw new Error("Youtube API is not initialized");

  return response.data;
};

const loadVideosURL = async (
  obj: IYoutubeSearchResponse
): Promise<IYoutubeSearchResponse> => {
    const { items } = obj;

    const videos = items.map(async (item) => {
        const info = await ytdl.getInfo(item.id.videoId);

        const formats = ytdl.filterFormats(info.formats, "audioandvideo");
        const formatMP4 = formats.filter((f) => f.container === "mp4").map((item) => {
            return {
              url: item.url,
              quality: item.quality,
              qualityLabel: item.qualityLabel,
            };
        });

        return {
          ...item,
          mp4: formatMP4,
        };
    });
    
    return {
        ...obj,
        items: await Promise.all(videos),
    };
};

export { search, loadVideosURL };
