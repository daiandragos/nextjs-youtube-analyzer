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
      className="my-24 md:my-32 text-center text-purple-700  bg-gray-50 border-2 max-w-3/4 md:max-w-xl
        focus-visible:ring-ring focus-visible:border-ring focus-visible:ring-[3px] rounded-bl-full rounded-tr-full h-20 md:!text-3xl "
      placeholder="Enter channel ID"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default AnalyzerInput;
