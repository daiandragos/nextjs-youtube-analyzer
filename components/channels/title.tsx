import ReactCountryFlag from "react-country-flag";

interface TitleProps {
  title: string;
  countryCode?: string;
}

const Title = ({ title, countryCode }: TitleProps) => {
  return (
    <h4 className="bg-purple-300 rounded-b-lg shadow-xl text-right p-6 w-full md:w-auto text-3xl sm:text-5xl font-bold text-purple-900 pr-16">
      {title}
      <ReactCountryFlag countryCode={countryCode || ""} className="ml-4" />
    </h4>
  );
};

export default Title;
