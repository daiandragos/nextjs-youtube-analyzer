import InfoCard from "./info-card";
import { getChannelStats } from "@/utils/stats";
import type { Channel } from "@/types/video";

interface StatsProps {
  channel: Channel;
}

const Stats = ({ channel }: StatsProps) => {
  const channelStats = getChannelStats(channel);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
      {channelStats.map((stat, ndx) => {
        if (!stat.title || !stat.value) return null;
        return (
          <InfoCard
            key={ndx}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        );
      })}
    </div>
  );
};

export default Stats;
