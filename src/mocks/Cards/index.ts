import { iconBrand, iconFully, iconRecords } from "../../assets";

export interface CardInfo {
  icon: string;
  title: string;
  text: string;
}

export const cardsInfo: CardInfo[] = [
  {
    icon: iconBrand,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: iconRecords,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: iconFully,
    title: "Full Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
