import Image from "next/image";

interface HeaderProps {
  bannerUrl?: string;
  profileUrl?: string;
}
const Header = ({ bannerUrl, profileUrl }: HeaderProps) => {
  return (
    <div className="relative w-full h-32 sm:h-48 overflow-hidden rounded-t-xl">
      <Image
        className="w-full object-cover object-center"
        fill
        src={bannerUrl || ""}
        alt="Channel Banner"
      />
      <Image
        className="absolute object-cover object-center rounded-full bottom-1 left-1 sm:bottom-5 sm:left-5 "
        width={100}
        height={100}
        src={profileUrl || ""}
        alt="Channel Banner"
      />
    </div>
  );
};

export default Header;
