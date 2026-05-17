import RandomAnalyzerButton from "@/components/analyzer/random-analyzer-button";
import ChannelAnalyzerButton from "@/components/analyzer/analyzer-button";
import AnalyzerInput from "@/components/analyzer/analyzer-input";
import YoutubeAnalyzer from "@/components/analyzer/youtube-analyzer";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <YoutubeAnalyzer />
    </div>
  );
}
