"use client";
import { Input } from "@/components/ui/input";

const AnalyzerInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Input
      className="my-24 md:my-32 text-center text-purple-700  bg-gray-50 border-2 max-w-3/4 md:max-w-xl rounded-bl-full rounded-tr-full h-20 md:text-3xl placeholder:text-purple-400 border-purple-600 color-gray-400 focus-visible:border-purple-800 focus-visible:border-5"
      placeholder="Enter channel ID"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default AnalyzerInput;
