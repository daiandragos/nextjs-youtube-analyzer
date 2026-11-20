import VideoCard from "@/components/videos/VideoCard";
import {
  getAllVideos,
  getOldestVideo,
  getNewestVideo,
  getPopularVideos,
} from "@/lib/youtube";

const Videos = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const videos = await getAllVideos(id);
  const oldestVideo = getOldestVideo(videos);
  const newestVideo = getNewestVideo(videos);
  const {
    mostViewedVideo,
    mostLikedVideo,
    mostCommentedVideo,
    mostPopularVideo,
  } = await getPopularVideos(videos);

  const videoCards = [
    {
      title: "Newest Video",
      videoTitle: newestVideo?.snippet.title,
      videoId: newestVideo?.contentDetails.videoId,
    },
    {
      title: "Oldest Video",
      videoTitle: oldestVideo?.snippet.title,
      videoId: oldestVideo?.contentDetails.videoId,
    },

    {
      title: "Most Popular Video",
      videoTitle: mostPopularVideo?.snippet.title,
      videoId: mostPopularVideo?.id,
    },
    {
      title: "Most Viewed Video",
      videoTitle: mostViewedVideo?.snippet.title,
      videoId: mostViewedVideo?.id,
    },
    {
      title: "Most Liked Video",
      videoTitle: mostLikedVideo?.snippet.title,
      videoId: mostLikedVideo?.id,
    },
    {
      title: "Most Commented Video",
      videoTitle: mostCommentedVideo?.snippet.title,
      videoId: mostCommentedVideo?.id,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {videoCards.map((videoCard, index) => (
          <VideoCard
            key={index}
            title={videoCard.title}
            videoTitle={videoCard.videoTitle}
            videoId={videoCard.videoId}
          />
        ))}
      </div>
    </>
  );
};

export default Videos;
