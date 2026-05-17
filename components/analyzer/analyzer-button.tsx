"use client";

import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ChannelAnalyzerButton = ({ value }: { value: string }) => {
  const router = useRouter();

  const handleAnalyzer = async () => {
    if (!value) {
      // alert("Please enter a channel ID");
      toast.warning("Please enter a channel ID", {
        description: "A Channel ID is required to analyze a channel.",
        position: "top-center",
      });
      return;
    } else {
      const response = await fetch(`/api/youtube/channel?id=${value}`);
      const data = await response.json();
      if (!data.items || data.items.length === 0) {
        toast.warning("Invalid Channel ID", {
          description: `No channel found with ID: ${value}. Enter a valid Youtube Channel ID and try again.`,
          position: "top-center",
        });
        return;
      }
    }
    router.push(`/channels/${value}`);
  };
  return (
    <Button
      className=" mb-16 bg-purple-500 text-white hover:bg-purple-800 transition-all duration-300 cursor-pointer rounded-full font-bold px-6 py-5 md:px-10 md:py-7 text-lg md:text-2xl"
      size="lg"
      onClick={handleAnalyzer}
    >
      Get Channel Info
    </Button>
  );
};
export default ChannelAnalyzerButton;
