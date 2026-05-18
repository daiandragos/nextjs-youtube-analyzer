import { getAllVideos, getOldestVideo, getNewestVideo } from "@/lib/youtube";

const Videos = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const videos = await getAllVideos(id);
  const oldestVideo = getOldestVideo(videos);
  const newestVideo = getNewestVideo(videos);
  console.log(videos);
  console.log(oldestVideo);
  console.log(newestVideo);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Oh, No, page is not ready yet. Come back in a bit
      </h1>
      <div className="grid grid-cols-3">
        {/* TODO: Display relevant videos */}
        {/* {videos.items.map((video: Video) => (
        <div key={video.id.videoId}>
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
        </div>
      ))} */}
      </div>
    </>
  );
};

export default Videos;
