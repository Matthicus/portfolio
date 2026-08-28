import naomiCard from "../assets/naomispedicure_card.webp";
import chipsDale from "../assets/chips_dale.webp";
import stoneGroundCoffee from "../assets/stonegroundcoffee.webp";
import cocktailMenu from "../assets/menu_workpage.webp";
import overloadMockup from "../assets/overload_assets/overload_mockup.webp";
import chipsDaleStickers from "../assets/chipsdale_assets/chipndale_stickers.webp";
import vermeirenCover from "../assets/vermeiren_assets/cover_image.webp";
import vermeiren1 from "../assets/vermeiren_assets/backside.webp";
import vermeiren2 from "../assets/vermeiren_assets/front_flat.webp";
import vermeiren3 from "../assets/vermeiren_assets/back_flat.webp";

import mimosaCover from "../assets/mimosa_assets/cover_image.webp";
import mimosa1 from "../assets/mimosa_assets/mimosa1.webp";
import mimosa2 from "../assets/mimosa_assets/mimosa2.webp";
import mimosa3 from "../assets/mimosa_assets/mimosa_3.webp";

import boosterCover from "../assets/photoediting_assets/cover_image kopie.webp";
import boosterAssets from "../assets/photoediting_assets/assets.webp";
import boosterVisuals from "../assets/photoediting_assets/all_visuals.webp";

import chipsShirt from "../assets/chipsdale_assets/grid_image_2.png";
import chipsTruck from "../assets/chipsdale_assets/foodtruck_mockup.webp";
import chipsPakket from "../assets/chipsdale_assets/grid_image_1.png";
import cups from "../assets/stoneground_assets/grid_item_1.webp";
import bag from "../assets/stoneground_assets/grid_item_2.webp";
import sign from "../assets/stoneground_assets/sign_mockup.webp";
import pedicureCard from "../assets/pedicure_assets/card.png";
import pedicureLogo from "../assets/pedicure_assets/grid_item_2.webp";
import pedicureWeb from "../assets/pedicure_assets/grid_item_1.webp";
import menuMockup from "../assets/cocktailmenu_assets/menu_workdetail.webp";
import menuMockup2 from "../assets/cocktailmenu_assets/menu_mockup2.webp";
import bigMenu from "../assets/cocktailmenu_assets/cocktailmenu_qualitymockup.webp";
import bigMenu2 from "../assets/cocktailmenu_assets/menu_twopages.webp";
import bigMenu4 from "../assets/cocktailmenu_assets/cocktail_fourpages_mockup.webp";
import frontBack from "../assets/penpal_assets/front_and_back.webp";
import front from "../assets/penpal_assets/penpal_mockup_front.webp";
import back from "../assets/penpal_assets/grid_item_2.webp";
import frontBackFlat from "../assets/penpal_assets/grid_item_1.webp";
import overloadIcons from "../assets/overload_assets/grid_item_1.webp";
import overloadConcept from "../assets/overload_assets/grid_item_2.webp";
import showcaseVid from "../assets/overload_assets/showcase_vid_overload.mp4";

const projects = [
  {
    id: "naomis-pedicure",
    title: "Naomi's Pedicure",
    kind: "logo",
    img: naomiCard,
    desc: {
      en: "I met Naomi through a shared online group for young entrepreneurs. I saw she needed a designer to smooth out the rough edges of her logo and was glad to help!",
      nl: "Ik heb Naomi leren kennen via een gedeelde onlinegroep voor jonge ondernemers. Ik zag dat ze een designer nodig had om de ruwe randjes van haar logo af te werken, en ik hielp haar daar graag mee!",
    },
    images: [pedicureCard, pedicureLogo, pedicureWeb],
  },
  {
    id: "chips-n-dale",
    title: "Chips 'n Dale foodtruck",
    kind: "logo",
    img: chipsDaleStickers,
    desc: {
      en: "This one came out of the ether through an infamous Facebook DM. He asked me to include the iconic chipmunks blazing in a fire for the logo of his food truck. Awesome request, but I was not trying to get sued, so I tweaked the little critters a bit.",
      nl: "Deze kwam letterlijk uit het niets via een legendarische Facebook-DM. Hij vroeg me om de iconische chipmunks in lichterlaaie op te nemen in het logo van zijn foodtruck. Geweldig verzoek, maar ik had geen zin om aangeklaagd te worden, dus heb ik die kleine beestjes een beetje aangepast.",
    },
    images: [chipsTruck, chipsShirt, chipsPakket],
  },
  {
    id: "stone-ground-coffee",
    title: "Stone Ground Coffee",
    kind: "logo",
    img: stoneGroundCoffee,
    desc: {
      en: "Client wanted to open a coffee shop with “some edge to it”. I played around in Illustrator drawing crude graphics of letters since I couldn’t find a font I was happy with for the project. Eventually I came upon the design you see here, which I thought accompanied the edgy feeling they were going for wonderfully.",
      nl: "De klant wilde een koffiebar openen met een eigenzinnige uitstraling. Ik heb wat geëxperimenteerd met Illustrator en ruwe letterontwerpen gemaakt, omdat ik geen lettertype kon vinden dat me beviel. Uiteindelijk kwam ik uit op het ontwerp dat je hier ziet, dat naar mijn mening perfect aansloot bij de stoere sfeer die ze voor ogen hadden.",
    },
    images: [sign, bag, cups],
  },
  {
    id: "cocktail-menu",
    title: "Cocktail",
    kind: "menu",
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
    kind: "app",
    img: showcaseVid,
    mediaType: "video",
    desc: {
      en: "Overload was a progressive fitness tracker concept app I cooked up last year for my full-stack development final project. I did not end up using it since the core idea had already been done more than a thousand times before. However, I really like the design and feel of the design, hence why I’m including it here.",
      nl: "Overload was een concept-app voor een progressieve fitness tracker die ik vorig jaar bedacht heb voor mijn full-stack eindproject. Uiteindelijk heb ik het niet gebruikt, aangezien het kernidee al meer dan duizend keer eerder was gedaan. Toch vind ik het design en de feel van het ontwerp nog steeds erg sterk, daarom neem ik het hier mee op.",
    },
    images: [overloadMockup, overloadIcons, overloadConcept],
  },
  {
    id: "penpal",
    title: "Penpal",
    kind: "book cover",
    img: frontBack,
    desc: {
      en: "Penpal is one of my all-time favourite horror stories from across the internet. I used to be a huge horror nerd and was obsessed with creepypasta throughout my teenage years. Creepypastas are short horror stories that spread online, usually through forums, social media, or dedicated websites. This one gained so much traction it eventually turned into a full-length novel. After listening to the story again I was overcome with inspiration and decided to design a fan-made book cover.",
      nl: "Penpal is een van mijn all-time favoriete horrorverhalen van het internet. Ik was vroeger een enorme horror-nerd en was in mijn tienerjaren geobsedeerd door creepypasta. Creepypasta’s zijn korte horrorverhalen die online worden verspreid, meestal via forums, sociale media of speciale websites. Dit verhaal kreeg zoveel aandacht dat het uiteindelijk werd omgezet in een volwaardige roman. Nadat ik het verhaal opnieuw had beluisterd, werd ik overweldigd door inspiratie en besloot ik een fan-made boekcover te ontwerpen.",
    },
    images: [front, back, frontBackFlat],
  },
  {
    id: "vermeiren",
    title: "Vermeiren Princeps infofolder",
    kind: "Folder",
    img: vermeirenCover,
    desc: {
      en: "For a design project, I created an informative brochure in the brand style of Vermeiren Princeps. The goal was to communicate the company’s production process and showcase the different activities and achievements within their factory. I focused on translating their identity into a clear and visually appealing layout that highlights their expertise, craftsmanship, and capabilities.",

      nl: "Voor een designproject heb ik een informatieve brochure ontworpen in de huisstijl van Vermeiren Princeps. Het doel van de brochure was om duidelijk te communiceren welke processen, technieken en realisaties binnen de fabriek worden uitgevoerd. Hierbij heb ik de bestaande merkidentiteit vertaald naar een overzichtelijke en visueel aantrekkelijke lay-out die hun vakkennis, productiecapaciteiten en expertise in de kijker zet.",
    },
    images: [vermeirenCover, vermeiren1, vermeiren2, vermeiren3],
  },
  {
    id: "mimosa",
    title: "Mimosa lingerie rebranding",
    kind: "Rebranding",
    img: mimosaCover,
    desc: {
      en: "For a design project, I created a complete rebranding concept for Mimosa Lingerie. The project focused on redesigning the Instagram feed and overall visual identity to create a more consistent, elegant, and engaging brand presence. I developed a new visual direction, content style, and branding approach that reflects the character and aesthetic of the lingerie brand.",

      nl: "Voor een designopdracht heb ik een volledige rebranding uitgewerkt voor Mimosie Lingerie. Hierbij heb ik de Instagram-feed en de algemene visuele identiteit opnieuw vormgegeven met als doel een consistente, stijlvolle en aantrekkelijke merkuitstraling te creëren. De focus lag op het ontwikkelen van een passende visuele richting, contentstijl en branding die aansluit bij de uitstraling van het lingeriemerk.",
    },
    images: [mimosaCover, mimosa1, mimosa2, mimosa3],
  },
  {
    id: "photoshop",
    title: "Good old fashioned photoshop",
    kind: "Photo Editing",
    img: boosterCover,
    desc: {
      en: "Adventures in the wondrous world of Photoshop",

      nl: "Op avontuur in de wonderlijke wereld van Photoshop",
    },
    images: [boosterCover, boosterAssets, boosterVisuals],
  },
];

export default projects;
