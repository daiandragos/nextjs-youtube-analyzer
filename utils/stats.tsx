import { Channel } from "@/types/video";
import { Users, Eye, SquarePlay, CalendarDays } from "lucide-react";

export const getChannelStats = (channel: Channel) => {
  const stats = [];
  const viewCount = channel.statistics.viewCount;
  const subscriberCount = channel.statistics.subscriberCount;
  const videoCount = channel.statistics.videoCount;
  const avgViewsPerVideo = Math.floor(Number(viewCount) / Number(videoCount));
  const avgViewsPerSub = Math.floor(
    Number(viewCount) / Number(subscriberCount),
  );

  stats.push({
    title: "Created",
    value: new Date(channel.snippet.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    icon: <CalendarDays />,
  });

  stats.push({
    title: "Videos",
    value: new Intl.NumberFormat("en-US").format(channel.statistics.videoCount),
    icon: <SquarePlay />,
  });

  stats.push({
    title: "Subscribers",
    value: new Intl.NumberFormat("en-US").format(subscriberCount),
    icon: <Users />,
  });

  stats.push({
    title: "Total Views",
    value: new Intl.NumberFormat("en-US").format(channel.statistics.viewCount),
    icon: <Eye />,
  });

  stats.push({
    title: "Avg Views/Video",
    value: new Intl.NumberFormat("en-US").format(avgViewsPerVideo),
    icon: <Eye />,
  });

  stats.push({
    title: "Avg Views/Sub",
    value: new Intl.NumberFormat("en-US").format(avgViewsPerSub),
    icon: <Eye />,
  });

  return stats;
};
