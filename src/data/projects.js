import img1 from "../assets/naomispedicure_card.png";
import img2 from "../assets/chips_dale.png";
import img3 from "../assets/stonegroundcoffee.png";
import img4 from "../assets/apple.png";
import img5 from "../assets/apple.png";
import img6 from "../assets/apple.png";
import chipsLogo from "../assets/chipsdale_assets/chipndale_logo.png";
import chipsTruck from "../assets/chipsdale_assets/foodtruck_mockup.png";
import chipsPakket from "../assets/chipsdale_assets/pakket_mockup.png";
import cups from "../assets/stoneground_assets/multiplecups_mockup.png";
import shop from "../assets/stoneground_assets/shop_mockup.png";
import sign from "../assets/stoneground_assets/sign_mockup.png";

const projects = [
  { id: "apple-1", title: "naomi's pedicure", img: img1, desc: "Description" },
  {
    id: "apple-2",
    title: "chips 'n dale foodtruck ",
    img: img2,
    desc: "Paper Palace is an independent film company based in Portland, Oregon. In 2020, I designed the poster for their award winning documentary, Jump the Fence. In 2022, I animated their vanity card. And most recently, I created the poster for their upcoming production, Wrap Me in a Sheet. ",
    images: [chipsTruck, chipsLogo, chipsPakket],
  },
  {
    id: "apple-3",
    title: "Stone Ground coffee",
    img: img3,
    desc: "Paper Palace is an independent film company based in Portland, Oregon. In 2020, I designed the poster for their award winning documentary, Jump the Fence. In 2022, I animated their vanity card. And most recently, I created the poster for their upcoming production, Wrap Me in a Sheet.",
    images: [sign, shop, cups],
  },
  { id: "apple-4", title: "apple", img: img4, desc: "Description" },
  { id: "apple-5", title: "apple", img: img5, desc: "Description" },
  { id: "apple-6", title: "apple", img: img6, desc: "Description" },
];

export default projects;
