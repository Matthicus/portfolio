import naomiCard from "../assets/naomispedicure_card.webp";
import chipsDale from "../assets/chips_dale.webp";
import stonegroundStickers from "../assets/stoneground_assets/stoneground_stickers.webp";
import cocktailMenu from "../assets/menu_workpage.webp";
import overloadMockup from "../assets/overload_assets/overload_mockup.webp";

import chipsLogo from "../assets/chipsdale_assets/chipndale_logo.png";
import chipsTruck from "../assets/chipsdale_assets/foodtruck_mockup.png";
import chipsPakket from "../assets/chipsdale_assets/pakket_mockup.png";
import cups from "../assets/stoneground_assets/multiplecups_mockup.png";
import shop from "../assets/stoneground_assets/shop_mockup.png";
import sign from "../assets/stoneground_assets/sign_mockup.png";
import pedicureCard from "../assets/pedicure_assets/card.png";
import pedicureLogo from "../assets/pedicure_assets/logo_naomi.png";
import menuMockup from "../assets/cocktailmenu_assets/menu_workdetail.webp";
import menuMockup2 from "../assets/cocktailmenu_assets/menu_mockup2.webp";

const projects = [
  {
    id: "naomis-pedicure",
    title: "Naomi's Pedicure",
    img: naomiCard,
    desc: "...",
    images: [pedicureCard, pedicureLogo],
  },
  {
    id: "chips-n-dale",
    title: "Chips 'n Dale foodtruck",
    img: chipsDale,
    desc: "Client wanted the iconic Chip 'n Dale engulfed in flames displayed on his logo. Of course, I couldn’t fulfill that request exactly since I didn’t want to get sued, so I tweaked the boys a little and gave them an alternative look. This one was for a food truck mainly specializing in fish and chips.",
    images: [chipsTruck, chipsLogo, chipsPakket],
  },
  {
    id: "stone-ground-coffee",
    title: "Stone Ground Coffee",
    img: stonegroundStickers,
    desc: {
      en: "Client wanted to open a coffee shop with “some edge to it”. I played around in Illustrator drawing crude graphics of letters since I couldn’t find a font I was happy with for the project. Eventually I came upon the design you see here, which I thought accompanied the edgy feeling they were going for wonderfully.",
      nl: "De klant wilde een koffiebar openen met een eigenzinnige uitstraling. Ik heb wat geëxperimenteerd met Illustrator en ruwe letterontwerpen gemaakt, omdat ik geen lettertype kon vinden dat me beviel. Uiteindelijk kwam ik uit op het ontwerp dat je hier ziet, dat naar mijn mening perfect aansloot bij de stoere sfeer die ze voor ogen hadden.",
    },
    images: [sign, shop, cups],
  },
  {
    id: "cocktail-menu",
    title: "Cocktail Menu",
    img: cocktailMenu,
    desc: "...",
    images: [menuMockup, menuMockup2],
  },
  {
    id: "overload",
    title: "Overload",
    img: overloadMockup,
    desc: "...",
    images: [overloadMockup],
  },
];

export default projects;
