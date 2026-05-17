"use client";

import AnalyzerInput from "./analyzer-input";
import RandomAnalyzerButton from "./random-analyzer-button";
import ChannelAnalyzerButton from "./analyzer-button";
import { useState } from "react";

const YoutubeAnalyzer = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <AnalyzerInput value={value} onChange={setValue} />
      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-full max-w-3/4 md:max-w-xl">
        <RandomAnalyzerButton />
        <ChannelAnalyzerButton value={value} />
      </div>
    </>
  );
};

export default YoutubeAnalyzer;
