import { Video } from "@/types/video";
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function getChannelDetails(channelId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails,brandingSettings&id=${channelId}&key=${API_KEY}`,
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
    const response = await fetch(url);
    const data = await response.json();

    videos.push(...data.items);

    nextPageToken = data.nextPageToken || "";
  } while (nextPageToken);

  return videos;
}

export function getOldestVideo(videos: Video[]) {
  let oldestVideo: Video | null = null;
  let oldestDate = new Date(Date.now());
  for (const video of videos) {
    const datePublished = new Date(video.snippet.publishedAt);
    if (datePublished < oldestDate) {
      oldestVideo = video;
      oldestDate = datePublished;
    }
  }
  return oldestVideo;
}
export function getNewestVideo(videos: Video[]) {
  let newestVideo: Video | null = null;
  let newestDate = new Date(2005, 11);
  for (const video of videos) {
    const datePublished = new Date(video.snippet.publishedAt);
    if (datePublished > newestDate) {
      newestVideo = video;
      newestDate = datePublished;
    }
  }

  return newestVideo;
}

// popular videos
export async function getPopularVideos(videos: Video[]) {
  let mostViewedVideo: Video | null = null;
  let mostLikedVideo: Video | null = null;
  let mostCommentedVideo: Video | null = null;
  let mostPopularVideo: Video | null = null;
  let highestViewCount = 0;
  let highestLikeCount = 0;
  let highestCommentCount = 0;
  let highestPopularityScore = 0;

  for (const video of videos) {
    const videoId = video.contentDetails.videoId;
    const apiKey = process.env.YOUTUBE_API_KEY!;

    const url = new URL("https://www.googleapis.com/youtube/v3/videos");

    url.searchParams.set("part", "snippet,statistics,contentDetails");
    url.searchParams.set("id", videoId);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url);
    const data = await response.json();

    const videoData = data.items?.[0];
    const stats = videoData?.statistics;
    if (parseInt(stats.viewCount) > highestViewCount) {
      mostViewedVideo = videoData;
      highestViewCount = stats.viewCount;
      // console.log(highestViewCount, "highestViewCount");
    }
    if (parseInt(stats.likeCount) > highestLikeCount) {
      mostLikedVideo = videoData;
      highestLikeCount = stats.likeCount;
      // console.log(highestLikeCount, "highestLikeCount");
    }

    if (parseInt(stats.commentCount) > highestCommentCount) {
      mostCommentedVideo = videoData;
      highestCommentCount = stats.commentCount;
      // console.log(highestCommentCount, "highestcommentCount");
    }

    // calculate popularity score based on views, likes, and comments
    const popularityScore =
      ((stats.likeCount + stats.commentCount) / stats.viewCount) * 100;

    if (popularityScore > highestPopularityScore) {
      highestPopularityScore = popularityScore;
      mostPopularVideo = videoData;
      console.log(highestPopularityScore, "highestPopularityScore");
    }
  }

  return {
    mostViewedVideo,
    mostLikedVideo,
    mostCommentedVideo,
    mostPopularVideo,
  };
}
