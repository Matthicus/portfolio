import img1 from "../assets/naomispedicure_card.webp";
import img2 from "../assets/chips_dale.webp";
import img3 from "../assets/stonegroundcoffee.webp";
import img4 from "../assets/apple.webp";
import img5 from "../assets/apple.webp";
import img6 from "../assets/apple.webp";
import chipsLogo from "../assets/chipsdale_assets/chipndale_logo.png";
import chipsTruck from "../assets/chipsdale_assets/foodtruck_mockup.png";
import chipsPakket from "../assets/chipsdale_assets/pakket_mockup.png";
import cups from "../assets/stoneground_assets/multiplecups_mockup.png";
import shop from "../assets/stoneground_assets/shop_mockup.png";
import sign from "../assets/stoneground_assets/sign_mockup.png";
import pedicureCard from "../assets/pedicure_assets/card.png";
import pedicureLogo from "../assets/pedicure_assets/logo_naomi.png";

const projects = [
  {
    id: "apple-1",
    title: "Naomi's Pedicure",
    img: img1,
    desc: "Paper Palace is an independent film company based in Portland, Oregon. In 2020, I designed the poster for their award winning documentary, Jump the Fence. In 2022, I animated their vanity card. And most recently, I created the poster for their upcoming production, Wrap Me in a Sheet. ",
    images: [pedicureCard, pedicureLogo],
  },
  {
    id: "apple-2",
    title: "chips 'n dale foodtruck ",
    img: img2,
    desc: "Client wanted the iconic Chip 'n Dale engulfed in flames displayed on his logo. Of course, I couldn’t fulfill that request exactly since I didn’t want to get sued, so I tweaked the boys a little and gave them an alternative look. This one was for a food truck mainly specializing in fish and chips. ",
    images: [chipsTruck, chipsLogo, chipsPakket],
  },
  {
    id: "apple-3",
    title: "Stone Ground coffee",
    img: img3,
    desc: "Client wanted to open a coffee shop with “some edge to it”. I played around in Illustrator drawing crude graphics of letters since I couldn’t find a font I was happy with for the project. Eventually I came upon the design you see here, which I thought accompanied the edgy feeling they were going for wonderfully.",
    images: [sign, shop, cups],
  },
  { id: "apple-4", title: "apple", img: img4, desc: "Description" },
  { id: "apple-5", title: "apple", img: img5, desc: "Description" },
  { id: "apple-6", title: "apple", img: img6, desc: "Description" },
];

export default projects;
