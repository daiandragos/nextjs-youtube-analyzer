import type { Stat } from "@/types/video";

const InfoCard = ({ title, value, icon }: Stat) => {
  return (
    <div className="bg-purple-200 rounded-lg shadow-xl flex flex-row items-center gap-4 p-6 w-full md:w-auto text-2xl font-bold text-purple-900 justify-center">
      <div className="">{icon}</div>
      <h3 className=""> {title}:</h3>
      <p className="">{value}</p>
    </div>
  );
};

export default InfoCard;
