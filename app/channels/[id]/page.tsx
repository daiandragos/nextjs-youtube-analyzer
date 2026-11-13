import Link from "next/link";
import { getChannelDetails } from "@/lib/youtube";
import { toast } from "sonner";
import Header from "@/components/channels/header";
import Title from "@/components/channels/title";
import Stats from "@/components/channels/stats";

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let details = null;

  try {
    details = await getChannelDetails(id);
    console.log(details);
  } catch (error) {
    console.error("Error fetching channel details:", error);
  }

  if (!details || !details.items || details.items.length === 0) {
    toast.error("Failed to load channel details", {
      description: "An error occurred while fetching the channel details.",
      position: "top-center",
    });
    return;
  }

  const channel = details.items[0];
  if (!channel) {
    return <div>No data available</div>;
  }

  const countryCode = channel?.snippet?.country;

  const playlistId = channel.contentDetails.relatedPlaylists.uploads;
  return (
    <div className="container mx-auto p-4">
      <Header
        bannerUrl={
          channel?.brandingSettings?.image?.bannerExternalUrl ||
          channel?.snippet?.thumbnails?.high?.url
        }
        profileUrl={channel?.snippet?.thumbnails?.high?.url}
      />
      <Title
        title={channel?.snippet?.title || "N/A"}
        countryCode={countryCode}
      />

      <Stats channel={channel} />
      <Link
        className="mt-10 flex w-full items-center justify-center rounded-xl bg-purple-900  px-6 py-3 text-lg font-semibold text-yellow-100 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-purple-600 hover:shadow-xl"
        href={`/videos/${playlistId}`}
      >
        Go watch some video statistics
      </Link>
    </div>
  );
};

export default DetailsPage;
