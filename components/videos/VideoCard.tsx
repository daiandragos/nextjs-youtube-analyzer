interface VideoCardProps {
  title: string;
  videoTitle?: string;
  videoId?: string;
}

const VideoCard = ({ title, videoTitle, videoId }: VideoCardProps) => {
  if (!videoId || !videoTitle) {
    return;
  }
  return (
    <div className="border border-gray-400  rounded-lg p-4 flex flex-col items-center ">
      <h1 className="text-3xl font-bold text-pink-900">{title}</h1>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
      <p className="text-lg font-semibold text-gray-600 mt-2">{videoTitle}</p>
    </div>
  );
};

export default VideoCard;
