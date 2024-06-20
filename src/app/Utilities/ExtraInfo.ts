export type Product = {
  productImage: string;
};

export type SingleImage = {
  image: string;
};

export type SingleImageProp = {
  tripleImage: string;
};

export type CategoryType = {
  categoryId: number;
  categoryName: string;
  categoryLink?: string;
  categorySubMenu: string[];
  categoryNew?: boolean;
  categoryHighlighted?: boolean;
};

export type model = {
  modelName: string;
};

export type Language = {
  language: string;
};

export type Currency = {
  country: string;
  currency: string;
};

export type categoryBubble = {
  categoryName: string;
  categoryValue: string;
};

export interface ExtraCategoryBubble extends categoryBubble {
  categoryImage: string;
  categoryLink: string;
}

export const ProductSetOne: Product[] = [
  {
    productImage: "/product-1.jpeg",
  },
  {
    productImage: "/product-2.jpeg",
  },
  {
    productImage: "/product-3.jpeg",
  },
  {
    productImage: "/product-4.jpeg",
  },
  {
    productImage: "/product-7.jpeg",
  },
];

export const ProductSetTwo: Product[] = [
  {
    productImage: "/product-7.jpeg",
  },
  {
    productImage: "/product-3.jpeg",
  },
  {
    productImage: "/product-5.jpeg",
  },
  {
    productImage: "/product-6.jpeg",
  },
  {
    productImage: "/product-4.jpeg",
  },
];

export const Images: SingleImageProp[] = [
  {
    tripleImage: "/blueway.jpg",
  },
  {
    tripleImage: "/happyway.jpg",
  },
  {
    tripleImage: "/tradeway.jpg",
  },
];

export const Instagram: Product[] = [
  {
    productImage: "/happyway.jpg",
  },
  {
    productImage: "/blueway.jpg",
  },
  {
    productImage: "/tradeway.jpg",
  },
  {
    productImage: "/quad6.jpg",
  },
  {
    productImage: "/quad1.jpg",
  },
  {
    productImage: "/quad5.jpg",
  },
  {
    productImage: "/quad4.jpg",
  },
  {
    productImage: "/happyway.jpg",
  },
  {
    productImage: "/blueway.jpg",
  },
  {
    productImage: "/tradeway.jpg",
  },
  {
    productImage: "/quad6.jpg",
  },
  {
    productImage: "/quad1.jpg",
  },
  {
    productImage: "/quad5.jpg",
  },
  {
    productImage: "/quad4.jpg",
  },
  {
    productImage: "/happyway.jpg",
  },
  {
    productImage: "/blueway.jpg",
  },
  {
    productImage: "/tradeway.jpg",
  },
  {
    productImage: "/quad6.jpg",
  },
  {
    productImage: "/quad1.jpg",
  },
  {
    productImage: "/quad5.jpg",
  },
];

export const ProductMenuSet: Product[] = [
  {
    productImage: "/product-1.jpeg",
  },
  {
    productImage: "/product-2.jpeg",
  },
  {
    productImage: "/product-3.jpeg",
  },
  {
    productImage: "/product-4.jpeg",
  },
  {
    productImage: "/product-7.jpeg",
  },
  {
    productImage: "/product-1.jpeg",
  },
  {
    productImage: "/product-3.jpeg",
  },
  {
    productImage: "/product-2.jpeg",
  },
];

export const categorys: CategoryType[] = [
  {
    categoryId: 1,
    categoryName: "Wavy Case",
    categoryLink: "/login",
    categorySubMenu: [],
    categoryNew: true,
  },
  {
    categoryId: 2,
    categoryName: "Mobilskal",
    categoryLink: "/login",
    categorySubMenu: [
      "Alla Mobilskal",
      "Silikonskal",
      "Wavy Cases",
      "Magsafe Skal",
      "Tunna Skal",
      "Genomskinliga Skal",
    ],
  },
  {
    categoryId: 3,
    categoryName: "Skärmskydd",
    categoryLink: "/login",
    categorySubMenu: [
      "Alla Skärmskydd",
      "Standard",
      "Full Coverage",
      "Privacy",
      "Anti-Blue Light",
      "Lens Protector",
      "Smartwatch",
    ],
  },
  {
    categoryId: 4,
    categoryName: "Accessoarer",
    categoryLink: "/login",
    categorySubMenu: [
      "Alla Accessoarer",
      "Stickers",
      "Phone Straps",
      "Magsafe Ring",
      "Korthållare",
      "Airtagfodral",
      "Watch Bands",
    ],
  },
  {
    categoryId: 5,
    categoryName: "Kits & Sets",
    categoryLink: "/login",
    categorySubMenu: [],
  },
  {
    categoryId: 6,
    categoryName: "Archive Sale",
    categoryLink: "/login",
    categorySubMenu: [],
    categoryHighlighted: true,
  },
  {
    categoryId: 7,
    categoryName: "Airpodsfodral",
    categoryLink: "/login",
    categorySubMenu: [
      "Alla Airpodsfodral",
      "Silikonfodral",
      "Genomskinliga Fodral",
    ],
  },
  {
    categoryId: 8,
    categoryName: "Dator & Ipadfodral",
    categoryLink: "/login",
    categorySubMenu: ["Datorfodral", "iPadfodral"],
  },
  {
    categoryId: 9,
    categoryName: "Plånboksfodral",
    categoryLink: "/login",
    categorySubMenu: [],
  },
  {
    categoryId: 10,
    categoryName: "Merchandise",
    categoryLink: "/login",
    categorySubMenu: [],
  },
];

export const phoneModels: model[] = [
  {
    modelName: "Allt",
  },
  {
    modelName: "iPhone 15 Pro Max",
  },
  {
    modelName: "iPhone 15 Pro",
  },
  {
    modelName: "iPhone 15 Plus",
  },
  {
    modelName: "iPhone 15",
  },
  {
    modelName: "iPhone 14 Pro Max",
  },
  {
    modelName: "iPhone 14 Pro",
  },
  {
    modelName: "iPhone 14 Plus",
  },
  {
    modelName: "iPhone 14",
  },
  {
    modelName: "iPhone 13 Pro Max",
  },
  {
    modelName: "iPhone 13 Pro",
  },
  {
    modelName: "iPhone 13 Mini",
  },
  {
    modelName: "iPhone 13",
  },
  {
    modelName: "iPhone 12 Pro Max",
  },
  {
    modelName: "iPhone 12 Pro",
  },
  {
    modelName: "iPhone 12 Mini",
  },
  {
    modelName: "iPhone 12",
  },
  {
    modelName: "iPhone 11 Pro Max",
  },
  {
    modelName: "iPhone 11 Pro",
  },
  {
    modelName: "iPhone 11",
  },
  {
    modelName: "iPhone XR Max",
  },
  {
    modelName: "iPhone Xs Max",
  },
  {
    modelName: "iPhone Xs",
  },
  {
    modelName: "iPhone X",
  },
  {
    modelName: "iPhone 8 Plus",
  },
  {
    modelName: "iPhone 7 Plus",
  },
  {
    modelName: "iPhone 8",
  },
  {
    modelName: "iPhone 7",
  },
  {
    modelName: "iPhone SE 2020",
  },
  {
    modelName: "Galaxy S23",
  },
  {
    modelName: "Galaxy S22 Ultra",
  },
  {
    modelName: "Galaxy S22+",
  },
  {
    modelName: "Galaxy S22",
  },
  {
    modelName: "Galaxy S21 Ultra",
  },
  {
    modelName: "Galaxy S21+",
  },
  {
    modelName: "Galaxy S20 Ultra",
  },
  {
    modelName: "Galaxy S20+",
  },
  {
    modelName: "Galaxy A54 5G",
  },
  {
    modelName: "Galaxy S24",
  },
  {
    modelName: "Galaxy A14",
  },
  {
    modelName: "Galaxy A15",
  },
  {
    modelName: "One Size",
  },
  {
    modelName: "Galaxy S24 Ultra",
  },
  {
    modelName: "Galaxy S24+",
  },
  {
    modelName: "Galaxy S23 FE",
  },
  {
    modelName: "Galaxy Z Flip",
  },
];

export const Language: Language[] = [
  {
    language: "Swedish",
  },
  {
    language: "English",
  },
  {
    language: "Danish",
  },
  {
    language: "Finnish",
  },
  {
    language: "German",
  },
  {
    language: "Norwegian",
  },
  {
    language: "Dutch",
  },
  {
    language: "Dutch (Belgian)",
  },
];

export const Currency: Currency[] = [
  {
    country: "Belgium",
    currency: "EUR",
  },
  {
    country: "Bulgaria",
    currency: "EUR",
  },
  {
    country: "Croatia",
    currency: "EUR",
  },
  {
    country: "Cyprus",
    currency: "EUR",
  },
  {
    country: "Czech Republic",
    currency: "EUR",
  },
  {
    country: "Denmark",
    currency: "DKK",
  },
  {
    country: "Estonia",
    currency: "EUR",
  },
  {
    country: "Finland",
    currency: "EUR",
  },
  {
    country: "France",
    currency: "EUR",
  },
  {
    country: "Germany",
    currency: "EUR",
  },
  {
    country: "Greece",
    currency: "EUR",
  },
  {
    country: "Hungary",
    currency: "EUR",
  },
  {
    country: "Ireland",
    currency: "EUR",
  },
  {
    country: "Italy",
    currency: "EUR",
  },
  {
    country: "Latvia",
    currency: "EUR",
  },
  {
    country: "Lithuania",
    currency: "EUR",
  },
  {
    country: "Luxembourg",
    currency: "EUR",
  },
  {
    country: "Netherlands",
    currency: "EUR",
  },
  {
    country: "Norway",
    currency: "NOK",
  },
  {
    country: "Poland",
    currency: "EUR",
  },
  {
    country: "Romania",
    currency: "EUR",
  },
  {
    country: "Slovakia",
    currency: "EUR",
  },
  {
    country: "Slovenia",
    currency: "EUR",
  },
  {
    country: "Spain",
    currency: "EUR",
  },
  {
    country: "Sweden",
    currency: "SEK",
  },
];

export const QuadImages: SingleImage[] = [
  {
    image: "/quad6.jpg",
  },
  {
    image: "/quad2.jpg",
  },
  {
    image: "/quad3.jpg",
  },
  {
    image: "/quad4.jpg",
  },
];

export const categories: categoryBubble[] = [
  {
    categoryName: "iPhone 15",
    categoryValue: "iPhone 15",
  },
  {
    categoryName: "iPhone 13",
    categoryValue: "iPhone 13",
  },
  {
    categoryName: "iPhone 11",
    categoryValue: "iPhone 11",
  },
  {
    categoryName: "Magsafe",
    categoryValue: "Magsafe",
  },
  {
    categoryName: "Korthållare",
    categoryValue: "cardholder",
  },
  {
    categoryName: "iPad cases",
    categoryValue: "iPad cases",
  },
  {
    categoryName: "Rosa",
    categoryValue: "Pink",
  },
];

export const categoryBubbleWithImage: ExtraCategoryBubble[] = [
  {
    categoryName: "Mobilskal",
    categoryValue: "",
    categoryImage: "/categoryImage1.jpg",
    categoryLink: "/test",
  },
  {
    categoryName: "Skärmskydd",
    categoryValue: "",
    categoryImage: "/categoryImage2.jpg",
    categoryLink: "/test",
  },
  {
    categoryName: "Stickers",
    categoryValue: "",
    categoryImage: "/categoryImage3.jpg",
    categoryLink: "/test",
  },
  {
    categoryName: "Magsafe Skal",
    categoryValue: "",
    categoryImage: "/categoryImage4.jpg",
    categoryLink: "/test",
  },
];

export type FormValues = {
  country: string;
  email: string;
  phoneNumber: number;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  zipcode: number;
  city: string;
  membershipRegistration: boolean;
  termsAndConditions: boolean;
};

export type SampleProduct = {
  itemId: number;
  itemName: string;
  itemDescription: string;
  itemLongDescription: string;
  itemTag: string;
  itemImage: string;
  itemPrice: number;
  itemColor: string;
  itemColorHex: string;
  itemImageAngels: string[];
  itemLiked: boolean;
  itemCategory: string;
  itemType: string;
  itemUrl: string;
};

export const TestProducts: SampleProduct[] = [
  {
    itemId: 55432535984,
    itemName: "Silicone-Case",
    itemDescription: "Phone Case Silicone Red iPhone 13",
    itemLongDescription:
      "Detta silikonskal innehåller återvunna material, samtidigt som det skyddar din telefon på ett snyggt och smart sätt! Skalet är greppvänligt, täcker volymknappar och kanter och har en peachy finish som gör skalet lent och mjukt.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13Red.jpg",
    itemPrice: 299,
    itemColor: "Red",
    itemColorHex: "#751c38",
    itemImageAngels: [
      "/iPhone13Red.jpg",
      "/iPhone13RedRotated.jpg",
      "/iPhone13RedUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-red-iphone-13",
  },
  {
    itemId: 5512322535984,
    itemName: "Silicone-Case",
    itemDescription: "Phone Case Silicone Beige iPhone 13",
    itemLongDescription:
      "Silicone Beige är ett tunt silikonskal som är utformat för att smidigt omsluta din telefon. Materialet är greppvänligt och formar sig efter volymknappar och kanter, vilket ger ett heltäckande skydd. Ett stilsäkert och smart val som skyddar din telefon på bästa sätt.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13LightBiege.jpg",
    itemPrice: 299,
    itemColor: "Biege",
    itemColorHex: "#dbcdbd",
    itemImageAngels: [
      "/iPhone13LightBiege.jpg",
      "/iPhone13LightBiegeRotated.jpg",
      "/iPhone13LightBiegeUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-light-biege-iphone-13",
  },
  {
    itemId: 5543253123251,
    itemName: "Slim-Case",
    itemDescription: "Phone Case Slim Forest Green iPhone 13",
    itemLongDescription:
      "No lining. No metal. No bullshit. Bara ett supertunt och hårt mobilskal i 100 % återvunnet material. Enklare än så här blir det inte.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13Green.jpg",
    itemPrice: 299,
    itemColor: "Forest Green",
    itemColorHex: "#2b5c36",
    itemImageAngels: [
      "/iPhone13Green.jpg",
      "/iPhone13GreenRotated.jpg",
      "/iPhone13GreenUpsideDown.jpg",
      "/iPhone13GreenInfo.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "slim",
    itemUrl: "phone-case-slim-green-iphone-13",
  },
  {
    itemId: 55432531232876,
    itemName: "Silicone-Case",
    itemDescription: "Phone Case Silicone Sky Blue iPhone 13",
    itemLongDescription:
      "Sky Blue är säsongens stora trendfärg. En färgstark och kaxig nyans som både kommer få din mobil och look att poppa lite extra. Skalets yta skapar en härlig peachy finish som gör den slät och mjuk. Materialet är greppvänligt och formar sig efter volymknappar och kanter, vilket ger ett heltäckande skydd. Ett stilsäkert och smart val som skyddar din telefon på bästa sätt.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13Blue.jpg",
    itemPrice: 299,
    itemColor: "Sky Blue",
    itemColorHex: "#0974e6",
    itemImageAngels: [
      "/iPhone13Blue.jpg",
      "/iPhone13BlueRotated.jpg",
      "/iPhone13BlueUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-blue-iphone-13",
  },
  {
    itemId: 55432531232567,
    itemName: "Slim-Case",
    itemDescription: "Phone Case Slim Denim Blue iPhone 13",
    itemLongDescription:
      "No lining. No metal. No bullshit. Bara ett supertunt och hårt mobilskal i 100 % återvunnet material. Enklare än så här blir det inte.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13NavyBlue.jpg",
    itemPrice: 299,
    itemColor: "Navy Blue",
    itemColorHex: "#1a4b66",
    itemImageAngels: [
      "/iPhone13NavyBlue.jpg",
      "/iPhone13NavyBlueRotated.jpg",
      "/iPhone13NavyBlueUpsideDown.jpg",
      "/iPhone13NavyBlueInfo.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "slim",
    itemUrl: "phone-case-slim-navy-blue-iphone-13",
  },
  {
    itemId: 554325312323426,
    itemName: "Silicone-Case",
    itemDescription: "Phone Case Silicone Mocha Brown iPhone 13",
    itemLongDescription:
      "Mocha Brown - färgen som fungerar till allt! Uppdatera din telefons garderob med den här tonade nyansen av brunt som matchar varje tillfälle och varje outfit. Välj och vraka mellan olika nyanser för att skapa din egen vibe och få din outfit att poppa med detta greppvänliga mobilskal som dessutom täcker volymknappar och kanter. Ytan har en peachy finish som gör skalet lent och mjukt samtidigt som det är ett snyggt och smart val som skyddar din telefon på bästa möjliga sätt.",
    itemTag: "iPhone-13",
    itemImage: "/iPhone13Biege.jpg",
    itemPrice: 299,
    itemColor: "Mocha Brown",
    itemColorHex: "#a49987",
    itemImageAngels: [
      "/iPhone13Biege.jpg",
      "/iPhone13BiegeRotated.jpg",
      "/iPhone13BiegeUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-biege-iphone-13",
  },
  {
    itemId: 554325332184,
    itemName: "Silicone-Case",
    itemDescription: "iPhone 11 skal",
    itemLongDescription: "",
    itemTag: "iPhone-11",
    itemImage: "/iPhone11MossGreen.jpg",
    itemPrice: 299,
    itemColor: "Moss Green",
    itemColorHex: "#306463",
    itemImageAngels: [
      "/iPhone11MossGreen.jpg",
      "/iPhone11MossGreenRotated.jpg",
      "/iPhone11MossGreenUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-moss-green-iphone-11",
  },
  {
    itemId: 55432325523984,
    itemName: "Silicone-Case",
    itemDescription: "Phone Case Silicone Pink iPhone 15",
    itemLongDescription:
      "Denna färg är den perfekta nyansen av rosa. En sval färg som ger telefonen en trendig och stilren look. Ytan på fodralet skapar en peachy finish som gör den slät och mjuk. Materialet möjliggör ett enkelt grepp och formar sig runt volymknappar och kanter, vilket ger ett komplett skydd. Ett snyggt och smart val som skyddar din telefon på bästa sätt.",
    itemTag: "iPhone-15",
    itemImage: "/iPhone15Pink.jpg",
    itemPrice: 299,
    itemColor: "Pink",
    itemColorHex: "#f4c4e4",
    itemImageAngels: [
      "/iPhone15Pink.jpg",
      "/iPhone15PinkRotated.jpg",
      "/iPhone15PinkUpsideDown.jpg",
    ],
    itemLiked: false,
    itemCategory: "phone-case",
    itemType: "silicone",
    itemUrl: "phone-case-silicone-pink-iphone-15",
  },
  {
    itemId: 5235252535984,
    itemName: "Magsafe Ring",
    itemDescription: "MagSafe Ring White One Size",
    itemLongDescription:
      "Vår MagSafe ring kombinerar både hållbarhet och tech, samtidigt som den enkelt dockar till sig andra MagSafe-tillbehör. MagSafe-magneterna låter dig dra nytta av Apples trådlösa laddningsteknik, och ringen fungerar med alla våra mobilskal! Lägg bara ringen mellan mobilen och skalet, och du har helt plötsligt ett mobilskal som är det ultimata valet för den miljömedvetna Apple-fantasten!",
    itemTag: "magsafe",
    itemImage: "/magsafeWhite.jpg",
    itemPrice: 299,
    itemColor: "White",
    itemColorHex: "#f6f6f6",
    itemImageAngels: [
      "/magsafeWhite.jpg",
      "/magsafeWhiteSingle.jpg",
      "/magsafeWhiteRotated.jpg",
      "/magsafeWhiteDouble.jpg",
    ],
    itemLiked: false,
    itemCategory: "magsafe",
    itemType: "ring",
    itemUrl: "magsafe-ring-white-one-size",
  },
  {
    itemId: 554321241245984,
    itemName: "Card Holder",
    itemDescription: "Card Holder Black",
    itemLongDescription:
      "Det här är en accessoar som är skapad för att hålla dina kort på en säker plats. Dra enkelt av plasten på baksidan av korthållaren och placera den klibbiga sidan på ditt mobilskal. Korthållaren är gjord av veganvänligt PU-material i trendiga färger, vilket gör den lätt att matcha med ett mobilskal i samma nyans. Trend eller funktion? Med en korthållare behöver du inte välja.",
    itemTag: "Card-Holder",
    itemImage: "/cardholderBlack.jpg",
    itemPrice: 299,
    itemColor: "Black",
    itemColorHex: "#000",
    itemImageAngels: ["/cardholderBlack.jpg", "/cardholderBlackiPhone.jpg"],
    itemLiked: false,
    itemCategory: "card",
    itemType: "holder",
    itemUrl: "card-holder-black",
  },
  {
    itemId: 55432525856984,
    itemName: "iPad-11-Pro",
    itemDescription: "Silicone Case iPad Black iPad Pro 11",
    itemLongDescription:
      "Vårt skal till iPad är gjort av återvunnet silikon och är kompatibelt med iPad Mini, iPad 10.2, iPad 10.9 och iPad 11 Pro. Det mjuka materialet har en peachy finish, precis som våra mobilskal, som är greppvänligt och som täcker volymknappar och kanter för att ge ett komplett skydd. Lägg till ett skärmskydd för att skydda framsidan också, så har du en flexibel iPad som enkelt passar i väskan! Välj och vraka bland våra olika färger och se till att matcha med ett mobilskal i samma nyans.",
    itemTag: "iPad-cases",
    itemImage: "/ipad-pro-11-Black.jpg",
    itemPrice: 299,
    itemColor: "Black",
    itemColorHex: "#000",
    itemImageAngels: [
      "/ipad-pro-11-Black.jpg",
      "/ipad-pro-11-BlackBehind.jpg",
      "/ipad-pro-11-BlackOutdoor.jpg",
    ],
    itemLiked: false,
    itemCategory: "case-ipad",
    itemType: "silicone",
    itemUrl: "silicone-case-ipad-black-ipad-pro-11",
  },
  {
    itemId: 524233515,
    itemName: "Wavy Case",
    itemDescription: "Phone Case Wavy Pink/Transparent iPhone 14 Pro Max",
    itemLongDescription:
      "Här är det ultimata mobilskalet för dig som diggar gulliga och skyddande vibes. Tillverkat av 100% återvunnen TPU/PC, och med mjukt vågiga kanter, ligger detta skal grymt bekvämt i handen. Grab it, and slay in both cuteness and protection!",
    itemTag: "iPhone-14",
    itemImage: "/iPhone14TransparentPinkWavy.jpg",
    itemPrice: 299,
    itemColor: "Pink/Transparent",
    itemColorHex: "#f4c5e5",
    itemImageAngels: [
      "/iPhone14TransparentPinkWavy.jpg",
      "/iPhone14TransparentPinkBlackWavy.jpg",
      "/iPhone14TransparentPinkWavyRotated.jpg",
      "/iPhone14TransparentPinkWavyFront.jpg",
    ],
    itemLiked: false,
    itemCategory: "wavy",
    itemType: "wavy",
    itemUrl: "phone-case-wavy-pink-transparent-iphone-14-pro-max",
  },
  {
    itemId: 5276963515,
    itemName: "Wavy Case",
    itemDescription:
      "Phone Case Wavy Mocha Brown/Transparent iPhone 14 Pro Max",
    itemLongDescription:
      "Här är det ultimata mobilskalet för dig som diggar gulliga och skyddande vibes. Tillverkat av 100% återvunnen TPU/PC, och med mjukt vågiga kanter, ligger detta skal grymt bekvämt i handen. Grab it, and slay in both cuteness and protection!",
    itemTag: "iPhone-14",
    itemImage: "/iPhone14TransparentMochaBrownWavy.jpg",
    itemPrice: 299,
    itemColor: "Mocha Brown/Transparent",
    itemColorHex: "#a49987",
    itemImageAngels: [
      "/iPhone14TransparentMochaBrownWavy.jpg",
      "/iPhone14TransparentMochaBrownWavyBlack.jpg",
      "/iPhone14TransparentMochaBrownWavyRotated.jpg",
      "/iPhone14TransparentMochaBrownWavyFront.jpg",
    ],
    itemLiked: false,
    itemCategory: "wavy",
    itemType: "wavy",
    itemUrl: "phone-case-wavy-mocha-brown-transparent-iphone-14-pro-max",
  },
];

export type Tag = {
  tagHeader: string;
  tagText: string;
  tagLocationTop: string;
  tagLocationLeft: string;
};

export type Category = {
  [key: string]: Tag[];
};

export const tagCategories: Category = {
  slim: [
    {
      tagHeader: "Hårt skal",
      tagText:
        "Ett enkelt och hårt fodral för din mobil. Stabilt, och skyddande, utan någon som helst bullshit",
      tagLocationTop: "top-[18.75%]",
      tagLocationLeft: "left-[68.359375%]",
    },
    {
      tagHeader: "100% återvunnen",
      tagText:
        "Look good and do good! Våra mobilskal Slim är gjorda av 100% återvunna material och är inte bara en accessoar till din outfit, utan också ett statement som värnar lite extra om vår planet. Ps! Hela vårt sortiment är dessutom godkänt av PETA",
      tagLocationTop: "top-[55.3125%]",
      tagLocationLeft: "left-[31.25%]",
    },
    {
      tagHeader: "Glider lätt ner i fickan",
      tagText:
        "Sleek, slim, and oh-so-smooth! Våra Slim Cases har en silkeslen finish för att säkerställa att du aldrig mer kommer att brottas med dina fickor",
      tagLocationTop: "top-[82.1875%]",
      tagLocationLeft: "left-[64.453125%]",
    },
  ],
  silicone: [
    {
      tagHeader: "Supertunt",
      tagText:
        "Snyggt möter mjukt! Våra silikonskal ger den ultimata mixen av form och funktion. Alla skyddande förmåner, men fortfarande ett tunt och slimmat mobilskal! Helt enkelt det bästa av två världar",
      tagLocationTop: "top-[17.8125%]",
      tagLocationLeft: "left-[71.875%]",
    },
    {
      tagHeader: "Greppvänlig och peachy finish",
      tagText:
        "Ytan är allt! Vårt populära silikonskal har en peachy finish som gör skalet slätt och mjukt, samtidigt som det är lätt att greppa. Helt enkelt ett perfekt skal för alla klumpiga där ute.",
      tagLocationTop: "top-[43.75%]",
      tagLocationLeft: "left-[31.25%]",
    },
    {
      tagHeader: "Innehåller återvunna material",
      tagText:
        "Look good and do good! Våra produkter innehåller återvunna material och är inte bara en accessoar till din outfit, utan också ett statement som värnar lite extra om vår planet. Ps! Hela vårt sortiment är dessutom godkänt av PETA",
      tagLocationTop: "top-[72.5%]",
      tagLocationLeft: "left-[62.1094%]",
    },
  ],
  magsafe: [
    {
      tagHeader: "Fungerar med alla mobilskal",
      tagText:
        "Här har du den, den perfekta balansen mellan stil och funktion! Placera ringen mellan mobilen och valfritt mobilskal för att dra nytta av MagSafe-teknologin. Nu behöver du helt enkelt inte kompromissa längre – med MagSafe-ringen får du både en elegant design och en kraftfull lösning!",
      tagLocationTop: "top-[50.3059%]",
      tagLocationLeft: "left-[50.627%]",
    },
    {
      tagHeader: "Inbyggda MagSafe magneter",
      tagText:
        "MagSafe är en ring av magneter som sitter på baksidan av de flesta iPhone-modeller. Magneterna erbjuder många bekvämligheter, som till exempel enklare trådlös laddning, och möjligheterna att addera och byta bland olika tillbehör! Ringen med magneter omger den trådlösa laddningsspolen inuti telefonen och dockar till sig MagSafe-kompatibla tillbehör på ett smidigt sätt!",
      tagLocationTop: "top-[49.6973%]",
      tagLocationLeft: "left-[88.5972%]",
    },
  ],
  ipad: [
    {
      tagHeader: "Skyddande design",
      tagText:
        "Glöm inte att hålla även din iPad säker! Våra skal är byggda för att hantera oväntade fall och irriterande repor, vilket säkerställer att din iPad håller sig i toppform.",
      tagLocationTop: "top-[25.625%]",
      tagLocationLeft: "left-[70.3125%]",
    },
    {
      tagHeader: "Tunn passform",
      tagText:
        "Säg hej till den perfekta passformen! Vårt skal sveper runt varje knapp och hörn felfritt. Det har till och med praktiska hål för kameran, laddningsport och högtalare. Du kommer helt enkelt aldrig behöva ta av det!",
      tagLocationTop: "top-[73.75%]",
      tagLocationLeft: "left-[23.4375%]",
    },
  ],
  card: [
    {
      tagHeader: "3M Tejp",
      tagText:
        "Det bästa limmet på marknaden kommer från 3M! Det ger den perfekta mixen av att aldrig falla av, samtidigt som det är lätt att ta bort när du vill byta färg på din korthållare!",
      tagLocationTop: "top-[28.75%]",
      tagLocationLeft: "left-[68.75%]",
    },
    {
      tagHeader: "Håller dina kort på plats",
      tagText:
        "Bekvämlighet möter stil! Med två kortfack kan du säga hejdå till en klumpig plånbok och hej till smidigheten när du är på språng! Oavsett om det är ditt kreditkort, ID eller det där speciella lojalitetskortet från ditt favoritkafé - håll dem alltid nära med en korthållare.",
      tagLocationTop: "top-[61.25%]",
      tagLocationLeft: "left-[36.7188%]",
    },
  ],
  wavy: [
    {
      tagHeader: "100% återvunna material",
      tagText:
        "Look good and do good! Våra Wavyskal är gjorda av 100% återvunna material och är inte bara en accessoar till din outfit, utan också ett statement som värnar lite extra om vår planet. Ps! Hela vårt sortiment är dessutom godkänt av PETA.",
      tagLocationTop: "top-[38.9848%]",
      tagLocationLeft: "left-[50%]",
    },
    {
      tagHeader: "Kompatibel med trådlös laddning",
      tagText:
        "Håll beatsen flytande! Det finns inget behov av att ta av skalet när det är dags för laddning. Lägg bara ner mobilen på din laddare, och voilà! Snabbt, enkelt och ack så bekvämt.",
      tagLocationTop: "top-[67.0051%]",
      tagLocationLeft: "left-[50%]",
    },
  ],
};

export const iPhoneModels: model[] = [
  {
    modelName: "iPhone 15 Pro Max",
  },
  {
    modelName: "iPhone 15 Pro",
  },
  {
    modelName: "iPhone 15 Pro Plus",
  },
  {
    modelName: "iPhone 15",
  },
  {
    modelName: "iPhone 14 Pro Max",
  },
  {
    modelName: "iPhone 14 Pro",
  },
  {
    modelName: "iPhone 14 Plus",
  },
  {
    modelName: "iPhone 14",
  },
  {
    modelName: "iPhone 13",
  },
  {
    modelName: "iPhone 12 Pro",
  },
  {
    modelName: "iPhone 12",
  },
];

export type chooseYourVibeImagesType = {
  image: string;
};

export const chooseYourVibeImages: chooseYourVibeImagesType[] = [
  {
    image: "/quad1.jpg",
  },
  {
    image: "/quad2.jpg",
  },
  {
    image: "/quad3.jpg",
  },
  {
    image: "/quad4.jpg",
  },
  {
    image: "/quad5.jpg",
  },
  {
    image: "/quad6.jpg",
  },
  {
    image: "/blueway.jpg",
  },
  {
    image: "/happyway.jpg",
  },
  {
    image: "/maplecase.jpg",
  },
];

export type FooterAnchorTag = {
  anchorTag: string;
  anchorLink: string;
};

export const FooterAboutLOGO: FooterAnchorTag[] = [
  {
    anchorTag: "Om oss",
    anchorLink: "/about-us",
  },
  {
    anchorTag: "Pressrum",
    anchorLink: "/press",
  },
  {
    anchorTag: "Hållbarhet",
    anchorLink: "/our-responsibility",
  },
  {
    anchorTag: "Karriär",
    anchorLink: "/karriar",
  },
  {
    anchorTag: "Personuppgiftspolicy",
    anchorLink: "/info/personuppgiftspolicy",
  },
  {
    anchorTag: "Allmänna vilkor",
    anchorLink: "/info/allmanna-vilkor",
  },
];

export const FooterHelp: FooterAnchorTag[] = [
  {
    anchorTag: "Hjälpcenter",
    anchorLink: "/faq",
  },
  {
    anchorTag: "Betalning",
    anchorLink: "/betalning",
  },
  {
    anchorTag: "Returer",
    anchorLink: "/returer",
  },
  {
    anchorTag: "Spåra min order",
    anchorLink: "/spara-min-order",
  },
  {
    anchorTag: "Kontakta oss",
    anchorLink: "/kontakta-oss",
  },
];

export const FooterShopping: FooterAnchorTag[] = [
  {
    anchorTag: "Mobilskal",
    anchorLink: "/mobilskal",
  },
  {
    anchorTag: "Datorskal",
    anchorLink: "/datorskal",
  },
  {
    anchorTag: "Airpodsfodral",
    anchorLink: "/airpodsfodral",
  },
  {
    anchorTag: "Skärmskydd",
    anchorLink: "/skarmskydd",
  },
  {
    anchorTag: "Accessoarer",
    anchorLink: "/accessoarer",
  },
];

export type Delivery = {
  deliveryName: string;
  deliveryTime: string;
  deliveryGreen: string;
  deliveryCost: number | string;
  deliveryIcon: string;
};

export const DeliveryArray: Delivery[] = [
  {
    deliveryName: "Postnord - Hemleverans Brevlåda",
    deliveryTime: "Leverans om 1-3 arbetsdagar",
    deliveryGreen: "Klimatkompenserad frakt",
    deliveryCost: "Gratis",
    deliveryIcon: "postnord",
  },
  {
    deliveryName: "Instabox - Leverans till paketskåp",
    deliveryTime: "Leverans om 1-2 arbetsdagar",
    deliveryGreen: "100% fossilfritt",
    deliveryCost: "29 kr",
    deliveryIcon: "instabox",
  },
  {
    deliveryName: "Instabox - Hemleverans",
    deliveryTime: "Leverans om 1-2 arbetsdagar",
    deliveryGreen: "100% fossilfritt",
    deliveryCost: "39 kr",
    deliveryIcon: "instabox",
  },
  {
    deliveryName: "Budbee Hemleverans Kvällstid",
    deliveryTime: "Leverans om 1-2 arbetsdagar",
    deliveryGreen: "Klimatkompenserad frakt",
    deliveryCost: "39 kr",
    deliveryIcon: "budbee",
  },
  {
    deliveryName: "Budbee - Leverans till Paketbox",
    deliveryTime: "Leverans om 1-2 arbetsdagar",
    deliveryGreen: "Klimatkompenserad frakt",
    deliveryCost: "39 kr",
    deliveryIcon: "budbee",
  },
];
