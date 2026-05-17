import Link from "next/link";
import { getChannelDetails } from "@/lib/youtube";
import { toast } from "sonner";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let details = null;

  try {
    details = await getChannelDetails(id);
    console.log(details);
  } catch (error) {
    console.error("Error fetching channel details:", error);
  }

  console.log(details.kind);
  if (!details || !details.items || details.items.length === 0) {
    toast.error("Failed to load channel details", {
      description: "An error occurred while fetching the channel details.",
      position: "top-center",
    });
    return;
  }

  const channelStats = details?.items?.[0].statistics;
  const { viewCount, subscriberCount, videoCount } =
    details?.items?.[0].statistics;
  const playlistId =
    details?.items?.[0].contentDetails.relatedPlaylists.uploads;
  return (
    <div className="">
      {JSON.stringify(channelStats)}
      <h1>View Count: {viewCount}</h1>
      <h1>Subscribers: {subscriberCount}</h1>
      <h1>No of Videos: {videoCount}</h1>
      <Link href={`/videos/${playlistId}`}>Go watch some videos</Link>
    </div>
  );
};

export default DetailsPage;
