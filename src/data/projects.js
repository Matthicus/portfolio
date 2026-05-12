import naomiCard from "../assets/naomispedicure_card.webp";
import chipsDale from "../assets/chips_dale.webp";
import stoneGroundCoffee from "../assets/stonegroundcoffee.webp";
import cocktailMenu from "../assets/menu_workpage.webp";
import overloadMockup from "../assets/overload_assets/overload_mockup.webp";
import chipsDaleStickers from "../assets/chipsdale_assets/chipndale_stickers.webp";

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
import bigMenu from "../assets/cocktailmenu_assets/cocktailmenu_qualitymockup.webp";
import bigMenu2 from "../assets/cocktailmenu_assets/menu_twopages.webp";
import bigMenu4 from "../assets/cocktailmenu_assets/cocktail_fourpages_mockup.webp";
const projects = [
  {
    id: "naomis-pedicure",
    title: "Naomi's Pedicure",
    img: naomiCard,
    desc: {
      en: "I met Naomi through a shared online group for young entrepreneurs. I saw she needed a designer to smooth out the rough edges of her logo and was glad to help!",
      nl: "Ik heb Naomi leren kennen via een gedeelde onlinegroep voor jonge ondernemers. Ik zag dat ze een designer nodig had om de ruwe randjes van haar logo af te werken, en ik hielp haar daar graag mee!",
    },
    images: [pedicureCard, pedicureLogo],
  },
  {
    id: "chips-n-dale",
    title: "Chips 'n Dale foodtruck",
    img: chipsDaleStickers,
    desc: {
      en: "This one came out of the ether through an infamous Facebook DM. He asked me to include the iconic chipmunks blazing in a fire for the logo of his food truck. Awesome request, but I was not trying to get sued, so I tweaked the little critters a bit.",
      nl: "Deze kwam letterlijk uit het niets via een legendarische Facebook-DM. Hij vroeg me om de iconische chipmunks in lichterlaaie op te nemen in het logo van zijn foodtruck. Geweldig verzoek, maar ik had geen zin om aangeklaagd te worden, dus heb ik die kleine beestjes een beetje aangepast.",
    },
    images: [chipsTruck, chipsLogo, chipsPakket],
  },
  {
    id: "stone-ground-coffee",
    title: "Stone Ground Coffee",
    img: stoneGroundCoffee,
    desc: {
      en: "Client wanted to open a coffee shop with “some edge to it”. I played around in Illustrator drawing crude graphics of letters since I couldn’t find a font I was happy with for the project. Eventually I came upon the design you see here, which I thought accompanied the edgy feeling they were going for wonderfully.",
      nl: "De klant wilde een koffiebar openen met een eigenzinnige uitstraling. Ik heb wat geëxperimenteerd met Illustrator en ruwe letterontwerpen gemaakt, omdat ik geen lettertype kon vinden dat me beviel. Uiteindelijk kwam ik uit op het ontwerp dat je hier ziet, dat naar mijn mening perfect aansloot bij de stoere sfeer die ze voor ogen hadden.",
    },
    images: [sign, shop, cups],
  },
  {
    id: "cocktail-menu",
    title: "Cocktail Menu",
    img: bigMenu,
    desc: {
      en: "My good friend Gerben is a bit of a cocktail snob and organizes one of these get-togethers about twice a year, where he basically spends about 6 hours in the kitchen brewing the craziest concoctions. He also asks me to make a menu for it every time. This was one of the recent ones I was quite pleased with.",
      nl: "Mijn goede vriend Gerben is een beetje een cocktailsnob en organiseert ongeveer twee keer per jaar zo’n bijeenkomst, waarbij hij zo’n 6 uur in de keuken staat om de gekste brouwsels te maken. Hij vraagt mij ook elke keer om er een menu voor te ontwerpen. Dit was een van de recentere waar ik best tevreden mee was.",
    },
    images: [bigMenu, bigMenu2, bigMenu4],
  },
  {
    id: "overload",
    title: "Overload",
    img: overloadMockup,
    desc: {
      en: "Overload was a progressive fitness tracker concept app I cooked up last year for my full-stack development final project. I did not end up using it since the core idea had already been done more than a thousand times before. However, I really like the design and feel of the design, hence why I’m including it here.",
      nl: "Overload was een concept-app voor een progressieve fitness tracker die ik vorig jaar bedacht heb voor mijn full-stack eindproject. Uiteindelijk heb ik het niet gebruikt, aangezien het kernidee al meer dan duizend keer eerder was gedaan. Toch vind ik het design en de feel van het ontwerp nog steeds erg sterk, daarom neem ik het hier mee op.",
    },
    images: [overloadMockup],
  },
];

export default projects;
