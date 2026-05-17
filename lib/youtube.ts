import { Video } from "@/types/video";
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function getChannelDetails(channelId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${channelId}&key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch channel");
  }

  return response.json();
}

export async function getAllVideos(playlistId: string) {
  let videos: Video[] = [];
  let nextPageToken = "";

  do {
    const url = `${process.env.YOUTUBE_API_URL}/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=50&pageToken=${nextPageToken}&key=${process.env.YOUTUBE_API_KEY}`;
    console.log("Fetching videos from URL:", url);
    const response = await fetch(url);
    const data = await response.json();

    console.log("Fetched videos:", data);

    videos.push(...data.items);

    nextPageToken = data.nextPageToken || "";
  } while (nextPageToken);

  return videos;
}

export function getOldestVideo(videos: Video[]) {
  console.log(videos);
  let oldestVideo: Video | null = null;
  let oldestDate = new Date(Date.now());
  for (const video of videos) {
    const datePublished = new Date(video.snippet.publishedAt);
    if (datePublished < oldestDate) {
      oldestVideo = video;
      oldestDate = datePublished;
    }
  }
  console.log("Oldest video:", oldestVideo);
  return oldestVideo;
}
export function getNewestVideo(videos: Video[]) {
  console.log(videos);
  let newestVideo: Video | null = null;
  let newestDate = new Date(2005, 11);
  for (const video of videos) {
    const datePublished = new Date(video.snippet.publishedAt);
    if (datePublished > newestDate) {
      newestVideo = video;
      newestDate = datePublished;
    }
  }
  console.log("Newest video:", newestVideo);
  return newestVideo;
}
