"use client";

import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { CHANNEL_IDS } from "@/constants";

const RandomAnalyzerButton = () => {
  const router = useRouter();
  const handleRandomChannel = () => {
    const randomIndex = Math.floor(Math.random() * CHANNEL_IDS.length);
    const randomChannel = CHANNEL_IDS[randomIndex];

    router.push(`/channels/${randomChannel}`);
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="mb-16 border-2 border-purple-700 bg-white text-purple-500 hover:bg-purple-300 hover:text-purple-800 hover:border-purple-800 transition-all duration-300 cursor-pointer rounded-full font-bold px-6 py-5 md:px-10 md:py-7 text-lg md:text-2xl"
          variant="outline"
          size="lg"
          onClick={handleRandomChannel}
        >
          I'm feeling lucky
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-purple-700 rounded-2xl">
        <p className="md:text-lg text-purple-100">
          Click to analyze a random channel
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default RandomAnalyzerButton;
