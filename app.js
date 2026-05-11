const sampleProperties = [
  {
    id: "wa-hillarys-5-founders",
    title: "5 Founders Lane",
    suburb: "Hillarys",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 25,
    listedDate: "2026-03-23",
    price: 5000000,
    landSize: 1049,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Oceanfront land", "Direct beach access", "Unobstructed ocean views", "Subdivision potential"],
    status: "active",
    notes: "Active realestate.com.au Hillarys land listing advertised as a super block ocean front opportunity with unobstructed ocean views, direct access to the beach, and potential subdivision into two 500sqm blocks. Price is advertised as offers from $5 million.",
    image: "https://www.realestate.com.au/property-image/204464516/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-hillarys-204464516"
  },
  {
    id: "wa-hillarys-221-68-southside",
    title: "221/68 Southside Drive",
    suburb: "Hillarys",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 25,
    daysOnMarket: 4,
    price: 600000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Marina waterfront", "Harbour and ocean views", "Beachside sanctuary", "Resort facilities"],
    status: "active",
    notes: "Active Hillarys Boat Harbour apartment listing advertised in a premier waterfront marina setting with sweeping harbour, yacht marina and ocean views, plus beachside resort-style facilities. Price is advertised as offers in the $600k range.",
    image: "https://www.realestate.com.au/property-image/150341136/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-hillarys-150341136"
  },
  {
    id: "wa-hillarys-108-68-southside",
    title: "108/68 Southside Dr",
    suburb: "Hillarys",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 25,
    listedDate: "2026-04-07",
    price: 500000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Prime marina frontage", "Metres from Sorrento Beach", "Waterfront location", "High rental income"],
    status: "active",
    notes: "Active Hillarys Boat Harbour apartment listing advertised as a prime waterfront/marina-front location metres from Sorrento Beach and adjacent to AQWA and the Rottnest ferry terminal. Price is advertised from the high $400,000s to $500,000s.",
    image: "https://www.realestate.com.au/property-image/150800100/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-hillarys-150800100"
  },
  {
    id: "wa-trigg-305-west-coast",
    title: "305 West Coast Drive",
    suburb: "Trigg",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    listedDate: "2026-05-01",
    price: null,
    landSize: 562,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row coastal position", "Opposite shoreline", "Uninterrupted ocean panoramas", "Walk to Trigg Beach"],
    status: "active",
    notes: "Active Trigg front-row listing advertised as opposite the shimmering shoreline between Mettams Pool and Bennion Beach, with uninterrupted ocean panoramas. Price is advertised as offers closing 20 May unless sold prior.",
    image: "https://www.realestate.com.au/property-image/151073916/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-trigg-151073916"
  },
  {
    id: "wa-trigg-331-west-coast",
    title: "331 West Coast Drive",
    suburb: "Trigg",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    daysOnMarket: null,
    price: 3200000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront apartment", "Trigg Beach opposite", "Ocean views", "Boutique five-home building"],
    status: "active",
    notes: "Active apartment listing advertised as a boutique collection of luxury beachfront homes perched above Trigg Beach, with the beach right across the road. Price is advertised from $3.2m with three remaining.",
    image: "https://www.realestate.com.au/property-image/143897976/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-trigg-143897976"
  },
  {
    id: "wa-safety-bay-20-warnbro-beach",
    title: "20 Warnbro Beach Road",
    suburb: "Safety Bay",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 50,
    daysOnMarket: null,
    price: null,
    landSize: 826,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Beach opposite", "Penguin Island views", "Dual living"],
    status: "active",
    notes: "Active front-row Safety Bay listing advertised as exclusive/absolute beachfront, with uninterrupted ocean views and the beach directly across the road. Price is advertised as All Offers Considered.",
    image: "https://www.realestate.com.au/property-image/150371768/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-safety%2Bbay-150371768"
  },
  {
    id: "wa-safety-bay-288-safety-bay",
    title: "288 Safety Bay Road",
    suburb: "Safety Bay",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 50,
    daysOnMarket: 6,
    price: null,
    landSize: 910,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Directly opposite beach", "Ocean views", "Large block"],
    status: "active",
    notes: "Homely active listing describes absolute beachfront living directly opposite Safety Bay Beach with uninterrupted ocean views. Price is advertised as Contact Agent.",
    image: "https://www.homely.com.au/img-variant/l-Harcourts-12699539-1.jpg?named-transform=webDefaultTransform",
    listingUrl: "https://www.homely.com.au/homes/288-safety-bay-road-safety-bay-wa-6169/12699539"
  },
  {
    id: "qld-agnes-water-48-atlantis",
    title: "48 Atlantis Boulevarde",
    suburb: "Agnes Water",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 370,
    price: 2100000,
    landSize: 1057,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Dual living", "Pool"],
    notes: "Beachfront house with direct access to Agnes Water beach. Price shown as offers over.",
    image: "https://i2.au.reastatic.net/800x600/0cb37a6eb3b5199532c99469b95110f01c0697abb3f3212d9b7c4752c357bd36/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-agnes%2Bwater-146193012"
  },
  {
    id: "qld-tugun-4-353-golden-four",
    title: "4/353 Golden Four Drive",
    suburb: "Tugun",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 2000000,
    landSize: 338,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Boutique block", "Ocean views"],
    notes: "Absolute beachfront unit in a small block on Tugun Beach. Price shown as offers over.",
    image: "https://i2.au.reastatic.net/800x600/3ea42dad82b288e87c1be2735c226fae9d1273c4789516972cb1e6beadf5a242/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-unit-qld-tugun-150764768"
  },
  {
    id: "nsw-diamond-beach-41-jubilee",
    title: "41 Jubilee Parade",
    suburb: "Diamond Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 210,
    price: 1500000,
    landSize: 499.5,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Vacant land", "Ocean views"],
    notes: "Rare level beachfront land parcel with direct beach position on the Mid North Coast.",
    image: "https://i2.au.reastatic.net/800x600/79c6cd01a4053fd49750343e522fd080ab9b90d338b4a158fac4f38886db86ac/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-nsw-diamond%2Bbeach-204433248"
  },
  {
    id: "nsw-kingscliff-49-cylinders",
    title: "49 Cylinders Drive",
    suburb: "Kingscliff",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 40,
    price: 3700000,
    landSize: 1012,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Vacant land", "Blue-chip location"],
    notes: "Absolute beachfront land in a tightly held Kingscliff enclave. Price text advertised as $3.7m.",
    image: "https://i2.au.reastatic.net/800x600/c76f2ae727175c343cb0b37ff0a32e112266d1f1f901808edc9cf224082d9057/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-nsw-kingscliff-204401644"
  },
  {
    id: "vic-aspendale-80-nepean",
    title: "80 Nepean Highway",
    suburb: "Aspendale",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 45,
    price: 3990000,
    landSize: 1238,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Street-to-sand", "Vacant land", "Development upside"],
    notes: "Street-to-sand beachfront land. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/6cc1b663015edcbe4555b03cbb7429d922a39fc9a82be372f4bfba878801cc8f/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-vic-aspendale-204184340"
  },
  {
    id: "qld-mission-beach-62-porter",
    title: "62 Porter Promenade",
    suburb: "Mission Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1030,
    price: 620000,
    landSize: 1012,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "National park rear", "Low $/m2"],
    notes: "Beachfront-position block directly opposite a long sandy beach, with a road between the site and sand.",
    image: "https://i2.au.reastatic.net/800x600/83115f7af9348b8a1281d62be176d3b6601a07dac7d78f6a463360d20fdcbc2d/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-mission%2Bbeach-204089836"
  },
  {
    id: "vic-beaumaris-375-beach",
    title: "375 Beach Road",
    suburb: "Beaumaris",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 35,
    price: 4112500,
    landSize: 1000,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Corner block", "Bay views", "Development upside"],
    notes: "Beachfront boulevard position overlooking Port Phillip Bay. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/a41282ee27a15bc2164c4595b060367ee5fee2128ec9a08c60b84ed51aba923f/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-vic-beaumaris-204094676"
  },
  {
    id: "vic-surf-beach-208a-esplanade",
    title: "208A The Esplanade",
    suburb: "Surf Beach",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 120,
    price: 519500,
    landSize: 400,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Foreshore block", "Vacant land", "Coastal track", "Lower entry price"],
    notes: "Foreshore block metres from Surf Beach shoreline. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/92e02c886b56873f91f7ba4a5346ea07b1f940035c64654423a5347681514b0f/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-vic-surf%2Bbeach-204442052"
  },
  {
    id: "wa-halls-head-20-hayman",
    title: "20 Hayman Retreat",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    price: 2290000,
    landSize: 752,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Two homes", "Ocean views", "Pool"],
    notes: "Elevated beachfront block in Seascapes Halls Head with two homes on one title. Price shown as offers over.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-11575127-1.jpg?version=FhhDxoE1FDiAesdmHrGumWzBiFX9T7uB",
    listingUrl: "https://www.homely.com.au/homes/20-hayman-retreat-halls-head-wa-6210/11575127"
  },
  {
    id: "wa-singleton-248-foreshore",
    title: "248 Foreshore Drive",
    suburb: "Singleton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    price: 599000,
    landSize: 461,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "Corner block", "Low entry price"],
    notes: "Beachfront-position corner block metres from the shoreline. Price shown as buyers over.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12525912-1.jpg?version=qjf4R5QBJJaKPxSNkpg5GKeKYlr5N.Ab",
    listingUrl: "https://www.homely.com.au/homes/248-foreshore-drive-singleton-wa-6175/12525912"
  },
  {
    id: "sa-aldinga-304-esplanade",
    title: "304 Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 1850000,
    landSize: 697,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Ocean views", "Holiday rental", "Renovation upside"],
    status: "sold",
    notes: "Front-row Esplanade position with unobstructed sea views and future upside.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-13000904-1.jpg?version=0W9pe4EibGYqbtAFXv7czkl1W7m0oWKq",
    listingUrl: "https://www.homely.com.au/homes/304-esplanade-aldinga-beach-sa-5173/13000904"
  },
  {
    id: "wa-bluff-point-3a-crowtherton",
    title: "3A Crowtherton Street",
    suburb: "Bluff Point",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    price: 1395000,
    landSize: 474,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Ocean views", "Modern build", "Low-maintenance block"],
    notes: "Beachfront coastal retreat in Bluff Point with strong lifestyle positioning.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-12743632-1.jpg?version=l0lUnCGA5o_OZckccj_.N5ts9sLi.SDx",
    listingUrl: "https://www.homely.com.au/homes/3a-crowtherton-street-bluff-point-wa-6530/12743632"
  },
  {
    id: "sa-black-point-401-black-point",
    title: "401 Black Point Drive",
    suburb: "Black Point",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 120,
    price: 924000,
    landSize: 1085,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Large block", "Holiday home", "Low $/m2"],
    notes: "Holiday home just behind the beachfront on Black Point Drive. Price is the midpoint of the advertised range.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12123023-1.jpg?version=3k0.NUm9Tje8U_E_vqhcqVvMfPlvXPux",
    listingUrl: "https://www.homely.com.au/homes/401-black-point-drive-black-point-sa-5571/12123023"
  },
  {
    id: "vic-inverloch-10-ramsey",
    title: "10 Ramsey Boulevard",
    suburb: "Inverloch",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 120,
    price: 1700000,
    landSize: 590,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "Town centre", "Bay views"],
    notes: "Beach-position land roughly 100 metres to the beach via parkland. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/6e9fc078cb79da5a26edd2d8decae767822ae37f64f777959c63b8822375dbaf/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-vic-inverloch-203363527"
  },
  {
    id: "qld-bowen-address-request",
    title: "Address available on request",
    suburb: "Bowen",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1080,
    price: 0,
    landSize: 1796,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Vacant land", "Development upside"],
    notes: "Absolute beachfront Whitsunday-region land with 40 metres of frontage. Price advertised as price on application.",
    image: "https://i2.au.reastatic.net/800x600/e4b933e956e5ea1780fd7e9bbed770641ac78cf4a18af21b1d14b21a2ebc12a7/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-bowen-204010312"
  },
  {
    id: "wa-north-coogee-55-ocean",
    title: "55 Ocean Drive",
    suburb: "North Coogee",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 30,
    price: 0,
    landSize: 245,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private beach gate", "Oceanfront", "Major city"],
    notes: "Oceanfront residential estate with private gate beach access. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/97da9501559c3d8b2d56da826c16f7914791c1796f839d7a15d6fd3bef854ecc/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-north%2Bcoogee-203947864"
  },
  {
    id: "wa-north-coogee-32-chelydra",
    title: "32 Chelydra Point",
    suburb: "North Coogee",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 30,
    price: 0,
    landSize: 457,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: false,
    factors: ["Direct oceanfront", "Vacant land", "Prestige enclave", "Major city"],
    status: "active",
    notes: "Direct oceanfront land in a tightly held North Coogee coastal pocket. Price advertised as expressions of interest.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12787419-1.jpg?named-transform=webDefaultTransform&version=Bzv7AjWXbXQIPvfI3TiJ2bjS5oyOFmgL",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-north%2Bcoogee-204403724"
  },
  {
    id: "wa-north-coogee-2-23-ocean",
    title: "2/23 Ocean Drive",
    suburb: "North Coogee",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 30,
    price: 0,
    landSize: 233,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Boardwalk to beach", "Beachfront apartment", "Major city"],
    status: "active",
    notes: "Beachfront apartment at The Islands, positioned on the sand dunes with only a boardwalk separating it from South Beach. Price guide available on request.",
    image: "https://www.homely.com.au/img-variant/l-RayWhite-12439233-1.jpg?named-transform=webDefaultTransform&version=NDm1gLLIP_9g3sCtvHmrRbtnmFrYm9Y_",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-north%2Bcoogee-146982500"
  },
  {
    id: "vic-safety-beach-46-marine",
    title: "46 Marine Drive",
    suburb: "Safety Beach",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 80,
    price: 5550000,
    landSize: 986,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Direct foreshore access", "Large house", "Pool", "Bay views"],
    notes: "Absolute beachfront home on the Mornington Peninsula. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/3802b81df9bf6ed82db18f6f2286dc2e3140d3cc2085dd876937aa09ca7e725e/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-vic-safety%2Bbeach-150144252"
  },
  {
    id: "qld-beachmere-15-biggs",
    title: "15 Biggs Avenue",
    suburb: "Beachmere",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 55,
    price: 1650000,
    landSize: 1255,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Large block", "Renovation upside", "Major city"],
    notes: "Absolute beachfront landholding with rockwall frontage and renovation upside.",
    image: "https://i2.au.reastatic.net/800x600/4b1989ffabda9eb7225eb55f0e05db83daca9aa0c25faf9d41b7d404b0e86e95/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-beachmere-150442556"
  },
  {
    id: "nsw-safety-beach-28-ocean",
    title: "28 Ocean Drive",
    suburb: "Safety Beach",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 150,
    price: 3500000,
    landSize: 744,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Reserve access", "Dual living", "Privacy"],
    notes: "Beachfront-access home surrounded by reserve at the end of a quiet no-through road.",
    image: "https://i2.au.reastatic.net/800x600/664e345857f5368e32a22a8a4add07fdef66fa09a6cbb88577cf600f9e210235/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-safety%2Bbeach-149920516"
  },
  {
    id: "nsw-entrance-north-11-wyuna",
    title: "11 Wyuna Avenue",
    suburb: "The Entrance North",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 90,
    price: 4900000,
    landSize: 708,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Dune frontage", "Dual living", "Ocean views"],
    notes: "Absolute beachfront home on an elevated dune parcel. Price guide advertised at $4.9m.",
    image: "https://i2.au.reastatic.net/800x600/4647ed8c7c9ce69d33d60f6352feb722d0b6ef2faf4711f64d0f167f9f2b1636/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-the%2Bentrance%2Bnorth-149771572"
  },
  {
    id: "vic-frankston-158-gould",
    title: "158 Gould Street",
    suburb: "Frankston",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 55,
    price: 3250000,
    landSize: 493,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Dual residence", "Major city"],
    notes: "Absolute beachfront dual-residence property directly on Long Island Beach. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/6f5cb738fa31a83ad8f25b3c130de688bcf267d2260c03d83a6142211cc15d4e/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-vic-frankston-150372248"
  },
  {
    id: "nsw-ettalong-372-ocean-view",
    title: "372 Ocean View Road",
    suburb: "Ettalong Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 90,
    price: 0,
    landSize: 519,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: false,
    factors: ["Beachfront reserve", "Income", "Redevelopment upside", "Ocean views"],
    notes: "Beachfront reserve property with multiple tenancies. Price advertised as price on request.",
    image: "https://i2.au.reastatic.net/800x600/674e8b85340b93b1a757a7fa1a4cdb94b93caf0a5d1e45cde8550248c86671ea/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-unit-nsw-ettalong%2Bbeach-148928272"
  },
  {
    id: "vic-frankston-44-gould",
    title: "44 Gould Street",
    suburb: "Frankston",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 55,
    price: 3885000,
    landSize: 1201,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Large block", "Three residences", "Major city"],
    notes: "Absolute beachfront Frankston holding with gated pathway to dunes and sand. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/b08dbc9e6c7f2eb1bb9cb2c97047dbd895bbad8c49be31930a4a83308a42edaa/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-vic-frankston-150371332"
  },
  {
    id: "qld-palm-beach-7-9-tenth",
    title: "7 & 9 Tenth Avenue",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 0,
    landSize: 969,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Walk to beach", "Dual allotment", "Holding income", "Major city"],
    status: "under_contract",
    notes: "Beachside dual-allotment holding near Palm Beach beachfront. Under contract at time of indexing.",
    image: "https://i2.au.reastatic.net/800x600/9a62ac6de3a74a6bf34c222a4910a939eebf2478019c23dbb47e7be0f998d238/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-palm%2Bbeach-150105840"
  },
  {
    id: "wa-geographe-lot-3-24-freycinet",
    title: "Lot 3, 24 Freycinet Drive",
    suburb: "Geographe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 150,
    price: 0,
    landSize: 505,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Canal frontage", "Private jetty", "Vacant land"],
    notes: "Unique beach-front and canal-front lot with no road in front. Price advertised as offers.",
    image: "https://i2.au.reastatic.net/800x600/68a0250b67ec929f2a453dc32f7fde309649ca62fd26ab262772104817f0ca4b/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-geographe-204476880"
  },
  {
    id: "wa-geographe-35-freycinet",
    title: "35 Freycinet Drive",
    suburb: "Geographe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 150,
    daysOnMarket: 55,
    price: 799000,
    landSize: 664,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach pathway", "Vacant land", "Ocean views possible", "Port Geographe"],
    status: "active",
    notes: "Coastal land at the tail end of a quiet cul-de-sac with a pathway straight onto the beach and stated beach access within about 150m. Price advertised as offers from.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12372097-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/35-freycinet-drive-geographe-wa-6280/12372097"
  },
  {
    id: "wa-siesta-park-lot-53-caves",
    title: "Lot 53, 506 Caves Road",
    suburb: "Siesta Park",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 170,
    price: 0,
    landSize: 1979,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct ocean frontage", "Vacant land", "Large block"],
    notes: "Absolute beachfront Siesta Park allotment with no road or cycle path between the block and sand. Price advertised as offers.",
    image: "https://i2.au.reastatic.net/800x600/840ec8ccbbe90e589d20b41f1a500d45521be4ba6390c08bb61f423132d1be41/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-siesta%2Bpark-204443348"
  },
  {
    id: "wa-two-rocks-15-jordan",
    title: "15 Jordan Street",
    suburb: "Two Rocks",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    price: 609000,
    landSize: 400,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: false,
    factors: ["No road", "Vacant land", "Major city", "Ocean views"],
    status: "under_offer",
    notes: "Absolute beachfront block in Two Rocks. Price advertised as offers above.",
    image: "https://i2.au.reastatic.net/800x600/a2ad2d58a01022032dd18a242c34fae1e0b004abfe8a67e0f2cdd8225614e49a/image.png",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-two%2Brocks-204448596"
  },
  {
    id: "wa-two-rocks-27-jordan",
    title: "27 Jordan Street",
    suburb: "Two Rocks",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    daysOnMarket: 38,
    price: 535000,
    landSize: 300,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Waterfront Estate", "Metres to Leeman's Landing Beach", "Direct beach access", "Ocean-view land"],
    status: "active",
    notes: "Active Homely Two Rocks land listing advertised as a 300sqm ocean-view Waterfront Estate block metres from Leeman's Landing Beach and the marina, described as the final slice of land with direct beach access. Price is advertised as offers from $535,000.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12478166-1.jpg?named-transform=webDefaultTransform",
    listingUrl: "https://www.homely.com.au/homes/27-jordan-street-two-rocks-wa-6037/12478166"
  },
  {
    id: "wa-sunset-beach-8-seastar",
    title: "8 Seastar Cove",
    suburb: "Sunset Beach",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    price: 330000,
    landSize: 650,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "Low entry price", "Ocean views"],
    status: "sold",
    notes: "Elevated beachfront-position block near Geraldton, directly over from Sunset Beach. Marked sold after the direct realestate.com.au listing showed sold on 11 Mar 2026.",
    image: "https://i2.au.reastatic.net/800x600/1c5a0f35ad5205cc51bb1e01948cb4b3964b596c690c4b41fd2a28e86fd0e253/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-sunset%2Bbeach-204288564"
  },
  {
    id: "nsw-long-beach-14-sandy",
    title: "14 Sandy Place",
    suburb: "Long Beach",
    state: "NSW",
    nearestMajorCity: "Canberra",
    majorCityMinutes: 150,
    price: 0,
    landSize: 730,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Development upside", "Holiday rental"],
    status: "under_offer",
    notes: "Absolute beachfront beach house roughly 20 metres from the sand. Auction/offer accepted status shown on indexed page.",
    image: "https://i2.au.reastatic.net/800x600/d47dfe14fcaea2853ab37bff736b877804f5b8ffad9f2603e13427a169760c80/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-long%2Bbeach-150246272"
  },
  {
    id: "qld-deepwater-31-wreck-rock",
    title: "31 Wreck Rock Road",
    suburb: "Deepwater",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 370,
    price: 3300000,
    landSize: 1007900,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Acreage", "Tourism upside", "Creek frontage"],
    notes: "Large absolute beachfront acreage with substantial beach and creek frontage.",
    image: "https://i2.au.reastatic.net/800x600/69977faf8f513c07c79fcc2528108cc65bdc0b7f08653254001363fae96d05fe/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-deepwater-139911907"
  },
  {
    id: "wa-leeman-72-thomas",
    title: "72 Thomas Street",
    suburb: "Leeman",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    price: 800000,
    landSize: 1160,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "Large block", "Ocean views"],
    notes: "Beachfront-position land along Thomas Street with rear laneway access. Price advertised as offers from.",
    image: "https://i2.au.reastatic.net/800x600/873e234f0a48415d68e55ebea120797b2ab305ea75fd73ecabc0201c651a67e9/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-leeman-204288472"
  },
  {
    id: "wa-leeman-lot-442-50-thomas",
    title: "Lot 442, 50 Thomas Street",
    suburb: "Leeman",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    listedDate: "2026-03-18",
    price: null,
    landSize: 1201,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Vacant land", "Large block", "Ocean views"],
    status: "active",
    notes: "Active beachfront-position land listing advertised as directly opposite Leeman swimming beach, with 33m frontage, potential ocean views from a second storey, deep sewerage and underground power available. Price is expressions of interest.",
    image: "https://i2.au.reastatic.net/800x600/e4eafb618119f3c48854e6bf8ee1a9ab1be9a50189e6c37d34cbbc4d467052da/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-leeman-204460848"
  },
  {
    id: "qld-wongaling-38-reid",
    title: "38 Reid Rd",
    suburb: "Wongaling Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1030,
    price: 970000,
    landSize: 821,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach frontage", "Vacant land", "Ocean views"],
    notes: "Absolute beachfront Mission Beach-area block with 20m ocean frontage and views to Dunk Island.",
    image: "https://i2.au.reastatic.net/800x600/f1c4f8d23818a9909a8124a97a59d1d997be9bca5d5d1d6563c04e4756195e27/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-wongaling%2Bbeach-204174096"
  },
  {
    id: "qld-slade-point-lot-10-12-gannet",
    title: "Lot 10-12, Gannet Street",
    suburb: "Slade Point",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1050,
    price: 1450000,
    landSize: 722,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Dual title", "Ocean views"],
    notes: "Absolute beachfront land across two titles with 28m beachfront frontage near Mackay.",
    image: "https://i2.au.reastatic.net/800x600/4138231f378a421198596c620638e6199a695526f1b774a0ad61e7dbbc919970/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-slade%2Bpoint-204470640"
  },
  {
    id: "qld-wongaling-8-64-68-reid",
    title: "8/64-68 Reid Road",
    suburb: "Wongaling Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1030,
    price: 645000,
    landSize: 149,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Apartment", "Direct beach frontage", "Low entry price"],
    notes: "Absolute beachfront apartment in a boutique complex with wide beach frontage opposite Bedarra Island.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-13024961-1.jpg?version=trT_h4GqyWCBNKGNIzXXWWCtoafe0Nq.",
    listingUrl: "https://www.homely.com.au/homes/8-64-68-reid-road-wongaling-beach-qld-4852/13024961"
  },
  {
    id: "nsw-pearl-beach-10-green-point",
    title: "10 Green Point Road",
    suburb: "Pearl Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 95,
    price: 0,
    landSize: 651,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Architect-designed", "Ocean views"],
    notes: "Absolute beachfront Pearl Beach residence with direct access to the sand. Price advertised as contact agent.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12669194-1.jpg?version=n.kZRCg5biJPr6VZ30fcEUPAYDT2mkL0",
    listingUrl: "https://www.homely.com.au/homes/10-green-point-road-pearl-beach-nsw-2256/12669194"
  },
  {
    id: "qld-rules-beach-5-66-rules",
    title: "5/66 Rules Beach Road",
    suburb: "Rules Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 380,
    price: 525000,
    landSize: 753,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Vacant land", "Ocean views"],
    notes: "Absolute beachfront land with plans ready for a coastal home. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/62cd42e24d7779bca3be8d7e257bdb23c4a3266c31bc743a0e86563cd80b25f4/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-rules%2Bbeach-204463904"
  },
  {
    id: "qld-rules-beach-66-rules",
    title: "66 Rules Beach Road",
    suburb: "Rules Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 380,
    price: 625000,
    landSize: 750,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Vacant land", "Approved plans"],
    notes: "Absolute beachfront land in a small coastal subdivision. Price advertised as offers over.",
    image: "https://i2.au.reastatic.net/800x600/dec8d53813a0255d545a03b9c019ec325bc47a986db76f1722f996500eb6ffcf/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-rules%2Bbeach-202888902"
  },
  {
    id: "qld-woodgate-20-theodolite",
    title: "20 Theodolite Creek Dr",
    suburb: "Woodgate",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 260,
    price: 2700000,
    landSize: 1808,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Large block", "Luxury home", "Pool"],
    notes: "Absolute ocean-frontage home on a large allotment with direct backyard access to the sand.",
    image: "https://i2.au.reastatic.net/800x600/e8dbffcb3a81a789e59aaed84ac81517b80b5f544c74bf4dcbd2b2ab34e5205d/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-woodgate-149793732"
  },
  {
    id: "qld-woodgate-101-esplanade",
    title: "101 Esplanade",
    suburb: "Woodgate",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 260,
    price: 1600000,
    landSize: 1037,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach opposite", "Large block", "Ocean views", "Vehicle storage"],
    status: "under_offer",
    notes: "Absolute beachfront-view home on a corner allotment. Hidden because the indexed listing shows under offer.",
    image: "https://i2.au.reastatic.net/800x600/c4ec0b8116afc2cdd23bcb365a2c64ebcba324cca3130f20167ac451caaee63b/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-woodgate-148988120"
  },
  {
    id: "vic-golden-beach-23-25-tide-surge",
    title: "23-25 Tide-Surge Avenue",
    suburb: "Golden Beach",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 170,
    price: 330000,
    landSize: 2431,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Large block", "Vacant land", "Low entry price"],
    notes: "Large cleared beachfront-position land with two road frontages.",
    image: "https://i2.au.reastatic.net/800x600/0c79f17a33020257c14fd7de5769b3310aa650f67c720f979a6d2465a0c239be/image.png",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-vic-golden%2Bbeach-203866996"
  },
  {
    id: "qld-beachmere-103-bishop",
    title: "103 Bishop Road",
    suburb: "Beachmere",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 55,
    price: 1500000,
    landSize: 3442,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute waterfront", "Large block", "Major city"],
    notes: "Large absolute waterfront landholding with about 20m direct Moreton Bay frontage and architectural plans prepared.",
    image: "https://i2.au.reastatic.net/800x600/6f718d1ca8c064620d40aeb07d7300bc5a75cd80e930a5e4d48a7a07a13e253a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-beachmere-204441212"
  },
  {
    id: "qld-kewarra-74-kewarra",
    title: "74 Kewarra Street",
    suburb: "Kewarra Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1050,
    price: 0,
    landSize: 1642,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Subdivision approval", "Commercial DA", "Direct beach frontage"],
    notes: "Absolute beachfront Kewarra Beach land with subdivision approval and a commercial development approval.",
    image: "https://i2.au.reastatic.net/800x600/3b462bc45554d154387608a578b18025b82465af8d5fe68f7558912329ab93fb/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-kewarra%2Bbeach-204500784"
  },
  {
    id: "sa-semaphore-114-esplanade",
    title: "114 Esplanade",
    suburb: "Semaphore",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    price: 0,
    landSize: 937,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Dual access", "Holding income", "Major city"],
    notes: "Grand beachfront Esplanade allotment with existing dwelling and redevelopment potential. Auction listing.",
    image: "https://i2.au.reastatic.net/800x600/2d64caf6b1bb5668cfa8ddd09d08a82c351349635699a11b80465a7eb6ab7c7c/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore-150718904"
  },
  {
    id: "qld-peregian-2-12-plover",
    title: "2/12 Plover Street",
    suburb: "Peregian Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 100,
    price: 0,
    landSize: 196,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private dune access", "Ocean views", "Village walk"],
    status: "active",
    notes: "Absolute beachfront duplex townhouse with private dune access and front-row ocean views. Auction listing without price guide.",
    image: "https://i2.au.reastatic.net/800x600/2bfe467f2b8079bdf35c5cfd75959f8805cacb3a5a48cded71da92f3183ca061/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-peregian%2Bbeach-150228292"
  },
  {
    id: "qld-point-lookout-124-dickson",
    title: "124 Dickson Way",
    suburb: "Point Lookout",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 150,
    price: 0,
    landSize: 607,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand frontage", "Development potential", "Island holding"],
    status: "active",
    notes: "North-facing absolute beachfront site on Home Beach with 17.1m frontage and development concept plans. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/48b40855b126639901cb416e5ca583acee3079ec37bd9f0d5fd2b4868afd9a2a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-point%2Blookout-150772416"
  },
  {
    id: "qld-zilzie-36-esplanade",
    title: "36 Esplanade",
    suburb: "Zilzie",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 560,
    price: 1325000,
    landSize: 1012,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach opposite", "Direct beach access", "Large block", "Ocean views"],
    status: "active",
    notes: "Front-row Esplanade home opposite Zilzie Beach with direct beach access metres from the door. Price advertised as offers over.",
    image: "https://i2.au.reastatic.net/800x600/f87e903df64e00f1afdef7a8451fcad9b8a20866e61adc9a1ed3a37eef4e3df8/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-zilzie-150923540"
  },
  {
    id: "qld-mermaid-beach-1-161-hedges",
    title: "1/161 Hedges Avenue",
    suburb: "Mermaid Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 10,
    price: 0,
    landSize: 565,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Luxury renovation", "Rooftop pool"],
    status: "active",
    notes: "Absolute beachfront villa on Hedges Avenue with 13.8m ocean frontage and direct sand access. Price guide pending.",
    image: "https://i2.au.reastatic.net/800x600/e271e360016ef2c8cfb80df0b541aaa7d6811c02ec23a379b2eb4252e7dcdc71/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-mermaid%2Bbeach-150748624"
  },
  {
    id: "nsw-freshwater-9-71-evans",
    title: "9/71 Evans Street",
    suburb: "Freshwater",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 35,
    price: 0,
    landSize: 96,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Direct beach access", "Ocean panorama", "Major city", "Boutique block"],
    status: "active",
    notes: "Absolute beachfront apartment above Freshwater Beach with direct beach access. Auction listing without price guide.",
    image: "https://i2.au.reastatic.net/800x600/f363a9866cae2c2a279dbdb861b4fa0c7b3702c74f4e7c79551d1d34cda58688/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-unit-nsw-freshwater-150434852"
  },
  {
    id: "nsw-cabarita-15-cypress",
    title: "15 Cypress Crescent",
    suburb: "Cabarita Beach",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 35,
    price: 0,
    landSize: 465,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Architect-designed", "Pool"],
    status: "active",
    notes: "Absolute beachfront architect-designed home set directly on Cabarita sands. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/3989da009664db0a1fe4922a4f4e33bd1f22d569e95a707618debf75209b3923/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-cabarita%2Bbeach-150991156"
  },
  {
    id: "wa-halls-head-101-boardwalk",
    title: "101 Boardwalk Boulevard",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    price: 0,
    landSize: 630,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Architect-designed", "Ocean views"],
    status: "active",
    notes: "Absolute beachfront Boardwalk Boulevard residence with road-free access straight onto the sand. Expression of interest listing.",
    image: "https://i2.au.reastatic.net/800x600/d81b1691b0fd7c6adba7a0c44c926749d613eb0561252b9213608a6a7dd22d1f/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-wa-halls%2Bhead-150709364"
  },
  {
    id: "wa-halls-head-18-seeana",
    title: "18 Seeana Pass",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    listedDate: "2026-04-21",
    price: 899000,
    landSize: 533,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Oceanfront land", "Absolute beachfront views", "Seascapes precinct", "Elevated block"],
    status: "active",
    notes: "Elevated Seascapes oceanfront residential land with uninterrupted absolute beachfront views. Price shown as offers from.",
    image: "https://i2.au.reastatic.net/800x600/26e92fe9c8f126118db6527ff494c554a4edef89d663f23a65e65c7dab82f859/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-halls%2Bhead-204493600"
  },
  {
    id: "wa-halls-head-8-serrata",
    title: "8 Serrata Way",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    listedDate: "2026-04-24",
    price: 1899000,
    landSize: 540,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute oceanfront", "Infinity pool", "Ocean views", "Holiday rental"],
    status: "active",
    notes: "Absolute oceanfront Seascapes residence with uninterrupted Indian Ocean views and a solar-heated infinity pool. Price shown as best offer over.",
    image: "https://i2.au.reastatic.net/800x600/766d3a681c3caf61ebcc9b1df7f095e44f33d233abfa9784d3328e3c917a25f0/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-wa-halls%2Bhead-150991056"
  },
  {
    id: "wa-halls-head-20b-halls-head",
    title: "20B Halls Head Parade",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    price: 625000,
    landSize: 260,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Oceanfront land", "Direct beach access", "North facing", "Old Halls Head"],
    status: "active",
    notes: "North-facing oceanfront Old Halls Head residential land advertised with direct access to the beaches of Old Halls Head. Price shown as from.",
    image: "https://i2.au.reastatic.net/800x600/024b2dd143b81d9461ad1aed855c20742acd309d945922eae729d9ae8267fc77/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-halls%2Bhead-204178920"
  },
  {
    id: "wa-halls-head-9-11-halls-head",
    title: "9/11 Halls Head Parade",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    price: 975000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Direct beach access", "Ocean views", "Waterline Apartments", "Lock and leave"],
    status: "active",
    notes: "Old Halls Head apartment metres from the north-facing beach, with ocean views and direct beach access. Price shown as offers over.",
    image: "https://i2.au.reastatic.net/800x600/d5721ff690a3f5c6cabb8b4f5b03e7bf8fa7cb0feabc8f2298fe020fc4de9e6c/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-halls%2Bhead-148992216"
  },
  {
    id: "wa-halls-head-5-35b-halls-head",
    title: "5/35B Halls Head Parade",
    suburb: "Halls Head",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 65,
    price: 499000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Steps to beach", "Ocean views", "Villa", "Rental income"],
    status: "active",
    notes: "Single-level Halls Head Parade villa less than 150 metres from Blue Bay, with ocean views from the front lounge. Price shown as offers from.",
    image: "https://i2.au.reastatic.net/800x600/b92a6342717fa0f9cc10c9dd3526ed13246d0a22c6c0a6df0136f9d316b0e94e/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-halls%2Bhead-148880936"
  },
  {
    id: "nsw-pottsville-2-elfran",
    title: "2 Elfran Avenue",
    suburb: "Pottsville",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 35,
    price: 0,
    landSize: 670,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct dune access", "Beach reserve", "Village walk"],
    status: "active",
    notes: "Absolute beachfront home backing directly onto dunes with direct beach access from the yard. Forthcoming auction listing.",
    image: "https://i2.au.reastatic.net/800x600/734750974c31054403b2839e0b4655913e5fd5f101301c8670f568b6d8054d1d/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-pottsville-150252800"
  },
  {
    id: "qld-blacks-beach-21-coral",
    title: "21 Coral Drive",
    suburb: "Blacks Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 720,
    price: 0,
    landSize: 809,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beachfront access", "Pool", "Self-contained pavilion"],
    status: "active",
    notes: "Beachfront home with direct backyard access to Blacks Beach and a separate self-contained pavilion. Expression of interest listing.",
    image: "https://i2.au.reastatic.net/800x600/e230559d19d0a1bad182f04c23a52e4a82deab524fadb98570df881d254be865/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-blacks%2Bbeach-151031396"
  },
  {
    id: "vic-aspendale-73-nepean",
    title: "73 Nepean Highway",
    suburb: "Aspendale",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 45,
    price: 11500000,
    landSize: 1998,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private beach access", "Large block", "Major city"],
    status: "active",
    notes: "Absolute beachfront Aspendale estate with direct private sand access and indicative price guide.",
    image: "https://i2.au.reastatic.net/800x600/4ad1321499197fc4225f9bada68b3048886e50249f5a257dfc57c7dc39d5b36c/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-vic-aspendale-151020004"
  },
  {
    id: "qld-dundowran-30-pandanus",
    title: "30 Pandanus Dr",
    suburb: "Dundowran Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 220,
    price: 2385000,
    landSize: 2265,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private beach reserve access", "Large block", "Dual living"],
    status: "active",
    notes: "Beachfront estate with private access to Dundowran Beach Reserve and a large 2,265sqm allotment.",
    image: "https://i2.au.reastatic.net/800x600/4246e0b4bdffcce8c17201cb904801d23855be5d60268d580b0df65dc71ab326/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-dundowran%2Bbeach-150036160"
  },
  {
    id: "qld-flying-fish-point-8-feldt",
    title: "8 Feldt Street",
    suburb: "Flying Fish Point",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1020,
    price: 799000,
    landSize: 647,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Dual living", "Ocean views"],
    status: "active",
    notes: "Absolute beachfront house with direct beach access from the block and no road between the property and ocean.",
    image: "https://i2.au.reastatic.net/800x600/97486c8a0c624c02457c9c8c515ff90af9f6b61e1a1ad2c7d63796469caae25a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-flying%2Bfish%2Bpoint-148271516"
  },
  {
    id: "nsw-barragga-bay-12-alinjarra",
    title: "12 Alinjarra Place",
    suburb: "Barragga Bay",
    state: "NSW",
    nearestMajorCity: "Canberra",
    majorCityMinutes: 210,
    price: 2350000,
    landSize: 15200,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach reserve frontage", "Direct reserve access", "Acreage", "Architect-designed"],
    status: "active",
    notes: "Private acreage with extensive frontage to beach nature reserve and walking access to Barragga Bay Beach.",
    image: "https://i2.au.reastatic.net/800x600/8eb70ab801d7bc3bb8b944a525d055680390a29ba0e11c87246b81913acbb58d/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-barragga%2Bbay-149672520"
  },
  {
    id: "wa-wannanup-48-abrolhos",
    title: "48 Abrolhos Quays",
    suburb: "Wannanup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 75,
    price: 999000,
    landSize: 611,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Ocean frontage", "Vacant land", "Estuary views"],
    status: "active",
    notes: "Absolute beachfront elevated coastal block with 16.5m ocean frontage and views to the ocean and estuary.",
    image: "https://www.homely.com.au/img-variant/l-Harcourts-12962762-1.jpg?named-transform=webDefaultTransform&version=SZL5XHmyEqdg9HGOf6GUG_krt1LPuvOB",
    listingUrl: "https://www.homely.com.au/homes/48-abrolhos-quays-wannanup-wa-6210/12962762"
  },
  {
    id: "nsw-whale-beach-215-whale-beach",
    title: "215 Whale Beach Road",
    suburb: "Whale Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 70,
    price: 0,
    landSize: 1042,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Dual street frontage", "Future upside"],
    status: "active",
    notes: "Classic beachfront holding with direct access to Whale Beach and a future auction campaign.",
    image: "https://www.homely.com.au/img-variant/l-BoxDice-13086833-1.jpg?named-transform=webDefaultTransform&version=semrEQ92poY2MFv3futNtw_QrJJt4Xs_",
    listingUrl: "https://www.homely.com.au/homes/215-whale-beach-road-whale-beach-nsw-2107/13086833"
  },
  {
    id: "nsw-umina-5-berrima",
    title: "5 Berrima Crescent",
    suburb: "Umina Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 80,
    price: 0,
    landSize: 708.2,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach reserve", "Direct sand access", "Creek frontage", "Dual frontage"],
    status: "active",
    notes: "Beachfront reserve home with direct access through the dunes and creekfront studio at the rear.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12876856-1.jpg?named-transform=webDefaultTransform&version=ApV17GrNN0mZdRjWs8YgdJUUHJg3Pqg7",
    listingUrl: "https://www.homely.com.au/homes/5-berrima-crescent-umina-beach-nsw-2257/12876856"
  },
  {
    id: "nsw-wamberal-89-ocean-view",
    title: "89 Ocean View Drive",
    suburb: "Wamberal",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 90,
    price: 0,
    landSize: 742,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "New build", "Prestige home"],
    status: "active",
    notes: "Absolute beachfront residence with landscaped lawn connecting directly to the beachfront.",
    image: "https://www.homely.com.au/img-variant/l-LJHooker-12246383-1.jpg?named-transform=webDefaultTransform&version=wxb.dFxWMjfjtrDRh0ITwPyywoDUCIQ7",
    listingUrl: "https://www.homely.com.au/homes/89-ocean-view-drive-wamberal-nsw-2260/12246383"
  },
  {
    id: "nsw-blueys-beach-76-newman",
    title: "76 Newman Avenue",
    suburb: "Blueys Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 210,
    price: 0,
    landSize: 544,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct dune access", "Architect-designed", "Pool"],
    status: "active",
    notes: "Architect-designed absolute beachfront home where the garden merges directly with the dunes for beach access.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12481769-1.jpg?named-transform=webDefaultTransform&version=1ymfbbFgPemMacmPyxUHUJAPW3IpuSnB",
    listingUrl: "https://www.homely.com.au/homes/76-newman-avenue-blueys-beach-nsw-2428/12481769"
  },
  {
    id: "qld-port-douglas-47-beachfront-mirage",
    title: "47 Beachfront Mirage Drive",
    suburb: "Port Douglas",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1080,
    listedDate: "2026-03-31",
    price: 3500000,
    landSize: 849,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private gated beach access", "Resort pool", "Fully furnished"],
    status: "active",
    notes: "Beachfront Mirage residence with gated access to Four Mile Beach and no road to cross. Price text advertised as mid-$3m+ offers considered.",
    image: "https://i2.au.reastatic.net/800x600/11c5e191c98bd23ae5cc8df467e3a6ef33495b316247264dd2853b5692a797cb/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-port%2Bdouglas-150747496"
  },
  {
    id: "nsw-new-brighton-8-river",
    title: "8 River Street",
    suburb: "New Brighton",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 65,
    listedDate: "2026-04-13",
    price: 0,
    landSize: 1541,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct ocean access", "Large block", "Byron Shire"],
    status: "active",
    notes: "Absolute beachfront Byron Shire holding with direct, unimpeded connection to the ocean. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/86a0885fb5fe6babc9979e9b14c6238ed4ecc732f3cc99d5c1d92b0010c8c239/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-new%2Bbrighton-150857756"
  },
  {
    id: "qld-agnes-water-8-10-ocean-beach",
    title: "8/10 Ocean Beach Drive",
    suburb: "Agnes Water",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 370,
    listedDate: "2026-04-05",
    price: 799000,
    landSize: 178,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Resort beach access", "Pool", "Furnished"],
    status: "active",
    notes: "Sandcastles 1770 beach home with direct beach access through the resort. Listed as a fully furnished beachside residence.",
    image: "https://i2.au.reastatic.net/800x600/c491c23685ceee8441ad95e96001c971a154686cbe6bebadde0c470b66927d0a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-agnes%2Bwater-150789928"
  },
  {
    id: "qld-sunshine-beach-6-adams",
    title: "6 Adams Street",
    suburb: "Sunshine Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 115,
    listedDate: "2026-03-30",
    price: 4100000,
    landSize: 882,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private sand path", "Flexible layout", "Renovated"],
    status: "active",
    notes: "Tightly held Sunshine Beach home with rare direct sand path access to the beach and flexible multi-residence configuration.",
    image: "https://i2.au.reastatic.net/800x600/8a98253608b0bdb8233fe39e1485c4664b026955e7a57fea30b337205096c508/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-sunshine%2Bbeach-150741196"
  },
  {
    id: "nsw-brooms-head-31-ocean",
    title: "31 Ocean Road",
    suburb: "Brooms Head",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 150,
    price: 2595000,
    landSize: 656,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Sky deck", "Holiday home"],
    status: "active",
    notes: "Absolute beachfront Cakora Beach House with direct sand access, private outdoor shower and 360-degree sky deck.",
    image: "https://i2.au.reastatic.net/800x600/dcfbeefbdafe65a0dcb57adee42d9a6b0477a5291501bac5886e5c794d4bc531/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-brooms%2Bhead-146857560"
  },
  {
    id: "nsw-stockton-23b-stone",
    title: "23B Stone Street",
    suburb: "Stockton",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 145,
    listedDate: "2026-02-11",
    price: 0,
    landSize: 0,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Beachfront views", "Duplex", "Newcastle access"],
    status: "active",
    notes: "Absolute beachfront duplex with uninterrupted ocean views along Stockton Beach. Price advertised as Your Next Move.",
    image: "https://i2.au.reastatic.net/800x600/627ec56950a0d9890da36a8e8e473a5aaed82be21ddf99d24d1b276f0b2cc573/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-stockton-150255948"
  },
  {
    id: "qld-lammermoor-26-evelyn",
    title: "26 Evelyn Street",
    suburb: "Lammermoor",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 430,
    listedDate: "2026-01-17",
    price: 1995000,
    landSize: 574,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Private beach stairs", "Ocean views", "Off-grid solar"],
    status: "active",
    notes: "Prestige Lammermoor residence with purpose-built private staircase for immediate access to Lammermoor Beach.",
    image: "https://i2.au.reastatic.net/800x600/0af7d92fffd1cb35975c4be034a1721d2016d6de46747f6779831ca715891ecd/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-lammermoor-150030524"
  },
  {
    id: "qld-warana-107-oceanic",
    title: "107 Oceanic Drive",
    suburb: "Warana",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 75,
    price: 0,
    landSize: 565,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beachfront access", "Pool", "Architectural renovation"],
    status: "active",
    notes: "Architectural beachfront residence with seamless connection to the beach, private bushland sanctuary and poolside living. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/0aa293109d52422b8dee7dbed7c58588d56d83e87e80e1166234827e94072ea4/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-warana-150785952"
  },
  {
    id: "qld-marcus-beach-35-callitris",
    title: "35 Callitris Crescent",
    suburb: "Marcus Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 120,
    listedDate: "2026-04-17",
    price: 0,
    landSize: 630,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach reserve", "Direct beach access", "Pool", "Noosa access"],
    status: "active",
    notes: "Beachside home opposite national park and about 50 metres to direct beach access. Auction listing without price guide.",
    image: "https://i2.au.reastatic.net/800x600/98c2824688e4512058e09ab09aa9249481a304f388364c865820e5c5915a6a91/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-qld-marcus%2Bbeach-150924304"
  },
  {
    id: "vic-balnarring-beach-3-library",
    title: "3 Library Road",
    suburb: "Balnarring Beach",
    state: "VIC",
    nearestMajorCity: "Melbourne",
    majorCityMinutes: 80,
    listedDate: "2026-03-23",
    price: 4125000,
    landSize: 1025,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach reserve", "Direct beach access", "Large block", "Pool"],
    status: "active",
    notes: "Foreshore home bordered by protected beach reserve with a path through tea trees to Balnarring Beach. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/554f81f0f56035631928e7042a3c8f0e831980aa4975dc24115f34b4b54840b4c/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-vic-balnarring%2Bbeach-150664124"
  },
  {
    id: "qld-surfers-paradise-1903-3-northcliffe",
    title: "1903/3 Northcliffe Terrace",
    suburb: "Surfers Paradise",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 10,
    price: null,
    landSize: 108,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct beach access", "Ocean views", "Resident facilities"],
    status: "active",
    notes: "Absolute beachfront Northcliffe Residences apartment with direct beach access and ocean-view Beach Club. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150609700/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-surfers%2Bparadise-150609700"
  },
  {
    id: "wa-cottesloe-200-marine",
    title: "200 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront position", "Ocean views", "Architect-designed", "Pool"],
    status: "active",
    notes: "Architect-designed coastal residence metres from Vera View Beach with ocean views from nearly every room. Price advertised as offers.",
    image: "https://www.realestate.com.au/property-image/150648048/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-cottesloe-150648048"
  },
  {
    id: "wa-cottesloe-8-110-marine",
    title: "8/110 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    listedDate: "2026-04-15",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Cottesloe Main Beach", "Beachfront views", "Ocean-facing terraces", "Luxury residence"],
    status: "active",
    notes: "Active direct listing for The Glasshouse at 8/110 Marine Parade, described as on Cottesloe Main Beach with views over the beach, pylon, groyne and Indiana Tearooms. Price advertised as EOI.",
    image: "https://www.realestate.com.au/property-image/150906980/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-cottesloe-150906980"
  },
  {
    id: "wa-cottesloe-1-110-marine",
    title: "1/110 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    daysOnMarket: 56,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "27m ocean frontage", "Cottesloe Beach views", "Boutique development"],
    status: "active",
    notes: "Active apartment listing for The Warnham, advertised as right on Cottesloe main beach with the ocean's edge at the front door, 27m ocean frontage and unobstructed waterline views. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150584224/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-cottesloe-150584224"
  },
  {
    id: "wa-cottesloe-202-120-marine",
    title: "202/120 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    price: 6750000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row Marine Parade", "Beachfront collection", "Uninterrupted ocean views", "Luxury apartment"],
    status: "active",
    notes: "Active Meridian Cottesloe listing for Residence 202, described as front-row on Marine Parade in a rare beachfront collection with uninterrupted ocean views.",
    image: "https://www.realestate.com.au/property-image/144303764/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-cottesloe-144303764"
  },
  {
    id: "wa-cottesloe-120-marine",
    title: "120 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    price: 6100000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Beach and foreshore views", "Meridian Cottesloe", "New apartment"],
    status: "active",
    notes: "Active Homely apartment listing for Meridian at 120 Marine Parade, advertised as absolute beachfront luxury on the beachfront in Cottesloe with sweeping ocean, beach and foreshore views. Price advertised from $6.1M.",
    image: "https://www.homely.com.au/img-variant/l-William-Porteous-11861737-1.jpg?named-transform=webDefaultTransform",
    listingUrl: "https://www.homely.com.au/homes/120-marine-parade-cottesloe-wa-6011/11861737"
  },
  {
    id: "wa-cottesloe-242-marine",
    title: "242 Marine Parade",
    suburb: "Cottesloe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    price: null,
    landSize: 365,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row Marine Parade", "Uninterrupted ocean views", "Oceanfront terrace", "Pool"],
    status: "active",
    notes: "Active Marine Parade listing described as front-row living with uninterrupted Indian Ocean panoramas, an oceanfront terrace and the beach directly across the road. Price advertised as offers.",
    image: "https://www.realestate.com.au/property-image/150403124/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-cottesloe-150403124"
  },
  {
    id: "qld-moore-park-118-sylvan",
    title: "118 Sylvan Drive",
    suburb: "Moore Park Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 240,
    price: 1900000,
    landSize: 1668,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct beach access", "Oceanfront", "Pool"],
    status: "active",
    notes: "Luxury oceanfront contemporary residence on a 1,668sqm absolute beachfront block with direct access to Moore Park Beach.",
    image: "https://www.realestate.com.au/property-image/147461296/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-moore%2Bpark%2Bbeach-147461296"
  },
  {
    id: "qld-moore-park-86-sylvan",
    title: "86 Sylvan Drive",
    suburb: "Moore Park Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 240,
    price: 1350000,
    landSize: 2082,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Oceanfront", "Private beach access", "Large block", "Pool"],
    status: "active",
    notes: "Oceanfront Moore Park Beach home on 2,082sqm with gated backyard pathway directly to the sand. Price advertised as offers above.",
    image: "https://www.realestate.com.au/property-image/150475484/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-moore%2Bpark%2Bbeach-150475484"
  },
  {
    id: "qld-moore-park-134-sylvan",
    title: "134 Sylvan Drive",
    suburb: "Moore Park Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 240,
    listedDate: "2026-05-04",
    price: 1890000,
    landSize: 2233,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Oceanfront", "Direct beach access", "Guest unit", "Pool"],
    status: "active",
    notes: "Coral Sea oceanfront home on a half-acre block with a security gate leading onto the beachfront. Price advertised as offers above.",
    image: "https://www.realestate.com.au/property-image/147624672/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-moore%2Bpark%2Bbeach-147624672"
  },
  {
    id: "nsw-cabarita-8-palm",
    title: "8 Palm Avenue",
    suburb: "Cabarita Beach",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 35,
    price: 12000000,
    landSize: 500,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Nature reserve", "Ocean views", "Pool"],
    status: "active",
    notes: "Beachfront luxury home with direct access to Cabarita Beach through adjoining nature reserve. Buyers guide advertised as $12m.",
    image: "https://www.realestate.com.au/property-image/149496300/1",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-cabarita%2Bbeach-149496300"
  },
  {
    id: "qld-sunshine-beach-21-crank",
    title: "21 Crank Street",
    suburb: "Sunshine Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 125,
    price: null,
    landSize: 531,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Ocean views", "Pool", "Renovated"],
    status: "active",
    notes: "Sunshine Beach residence with private back-gate pathway straight to surf and sand. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/149496880/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-sunshine%2Bbeach-149496880"
  },
  {
    id: "nsw-cabarita-91-tweed-coast",
    title: "91 Tweed Coast Road",
    suburb: "Cabarita Beach",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 35,
    price: null,
    landSize: 654,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Oceanfront", "Direct beach access", "Development upside", "Headland position"],
    status: "active",
    notes: "North-facing oceanfront Cabarita Headland parcel with direct beach access and R3 medium-density zoning. Expressions of interest listing.",
    image: "https://www.realestate.com.au/property-image/150734472/1",
    listingUrl: "https://www.realestate.com.au/property-house-nsw-cabarita%2Bbeach-150734472"
  },
  {
    id: "nsw-dee-why-32-84-88-dee-why",
    title: "32/84-88 Dee Why Parade",
    suburb: "Dee Why",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 35,
    daysOnMarket: 3,
    price: null,
    landSize: 113,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Beach reserve", "Ocean views", "Penthouse"],
    status: "active",
    notes: "Level 7 penthouse apartment with back-gate access to Dee Why Beach and reserve. Auction listing without price guide.",
    image: "https://www.realestate.com.au/property-image/150059312/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-nsw-dee%2Bwhy%2Bbeach-150059312"
  },
  {
    id: "qld-broadbeach-3-177-old-burleigh",
    title: "3/177 Old Burleigh Road",
    suburb: "Broadbeach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 10,
    listedDate: "2026-05-07",
    price: null,
    landSize: 196,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Beachfront building", "Resort facilities", "Large apartment"],
    status: "active",
    notes: "Carmel by the Sea apartment in an absolute beachfront building directly opposite Broadbeach sands. Auction listing without price guide.",
    image: "https://www.realestate.com.au/property-image/151138456/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-broadbeach-151138456"
  },
  {
    id: "qld-machans-beach-155-oshea",
    title: "155 O'Shea Esplanade",
    suburb: "Machans Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1040,
    daysOnMarket: 34,
    price: 889000,
    landSize: 512,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront cottage", "Ocean views", "Studio", "Cairns access"],
    status: "active",
    notes: "Beachfront cottage with ocean-facing rooms, studio potential and direct coastal lifestyle positioning. Price advertised as offers over.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12525455-1.jpg?named-transform=webDefaultTransform&version=ClcT3yFyHy9TYGXY.U1Ve3AGXVru6h3W",
    listingUrl: "https://www.homely.com.au/homes/155-oshea-esplanade-machans-beach-qld-4878/12525455"
  },
  {
    id: "qld-toogoom-178-kingfisher",
    title: "178 Kingfisher Parade",
    suburb: "Toogoom",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 220,
    daysOnMarket: 17,
    price: 1650000,
    landSize: 1000,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Back-gate beach access", "Dual residences", "Income potential"],
    status: "active",
    notes: "Beachfront property with parkland and beach access beyond the back gate, plus two separate residences.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12977022-1.jpg?named-transform=webDefaultTransform&version=o1OP5FD7pIu.u_guhA8xYWQgnH.kIi22",
    listingUrl: "https://www.homely.com.au/homes/178-kingfisher-parade-toogoom-qld-4655/12977022"
  },
  {
    id: "wa-singleton-122-foreshore",
    title: "122 Foreshore Drive",
    suburb: "Singleton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    daysOnMarket: 23,
    price: 1850000,
    landSize: 710,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Ocean views", "Large house", "Balcony"],
    status: "active",
    notes: "Foreshore Drive beach-position home with panoramic ocean views and beach access metres from the doorstep. Price advertised as offers over.",
    image: "https://www.homely.com.au/img-variant/l-Mantis-12384696-1.jpg?named-transform=webDefaultTransform&version=etpwBJ3faNtZgtkZSbfMH0nrTsToW5qE",
    listingUrl: "https://www.homely.com.au/homes/122-foreshore-drive-singleton-wa-6175/12384696"
  },
  {
    id: "wa-singleton-60-foreshore",
    title: "60 Foreshore Drive",
    suburb: "Singleton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    price: 899000,
    landSize: 809,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach opposite", "Direct walkway access", "Vacant land", "Ocean views"],
    status: "active",
    notes: "Elevated Foreshore Drive land with ocean views and direct walkway access to Singleton Beach just across the road. Price advertised as buyers over.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-13041064-1.jpg?named-transform=webDefaultTransform",
    listingUrl: "https://www.homely.com.au/homes/60-foreshore-drive-singleton-wa-6175/13041064"
  },
  {
    id: "qld-bowen-151-ocean-view",
    title: "151 Ocean View Drive",
    suburb: "Bowen",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1080,
    daysOnMarket: 8,
    price: 349000,
    landSize: 1175,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Water frontage", "Vacant land", "Private driveway", "Low entry price"],
    status: "active",
    notes: "Beachfront-position harbour land with 21m water frontage and easy water access. Price advertised at $349,000.",
    image: "https://www.homely.com.au/img-variant/l-VaultRE-13026232-1.jpg?named-transform=webDefaultTransform&version=5eZ1qG6RGCsONdFPP0W6YSN4ybMFajUd",
    listingUrl: "https://www.homely.com.au/homes/151-ocean-view-drive-bowen-qld-4805/13026232"
  },
  {
    id: "wa-singleton-lot-175-sandpiper",
    title: "LOT 175 Sandpiper Drive",
    suburb: "Singleton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    daysOnMarket: 34,
    price: 758000,
    landSize: 483,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Oceanfront land", "Vacant land", "New estate"],
    status: "active",
    notes: "Signature oceanfront land in Bayshore Beachside Estate with no road between the lot and ocean. Titles expected Aug/Sep 2026.",
    image: "https://www.homely.com.au/img-variant/l-Eagle-12898797-1.jpg?named-transform=webDefaultTransform&version=xFpaNP.g4SnR.cRK6v3Jj5LrNsXe6qZ4",
    listingUrl: "https://www.homely.com.au/homes/lot-175-sandpiper-drive-singleton-wa-6175/12898797"
  },
  {
    id: "nsw-blueys-beach-64-newman",
    title: "64 Newman Avenue",
    suburb: "Blueys Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 210,
    daysOnMarket: 15,
    price: 0,
    landSize: 543,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Ocean panorama", "Elevated position"],
    status: "active",
    notes: "Absolute beachfront home with direct beach access and panoramic views along Blueys Beach. Expression of interest listing.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12475911-1.jpg?named-transform=webDefaultTransform&version=soupaD38_UHSu_yROEH0fTHiLX6smNgm",
    listingUrl: "https://www.homely.com.au/homes/64-newman-avenue-blueys-beach-nsw-2428/12475911"
  },
  {
    id: "qld-palm-beach-10f-973-gold-coast",
    title: "10F/973 Gold Coast Highway",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    daysOnMarket: 56,
    price: 1200000,
    landSize: 0,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Renovation upside", "Ocean views"],
    status: "active",
    notes: "Beachfront building apartment with no roads to cross and direct access onto Palm Beach. Price advertised as offers over.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12921050-1.jpg?named-transform=webDefaultTransform&version=B6ZUN6O3NgDNVJxPPo4mIbf84lJx1PB4",
    listingUrl: "https://www.homely.com.au/homes/10f-973-gold-coast-highway-palm-beach-qld-422/12921050"
  },
  {
    id: "nsw-caves-beach-19-esplanade",
    title: "19 The Esplanade",
    suburb: "Caves Beach",
    state: "NSW",
    nearestMajorCity: "Sydney",
    majorCityMinutes: 115,
    daysOnMarket: 32,
    price: 2930000,
    landSize: 598,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach reserve opposite", "Ocean views", "Corner block", "Lift"],
    status: "active",
    notes: "Beachfront-reserve home directly opposite reserve and metres from the sand. Price is the midpoint of the advertised range.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12778010-1.jpg?named-transform=webDefaultTransform&version=4zvlxtyWMXp5UrCsawXDN_h7mTh0NhH9",
    listingUrl: "https://www.homely.com.au/homes/19-the-esplanade-caves-beach-nsw-2281/12778010"
  },
  {
    id: "qld-surfers-paradise-36f-80-esplanade",
    title: "36F/80 The Esplanade",
    suburb: "Surfers Paradise",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 10,
    daysOnMarket: 6,
    price: 1399000,
    landSize: 157,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "High floor", "Ocean views", "Renovation upside"],
    status: "active",
    notes: "Beachfront-position half-floor apartment opposite Surfers Paradise Beach with unobstructed ocean views. Price advertised as offers over.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-12837924-1.jpg?named-transform=webDefaultTransform&version=wRc9XgwUSJPdRBo0SC.8fsoeIfwIL_Rh",
    listingUrl: "https://www.homely.com.au/homes/36f-80-the-esplanade-surfers-paradise-qld-421/12837924"
  },
  {
    id: "nsw-kingscliff-4-190-marine",
    title: "4/190 Marine Parade",
    suburb: "Kingscliff",
    state: "NSW",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 35,
    daysOnMarket: 32,
    price: 1550000,
    landSize: 746,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront apartment", "Ocean reserve views", "Boutique block", "Refurbished"],
    status: "active",
    notes: "Beachfront Marine Parade apartment with ocean and reserve views in a boutique block of five. Price is the midpoint of the guide.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-12776324-1.jpg?named-transform=webDefaultTransform&version=f8kiu8jOPKnbMSpgr7YURxW.DIr67HqB",
    listingUrl: "https://www.homely.com.au/homes/4-190-marine-parade-kingscliff-nsw-2487/12776324"
  },
  {
    id: "qld-palm-beach-69-jefferson",
    title: "69 Jefferson Lane",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    daysOnMarket: 27,
    price: null,
    landSize: 597,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct private beach access", "Ocean frontage", "Lift"],
    status: "active",
    notes: "Jefferson Lane absolute beachfront house with 10m ocean frontage and direct private sand access. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150390700/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-palm%2Bbeach-150390700"
  },
  {
    id: "qld-palm-beach-202-1331-gold-coast",
    title: "202/1331 Gold Coast Highway",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 4500000,
    landSize: 271,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Ocean panorama", "Boutique building", "Secure parking"],
    status: "active",
    notes: "One Palm Beach apartment advertised with absolute beachfront living and uninterrupted ocean views from Coolangatta to Main Beach.",
    image: "https://www.realestate.com.au/property-image/147397760/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-147397760"
  },
  {
    id: "qld-palm-beach-227-jefferson",
    title: "227 Jefferson Lane",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: null,
    landSize: 413,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct sand access", "Beachfront alfresco", "Ocean views"],
    status: "active",
    notes: "Jefferson Lane beachfront house advertised as an absolute beachfront resort-style retreat with panoramic ocean and coastline vistas.",
    image: "https://www.realestate.com.au/property-image/148881840/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-palm%2Bbeach-148881840"
  },
  {
    id: "qld-palm-beach-801-474-esplanade",
    title: "801/474 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: null,
    landSize: 521,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Penthouse", "16m beachfrontage", "Rooftop pool"],
    status: "active",
    notes: "Two-level Esplanade penthouse positioned on absolute beachfront with 16m beachfrontage and uninterrupted ocean frontage.",
    image: "https://www.realestate.com.au/property-image/150647288/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-150647288"
  },
  {
    id: "qld-palm-beach-27-jefferson",
    title: "27 Jefferson Lane",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: null,
    landSize: 417,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beachfront access", "11.9m sand access", "RD6 zoning", "Ocean views"],
    status: "active",
    notes: "Jefferson Lane absolute beachfront block with 11.9m direct sand access and redevelopment potential under RD6 zoning.",
    image: "https://www.realestate.com.au/property-image/148894788/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-palm%2Bbeach-148894788"
  },
  {
    id: "qld-palm-beach-801-468-esplanade",
    title: "801/468 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 4400000,
    landSize: 215,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront sub-penthouse", "Beachfront balcony", "Three car spaces", "Ocean panorama"],
    status: "active",
    notes: "Omnia sub-penthouse advertised as beachfront with an unbroken ocean panorama and a full-length beachfront balcony.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12716050-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/801-468-the-esplanade-palm-beach-qld-4221/12716050"
  },
  {
    id: "qld-palm-beach-701-468-esplanade",
    title: "701/468 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    daysOnMarket: 24,
    price: null,
    landSize: 430,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront full floor", "13m ocean frontage", "Brand new", "Boutique building"],
    status: "active",
    notes: "Full-floor Omnia apartment advertised as brand new beachfront luxury with rare 13m-plus frontage to the ocean.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12491714-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/701-468-the-esplanade-palm-beach-qld-4221/12491714"
  },
  {
    id: "qld-palm-beach-003-332-esplanade",
    title: "003/332 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 3595000,
    landSize: 0,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No road", "Direct beach access", "New development"],
    status: "active",
    notes: "La Belle apartment advertised as absolute beachfront with direct sand access and no roads or pathways in front.",
    image: "https://www.realestate.com.au/property-image/149839892/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-149839892"
  },
  {
    id: "qld-palm-beach-005-332-esplanade",
    title: "005/332 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    daysOnMarket: 6,
    price: 1875000,
    landSize: 0,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "No road", "Ocean views", "New development"],
    status: "active",
    notes: "La Belle apartment advertised with direct beach access from an absolute beachfront building and no roads or pathways in front.",
    image: "https://www.realestate.com.au/property-image/149893964/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-149893964"
  },
  {
    id: "qld-palm-beach-004-332-esplanade",
    title: "004/332 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    daysOnMarket: 4,
    price: 3250000,
    landSize: 0,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No road", "Direct sand access", "Panoramic views"],
    status: "active",
    notes: "La Belle apartment advertised as absolute beachfront with direct sand access, no roads or pathways in front, and north-east ocean views.",
    image: "https://www.realestate.com.au/property-image/149893724/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-149893724"
  },
  {
    id: "qld-palm-beach-402-440-esplanade",
    title: "402/440 The Esplanade",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    price: 4350000,
    landSize: 174,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Beach at doorstep", "Oceanfront balcony", "Wellness amenities"],
    status: "active",
    notes: "Solmare apartment in an absolute beachfront development with beach at the doorstep and panoramic views north to Burleigh Headland.",
    image: "https://www.realestate.com.au/property-image/149688884/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-palm%2Bbeach-149688884"
  },
  {
    id: "qld-mermaid-beach-5-93-albatross",
    title: "5/93 Albatross Avenue",
    suburb: "Mermaid Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 10,
    daysOnMarket: 6,
    price: 3000000,
    landSize: 135,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct sand access", "Ocean views", "Boutique block"],
    status: "active",
    notes: "Absolute beachfront apartment on Albatross Avenue with direct sand access and no roads between the building and beach. Price advertised as offers over.",
    image: "https://www.realestate.com.au/property-image/150282784/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-mermaid%2Bbeach-150282784"
  },
  {
    id: "qld-peregian-beach-36-lorikeet",
    title: "36 Lorikeet Drive",
    suburb: "Peregian Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 125,
    daysOnMarket: 3,
    price: 9450000,
    landSize: 513,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront parcel", "Direct beach access", "Architect-designed", "Pool"],
    status: "active",
    notes: "Architect-designed beachfront residence on a 513sqm parcel with ocean views and nearby private beach access. Advertised at $9.45M.",
    image: "https://www.realestate.com.au/property-image/150163808/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-peregian%2Bbeach-150163808"
  },
  {
    id: "wa-lancelin-80-gingin",
    title: "80 Gingin Road",
    suburb: "Lancelin",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 90,
    listedDate: "2026-03-30",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Back-gate beach access", "Dual living", "Rooftop terrace"],
    status: "active",
    notes: "Absolute beachfront Lancelin home with no road between the property and beach, plus direct back-gate sand access. Price advertised as all offers.",
    image: "https://www.realestate.com.au/property-image/150741000/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-lancelin-150741000"
  },
  {
    id: "wa-lancelin-1-cunliffe",
    title: "1 Cunliffe Street",
    suburb: "Lancelin",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 90,
    listedDate: "2026-03-12",
    price: 1100000,
    landSize: 1184,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach reserve frontage", "Large coastal land", "Tourism zoning", "Potential ocean views"],
    status: "active",
    notes: "Active Lancelin coastal land listing described as moments from Lancelin Beach, with the ocean just beyond the coastal reserve and powder-white sand within moments. Price advertised at $1.1M.",
    image: "https://www.realestate.com.au/property-image/204454776/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-lancelin-204454776"
  },
  {
    id: "wa-naturaliste-4-42-bunker-bay",
    title: "4/42 Bunker Bay Road",
    suburb: "Naturaliste",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 190,
    daysOnMarket: 36,
    price: null,
    landSize: 902,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct Bunker Bay access", "Resort facilities", "Architect-designed"],
    status: "active",
    notes: "Absolute beachfront Bunker Bay residence on 902sqm with direct no-road access to the beach and shared resort facilities. Price advertised as offers.",
    image: "https://www.realestate.com.au/property-image/149959248/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-naturaliste-149959248"
  },
  {
    id: "qld-port-douglas-11-beachfront-mirage",
    title: "11 Beachfront Mirage Drive",
    suburb: "Port Douglas",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1080,
    price: 4495000,
    landSize: 870,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Private beach gate", "Gated estate", "Pool", "Fully furnished"],
    status: "active",
    notes: "Beachfront Mirage Estate residence with private beach access beyond its own gate, sold walk-in walk-out. Advertised at $4.495M.",
    image: "https://www.realestate.com.au/property-image/148116280/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-port%2Bdouglas-148116280"
  },
  {
    id: "sa-taperoo-lot-72-oceanview",
    title: "Lot 72 Oceanview Drive",
    suburb: "Taperoo",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    price: 815000,
    landSize: 239,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront land", "Ocean views", "Major city", "Vacant land"],
    status: "active",
    notes: "Premium Fort Largs beachfront allotment with uninterrupted ocean views, about 30 minutes from Adelaide CBD.",
    image: "https://i2.au.reastatic.net/800x600/090ba112aec7ff8adb63dec9b816b966ae3f1f34699e193640b49970c9e373c6/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-taperoo-204275416"
  },
  {
    id: "sa-taperoo-lot-58-oceanview",
    title: "Lot 58 Oceanview Drive",
    suburb: "Taperoo",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    daysOnMarket: null,
    price: 1754000,
    landSize: 358,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Fort Largs", "Ocean and reserve views", "Major city"],
    status: "active",
    notes: "Fort Largs Seabreeze home in an elevated beachfront development with ocean, dune and reserve outlooks plus direct beach and Coast Park access. Advertised at $1.754M.",
    image: "https://www.realestate.com.au/property-image/148462108/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-taperoo-148462108"
  },
  {
    id: "sa-aldinga-108a-esplanade",
    title: "108a The Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 1842000,
    landSize: 389,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Ocean views", "Major city", "Modern build"],
    status: "active",
    notes: "Front-row Esplanade home with ocean and reef views. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/dd999601746e0d4c4cb1554c3b102ca3318087ea847c9042a7abb7b326ae4a2a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-150095992"
  },
  {
    id: "sa-aldinga-283-lower-esplanade",
    title: "283 Lower Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 60,
    price: 1840000,
    landSize: 1437,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Large block", "Future build potential", "Major city"],
    status: "active",
    notes: "Large Lower Esplanade holding with 180-degree Gulf views and future rebuild potential.",
    image: "https://i2.au.reastatic.net/800x600/e82ea4f333c2f5fad82745fca6c8c0e75d74d0035cd70f683cab7b98ebea4243/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-150249668"
  },
  {
    id: "sa-aldinga-275a-lower-esplanade",
    title: "275a Lower Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 60,
    price: null,
    landSize: 956,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront setting", "Dual living", "Large block", "Ocean views"],
    status: "active",
    notes: "Tightly held beachfront-setting home opposite the dunes with flexible dual-living layout. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/5c62d3a797f012f964cadd8abb8f33bf8625a6b1c26c981dc8d3cf93b8271d1a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-149975092"
  },
  {
    id: "sa-aldinga-157-esplanade-house",
    title: "157 Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 2122500,
    landSize: 432,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Direct beach access", "Ocean views", "Major city"],
    status: "active",
    notes: "Turnkey house and land package on the Esplanade with panoramic ocean views. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/4258ffa47b95908d60cc3d7553a85334e8019e4d955ab866f21dc08b8cd6c5a5/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-149717988"
  },
  {
    id: "sa-middleton-37-mcleod",
    title: "37 McLeod Road",
    suburb: "Middleton",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 75,
    price: 650000,
    landSize: 978,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Walk to beach", "Large block", "Ocean view potential", "Lower entry price"],
    status: "active",
    notes: "Large flat coastal allotment about 400 metres from Middleton beach. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/0f6198434cf3a22da21a584e38e5b3cbd60cf53d75c06ddc31626b8803722d09/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-middleton-204468824"
  },
  {
    id: "sa-aldinga-6-humphrys",
    title: "6 Humphrys Road",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    daysOnMarket: 2,
    price: 760000,
    landSize: 726,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Walk to beach", "Subdivision potential", "Fresh listing", "Major city"],
    status: "active",
    notes: "Fresh Aldinga Beach listing on a 726sqm allotment, a short stroll from the Esplanade. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/f577c3974b2f4a77fb75f31453ff90302edfccd6a7ce086e01d61f6f2e95abdf/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-150324004"
  },
  {
    id: "sa-black-point-30-outlook",
    title: "30 Outlook Road",
    suburb: "Black Point",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 120,
    price: 249000,
    landSize: 908,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Coastal land", "Large block", "Lower entry price", "Holiday home potential"],
    status: "active",
    notes: "Coastal allotment at Black Point, around two hours from Adelaide, suitable for a holiday home build.",
    image: "https://i2.au.reastatic.net/800x600/c9ed774a2316654a2f0d19d2a43be0480a3a8b2a5924095c5581d625b5511113/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-black%2Bpoint-204168804"
  },
  {
    id: "sa-semaphore-9-58-esplanade",
    title: "9/58 Esplanade",
    suburb: "Semaphore",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    price: 670000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Ocean views", "Apartment", "Major city"],
    status: "active",
    notes: "Semaphore Esplanade apartment with sweeping ocean and jetty views, steps to the foreshore and cafes. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/b445b81c49f6e9f3f629181b90b1c6c5076c014cfc8007f4d6c4c2ca1bf00625/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore-150552716"
  },
  {
    id: "sa-semaphore-14a-percy",
    title: "14A Percy St",
    suburb: "Semaphore",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    daysOnMarket: 1,
    price: null,
    landSize: 238,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["One street from beach", "Fresh listing", "Modern home", "Major city"],
    status: "active",
    notes: "Fresh Semaphore beachside home one street from the Esplanade and a short stroll to the sand. Auction/contact agent listing.",
    image: "https://i2.au.reastatic.net/800x600/089605bcca84a19e7e267b2eeca07fb48d06cde5aef0e0db67131eeb7eec384e/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore-150538096"
  },
  {
    id: "sa-semaphore-south-27-esplanade",
    title: "27 Esplanade",
    suburb: "Semaphore South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: null,
    landSize: 935,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Large block", "Character home", "Major city"],
    status: "active",
    notes: "Substantial character residence on the Semaphore South Esplanade with a 935sqm allotment and prime beachfront setting. Auction listing.",
    image: "https://i2.au.reastatic.net/800x600/34c4e98ed7619eed791c9d9958ca73e1d15c49f677fda5399f13cafc7eab4e7a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore%2Bsouth-150646552"
  },
  {
    id: "sa-seacliff-236-esplanade",
    title: "236 Esplanade",
    suburb: "Seacliff",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    price: null,
    landSize: 574,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Ocean views", "Corner block", "Major city"],
    status: "sold",
    notes: "Seacliff Esplanade residence on a 574sqm corner block with uninterrupted 180-degree ocean views. Hidden because the listing now shows sold on 25 Mar 2026.",
    image: "https://i2.au.reastatic.net/800x600/44ca750c12c9873cb4e05be75d803f7f6be12b185c2ff99aeebbfe253ac305fd/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-seacliff-150033016"
  },
  {
    id: "sa-brighton-134b-esplanade",
    title: "134B Esplanade",
    suburb: "Brighton",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    daysOnMarket: 3,
    price: null,
    landSize: 178,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Fresh listing", "Beach lifestyle", "Major city"],
    status: "sold",
    notes: "Brighton Esplanade home close to the beach and Jetty Road. Hidden because the listing now shows sold on 24 Feb 2026.",
    image: "https://i2.au.reastatic.net/800x600/df009b45af51e797dac219ebd86c07bb2a06afcbde902ff9a787d3982961682b/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-brighton-150153620"
  },
  {
    id: "sa-brighton-8-147-esplanade",
    title: "8/147 Esplanade",
    suburb: "Brighton",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    daysOnMarket: null,
    price: 266750,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Retirement living", "Walk to beach", "Major city"],
    status: "active",
    notes: "Active retirement-living unit on Brighton's Esplanade. Listing describes Esplanade living, nearby beaches, Jetty Road access, and age eligibility of 65 years or older and no longer working full time.",
    image: "https://i2.au.reastatic.net/800x600/bce293c34db107a0d352519bf97951807643ad13b023992e338d503ce1bc1940/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-retirement%2Bliving-sa-brighton-146055848"
  },
  {
    id: "sa-brighton-1-155-esplanade",
    title: "1/155 Esplanade",
    suburb: "Brighton",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    daysOnMarket: 2,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Front-row unit", "Beach lifestyle", "Major city"],
    status: "active",
    notes: "Active front-row Brighton Esplanade unit. REA and Domain suburb sale pages show it as a current sale listing with best offers due 26 May 2026; price and land size were not published on the portal result card.",
    image: "https://www.realestate.com.au/property-image/151129272/1",
    listingUrl: "https://www.realestate.com.au/property-unit-sa-brighton-151129272"
  },
  {
    id: "sa-hallett-cove-51-lighthouse",
    title: "51 Lighthouse Drive",
    suburb: "Hallett Cove",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    listedDate: "2026-03-31",
    price: 564000,
    landSize: 421,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["4 min drive to beach", "Corner block", "Coastal trails", "Major city"],
    status: "active",
    notes: "Elevated Hallett Cove corner allotment close to coastal trails and about 2.5km to the beach. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/b6ec24b6734bf6a793449c60162ad1a95745b090a9608c2b3c27acb6620113b2/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-hallett%2Bcove-204473492"
  },
  {
    id: "sa-hallett-cove-6-the-esplanade",
    title: "6 The Esplanade",
    suburb: "Hallett Cove",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    listedDate: "2026-04-01",
    price: null,
    landSize: 681,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Uninterrupted ocean views", "Coastal land", "Major city"],
    status: "active",
    notes: "Active front-row Esplanade land listing advertised as a premium cliff-face coastal parcel with uninterrupted ocean views and the coastline at the doorstep. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/e05152d08d141f25f11e21bbba5db45ac81799cae62d33a8530cb542852a9662/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-hallett%2Bcove-204475092"
  },
  {
    id: "sa-hallett-cove-lot-4102-burlington",
    title: "Lot 4102 Burlington Road",
    suburb: "Hallett Cove",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    listedDate: "2026-02-10",
    price: null,
    landSize: 119900,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: false,
    factors: ["Oceanfront land", "No road", "Development site", "Major city"],
    status: "active",
    notes: "Large oceanfront Hallett Cove development site advertised as directly on the ocean front, with approved allotments and coastal panorama views. Listed for expressions of interest; the direct listing remains live without sold or under-contract status.",
    image: "https://i1.au.reastatic.net/768x512-smart=80,r=33,g=40,b=46,quality=60,progressive/3aceaa7efe3ab7d485a02cf6dffeb4a634a78d210cf3464cce575d99494ac427/image0.jpg",
    listingUrl: "https://www.realcommercial.com.au/for-sale/property-lot-4102-burlington-road-hallett-cove-sa-5158-505054252"
  },
  {
    id: "sa-port-noarlunga-35-old-honeypot",
    title: "35 Old Honeypot Road",
    suburb: "Port Noarlunga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    daysOnMarket: 4,
    price: null,
    landSize: 780,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Coastal views", "River outlook", "Large block", "Major city"],
    status: "sold",
    notes: "Elevated Port Noarlunga home with coastal, garden and river outlooks, minutes to the beach and village. Realestate.com.au now shows this property as sold on 10 Oct 2025 and off market.",
    image: "https://i2.au.reastatic.net/800x600/a4bf0994876fb278fe50c6cc283cb81ca07bb0b91f36a565dde5d86b0cf8b1be/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-port%2Bnoarlunga-149133548"
  },
  {
    id: "sa-port-noarlunga-14-bice",
    title: "14 Bice Avenue",
    suburb: "Port Noarlunga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    daysOnMarket: 1,
    price: 924000,
    landSize: 731,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Fresh listing", "Walk to beach", "Large block", "Major city"],
    status: "under_offer",
    notes: "Port Noarlunga home on a 731sqm allotment, close to Christies Beach township and local beaches. Realestate.com.au now shows the listing as under offer.",
    image: "https://i2.au.reastatic.net/800x600/e8d5c4d7cfbdbd44441b69212505039fccc11dc73845c600d1030844b69d7e78/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-port%2Bnoarlunga-150789272"
  },
  {
    id: "sa-normanville-25-marrata",
    title: "25 Marrata Street",
    suburb: "Normanville",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: 765000,
    landSize: 598,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Walk to beach", "Holiday home", "Low-maintenance", "Farmland views"],
    status: "active",
    notes: "Coastal Carrickalinga Sands home with boardwalk access to the beach and Normanville amenities. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/4261383785822fdbadd961afc13166d8d52dafae19e3ea34aae986f92ebbd5c2/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-normanville-149230020"
  },
  {
    id: "sa-carrickalinga-7-merino",
    title: "7 Merino Avenue",
    suburb: "Carrickalinga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    listedDate: "2026-04-02",
    price: 450000,
    landSize: 999,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Coastal views", "Large block", "Vacant land", "Fleurieu"],
    status: "active",
    notes: "Generous Carrickalinga coastal allotment with elevated positioning and potential sweeping coastal views. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/621fc03829d4fe3aebe176b67ecb1aa519cb1d4df798d29c2cc1f3428fb600b0/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-carrickalinga-204477240"
  },
  {
    id: "sa-carrickalinga-28-stacey",
    title: "28 Stacey Drive",
    suburb: "Carrickalinga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: 450000,
    landSize: 1001,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean view potential", "Large block", "Vacant land", "Fleurieu"],
    status: "active",
    notes: "Elevated 1001sqm Carrickalinga block with ocean and hill views, close to Carrickalinga Beach and Normanville.",
    image: "https://i2.au.reastatic.net/800x600/257614634f8edad65105f79f7d54aff3baddf34ac02b931f6d18480caabe6761/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-carrickalinga-204271816"
  },
  {
    id: "sa-cape-jervis-17-elanora",
    title: "17 Elanora Crescent",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 100,
    price: 700000,
    landSize: 931,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Kangaroo Island views", "Large shed", "Rainwater"],
    status: "active",
    notes: "Cape Jervis coastal home with sweeping ocean and Kangaroo Island views on a 931sqm allotment. Price is the midpoint of the advertised range.",
    image: "https://i2.au.reastatic.net/800x600/d967d6b82f5142ba5094a29fc2d2fbb3eaee2455bea16379741bbd2926e8fcfa/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-149711588"
  },
  {
    id: "sa-semaphore-59-esplanade",
    title: "59 Esplanade",
    suburb: "Semaphore",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    daysOnMarket: 3,
    listedDate: "2026-04-20",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade beachfront", "Ocean views", "Character home", "Major city"],
    status: "active",
    notes: "Iconic Semaphore Esplanade beachfront maisonette with panoramic sea and jetty views. Auction listing.",
    image: "https://www.realestate.com.au/property-image/150944280/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore-150944280"
  },
  {
    id: "sa-semaphore-south-1-10-esplanade",
    title: "1/10 Esplanade",
    suburb: "Semaphore South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 2549500,
    landSize: 300,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront living", "Direct beach access", "Ocean views", "Major city"],
    status: "active",
    notes: "Ground-floor beachfront residence with direct beach and park access. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/148987752/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-semaphore%2Bsouth-148987752"
  },
  {
    id: "sa-largs-bay-208-lady-gowrie",
    title: "208 Lady Gowrie Drive",
    suburb: "Largs Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    price: null,
    landSize: 965,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Oceanfront corner site", "Esplanade position", "Large block", "Major city"],
    status: "sold",
    notes: "Oceanfront corner site directly opposite the beach with uninterrupted Gulf St Vincent views. Marked sold after Homely sold-history result showed a November 2025 sale.",
    image: "https://www.realestate.com.au/property-image/149407652/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-largs%2Bbay-149407652"
  },
  {
    id: "sa-largs-bay-lot-7-lady-gowrie",
    title: "Lot 7 Lady Gowrie",
    suburb: "Largs Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: null,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront position", "Uninterrupted sea views", "Corner allotment", "Surf club opposite"],
    status: "active",
    notes: "Beachfront house-and-land opportunity directly opposite Largs Bay Surf Life Saving Club, advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150457520/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-largs%2Bbay-150457520"
  },
  {
    id: "sa-largs-bay-lot-6-lady-gowrie",
    title: "Lot 6 Lady Gowrie Drive",
    suburb: "Largs Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: null,
    price: null,
    landSize: 606,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront position", "House and land", "Surf club opposite", "New build"],
    status: "active",
    notes: "Beachfront house-and-land opportunity opposite Largs Bay Surf Life Saving Club, with the sand moments from the doorstep. Price currently advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150060216/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-largs%2Bbay-150060216"
  },
  {
    id: "sa-largs-bay-lot-5-lady-gowrie",
    title: "Lot 5 Lady Gowrie Drive",
    suburb: "Largs Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: null,
    price: 2475000,
    landSize: 573,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront position", "House and land", "Surf club opposite", "New build"],
    status: "under_offer",
    notes: "Beachfront house-and-land opportunity opposite Largs Bay Surf Life Saving Club, moments from the sand. Price advertised as $2,475,000; marked under offer after the Largs Bay portal result page showed an under-offer label.",
    image: "https://www.realestate.com.au/property-image/149617372/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-largs%2Bbay-149617372"
  },
  {
    id: "sa-west-beach-21a-seaview",
    title: "21A Seaview Road",
    suburb: "West Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 15,
    price: null,
    landSize: 398,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute beachfront", "Dune frontage", "Pool"],
    status: "sold",
    notes: "Absolute beachfront home where low dunes separate the property from the water. Sold on 17 Sep 2025 per realestate.com.au sold listing.",
    image: "https://www.realestate.com.au/property-image/148954008/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-west%2Bbeach-148954008"
  },
  {
    id: "sa-west-beach-94-seaview",
    title: "94 Seaview Road",
    suburb: "West Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 15,
    listedDate: "2026-04-25",
    price: null,
    landSize: 400,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Front-row Seaview Road", "Beachside land", "Beach reserve nearby", "Build opportunity"],
    status: "active",
    notes: "Prime 400m2 beachside allotment on Seaview Road, advertised as metres from West Beach's sands and coastline. Auction campaign without a visible price guide.",
    image: "https://www.realestate.com.au/property-image/204498404/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-west%2Bbeach-204498404"
  },
  {
    id: "sa-west-beach-2-stanhope",
    title: "2 Stanhope Street",
    suburb: "West Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 15,
    price: 2300000,
    landSize: 352,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["One house from Esplanade", "Ocean views", "Front-row pocket", "Near beach access"],
    status: "off_market",
    notes: "Near-new home advertised as having oceanfront status one house back from The Esplanade, with intimate ocean views from the second-level terrace. Marked off market after the current realestate.com.au property page no longer showed an active sale listing.",
    image: "https://www.realestate.com.au/property-image/147744692/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-west%2Bbeach-147744692"
  },
  {
    id: "sa-glenelg-17-2-south-esplanade",
    title: "17/2 South Esplanade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-24",
    price: 2700000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No road", "Penthouse", "Major city"],
    status: "active",
    notes: "South Esplanade penthouse in the Promenade Building with steps to Glenelg Beach. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150994120/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-150994120"
  },
  {
    id: "sa-glenelg-49-3-holdfast-promenade",
    title: "49/3 Holdfast Promenade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 1675000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront", "Ocean terrace", "Beach metres away", "Major city"],
    status: "active",
    notes: "Third-floor Holdfast Promenade apartment with Gulf St Vincent coastal views from every room and the sand only a few metres from the front door. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150343764/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-150343764"
  },
  {
    id: "sa-glenelg-713-16-holdfast-promenade",
    title: "713/16 Holdfast Promenade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 2200000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Esplanade access", "Penthouse", "Major city"],
    status: "active",
    notes: "Level 7 Holdfast Promenade penthouse with uninterrupted panoramic ocean views and direct connection to Glenelg Beach. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150120120/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-150120120"
  },
  {
    id: "sa-glenelg-201-16-holdfast-promenade",
    title: "201/16 Holdfast Promenade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-22",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront address", "Holdfast Promenade", "Colley Reserve views", "Major city"],
    status: "active",
    notes: "Second-floor Plaza Pier apartment on Holdfast Promenade with balcony views across Colley Reserve, close to Holdfast Shores Marina and Glenelg Beach. Advertised as Best Offer By 12/05 (USP).",
    image: "https://www.realestate.com.au/property-image/150972244/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-150972244"
  },
  {
    id: "sa-glenelg-305-19-holdfast-promenade",
    title: "305/19 Holdfast Promenade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 1650000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront address", "Holdfast Promenade", "Beach steps away", "Major city"],
    status: "active",
    notes: "Platinum complex apartment on Holdfast Promenade with corner balcony outlook over Colley Reserve and Glenelg Beach only steps from the building. Advertised as New Price $1.65m.",
    image: "https://www.realestate.com.au/property-image/148833780/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-148833780"
  },
  {
    id: "sa-glenelg-607-16-holdfast-promenade",
    title: "607/16 Holdfast Promenade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 775000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront address", "Beach views", "Holdfast Promenade", "Major city"],
    status: "active",
    notes: "Sixth-floor Holdfast Promenade apartment with sweeping Glenelg Beach views and the beach, marina dining, Jetty Road and tram within a short stroll. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150605440/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-150605440"
  },
  {
    id: "sa-glenelg-north-26-13-north-esplanade",
    title: "26/13 North Esplanade",
    suburb: "Glenelg North",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-24",
    price: 1424000,
    landSize: 112,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront Esplanade", "Oceanfront lifestyle", "Front-row apartment", "Major city"],
    status: "active",
    notes: "North Esplanade apartment advertised as beachfront living moments from the sand, with three secure car spaces. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150992176/1",
    listingUrl: "https://www.realestate.com.au/property-unit-sa-glenelg%2Bnorth-150992176"
  },
  {
    id: "sa-glenelg-north-1-53-54-north-esplanade",
    title: "1/53-54 North Esplanade",
    suburb: "Glenelg North",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-08",
    price: 1150000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Front-row coastline", "Absolute beachfront outlook", "Ocean views", "Major city"],
    status: "active",
    notes: "Two-storey North Esplanade townhouse directly opposite Glenelg North beach, advertised with uninterrupted ocean outlooks and absolute beachfront positioning.",
    image: "https://www.realestate.com.au/property-image/150814692/1",
    listingUrl: "https://www.realestate.com.au/property-townhouse-sa-glenelg%2Bnorth-150814692"
  },
  {
    id: "sa-moana-18-328-esplanade",
    title: "18/328 Esplanade",
    suburb: "Moana",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 40,
    listedDate: "2026-04-21",
    price: 1150000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row Esplanade", "Direct beach access", "Ocean views", "Apartment"],
    status: "active",
    notes: "Top-floor front-row Esplanade apartment with uninterrupted ocean, sand and sunset views and beach access at the front door. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150944408/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-moana-150944408"
  },
  {
    id: "sa-moana-418a-esplanade",
    title: "418a Esplanade",
    suburb: "Moana",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    listedDate: "2026-04-01",
    price: 912500,
    landSize: 365,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row Esplanade", "Direct beach access", "Vacant land", "Ocean views"],
    status: "active",
    notes: "Torrens-titled front-row Esplanade land directly opposite Moana Beach with easy access to the sand. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/204475892/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-moana-204475892"
  },
  {
    id: "sa-sellicks-4-87-88-esplanade",
    title: "4/87-88 Esplanade",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    price: null,
    landSize: 253,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade beachfront", "Ocean views", "Luxury apartment", "Fleurieu"],
    status: "active",
    notes: "Sand On Sellick's residence overlooking Sellicks Beach, with sea-view balconies and shops below. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150407832/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-sellicks%2Bbeach-150407832"
  },
  {
    id: "sa-sellicks-9-esplanade",
    title: "9 Esplanade",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 1215000,
    landSize: 832,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Sea views", "Large block", "Holiday rental"],
    status: "active",
    notes: "Quiet Sellicks Beach Esplanade holding with southwest sea and coastline views. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/149951972/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-sellicks%2Bbeach-149951972"
  },
  {
    id: "sa-sellicks-5-87-88-esplanade",
    title: "5/87-88 Esplanade",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    price: 1600000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade beachfront", "Ocean views", "Airbnb", "Newer build"],
    status: "sold",
    notes: "Modern Esplanade coastal retreat with ocean-facing balconies and beach steps away. Sold in February 2026.",
    image: "https://www.realestate.com.au/property-image/148852812/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-sellicks%2Bbeach-148852812"
  },
  {
    id: "sa-sellicks-24-esplanade",
    title: "24 Esplanade",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    daysOnMarket: 3,
    price: 2000000,
    landSize: 715,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct beach access", "Ocean views", "Holiday rental"],
    status: "active",
    notes: "Absolute beachfront Esplanade home with uninterrupted ocean views and direct access to Sellicks Beach.",
    image: "https://www.realestate.com.au/property-image/150764576/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-sellicks%2Bbeach-150764576"
  },
  {
    id: "sa-sellicks-33-seascape-view",
    title: "33 Seascape View",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: null,
    landSize: 790,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach walkway opposite", "Coastal outlook", "Corner block", "Vacant land"],
    status: "active",
    notes: "Elevated Sellicks Beach land with coastal outlook and a public walkway across the road leading directly to the shoreline. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/204373080/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-sellicks%2Bbeach-204373080"
  },
  {
    id: "sa-christies-13a-esplanade",
    title: "13A Esplanade",
    suburb: "Christies Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    daysOnMarket: 26,
    price: null,
    landSize: 448,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront Esplanade", "Ocean views", "New build", "Major city"],
    status: "active",
    notes: "Front-row Christies Beach Esplanade residence with uninterrupted ocean views and beach access nearby. Verified active on direct REA and Homely listing pages.",
    image: "https://www.homely.com.au/img-variant/l-Rex-13001481-1.jpg?named-transform=webDefaultTransform&version=nM.rRq6rU4PWR5pJDADjCn2BS9iwQwbG",
    listingUrl: "https://www.homely.com.au/homes/13a-esplanade-christies-beach-sa-5165/13001481"
  },
  {
    id: "sa-christies-56-esplanade",
    title: "56 Esplanade",
    suburb: "Christies Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    listedDate: "2026-04-30",
    price: null,
    landSize: 846,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Panoramic ocean views", "Pool", "Major city"],
    status: "active",
    notes: "Elevated Christies Beach Esplanade residence with unobstructed 180-degree ocean views, beach access nearby, and best-offer campaign closing 18 May 2026.",
    image: "https://www.realestate.com.au/property-image/151058808/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-christies%2Bbeach-151058808"
  },
  {
    id: "sa-christies-64-esplanade",
    title: "64 Esplanade",
    suburb: "Christies Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    price: 2500000,
    landSize: 836,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Vacant land", "Subdivision potential", "Ocean views"],
    status: "active",
    notes: "Prime Esplanade residential land directly opposite the shoreline with 18.29m frontage and scope for a custom coastal residence or subdivision STCC.",
    image: "https://www.realestate.com.au/property-image/204389904/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-christies%2Bbeach-204389904"
  },
  {
    id: "sa-christies-4-32-esplanade",
    title: "4/32 Esplanade",
    suburb: "Christies Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    price: null,
    landSize: 58,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade position", "Sea views", "Metres to sand", "Lower entry price"],
    status: "active",
    notes: "Updated one-bedroom Esplanade unit with sea views from the living area and sand/coastal path access metres from the front door. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/149661732/1",
    listingUrl: "https://www.realestate.com.au/property-unit-sa-christies%2Bbeach-149661732"
  },
  {
    id: "sa-aldinga-252-esplanade",
    title: "252 Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    daysOnMarket: 12,
    price: 2400000,
    landSize: 1476,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront land", "Direct beach access", "Large block", "Ocean views"],
    status: "active",
    notes: "Cleared beachfront Esplanade land with uninterrupted ocean views and dual direct beach access close by. Price is the midpoint of the advertised range.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12881689-1.jpg?named-transform=webDefaultTransform&version=ZYWy617pxhXLIv04jiAEaMLQG176bePV",
    listingUrl: "https://www.homely.com.au/homes/252-esplanade-aldinga-beach-sa-5173/12881689"
  },
  {
    id: "sa-aldinga-83-esplanade",
    title: "83 Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 2500000,
    landSize: 720,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Beach access", "Ocean views", "Holiday rental"],
    status: "active",
    notes: "North-facing Esplanade home with uninterrupted ocean views and beach access moments away. Price advertised as $2.5M.",
    image: "https://i2.au.reastatic.net/800x600/68c781a85784e2dd321de4ca539487319ed2d80be8d1286ce6bf28c416609c8a/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-149774424"
  },
  {
    id: "sa-aldinga-121-esplanade",
    title: "121 Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 1650000,
    landSize: 343,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Beach access", "Ocean views", "Holiday rental"],
    status: "active",
    notes: "Modern 2021-built beachfront home overlooking Aldinga Reef Aquatic Reserve with beach access nearby.",
    image: "https://i2.au.reastatic.net/800x600/b74035de31e6de7346a4305fe551bb4e8a2d20c7e917f8402412a3de9bb71c77/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-150568340"
  },
  {
    id: "sa-aldinga-169a-esplanade",
    title: "169A Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    daysOnMarket: 17,
    price: 2425000,
    landSize: 360,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute Esplanade frontage", "Beach access", "Architect-designed", "Ocean views"],
    status: "active",
    notes: "Architect-designed Mesa residence with absolute Esplanade frontage and nothing between the home and shoreline but a short stroll. Price is the midpoint of the advertised range.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12703325-1.jpg?named-transform=webDefaultTransform&version=DUgHsMPiTegu4U3lCLd0hvGHn8Skn.29",
    listingUrl: "https://www.homely.com.au/homes/169a-esplanade-aldinga-beach-sa-5173/12703325"
  },
  {
    id: "sa-aldinga-304-lower-esplanade",
    title: "304 Lower Esplanade",
    suburb: "Aldinga Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    price: null,
    landSize: 697,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Lower Esplanade frontage", "Ocean views", "No public footpath", "Redevelopment upside"],
    status: "active",
    notes: "Tightly held Lower Esplanade home at Silver Sands Beach with uninterrupted sea views and no public footpath in front. Price advertised as contact agent.",
    image: "https://i2.au.reastatic.net/800x600/9344bb6b2c2dc05cdbd5ddffe8768ca3fa3228cf3c092e33ce09195648f54706/image.jpg",
    listingUrl: "https://www.realestate.com.au/property-house-sa-aldinga%2Bbeach-148661424"
  },
  {
    id: "sa-glenelg-35-9-11-south-esplanade",
    title: "35/9-11 South Esplanade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: null,
    landSize: 239,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "South Esplanade", "Beach metres away", "Large apartment"],
    status: "active",
    notes: "Large Barquentine apartment on Glenelg's traffic-free South Esplanade, metres from the sand. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/148343096/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-glenelg-148343096"
  },
  {
    id: "sa-glenelg-92-13-south-esplanade",
    title: "92/13 South Esplanade",
    suburb: "Glenelg",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-02-06",
    price: null,
    landSize: 86,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: false,
    factors: ["South Esplanade", "Ocean views", "Top floor", "Major city"],
    status: "sold",
    notes: "Top-floor South Esplanade apartment with ocean views from bedrooms and living areas. Homely records this listing as sold on 6 Mar 2026.",
    image: "https://www.realestate.com.au/property-image/150136928/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-glenelg-150136928"
  },
  {
    id: "sa-port-noarlunga-south-160b-esplanade",
    title: "160B Esplanade",
    suburb: "Port Noarlunga South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade beachfront", "Ocean views", "Rooftop terrace", "Major city"],
    status: "active",
    notes: "Architectural Port Noarlunga South Esplanade home with beachfront positioning, panoramic coastal views and rooftop terrace. Expressions of interest listing.",
    image: "https://www.realestate.com.au/property-image/149219920/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-port%2Bnoarlunga%2Bsouth-149219920"
  },
  {
    id: "sa-port-noarlunga-south-183-esplanade",
    title: "183 Esplanade",
    suburb: "Port Noarlunga South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    listedDate: "2026-05-06",
    price: 1950000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Coastal views", "Beachside homes", "Major city"],
    status: "active",
    notes: "Brand-new off-plan Esplanade coastal homes advertised with uninterrupted sea views and a beachfront setting. Price guide advertised as $1.95M-$2.095M.",
    image: "https://www.realestate.com.au/property-image/151119620/1",
    listingUrl: "https://www.domain.com.au/183-esplanade-port-noarlunga-south-sa-5167-2020819965"
  },
  {
    id: "sa-port-noarlunga-south-170-esplanade",
    title: "170 Esplanade",
    suburb: "Port Noarlunga South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    daysOnMarket: null,
    price: null,
    landSize: 354.26,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Direct coastal frontage", "Esplanade position", "Beach doorstep", "House and land package"],
    status: "active",
    notes: "Detached house and land package on Port Noarlunga South Esplanade advertised with direct coastal frontage, ocean-on-your-doorstep positioning and one dwelling still available. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/147770356/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-port%2Bnoarlunga%2Bsouth-147770356"
  },
  {
    id: "sa-sellicks-lot-179-8-esplanade",
    title: "Lot 179, 8 Esplanade",
    suburb: "Sellicks Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: 900000,
    landSize: 800,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront land", "Cul-de-sac", "Ocean views", "Cliff views"],
    status: "active",
    notes: "Oceanfront Sellicks Beach land at the quieter end of the Esplanade with rugged cliff and sea views. Price advertised as offers from.",
    image: "https://www.realestate.com.au/property-image/204123864/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-sellicks%2Bbeach-204123864"
  },
  {
    id: "sa-carrickalinga-90-gold-coast",
    title: "90 Gold Coast Drive",
    suburb: "Carrickalinga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: null,
    landSize: 771,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute beachfront", "North Bay", "Holiday home"],
    status: "active",
    notes: "Absolute beachfront North Bay Carrickalinga beach house just steps from the sand, with direct bay views. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150025628/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-carrickalinga-150025628"
  },
  {
    id: "sa-normanville-60-107-williss",
    title: "60/107 Williss Drive",
    suburb: "Normanville",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    listedDate: "2026-04-02",
    price: 820000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Gated beachfront community", "Direct boardwalk", "Lake views", "Resort facilities"],
    status: "active",
    notes: "South Shores villa in a gated beachfront community with resort facilities and direct boardwalk access to Normanville beach. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150777920/1",
    listingUrl: "https://www.realestate.com.au/property-villa-sa-normanville-150777920"
  },
  {
    id: "sa-second-valley-7-park",
    title: "7 Park Street",
    suburb: "Second Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 85,
    price: 750000,
    landSize: 831,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["300m to beach", "Holiday rental", "Large block", "Fleurieu"],
    status: "active",
    notes: "Updated Second Valley holiday home on an 831sqm allotment, around 300m to the foreshore and beach. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150394384/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-second%2Bvalley-150394384"
  },
  {
    id: "sa-second-valley-7-valley-heights",
    title: "7 Valley Heights Drive",
    suburb: "Second Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 85,
    price: 529000,
    landSize: 697,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Vacant land", "Minutes to beach", "Fleurieu"],
    status: "active",
    notes: "Elevated Second Valley land with panoramic ocean and coastal views, minutes to the beach and jetty.",
    image: "https://www.realestate.com.au/property-image/204105352/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-second%2Bvalley-204105352"
  },
  {
    id: "sa-normanville-12-croser",
    title: "12 Croser Street",
    suburb: "Normanville",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    listedDate: "2026-03-31",
    price: null,
    landSize: 317,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Moments to beach", "Outdoor shower", "Village walk", "Holiday rental"],
    status: "active",
    notes: "Architect-designed beachside Normanville home moments from the beachfront and village. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150745532/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-normanville-150745532"
  },
  {
    id: "sa-cape-jervis-185-lands-end",
    title: "185 Lands End Road",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: null,
    landSize: 72490,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beachfront", "No road", "Large acreage", "Ocean views"],
    status: "active",
    notes: "Direct beachfront Cape Jervis acreage with uninterrupted Gulf views and natural scrubland. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/149781600/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-cape%2Bjervis-149781600"
  },
  {
    id: "sa-cape-jervis-82-sorata",
    title: "82 Sorata Street",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 530000,
    landSize: 692,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Kangaroo Island views", "Coastal lifestyle", "Lower entry price"],
    status: "active",
    notes: "Cape Jervis home with farmland, ocean and Kangaroo Island views. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/148842648/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-148842648"
  },
  {
    id: "sa-cape-jervis-37-morella",
    title: "37 Morella Crescent",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 787500,
    landSize: 20500,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Kangaroo Island views", "Acreage", "Privacy"],
    status: "active",
    notes: "Elevated 2.05ha Cape Jervis property with broad ocean, Backstairs Passage and Kangaroo Island views. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/149826972/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-149826972"
  },
  {
    id: "sa-cape-jervis-1-para",
    title: "1 Para Avenue",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 569000,
    landSize: 969,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Kangaroo Island views", "Walk to beach", "Furnished"],
    status: "active",
    notes: "High-side Cape Jervis beach home with panoramic Backstairs Passage views and proximity to Morgan's Beach.",
    image: "https://www.realestate.com.au/property-image/149612936/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-149612936"
  },
  {
    id: "sa-cape-jervis-4-para",
    title: "4 Para Avenue",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 244000,
    landSize: 931,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Vacant land", "Walk to beach", "Lower entry price"],
    status: "active",
    notes: "Elevated Cape Jervis allotment with ocean and island views, close to the ferry, boat ramp and Morgan's Beach.",
    image: "https://www.realestate.com.au/property-image/204290968/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-cape%2Bjervis-204290968"
  },
  {
    id: "sa-cape-jervis-4-darkana",
    title: "4 Darkana Way",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 645000,
    landSize: 1066,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Dual living", "Large sheds", "Holiday rental potential"],
    status: "active",
    notes: "Cape Jervis home with uninterrupted ocean and Kangaroo Island views, dual-living flexibility and large sheds. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/148672748/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-148672748"
  },
  {
    id: "sa-second-valley-13-scenic-view",
    title: "13 Scenic View Drive",
    suburb: "Second Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 85,
    price: null,
    landSize: 707,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Walk to beach", "Holiday rental", "Fleurieu"],
    status: "active",
    notes: "Second Valley holiday home with sweeping ocean views from a large deck and a short stroll to the beach. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/149517904/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-second%2Bvalley-149517904"
  },
  {
    id: "sa-cape-jervis-1-fleurieu",
    title: "1 Fleurieu Avenue",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 762500,
    landSize: 1200,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade position", "Ocean views", "Large block", "High-clearance garage"],
    status: "sold",
    notes: "Elevated Cape Jervis Esplanade-position home with ocean and Kangaroo Island views. Marked sold after the Cape Jervis suburb result page showed a 23 Feb 2026 sale.",
    image: "https://www.realestate.com.au/property-image/149610992/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-149610992"
  },
  {
    id: "sa-cape-jervis-1-jakaka",
    title: "1 Jakaka Avenue",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    listedDate: "2026-04-23",
    price: 229000,
    landSize: 929,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Vacant land", "Near Esplanade", "Lower entry price"],
    status: "active",
    notes: "Cape Jervis allotment around 50 metres from Fleurieu Avenue/Esplanade with views across the reserve toward the coastline and Kangaroo Island.",
    image: "https://www.realestate.com.au/property-image/204495900/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-cape%2Bjervis-204495900"
  },
  {
    id: "sa-cape-jervis-4-st-vincent",
    title: "4 St Vincent Drive",
    suburb: "Cape Jervis",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    listedDate: "2026-01-28",
    price: 659000,
    landSize: 21100,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean views", "Acreage", "Coastal cliffs", "Large sheds"],
    status: "active",
    notes: "Cape Jervis lifestyle acreage with ocean, rugged coastal cliff and rolling hill views. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/150119520/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-cape%2Bjervis-150119520"
  },
  {
    id: "sa-henley-5-417-seaview",
    title: "5/417 Seaview Road",
    suburb: "Henley Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-29",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute beachfront", "Direct sand access", "Ocean views"],
    status: "active",
    notes: "Ground-floor absolute beachfront unit with uninterrupted ocean views and direct sand access. Best-offer campaign closing 18 May 2026.",
    image: "https://www.realestate.com.au/property-image/151040560/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-henley%2Bbeach-151040560"
  },
  {
    id: "sa-henley-3-197-esplanade",
    title: "3/197 Esplanade",
    suburb: "Henley Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-22",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Private beach access", "Townhouse", "Major city"],
    status: "active",
    notes: "Freestanding Esplanade townhouse with private direct beach access and a pathway from the carpark to the shoreline. Best-offer campaign closing 11 May 2026.",
    image: "https://www.realestate.com.au/property-image/150968720/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-henley%2Bbeach-150968720"
  },
  {
    id: "sa-henley-329-esplanade",
    title: "329 Esplanade",
    suburb: "Henley Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-04-09",
    price: null,
    landSize: 419,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Uninterrupted ocean views", "Luxury home", "Major city"],
    status: "active",
    notes: "Torrens-titled Esplanade residence with uninterrupted ocean views from the deck and master suite, moments from Henley Square and the shoreline.",
    image: "https://www.realestate.com.au/property-image/150836624/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-henley%2Bbeach-150836624"
  },
  {
    id: "sa-henley-101-356-seaview",
    title: "101/356 Seaview Road",
    suburb: "Henley Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    price: 764000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Henley Square", "Steps to beachfront", "Apartment", "Major city"],
    status: "active",
    notes: "Baju Apartments residence in Henley Square's beachfront precinct, advertised as steps to the beachfront with beach, cafes and restaurants at the doorstep. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/147657048/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-sa-henley%2Bbeach-147657048"
  },
  {
    id: "sa-henley-beach-south-3-149-esplanade",
    title: "3/149 Esplanade",
    suburb: "Henley Beach South",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 20,
    listedDate: "2026-05-06",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Direct beach access", "Sea views", "Short-stay performer"],
    status: "active",
    notes: "Ground-floor unit in a small Esplanade group directly opposite the beach, with adjacent ramp access, sea views from the living area and a stated short-stay history. Best-offer campaign closing 25 May 2026.",
    image: "https://www.realestate.com.au/property-image/151120912/1",
    listingUrl: "https://www.realestate.com.au/property-unit-sa-henley%2Bbeach%2Bsouth-151120912"
  },
  {
    id: "wa-singleton-lot-163-aquatic",
    title: "Lot 163 Aquatic Way",
    suburb: "Singleton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 50,
    daysOnMarket: 49,
    price: 688000,
    landSize: 588,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Oceanfront land", "R40 zoning", "Vacant land"],
    status: "active",
    notes: "Signature oceanfront Singleton land release promoted as no-road beachfront living with subdivision potential subject to approvals.",
    image: "https://www.homely.com.au/img-variant/l-Eagle-12898945-1.jpg?version=eE6tnIRxkQO28ugnDH40DlpbXRey6xsS",
    listingUrl: "https://www.homely.com.au/homes/lot-163-aquatic-way-singleton-wa-6175/12898945"
  },
  {
    id: "qld-machans-beach-76-cinderella",
    title: "76 Cinderella Street",
    suburb: "Machans Beach",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1030,
    daysOnMarket: 6,
    price: null,
    landSize: 556,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Beachfront block", "Dual accommodation", "Pool"],
    status: "active",
    notes: "Absolute beach-front Machans Beach residence with ocean views, multiple accommodation zones and a 556sqm beach-front block. Price advertised as new to market.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12441494-1.jpg?version=NjDcV_sF50O99RI6o1a66ODZ2_oP7ZXx",
    listingUrl: "https://www.homely.com.au/homes/76-cinderella-street-machans-beach-qld-4878/12441494"
  },
  {
    id: "wa-waikiki-160a-warnbro-beach",
    title: "160A Warnbro Beach Road",
    suburb: "Waikiki",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    price: null,
    landSize: 632,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Ocean views", "Vacant land", "Perth access"],
    status: "active",
    notes: "Coastal land directly opposite the sand with ocean outlooks and residential zoning. Price advertised as expressions of interest.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12489313-1.jpg?version=iB5fcMxPl5fDHJ01UW_Rpz3a01XDBlXY",
    listingUrl: "https://www.homely.com.au/homes/160a-warnbro-beach-road-waikiki-wa-6169/12489313"
  },
  {
    id: "wa-waikiki-160b-warnbro-beach",
    title: "160B Warnbro Beach Road",
    suburb: "Waikiki",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    listedDate: "2025-09-24",
    price: null,
    landSize: 821,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Ocean views", "Vacant land", "Private driveway"],
    status: "active",
    notes: "Rear elevated coastal land parcel set back from Warnbro Beach Road, advertised as just metres from the shoreline with uninterrupted ocean and inland views. Price advertised as expression of interest.",
    image: "https://www.homely.com.au/img-variant/l-Rex-12489336-1.jpg",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-waikiki-204318584"
  },
  {
    id: "qld-palm-cove-1309-2-22-veivers",
    title: "1309/2-22 Veivers Road",
    suburb: "Palm Cove",
    state: "QLD",
    nearestMajorCity: "Brisbane",
    majorCityMinutes: 1080,
    daysOnMarket: 29,
    price: null,
    landSize: 152,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront resort", "Ocean views", "Holiday income", "Furnished"],
    status: "active",
    notes: "Drift complex beachfront apartment with ocean views, resort facilities and holiday-letting appeal. Price advertised as just listed/by Tropic.",
    image: "https://www.homely.com.au/img-variant/l-BoxDice-12879164-1.jpg?version=E3QL54V3zA.bXnAjYsunVgxXlnwMhn8S",
    listingUrl: "https://www.homely.com.au/homes/1309-2-22-veivers-road-palm-cove-qld-4879/12879164"
  },
  {
    id: "qld-main-beach-11c-3545-main-beach",
    title: "11C/3545 Main Beach Parade",
    suburb: "Main Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 5,
    daysOnMarket: 21,
    price: null,
    landSize: 122,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Boutique tower", "Major city"],
    status: "active",
    notes: "Beachside Tower apartment in a 33-residence absolute beachfront building with direct beach access and protected ocean views. Price advertised as auction.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-12974221-1.jpg?version=EfrtCJdpde.m_DcBn9AiNj2gQ2j70QRx",
    listingUrl: "https://www.homely.com.au/homes/11c-3545-main-beach-parade-main-beach-qld-421/12974221"
  },
  {
    id: "qld-main-beach-4-3565-main-beach",
    title: "4/3565 Main Beach Parade",
    suburb: "Main Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 5,
    daysOnMarket: 16,
    price: 8500000,
    landSize: 330,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Full-floor apartment", "Direct beach", "Major city"],
    status: "active",
    notes: "Full-floor M3565 residence in a seven-apartment absolute beachfront building with protected ocean frontage.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12881699-1.jpg?version=LZ9sfRF1Z61vQ1DhlTu47a0q2OQHOUTJ",
    listingUrl: "https://www.homely.com.au/homes/4-3565-main-beach-parade-main-beach-qld-4217/12881699"
  },
  {
    id: "qld-surfers-paradise-31501-36-old-burleigh",
    title: "31501/36 Old Burleigh Road",
    suburb: "Surfers Paradise",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 5,
    price: 1695000,
    landSize: 131,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront tower", "Ocean views", "Hotel facilities", "Major city"],
    status: "active",
    notes: "Jewel Private Residences apartment in an absolute beachfront tower with ocean views and resort facilities.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12814876-1.jpg?version=2si8lNyMYHmncffUnMWHjEjvS9qaXFv3",
    listingUrl: "https://www.homely.com.au/homes/31501-36-old-burleigh-road-surfers-paradise-q/12814876"
  },
  {
    id: "qld-bilinga-7-241-golden-four",
    title: "7/241 Golden Four Drive",
    suburb: "Bilinga",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 20,
    price: null,
    landSize: 1000,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Boutique block", "Direct sand access", "Ocean views"],
    status: "active",
    notes: "Top-floor beachfront apartment in a boutique block on a substantial coastal landholding with no roads to cross to the sand. Price advertised as expressions of interest.",
    image: "https://www.homely.com.au/img-variant/l-Eagle-12938749-1.jpg?version=Mr6.eHRT8GnRDTcNM9yK6.sPJdZ6CnO1",
    listingUrl: "https://www.homely.com.au/homes/7-241-golden-four-drive-bilinga-qld-4225/12938749"
  },
  {
    id: "qld-tugun-203-335-golden-four",
    title: "203/335-337 Golden Four Drive",
    suburb: "Tugun",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 15,
    listedDate: "2026-04-28",
    price: 1750000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Resort facilities", "Fully furnished"],
    status: "active",
    notes: "Second-floor absolute beachfront Tugun apartment with direct patrolled beach access and resort facilities. Price advertised as interest above.",
    image: "https://www.homely.com.au/img-variant/l-VaultRE-13082842-1.jpg?version=V77V4cTASjDMQqI_meRIFwRXkHSKcjje",
    listingUrl: "https://www.homely.com.au/homes/203-335-337-golden-four-drive-tugun-qld-4224/13082842"
  },
  {
    id: "qld-armstrong-beach-manon",
    title: "Manon Street",
    suburb: "Armstrong Beach",
    state: "QLD",
    nearestMajorCity: "Mackay",
    majorCityMinutes: 30,
    price: 890000,
    landSize: 115300,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Direct beach access", "Development approval", "Large landholding", "Subdivision potential"],
    status: "active",
    notes: "Beachside 11.53ha development site with direct beach access via Millsom Lane and existing 65-lot subdivision approvals.",
    image: "https://www.realestate.com.au/property-image/203935688/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-qld-armstrong%2Bbeach-203935688"
  },
  {
    id: "qld-bowen-21-2b-horseshoe-bay",
    title: "Apartment 21/2b Horseshoe Bay Road",
    suburb: "Bowen",
    state: "QLD",
    nearestMajorCity: "Townsville",
    majorCityMinutes: 130,
    listedDate: "2026-02-14",
    price: 1200000,
    landSize: 172,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct beach access", "Ocean views", "Resort facilities"],
    status: "active",
    notes: "Coral Cove second-level absolute beachfront apartment with ocean and island views, pool and restaurant facilities. Price advertised as $1.2m.",
    image: "https://www.realestate.com.au/property-image/150307984/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-bowen-150307984"
  },
  {
    id: "qld-bilinga-7-307-golden-four",
    title: "7/307 Golden Four Drive",
    suburb: "Bilinga",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 5,
    listedDate: "2026-03-31",
    price: 4560000,
    landSize: 267,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "New build", "Oceanfront terrace"],
    status: "active",
    notes: "Under-construction Blonde Bilinga residence positioned directly on the sand with no intervening roadway and resort-style amenities.",
    image: "https://www.realestate.com.au/property-image/150743468/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-qld-bilinga-150743468"
  },
  {
    id: "qld-bramston-beach-64-evans",
    title: "64 Evans Road",
    suburb: "Bramston Beach",
    state: "QLD",
    nearestMajorCity: "Cairns",
    majorCityMinutes: 65,
    price: 975000,
    landSize: 622,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Dual living", "Ocean views"],
    status: "active",
    notes: "Absolute beachfront Bramston Beach home where the backyard opens directly onto the sand. Price advertised as negotiable.",
    image: "https://www.homely.com.au/img-variant/l-MyDesktop-12515999-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/64-evans-road-bramston-beach-qld-4871/12515999"
  },
  {
    id: "qld-palm-beach-195-jefferson",
    title: "195 Jefferson Lane",
    suburb: "Palm Beach",
    state: "QLD",
    nearestMajorCity: "Gold Coast",
    majorCityMinutes: 20,
    price: 10000000,
    landSize: 412,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Redevelopment potential", "Ocean views"],
    status: "sold",
    notes: "Classic absolute beachfront Jefferson Lane home with private direct sand access and redevelopment potential. Realestate.com.au shows the same address sold on 11 Mar 2026.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12573565-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/195-jefferson-lane-palm-beach-qld-4221/12573565"
  },
  {
    id: "qld-moore-park-beach-66-sylvan",
    title: "66 Sylvan Drive",
    suburb: "Moore Park Beach",
    state: "QLD",
    nearestMajorCity: "Bundaberg",
    majorCityMinutes: 25,
    price: 1400000,
    landSize: 4332,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Direct beach access", "Large block", "Subdivision potential"],
    status: "active",
    notes: "Oceanfront 4,332sqm holding with direct access to Moore Park Beach and medium-density zoning. Price advertised as offers above.",
    image: "https://www.realestate.com.au/property-image/149740144/1",
    listingUrl: "https://www.realestate.com.au/property-house-qld-moore%2Bpark%2Bbeach-149740144"
  },
  {
    id: "sa-somerton-park-11a-esplanade",
    title: "11A Esplanade",
    suburb: "Somerton Park",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: null,
    price: 3450000,
    landSize: 535,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Direct beach access", "Ocean views", "Development potential"],
    status: "sold",
    notes: "Torrens titled 535sqm Somerton Park Esplanade holding with unobstructed Gulf views, direct beach access and approved plans available for up to three apartments. Marked sold after portal verification showed a 8 Dec 2025 sale.",
    image: "https://www.realestate.com.au/property-image/149270844/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-somerton%2Bpark-149270844"
  },
  {
    id: "sa-marino-3-westcliff",
    title: "3 Westcliff Court",
    suburb: "Marino",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    listedDate: null,
    price: null,
    landSize: 986,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute waterfront", "Ocean frontage", "Direct boardwalk access", "Vacant land"],
    status: "active",
    notes: "Vacant Marino waterfront allotment advertised with approximately 25.49m ocean frontage, no future build in front and direct access to the Coastal Boardwalk. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/204312556/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-marino-204312556"
  },
  {
    id: "sa-marino-5-way",
    title: "5 Way Place",
    suburb: "Marino",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 30,
    listedDate: null,
    price: 2000000,
    landSize: 936,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach-reserve backing", "Direct beach access", "Ocean views", "Large block"],
    status: "active",
    notes: "Large Marino holding backing directly onto Bandon Terrace Reserve, advertised with discreet beach access steps away and 180-degree ocean views. Price advertised as best offer over $2m.",
    image: "https://www.realestate.com.au/property-image/139610639/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-marino-139610639"
  },
  {
    id: "sa-tennyson-145a-esplanade",
    title: "145A Esplanade",
    suburb: "Tennyson",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: "2026-04-16",
    price: null,
    landSize: 594,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade frontage", "Direct beach access", "Sand dune frontage", "Uninterrupted coastal views"],
    status: "active",
    notes: "Elevated Tennyson Esplanade holding advertised with uninterrupted coastal views, quiet no-through road positioning and direct access to the beach and sand dunes. Price advertised as best offer by 5 May.",
    image: "https://www.realestate.com.au/property-image/150921548/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-tennyson-150921548"
  },
  {
    id: "sa-tennyson-2-155-seaview",
    title: "2/155 Seaview Road",
    suburb: "Tennyson",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 25,
    listedDate: null,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No road", "Direct living room to sand", "Ocean views"],
    status: "active",
    notes: "Detached Del Mare beachfront residence advertised with no road or traffic in front, uninterrupted ocean views and a direct living-room-to-sand connection. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/150217692/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-tennyson-150217692"
  },
  {
    id: "sa-maslin-beach-8-oleander",
    title: "8 Oleander Road",
    suburb: "Maslin Beach",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    listedDate: null,
    price: 2800000,
    landSize: 42800,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach reserve frontage", "No road", "Direct dune paths", "Panoramic sea views"],
    status: "active",
    notes: "Rare 4.28ha Maslin Beach acreage advertised as one of only seven large properties bordering Maslin Beach, with the property bordering a nature reserve and paths connecting to the dunes, shoreline and clifftop walks. Price advertised as $2.8M.",
    image: "https://www.realestate.com.au/property-image/149193244/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-maslin%2Bbeach-149193244"
  },
  {
    id: "sa-normanville-91-107-main-south",
    title: "Villa 91/107 Main South Road",
    suburb: "Normanville",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 70,
    listedDate: "2026-04-28",
    price: 679000,
    landSize: 94,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Gated beachfront community", "Direct boardwalk access", "Resort facilities", "Holiday rental appeal"],
    status: "active",
    notes: "South Shores villa in a gated beachfront community advertised with two pools, BBQ areas, playground and direct boardwalk access to Normanville beach. Price is the midpoint of the advertised range.",
    image: "https://www.realestate.com.au/property-image/151020936/1",
    listingUrl: "https://www.realestate.com.au/property-villa-sa-normanville-151020936"
  },
  {
    id: "sa-normanville-lot-301-williss",
    title: "Lot 301 Williss Drive",
    suburb: "Normanville",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 70,
    listedDate: null,
    price: 900000,
    landSize: 16600,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beach access right of way", "No-road dune track", "Tourist accommodation zoning", "Large coastal holding"],
    status: "active",
    notes: "Large tourist-accommodation-zoned Williss Drive allotment advertised with beach access via a right of way through the sand dunes and short walking access to Normanville beach. Price advertised as offers over $900,000.",
    image: "https://www.realestate.com.au/property-image/203533216/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-normanville-203533216"
  },
  {
    id: "sa-moonta-bay-2a-hughes",
    title: "2A Hughes Avenue",
    suburb: "Moonta Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 125,
    listedDate: null,
    price: null,
    landSize: 1530,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No road", "Direct beach access", "Vacant land"],
    status: "active",
    notes: "Active 1,530sqm beachfront land listing on the Moonta Bay Esplanade, advertised with uninterrupted Gulf views, direct beach access just metres away and the ability to wander straight onto the beach. Price advertised as contact agent/best offers.",
    image: "https://www.realestate.com.au/property-image/204379392/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-moonta%2Bbay-204379392"
  },
  {
    id: "sa-moonta-bay-lot-400-warburto",
    title: "Lot 400 Warburto Road",
    suburb: "Moonta Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 130,
    listedDate: null,
    price: 1250000,
    landSize: 189200,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Coastfront acreage", "No road", "780m frontage", "Conservation park"],
    status: "active",
    notes: "Active 18.92ha coastfront holding adjacent to Bird Islands Conservation Park, advertised with 780m direct frontage to the coast and a secluded coastal position. Price uses the midpoint of the syndicated $1M-$1.5M guide; REA advertises best offer sought.",
    image: "https://www.realestate.com.au/property-image/700337916/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-moonta%2Bbay-700337916"
  },
  {
    id: "sa-streaky-bay-17-flinders",
    title: "17 Flinders Drive",
    suburb: "Streaky Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 450,
    listedDate: null,
    price: null,
    landSize: 2218,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute shoreline", "No road", "Ocean views", "Indoor lap pool"],
    status: "active",
    notes: "Active absolute-shoreline Streaky Bay estate advertised as positioned on the shoreline with unmatched ocean vistas. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/147326692/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-streaky%2Bbay-147326692"
  },
  {
    id: "sa-streaky-bay-726-little-islands",
    title: "726 Little Islands Road",
    suburb: "Streaky Bay",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 450,
    listedDate: null,
    price: null,
    landSize: 113000,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct waterfrontage", "No road", "420m frontage", "Aquaculture zoning"],
    status: "active",
    notes: "Active 11.3ha coastal holding advertised with about 420m waterfront property, direct shoreline access and fishing/boat launch from the property. Price advertised as contact agent.",
    image: "https://www.realestate.com.au/property-image/148911120/1",
    listingUrl: "https://www.realestate.com.au/property-house-sa-streaky%2Bbay-148911120"
  },
  {
    id: "wa-esperance-21-the-esplanade",
    title: "21 The Esplanade",
    suburb: "Esperance",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 450,
    daysOnMarket: 22,
    price: 2700000,
    landSize: 1334,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Esplanade frontage", "Foreshore opposite", "Bay views", "Prestige home"],
    status: "active",
    notes: "Active front-row Esplanade residence opposite the Esperance foreshore precinct with sweeping bay and harbour views. Price advertised as offers above.",
    image: "https://www.realestate.com.au/property-image/149156424/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-esperance-149156424"
  },
  {
    id: "wa-hopetoun-41-whale-bay",
    title: "41 Whale Bay Drive",
    suburb: "Hopetoun",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 390,
    listedDate: "2026-05-06",
    price: 900000,
    landSize: 20200,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "No road", "Private trail", "5-acre retreat"],
    status: "active",
    notes: "Active 2.02ha coastal lifestyle property advertised with its own private walking trail leading directly to the beach. Price advertised as from $900,000.",
    image: "https://www.realestate.com.au/property-image/151120776/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-hopetoun-151120776"
  },
  {
    id: "wa-bunbury-7-15-upper-esplanade",
    title: "7/15 Upper Esplanade",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    daysOnMarket: null,
    price: 0,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Ocean views", "Front-row unit", "Rental income"],
    status: "active",
    notes: "Active Upper Esplanade unit with uninterrupted Indian Ocean views, beach about 100m away, and a current tenancy noted on the listing. Price advertised as express sale.",
    image: "https://www.homely.com.au/img-variant/l-AgentBox-12938172-1.jpg",
    listingUrl: "https://www.homely.com.au/homes/7-15-upper-esplanade-bunbury-wa-6230/12938172"
  },
  {
    id: "wa-bunbury-3-13-upper-esplanade",
    title: "3/13 Upper Esplanade",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    listedDate: "2026-04-13",
    price: 599000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beach opposite", "Uninterrupted ocean views", "Townhouse", "CBD walk"],
    status: "active",
    notes: "Active Upper Esplanade townhouse with uninterrupted Indian Ocean views from living areas and bedrooms; listing states Bunbury Back Beach is about 250m away. Price advertised as offers over.",
    image: "https://www.realestate.com.au/property-image/150860304/1",
    listingUrl: "https://www.realestate.com.au/property-townhouse-wa-bunbury-150860304"
  },
  {
    id: "wa-bunbury-19-11-19-casuarina",
    title: "19/11-19 Casuarina Drive",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    listedDate: "2026-04-14",
    price: 0,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Beachfront views", "Koombana Beach", "Resort amenities", "Balcony"],
    status: "active",
    notes: "Active Silo Apartments residence with balcony views over Koombana Beach and resort amenities. Price advertised as offers invited.",
    image: "https://www.realestate.com.au/property-image/150884644/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-bunbury-150884644"
  },
  {
    id: "wa-bunbury-28-11-casuarina",
    title: "28/11 Casuarina Drive",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    listedDate: "2026-02-24",
    price: 899000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Waterfront precinct", "Koombana Bay", "Water views", "Resort amenities"],
    status: "active",
    notes: "Active executive apartment positioned along the waterfront with sweeping water views and moments to Koombana Bay foreshore. Price advertised as from.",
    image: "https://www.realestate.com.au/property-image/150397232/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-bunbury-150397232"
  },
  {
    id: "wa-bunbury-35-11-19-casuarina",
    title: "35/11-19 Casuarina Drive",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    daysOnMarket: null,
    price: 1100000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Panoramic water views", "Koombana Bay", "Indian Ocean views", "Resort amenities"],
    status: "active",
    notes: "Active Silos Complex apartment with panoramic views from Koombana Bay to the Indian Ocean and The Inlet. Price advertised as $1,100,000.",
    image: "https://www.realestate.com.au/property-image/147267288/1",
    listingUrl: "https://www.domain.com.au/35-11-19-casuarina-drive-bunbury-wa-6230-2019798546"
  },
  {
    id: "wa-bunbury-1-31-holman",
    title: "1/31 Holman Street",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    listedDate: "2026-02-18",
    price: 2250000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute oceanfront", "Boutique apartment", "Marine-grade construction"],
    status: "active",
    notes: "Active boutique Holman Street apartment advertised as an absolute oceanfront lifestyle with C5M marine-grade construction. Price advertised as $2.25m.",
    image: "https://www.realestate.com.au/property-image/150343148/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-bunbury-150343148"
  },
  {
    id: "wa-bunbury-3-31-holman",
    title: "3/31 Holman Street",
    suburb: "Bunbury",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 115,
    daysOnMarket: null,
    price: 1595000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute oceanfront", "Boutique apartment", "Ocean views"],
    status: "active",
    notes: "Active one-bedroom apartment in the 31 Holman Street boutique development, advertised as delivering an absolute oceanfront lifestyle. Price advertised as $1.595m.",
    image: "https://www.domain.com.au/3-31-holman-street-bunbury-wa-6230-2020615632/image/0",
    listingUrl: "https://www.domain.com.au/3-31-holman-street-bunbury-wa-6230-2020615632"
  },
  {
    id: "wa-dalyellup-311-norton",
    title: "311 Norton Promenade",
    suburb: "Dalyellup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 120,
    listedDate: "2026-05-10",
    price: 1000000,
    landSize: 738,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row oceanfront", "Directly opposite Indian Ocean", "Protected ocean outlook", "Vacant land"],
    status: "active",
    notes: "Active front-row Dalyellup land advertised as an oceanfront opportunity directly opposite the Indian Ocean, with no future development obstructing the outlook. Price shown as offers over.",
    image: "https://www.realestate.com.au/property-image/204406404/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-dalyellup-204406404"
  },
  {
    id: "wa-dalyellup-317-norton",
    title: "317 Norton Promenade",
    suburb: "Dalyellup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 120,
    daysOnMarket: null,
    price: 1000000,
    landSize: 694,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Ocean frontage", "Direct beach access", "Uninterrupted ocean views", "Vacant land"],
    status: "active",
    notes: "Active elevated Dalyellup land advertised with ocean frontage, uninterrupted ground-level views and direct beach access. Price shown as offers over.",
    image: "https://www.realestate.com.au/property-image/204394932/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-dalyellup-204394932"
  },
  {
    id: "wa-mandurah-94-ormsby",
    title: "94 Ormsby Terrace",
    suburb: "Mandurah",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    daysOnMarket: null,
    price: 3000000,
    landSize: 1424,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute beachfront", "Development potential", "Marina walk"],
    status: "active",
    notes: "Active absolute beachfront Mandurah holding with no road between the property and ocean, a 1,424sqm R40 allotment and direct sand position. Price advertised as offers from.",
    image: "https://www.realestate.com.au/property-image/147272980/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-mandurah-147272980"
  },
  {
    id: "wa-mandurah-1c-aileen",
    title: "1C Aileen Street",
    suburb: "Mandurah",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    daysOnMarket: 3,
    price: 1850000,
    landSize: 209,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Beachfront residence", "Ocean views", "Town Beach"],
    status: "active",
    notes: "Active beachfront residence overlooking 1st Groyne, Town Beach and Silver Sands, advertised with uninterrupted panoramic ocean views. Price advertised as best offer over.",
    image: "https://www.realestate.com.au/property-image/149356464/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-mandurah-149356464"
  },
  {
    id: "wa-mandurah-605-16-dolphin",
    title: "605/16 Dolphin Drive",
    suburb: "Mandurah",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    daysOnMarket: null,
    price: 1190000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Beachfront penthouse", "Town Beach views", "Resort facilities"],
    status: "active",
    notes: "Active Seashells penthouse positioned closest to the water with north-facing Town Beach views and beachfront resort facilities. Price advertised as buyers over.",
    image: "https://www.realestate.com.au/property-image/148926296/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mandurah-148926296"
  },
  {
    id: "wa-mandurah-511-16-dolphin",
    title: "511/16 Dolphin Drive",
    suburb: "Mandurah",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 55,
    listedDate: "2026-05-01",
    price: 799000,
    landSize: 106,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["No road", "Absolute beachfront", "Corner apartment", "Ocean views"],
    status: "active",
    notes: "Active level-five Seashells corner apartment advertised as absolute beachfront at the closest end to the sand, with panoramic ocean views. Price advertised as buyers over.",
    image: "https://www.realestate.com.au/property-image/151075692/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mandurah-151075692"
  },
  {
    id: "wa-rockingham-1-127-rockingham-beach",
    title: "1/127 Rockingham Beach Road",
    suburb: "Rockingham",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    listedDate: "2026-05-07",
    price: null,
    landSize: 304,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront access", "Ocean views", "Front unit", "Lock-and-leave"],
    status: "active",
    notes: "Active front-position unit about 100m from Rockingham Beach with direct pathway access almost opposite, sweeping 180-degree ocean views and multiple alfresco areas. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/151137576/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-rockingham-151137576"
  },
  {
    id: "wa-rockingham-lot-2-115b-rockinghama-beach",
    title: "Lot 2 115B Rockinghama Beach Road",
    suburb: "Rockingham",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    listedDate: "2026-02-04",
    price: 900000,
    landSize: 222,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach opposite", "House and land", "Protected bay", "Foreshore walk"],
    status: "active",
    notes: "Active house-and-land listing advertised as an absolute beachfront opportunity, with the beach directly across the road and a short walk to Rockingham foreshore cafes and restaurants. Price advertised as from $900K.",
    image: "https://www.realestate.com.au/property-image/150188844/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-rockingham-150188844"
  },
  {
    id: "wa-rockingham-6-91-esplanade",
    title: "6/91 Esplanade",
    suburb: "Rockingham",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 45,
    daysOnMarket: null,
    price: 1500000,
    landSize: 215,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Esplanade front row", "Ocean and jetty views", "Palm Beach", "Boutique complex"],
    status: "active",
    notes: "Active Palm Beach apartment in The Jetty complex on the Esplanade with unencumbered Cockburn Sound and jetty views, opposite Palm Beach Jetty and close to foreshore cafes. Price guide advertised as $1,500,000.",
    image: "https://www.realestate.com.au/property-image/148782768/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-rockingham-148782768"
  },
  {
    id: "wa-scarborough-5-356-west-coast",
    title: "5/356 West Coast Highway",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    daysOnMarket: null,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beachfront position", "Uninterrupted ocean views", "Front-row coastal strip", "Multiple living zones"],
    status: "active",
    notes: "Active listing advertised as a stunning beachfront property with never-to-be-built-out Indian Ocean views from multiple levels. Price advertised as Contact Agent; individual land area is not clearly separated from the strata/group site.",
    image: "https://www.realestate.com.au/property-image/149552232/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-scarborough-149552232"
  },
  {
    id: "wa-scarborough-3a-297-west-coast",
    title: "3A/297 West Coast Highway",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    listedDate: "2026-04-07",
    price: 950000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "No roads to cross", "Direct beach access", "Redevelopment upside"],
    status: "active",
    notes: "Active unit listing describes absolute beachfront living with sand steps from the door, direct beach access and no roads to cross. Price advertised as from high $900,000s.",
    image: "https://www.realestate.com.au/property-image/150798572/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-scarborough-150798572"
  },
  {
    id: "wa-scarborough-47-171-west-coast",
    title: "47/171 West Coast Highway",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    listedDate: "2026-03-26",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Opposite Scarborough Beach", "Ocean view balcony", "Secure lock-and-leave"],
    status: "active",
    notes: "Active apartment listing advertised as a true beachfront lifestyle directly opposite Scarborough Beach and west of West Coast Highway, with ocean views from the balcony. Price advertised as Offers.",
    image: "https://www.realestate.com.au/property-image/150706856/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-scarborough-150706856"
  },
  {
    id: "wa-scarborough-25-287-west-coast",
    title: "25/287 West Coast Highway",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    daysOnMarket: null,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Private path to Brighton Beach", "Uninterrupted ocean views", "Penthouse apartment"],
    status: "active",
    notes: "Active penthouse apartment listing advertises uninterrupted Indian Ocean views and a complex that backs directly onto Brighton Beach with a private access path. Price advertised as All Offers / suits buyers from high $1,000,000s.",
    image: "https://www.realestate.com.au/property-image/149325000/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-scarborough-149325000"
  },
  {
    id: "wa-scarborough-unit-9-251-west-coast",
    title: "Unit 9/251 West Coast Highway",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    listedDate: "2026-03-22",
    price: 699000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachside of West Coast Highway", "Direct esplanade access", "Resort pool", "Ocean glimpse"],
    status: "active",
    notes: "Active West Beach Lagoon unit advertised on the beachside of West Coast Highway with resort facilities, direct access to the esplanade and a short walk to Scarborough Beach. Price advertised as from $699,000.",
    image: "https://www.realestate.com.au/property-image/150661984/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-scarborough-150661984"
  },
  {
    id: "wa-scarborough-the-dunes-12-reserve",
    title: "The Dunes, 12 Reserve Street",
    suburb: "Scarborough",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 20,
    daysOnMarket: null,
    price: 850000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Absolute beachfront", "Direct beach access", "New apartments", "Panoramic ocean views"],
    status: "active",
    notes: "Active under-construction beachfront apartment project on Scarborough's northern foreshore, advertised with direct beach access and residences from $850,000 to $13,450,000. Individual apartment land size is not published.",
    image: "https://www.realestate.com.au/project-image/600035795/1",
    listingUrl: "https://www.realestate.com.au/project/the-dunes-scarborough-600035795"
  },
  {
    id: "wa-mindarie-512-50-alexandria",
    title: "512/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    listedDate: "2026-04-23",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Front-row marina outlook", "80m to Claytons Beach", "Ocean views", "Beachfront resort amenities"],
    status: "active",
    notes: "Active unit listing in Claytons Beachfront Residences advertised with marina and ocean views, a front-row outlook over Mindarie Marina, beachfront terrace amenities, and 80m proximity to Claytons Beach. Price advertised as All Offers Presented.",
    image: "https://www.realestate.com.au/property-image/150986808/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-mindarie-150986808"
  },
  {
    id: "wa-mindarie-206-50-alexandria",
    title: "206/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    listedDate: "2026-04-14",
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Uninterrupted Indian Ocean views", "Coastal pocket", "Moments from beaches", "Resort facilities"],
    status: "active",
    notes: "Active unit listing in the Claytons development advertised with uninterrupted Indian Ocean views, resort-style amenities, and a premium coastal location moments from Mindarie Marina and beaches. Price advertised as high $1 millions.",
    image: "https://www.realestate.com.au/property-image/150874948/1",
    listingUrl: "https://www.realestate.com.au/property-unit-wa-mindarie-150874948"
  },
  {
    id: "wa-mindarie-102b-alexandria",
    title: "102B Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    daysOnMarket: null,
    price: null,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Ocean front luxury", "Uninterrupted ocean views", "Marina precinct", "Coastal vistas"],
    status: "active",
    notes: "Active house listing advertised as ocean front luxury in the Marina Precinct, with uninterrupted ocean views from every level and sweeping coastal vistas. Price advertised as All Offers Considered.",
    image: "https://www.realestate.com.au/property-image/150434344/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-mindarie-150434344"
  },
  {
    id: "wa-mindarie-lg11-50-alexandria",
    title: "LG11/50 Alexandria Drive",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    daysOnMarket: null,
    price: 2690000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Steps from shoreline", "Beachfront development", "Private garden and terrace"],
    status: "active",
    notes: "Active Claytons Mindarie Beachfront apartment listing advertised as a premium ground-floor residence with direct beach access, substantial private garden and terrace areas, and a position mere steps from the shoreline and Mindarie Marina.",
    image: "https://www.realestate.com.au/property-image/149894636/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mindarie-149894636"
  },
  {
    id: "wa-mindarie-110-50-alexandria",
    title: "110/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    daysOnMarket: null,
    price: 2255000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["98 steps to the sea", "Ocean and foreshore views", "Beachfront development", "Resort amenities"],
    status: "active",
    notes: "Active Claytons Mindarie Beachfront apartment listing advertised with panoramic Indian Ocean and Catalina Foreshore Reserve views from every room, resort amenities, and a location just 98 steps to the sea.",
    image: "https://www.realestate.com.au/property-image/143112068/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mindarie-143112068"
  },
  {
    id: "wa-mindarie-212-50-alexandria",
    title: "212/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    daysOnMarket: null,
    price: 1790000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["98 steps to the sea", "Ocean and marina views", "Beachfront sunset terrace", "Catalina Foreshore Reserve"],
    status: "active",
    notes: "Active direct listing page for this Claytons Mindarie Beachfront apartment advertises marina, ocean and Catalina Foreshore Reserve views, 98 steps to the sea, and resort amenities including a beachfront sunset terrace.",
    image: "https://www.realestate.com.au/property-image/143111424/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mindarie-143111424"
  },
  {
    id: "wa-mindarie-605-50-alexandria",
    title: "605/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    listedDate: "2026-03-13",
    price: 2900000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Penthouse apartment", "Indian Ocean views", "Mindarie Marina views", "Beachfront development"],
    status: "active",
    notes: "Active Claytons Mindarie Beachfront penthouse listing advertised with dual balconies capturing panoramic Indian Ocean and Mindarie Marina views from a top-level coastal residence.",
    image: "https://www.realestate.com.au/property-image/150591164/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mindarie-150591164"
  },
  {
    id: "wa-mindarie-lg04-50-alexandria",
    title: "LG04/50 Alexandria View",
    suburb: "Mindarie",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 35,
    daysOnMarket: null,
    price: 1890000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Direct beach access", "Ocean-view terrace", "Beachfront sunset terrace", "Ocean-facing amenities"],
    status: "active",
    notes: "Active Claytons Mindarie Beachfront apartment listing advertised as the final oceanview two-bedroom home with direct beach access, an ocean-view terrace, beachfront sunset terrace, and ocean-facing resort amenities.",
    image: "https://www.realestate.com.au/property-image/143109552/1",
    listingUrl: "https://www.realestate.com.au/property-apartment-wa-mindarie-143109552"
  },
  {
    id: "wa-jurien-bay-seashells-casuarina",
    title: "Seashells Jurien Bay Resort, 1 Casuarina Crescent",
    suburb: "Jurien Bay",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 150,
    daysOnMarket: null,
    price: 750000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Protected beachfront land", "Townhouse and villa project", "Ocean-view villas", "Resort facilities"],
    status: "active",
    notes: "Active realestate.com.au project listing for Seashells Jurien Bay Resort at 1 Casuarina Crescent, advertised as a coastal development set across protected beachfront land with townhouse and villa options from $750,000 to $1,950,000.",
    image: "https://www.realestate.com.au/project-image/600046732/1",
    listingUrl: "https://www.realestate.com.au/project/seashells-jurien-bay-resort-600046732"
  },
  {
    id: "wa-jurien-bay-21-u4-heaton",
    title: "21(U4) HEATON Street",
    suburb: "Jurien Bay",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 150,
    daysOnMarket: null,
    price: 1100000,
    landSize: null,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Opposite foreshore", "Full bay views", "Town centre frontage", "Resort-style pools"],
    status: "active",
    notes: "Active realestate.com.au townhouse listing advertised as opposite the park foreshore in Jurien Bay town centre, with ocean views from both levels and full bay views. Price advertised at $1,100,000.",
    image: "https://www.realestate.com.au/property-image/148888348/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-jurien%2Bbay-148888348"
  },
  {
    id: "wa-jurien-bay-99-beachridge",
    title: "99 Beachridge Drive",
    suburb: "Jurien Bay",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 150,
    listedDate: "2026-02-17",
    price: 885000,
    landSize: 718,
    beachfront: true,
    noRoadFrontage: false,
    directBeachAccess: true,
    factors: ["Beach path at doorstep", "Opposite beach pathways", "Turquoise Coast Walk", "Beachridge Estate"],
    status: "active",
    notes: "Active realestate.com.au listing in Beachridge Estate, advertised as directly opposite pathways leading to the beach and Turquoise Coast Walk. Price advertised from $885,000.",
    image: "https://www.realestate.com.au/property-image/150333136/1",
    listingUrl: "https://www.realestate.com.au/property-house-wa-jurien%2Bbay-150333136"
  },
  {
    id: "sa-dawesley-95-smyth",
    title: "95 Smyth Road",
    suburb: "Dawesley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    price: 2600000,
    landSize: 300000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills acreage", "Multi-dwelling income potential", "Equestrian infrastructure", "Dawesley Creek frontage"],
    status: "active",
    notes: "Active realestate.com.au Adelaide Hills acreage listing advertised as 30ha less than 5km from Nairne and 10 minutes to Mount Barker, with a main residence, two self-contained dwellings, Dawesley Creek frontage, 13 paddocks, sheds, stables, arena, mains water, solar, orchard and greenhouse. Price advertised at $2,600,000 - $2,800,000.",
    image: "https://www.realestate.com.au/property-image/150062592/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-dawesley-150062592",
    listingCategory: "large"
  },
  {
    id: "sa-kersbrook-118-powell",
    title: "118 Powell Road",
    suburb: "Kersbrook",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    listedDate: "2026-04-27",
    price: null,
    landSize: 211600,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills acreage", "Self-contained cottage", "Productive Rural Landscape zoning", "High-rainfall farm infrastructure"],
    status: "active",
    notes: "Active realestate.com.au Kersbrook lifestyle listing advertised as a 21.16ha Productive Rural Landscape holding, 37km from Adelaide CBD, with a separate self-contained cottage, 40kW solar, 3-phase power, extensive shedding, equine facilities, mains water, rainwater storage and high-rainfall productive soils. Campaign advertised as Best and Final Offers by 21st May.",
    image: "https://www.realestate.com.au/property-image/700405424/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-sa-kersbrook-700405424",
    listingCategory: "large"
  },
  {
    id: "sa-willow-creek-2602-range",
    title: "2602 Range Road",
    suburb: "Willow Creek",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 75,
    price: 3250000,
    landSize: 1829200,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Fleurieu Peninsula grazing", "Large-scale rural holding", "Spring-fed dams", "Potential title flexibility"],
    status: "active",
    notes: "Active realestate.com.au Fleurieu Peninsula rural listing for Kulaganga, advertised as 182.92ha of undulating grazing country with multiple spring-fed dams, a 137,000L concrete tank, steel and timber cattle yards, former shearing shed, fenced paddocks and productive livestock/fodder potential. Price guide advertised at $3.25m.",
    image: "https://www.realestate.com.au/property-image/700384640/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-willow%2Bcreek-700384640",
    listingCategory: "large"
  },
  {
    id: "sa-mount-torrens-lot-10-warmington",
    title: "Lot 10, Warmington Run",
    suburb: "Mount Torrens",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 55,
    price: null,
    landSize: 498300,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills rural land", "Panoramic Mount Lofty Ranges views", "Productive pasture", "Dams and winter creek"],
    status: "active",
    notes: "Active realestate.com.au Mount Torrens land listing advertised as 49.83ha with top-of-the-world Adelaide Hills views, mostly cleared rolling country, three reliable dams, a winter creek, productive pasture and a 7ha hay cut. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/204401880/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-sa-mount%2Btorrens-204401880",
    listingCategory: "large"
  },
  {
    id: "sa-torrens-vale-18-mount-robinson",
    title: "18 Mount Robinson Road",
    suburb: "Torrens Vale",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 75,
    price: 3000000,
    landSize: 694600,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Fleurieu Peninsula acreage", "Multiple guest dwellings", "Spring-fed dams and creeks", "Water licence"],
    status: "active",
    notes: "Active realestate.com.au Torrens Vale acreage listing advertised as Agnes-Clara, a 69.46ha Fleurieu Peninsula holding with a homestead, two self-contained units, shearers' quarters, 11 spring-fed dams, natural creeks, fertile soils and a 58ML water licence. Price advertised as $3 Million plus.",
    image: "https://www.realestate.com.au/property-image/147362884/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-torrens%2Bvale-147362884",
    listingCategory: "large"
  },
  {
    id: "sa-macclesfield-106b-cosgrove",
    title: "106B Cosgrove Road",
    suburb: "Macclesfield",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 45,
    listedDate: "2026-03-05",
    price: 2650000,
    landSize: 204800,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills acreage", "Equine facilities", "Large private dam", "Bore and rainwater storage"],
    status: "active",
    notes: "Active realestate.com.au Macclesfield acreage listing advertised as 20.48ha with dressage and show-jumping arenas, four-stable complex, tack room, extensive shedding, a large dam, 12kW solar, domestic bore and 290,000L rainwater storage. Price advertised at $2,650,000 - $2,950,000.",
    image: "https://www.realestate.com.au/property-image/150422768/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-macclesfield-150422768",
    listingCategory: "large"
  },
  {
    id: "sa-echunga-444-hawthorn",
    title: "444 Hawthorn Road",
    suburb: "Echunga",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 35,
    listedDate: "2026-04-08",
    price: 4650000,
    landSize: 324000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills prestige acreage", "Water licence and bore", "Equestrian infrastructure", "Near Hahndorf and Mount Barker"],
    status: "active",
    notes: "Active realestate.com.au Echunga acreage listing for Lakecrest, advertised as 32.4ha of country luxury with extensive garaging, 60m x 20m arena, paddocks, stables, 14ML water licence, bore, pool pavilion and access to Hahndorf, Echunga and Mount Barker. Domain also showed a price guide of $4,650,000 - $5,100,000.",
    image: "https://www.realestate.com.au/property-image/150821080/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-echunga-150821080",
    listingCategory: "large"
  },
  {
    id: "sa-meadows-30-brookman",
    title: "30 Brookman Road",
    suburb: "Meadows",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 50,
    price: 2900000,
    landSize: 218500,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Adelaide Hills acreage", "Established free-range egg business", "Water licence and bores", "Income-producing rural infrastructure"],
    status: "active",
    notes: "Active realestate.com.au Meadows acreage listing advertised as 21.85ha with a substantial rural residence, established free-range egg business producing about 14,000 eggs per week, 29kW solar, 18kW battery, three bores, 26.5ML water licence and 600sqm sheds. Price advertised as offers over $2.9m.",
    image: "https://www.realestate.com.au/property-image/150539224/1",
    listingUrl: "https://www.realestate.com.au/property-acreage%2Bsemi-rural-sa-meadows-150539224",
    listingCategory: "large"
  },
  {
    id: "sa-ebenezer-1404-research",
    title: "1404 Research Road",
    suburb: "Ebenezer",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 75,
    listedDate: "2026-03-03",
    price: null,
    landSize: 475000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Barossa vineyard", "River Murray water licence", "Dam storage", "Rental income"],
    status: "active",
    notes: "Active realestate.com.au Ebenezer viticulture listing advertised as 47.5ha across three titles, with about 40ha of vineyard, 39ML dam capacity, 30ML River Murray water licence, 10ML Barossa Infrastructure allocation, five frost fans and a rented three-bedroom home generating $420 per week. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700366960/1",
    listingUrl: "https://www.realestate.com.au/property-viticulture-sa-ebenezer-700366960",
    listingCategory: "large"
  },
  {
    id: "sa-greenock-87-sir-condor",
    title: "87 Sir Condor Laucke Way",
    suburb: "Greenock",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 70,
    price: null,
    landSize: 869000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Barossa wine estate", "Turnkey winery", "Cellar door", "Large vineyard landholding"],
    status: "active",
    notes: "Active realestate.com.au Greenock viticulture listing for Murray Street Vineyards, advertised as an 86.9ha Barossa estate with 56ha under production, a modern winery, cellar door, established brand and 14 grape varieties. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700365896/1",
    listingUrl: "https://www.realestate.com.au/property-viticulture-sa-greenock-700365896",
    listingCategory: "large"
  },
  {
    id: "sa-keyneton-66-mount-eagle",
    title: "66 Mount Eagle Road",
    suburb: "Keyneton",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 75,
    price: 2000000,
    landSize: 648000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Barossa lifestyle acreage", "Two titles", "B&B potential STCC", "Dams and creek frontage"],
    status: "active",
    notes: "Active realestate.com.au Keyneton lifestyle listing advertised as 64.8ha minutes to Angaston, with a stone cottage, 22 paddocks, interconnecting races, fenced creek, three dams, two separate titles and potential bed-and-breakfast use subject to consent. Price advertised at $2,000,000 - $2,100,000.",
    image: "https://www.realestate.com.au/property-image/700371124/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-sa-keyneton-700371124",
    listingCategory: "large"
  },
  {
    id: "sa-eden-valley-section-143-kempe",
    title: "Section 143 Kempe Road",
    suburb: "Eden Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: 1550000,
    landSize: 736500,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Eden Valley mixed farming", "Build site STCC", "Water licences", "Vineyard and arable land"],
    status: "active",
    notes: "Active realestate.com.au Eden Valley mixed-farming listing advertised as 73.65ha with about 62.6ha arable, 2.6ha Cabernet Sauvignon vineyard, 24ML catchment dam, 5ML turkey nest dam, trough pipeline, surface water, groundwater and watercourse licences, and an opportunity to build a home STCC. Price advertised as $1,550,000 - Price Reduced.",
    image: "https://www.realestate.com.au/property-image/700376424/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-sa-eden%2Bvalley-700376424",
    listingCategory: "large"
  },
  {
    id: "sa-eden-valley-lot-4-jutland",
    title: "Lot 4 Jutland Road",
    suburb: "Eden Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: 720000,
    landSize: 634300,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Rural-zoned acreage", "Elevated valley views", "Build potential STCC", "Off-grid lifestyle"],
    status: "active",
    notes: "Active realestate.com.au Eden Valley rural listing advertised as 63.43ha in the Barossa council area, zoned rural, with ridgeline building sites, valley views, good fencing, road access and proximity to Eden Valley township, Angaston, Tanunda and Nuriootpa. Price advertised at $720,000 - $750,000.",
    image: "https://www.realestate.com.au/property-image/700366508/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-eden%2Bvalley-700366508",
    listingCategory: "large"
  },
  {
    id: "sa-eden-valley-3-keyneton",
    title: "3 Keyneton Road",
    suburb: "Eden Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 80,
    price: 1500000,
    landSize: 591400,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Vineyard income potential", "Grazing land", "48.9ML water licence", "Bitumen road frontage"],
    status: "active",
    notes: "Active realestate.com.au Eden Valley lifestyle listing advertised as 59.14ha with 42ha suited to grazing or cropping, 17.14ha vineyard, potential grape supply agreement, 48.9ML water licence from dams and bore, SA Water connection, 360sqm implement shed, 108kW solar and build potential STCC. Price advertised as offers considered above $1,500,000.",
    image: "https://www.realestate.com.au/property-image/700364776/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-sa-eden%2Bvalley-700364776",
    listingCategory: "large"
  },
  {
    id: "sa-lyndoch-296-rosedale",
    title: "296 Rosedale Scenic Road",
    suburb: "Lyndoch",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 60,
    price: 1995000,
    landSize: 255600,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Barossa vineyard", "Major winery grape contracts", "BIL water entitlements", "Sea-to-hills views"],
    status: "active",
    notes: "Active realestate.com.au Lyndoch lifestyle listing advertised as 25.56ha with sweeping 300-degree views, 15.51ha of vineyard contracted to a major Barossa Valley winery, BIL water entitlements, dam, bore and long-running organic vineyard practices. Price advertised as offers over $1,995,000 - Price Reduced.",
    image: "https://www.realestate.com.au/property-image/700337652/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-sa-lyndoch-700337652",
    listingCategory: "large"
  },
  {
    id: "sa-eden-valley-lot-103-jutland",
    title: "Lot 103 Jutland Road",
    suburb: "Eden Valley",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 85,
    listedDate: "2025-08-19",
    price: 595000,
    landSize: 323800,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Off-grid acreage", "360-degree views", "Dark Sky Reserve", "Lifestyle build potential"],
    status: "active",
    notes: "Active realestate.com.au Eden Valley lifestyle listing advertised as about 32.38ha / 80 acres on rolling hills, with uninterrupted 360-degree views, borrowed gorge outlooks, Dark Sky Reserve setting and off-grid lifestyle appeal. Price advertised at $595,000 - $645,000.",
    image: "https://www.realestate.com.au/property-image/700370664/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-sa-eden%2Bvalley-700370664",
    listingCategory: "large"
  },
  {
    id: "sa-clare-659a-spring-gully",
    title: "659A Spring Gully Road",
    suburb: "Clare",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 115,
    price: null,
    landSize: 267700,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Clare Valley vineyard", "Water licence", "Frost-free elevation", "Premium grape varieties"],
    status: "active",
    notes: "Active realestate.com.au Clare viticulture listing advertised as 26.77ha with 19.46ha of vineyard planted to Shiraz, Cabernet Sauvignon, Riesling, Sangiovese, Malbec and Merlot, plus a 23,455kL water licence and elevated frost-free position. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700282168/1",
    listingUrl: "https://www.realestate.com.au/property-viticulture-sa-clare-700282168",
    listingCategory: "large"
  },
  {
    id: "sa-mintaro-59-smith",
    title: "59 Smith Road",
    suburb: "Mintaro",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 105,
    price: 2990000,
    landSize: 295000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Historic Clare Valley estate", "Grazing and cropping land", "Accommodation upside", "Near Mintaro and Clare"],
    status: "active",
    notes: "Active realestate.com.au Mintaro listing for Ashmore Homestead, advertised as a restored circa-1880 estate on 29.5ha / 73 acres of grazing and cropping land, with independent studio rooms, pool, gardens, entertaining spaces and potential Airbnb use. Price advertised at $2,990,000.",
    image: "https://www.realestate.com.au/property-image/700339492/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-mintaro-700339492",
    listingCategory: "large"
  },
  {
    id: "sa-whites-flat-251-reservoir",
    title: "251 Reservoir Drive",
    suburb: "Whites Flat",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 430,
    listedDate: "2025-11-24",
    price: 2450000,
    landSize: 2418800,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Lower Eyre Peninsula mixed farming", "Reliable rainfall zone", "Spring and dam water", "Port Lincoln access"],
    status: "active",
    notes: "Active realestate.com.au mixed-farming listing for Ashton View, advertised as 241.88ha about 30km north of Port Lincoln and 35km south of Cummins, with about 161.8ha cleared and arable, grazing/native vegetation balance, dams in most paddocks, spring-fed water, sheds, shearing shed, cattle yards and 485mm average rainfall. Price advertised at $2,400,000 - $2,500,000.",
    image: "https://www.realestate.com.au/property-image/700387288/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-sa-whites%2Bflat-700387288",
    listingCategory: "large"
  },
  {
    id: "sa-poochera-lot-29-eyre-highway",
    title: "Lot 29 Eyre Highway Road",
    suburb: "Poochera",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 575,
    listedDate: "2026-02-20",
    price: 520000,
    landSize: 6481000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Western Eyre Peninsula mixed farming", "Eyre Highway frontage", "382ha arable", "Water meters and sheep yards"],
    status: "active",
    notes: "Active realestate.com.au mixed-farming listing advertised as 648.1ha minutes north of Poochera on the Eyre Highway, with about 382ha cleared and arable for cropping, one large paddock, two water meters, sheep yards, medic-based pastures and wheat/barley plus sheep-grazing suitability. Price advertised at $520,000.",
    image: "https://www.realestate.com.au/property-image/700397132/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-sa-poochera-700397132",
    listingCategory: "large"
  },
  {
    id: "sa-port-neill-section-82-chilmans",
    title: "Section 82 Chilmans Road",
    suburb: "Port Neill",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 455,
    price: 925500,
    landSize: 2962000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Eastern Eyre Peninsula farming", "Near Port Neill coast", "249.7ha arable", "Mains water connected"],
    status: "active",
    notes: "Active realestate.com.au listing for North Ridge, advertised as 296.2ha minutes from Port Neill on the east coast of the Eyre Peninsula, with about 249.7ha arable cropping area, barley and grazing history, three paddocks, mains water to troughs and future land-development potential through accessible clay depth. Price advertised at $925,500.",
    image: "https://www.realestate.com.au/property-image/700256172/1",
    listingUrl: "https://www.realestate.com.au/property-other-sa-port%2Bneill-700256172",
    listingCategory: "large"
  },
  {
    id: "sa-cleve-1446-carpa",
    title: "1446 Carpa Road",
    suburb: "Cleve",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 455,
    price: null,
    landSize: 4411000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Central Eyre Peninsula cropping", "Near Cleve and Arno Bay Road", "Mains water meters", "Shedding and power"],
    status: "active",
    notes: "Active realestate.com.au mixed-farming listing for Leonards Carpa, advertised as 441.1ha about 6.5km south of Cleve and 9.5km east on Carpa Road, suited to mixed farming or continuous cropping, with sandy-loam soils, two mains water meters, troughs, mains electrical meter, workshop and shearing shed. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700282068/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-sa-cleve-700282068",
    listingCategory: "large"
  },
  {
    id: "sa-kelly-lot-50-old-cleve",
    title: "Lot 50 Old Cleve Rd Kelly",
    suburb: "Kelly",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 445,
    daysOnMarket: 3,
    price: 1450000,
    landSize: 6643000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Kimba/Cleve cropping and grazing", "630.69ha arable", "Soil amelioration", "Mains water and grain storage"],
    status: "active",
    notes: "Active realestate.com.au mixed-farming listing advertised as 664.3ha at Lot 50 Old Cleve Road, Kelly, with about 630.69ha arable, extensive delving/ripping/clay-spreading/smudging, eight paddocks, mains water plus two dams, implement shed, fertiliser shed and grain silos. Price advertised at $1,450,000.",
    image: "https://www.realestate.com.au/property-image/700335108/1",
    listingUrl: "https://www.realestate.com.au/700335108",
    listingCategory: "large"
  },
  {
    id: "sa-murlong-2351-murdinga-murlong",
    title: "2351 Murdinga-Murlong Rd",
    suburb: "Murlong",
    state: "SA",
    nearestMajorCity: "Adelaide",
    majorCityMinutes: 500,
    price: null,
    landSize: 9995700,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Eyre Peninsula scale", "Mixed farming income", "Mains water to paddocks", "Residence and shearing infrastructure"],
    status: "active",
    notes: "Active realestate.com.au mixed-farming listing for Chayilmen, advertised as 999.57ha about 24km southeast of Lock and 28km west of Rudall, with a cropping rotation and sheep-breeding operation, renewed fencing, SA Water mains to 11 paddocks, delving works, a three-bedroom residence, machinery shed, implement shed, super shed, shearing shed and sheep yards. Campaign advertised as For Sale by Expressions of Interest.",
    image: "https://www.realestate.com.au/property-image/700275072/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-sa-murlong-700275072",
    listingCategory: "large"
  },
  {
    id: "wa-cowaramup-227-fifty-one",
    title: "227 Fifty One Road",
    suburb: "Cowaramup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 180,
    price: 3800000,
    landSize: 255500,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Margaret River wine region", "Certified organic vineyard", "Approved brewery plan", "Dual dwellings and income"],
    status: "active",
    notes: "Active realestate.com.au Cowaramup lifestyle listing advertised as 25.55ha between Cowaramup and the coast, with two dwellings, leased cottage income, creek line, three dams, established 7.68ha certified organic vineyard, winery shed and approved brewery development plan. Price advertised as offers from $3.8 million.",
    image: "https://www.realestate.com.au/property-image/700358140/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-wa-cowaramup-700358140",
    listingCategory: "large"
  },
  {
    id: "wa-southampton-1192-balingup-nannup",
    title: "1192 Balingup-Nannup Road",
    suburb: "Southampton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 210,
    price: 1650000,
    landSize: 213000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Blackwood River Valley", "Four dwellings", "Short-stay or retreat income", "Balingup Brook frontage"],
    status: "active",
    notes: "Active realestate.com.au Southampton lifestyle listing advertised as a 21.3ha rural retreat with a main residence plus three chalets, solar, rainwater tanks, machinery shed, fertile soil and Balingup Brook through the property. Positioned as a multi-generational or turnkey short-stay business opportunity. Price advertised from $1.65 million.",
    image: "https://www.realestate.com.au/property-image/700367944/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-wa-southampton-700367944",
    listingCategory: "large"
  },
  {
    id: "wa-wilga-4254-donnybrook-boyup",
    title: "4254 Donnybrook-Boyup Brook Road",
    suburb: "Wilga",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 210,
    listedDate: "2026-05-07",
    price: 2400000,
    landSize: 808900,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Regenerative mixed farm", "Farm-stay tourism potential", "Multiple accommodation units", "Three dams and soak"],
    status: "active",
    notes: "Active realestate.com.au Wilga mixed-farming listing advertised as an 80.89ha forest-surrounded holding with regenerative farming credentials, multiple accommodation units, granny flat, separate self-contained unit, shearing shed, silos, cattle yards, three dams and off-grid energy infrastructure. Price advertised as offers from $2.4 million.",
    image: "https://www.realestate.com.au/property-image/700398960/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-wa-wilga-700398960",
    listingCategory: "large"
  },
  {
    id: "wa-northcliffe-701-double-bridge",
    title: "701 Double Bridge Road",
    suburb: "Northcliffe",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 280,
    price: 1250000,
    landSize: 429000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Borders national park", "Off-grid lifestyle", "Second house site", "Creeks, dam and water storage"],
    status: "active",
    notes: "Active realestate.com.au Northcliffe lifestyle listing advertised as 42.9ha bordered on three sides by D'Entrecasteaux National Park, with private park access, off-grid solar, more than 120,000L water storage, dam, four winter creeks, powered sheds and a second house site. Price advertised from $1.25 million.",
    image: "https://www.realestate.com.au/property-image/700370624/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-wa-northcliffe-700370624",
    listingCategory: "large"
  },
  {
    id: "wa-roelands-lot-25-coalfields",
    title: "Lot 25 Coalfields Highway",
    suburb: "Roelands",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 120,
    price: 2800000,
    landSize: 1978000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Near Bunbury", "Large grazing scale", "Reliable water", "Coalfields Highway access"],
    status: "active",
    notes: "Active realestate.com.au Roelands livestock listing advertised as a 197.8ha productive grazing property near Bunbury and Collie, with fertile soils, five small dams, one sizable dam, semi-permanent creek water, solar-powered troughs and maintained fencing. Price advertised as offers over $2.8 million.",
    image: "https://www.realestate.com.au/property-image/700381768/1",
    listingUrl: "https://www.realestate.com.au/property-livestock-wa-roelands-700381768",
    listingCategory: "large"
  },
  {
    id: "wa-cowaramup-8772-bussell",
    title: "8772 Bussell Highway",
    suburb: "Cowaramup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 180,
    price: null,
    landSize: 340100,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Bussell Highway exposure", "Established vineyard", "Cellar door and events venue", "Tourism accommodation"],
    status: "active",
    notes: "Active realestate.com.au Cowaramup viticulture listing for Adinfern Estate, advertised as 34.01ha in the Margaret River wine region with 16.9ha under vine, homestead, cellar door and function centre, two chalets, sheds and strong wine tourism exposure. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700374176/1",
    listingUrl: "https://www.realestate.com.au/property-viticulture-wa-cowaramup-700374176",
    listingCategory: "large"
  },
  {
    id: "wa-kaloorup-1086-kaloorup",
    title: "1086 Kaloorup Road",
    suburb: "Kaloorup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 160,
    price: null,
    landSize: 441800,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Blue-chip agricultural region", "Commercial avocado orchard", "Spring-fed dam", "Export-approved infrastructure"],
    status: "active",
    notes: "Active realestate.com.au Kaloorup rural listing advertised as a 44.18ha turn-key avocado operation with about 20ha planted, a 300m spring-fed dam, MAIT irrigation, backup pumps, 45m x 10.5m shed, loading zone and cattle yards. Price advertised as offers.",
    image: "https://www.realestate.com.au/property-image/700394936/1",
    listingUrl: "https://www.realestate.com.au/property-other-wa-kaloorup-700394936",
    listingCategory: "large"
  },
  {
    id: "wa-rosa-brook-2210-jindong-treeton",
    title: "2210 Jindong-Treeton Road",
    suburb: "Rosa Brook",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 190,
    price: null,
    landSize: 300100,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Margaret River access", "Self-contained chalet income", "Extensive shed infrastructure", "Dam and paddocks"],
    status: "active",
    notes: "Active realestate.com.au Rosa Brook lifestyle listing advertised as 30.01ha about 16 minutes from Margaret River and 30 minutes from Busselton, with a 2023 self-contained chalet, pool and outdoor entertaining, 19m x 10m insulated shed, 3-phase power, seven paddocks and a dam. Price advertised as Make an Offer.",
    image: "https://www.realestate.com.au/property-image/700389872/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-wa-rosa%2Bbrook-700389872",
    listingCategory: "large"
  },
  {
    id: "wa-boyup-brook-dp426021-bridgetown-boyup",
    title: "1 on DP 426021, Bridgetown - Boyup Brook Road",
    suburb: "Boyup Brook",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 200,
    price: 2495000,
    landSize: 980000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Near Boyup Brook township", "Productive mixed farming", "Strong water security", "Cropping and grazing upside"],
    status: "active",
    notes: "Active realestate.com.au Boyup Brook mixed-farming listing advertised as a 98ha holding close to Boyup Brook, with rolling pasture, elevated ridgelines, four natural soaks, four established dams, about 99 acres under crop, free-draining soils and quality fencing. Price advertised at $2,495,000.",
    image: "https://www.realestate.com.au/property-image/700393016/1",
    listingUrl: "https://www.realestate.com.au/property-mixed%2Bfarming-wa-boyup%2Bbrook-700393016",
    listingCategory: "large"
  },
  {
    id: "wa-nannup-7953-brockman",
    title: "7953 Brockman Highway",
    suburb: "Nannup",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 200,
    price: null,
    landSize: 522000,
    beachfront: false,
    noRoadFrontage: false,
    directBeachAccess: false,
    factors: ["Nannup lifestyle acreage", "Separate parcel with subdivision history", "Dual furnished dwellings", "Commercial-grade shed"],
    status: "active",
    notes: "Active realestate.com.au Nannup lifestyle listing advertised as a 52.2ha holding with a separate 10-acre parcel carrying historical subdivision approval, dual furnished dwellings and a high-clearance commercial-grade shed for machinery, enterprise or studio use. Price advertised as Contact Agent.",
    image: "https://www.realestate.com.au/property-image/700396804/1",
    listingUrl: "https://www.realestate.com.au/property-lifestyle-wa-nannup-700396804",
    listingCategory: "large"
  },
  {
    id: "wa-geraldton-11-forrest",
    title: "11 Forrest Street",
    suburb: "Geraldton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    daysOnMarket: null,
    price: 895000,
    landSize: 200,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront strip", "Town beach outlook", "Foreshore and marina proximity", "Rear parking access"],
    status: "active",
    notes: "Active realestate.com.au Geraldton land listing on Forrest Street, advertised as one of only three vacant lots on an impressive beachfront strip with city and ocean views over town beach and the foreshore/marina nearby. Price advertised at $895,000.",
    image: "https://www.realestate.com.au/property-image/204417548/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-geraldton-204417548",
    investmentStar: true,
    investmentFiveYearGrowth: "107.2%",
    investmentReason: "PerthNow/Cotality reporting cited Geraldton dwelling values up 107.2% over five years, which annualises to about 15.7%, supported by strong recent Geraldton market momentum."
  },
  {
    id: "wa-geraldton-21-forrest",
    title: "21 Forrest Street",
    suburb: "Geraldton",
    state: "WA",
    nearestMajorCity: "Perth",
    majorCityMinutes: 260,
    daysOnMarket: null,
    price: 899000,
    landSize: 213,
    beachfront: true,
    noRoadFrontage: true,
    directBeachAccess: true,
    factors: ["Beachfront CBD block", "Beach 50m", "Secure ocean views", "Geraldton foreshore position"],
    status: "active",
    notes: "Active realestate.com.au Geraldton land listing advertised as a magnificent beachfront block in the Forrest Street CBD strip, steps from the beach, cafes and Geraldton foreshore, with secure ocean views and the beach about 50m away. Price advertised as offers from $899,000.",
    image: "https://www.realestate.com.au/property-image/203793792/1",
    listingUrl: "https://www.realestate.com.au/property-residential%2Bland-wa-geraldton-203793792",
    investmentStar: true,
    investmentFiveYearGrowth: "107.2%",
    investmentReason: "PerthNow/Cotality reporting cited Geraldton dwelling values up 107.2% over five years, which annualises to about 15.7%, supported by strong recent Geraldton market momentum."
  }
];

const databaseUpdatedAt = "2026-05-11 11:12";

sampleProperties.forEach((property, index) => {
  property.displayId = property.displayId || String(index + 1).padStart(5, "0");
});

const state = {
  properties: [...sampleProperties],
  selectedFactors: new Set(),
  favourites: new Set(JSON.parse(localStorage.getItem("favouriteProperties") || localStorage.getItem("shortlistedProperties") || "[]")),
  viewed: new Set(JSON.parse(localStorage.getItem("viewedProperties") || "[]")),
  known: new Set(JSON.parse(localStorage.getItem("knownProperties") || "[]")),
  view: "all",
  unviewedViewIds: null,
  searchMode: localStorage.getItem("propertySearchMode") || "beach",
  theme: localStorage.getItem("propertyTheme") || (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

const els = {
  idColumnFilter: document.querySelector("#idColumnFilter"),
  stateColumnFilter: document.querySelector("#stateColumnFilter"),
  addressColumnFilter: document.querySelector("#addressColumnFilter"),
  priceColumnFilter: document.querySelector("#priceColumnFilter"),
  sqmColumnFilter: document.querySelector("#sqmColumnFilter"),
  cityColumnFilter: document.querySelector("#cityColumnFilter"),
  landColumnFilter: document.querySelector("#landColumnFilter"),
  refreshLabel: document.querySelector("#refreshLabel"),
  refreshTimer: document.querySelector("#refreshTimer"),
  reloadButton: document.querySelector("#reloadButton"),
  saSearchButton: document.querySelector("#saSearchButton"),
  themeToggle: document.querySelector("#themeToggle"),
  beachModeButton: document.querySelector("#beachModeButton"),
  largeModeButton: document.querySelector("#largeModeButton"),
  allViewButton: document.querySelector("#allViewButton"),
  favouritesViewButton: document.querySelector("#favouritesViewButton"),
  starPropertiesButton: document.querySelector("#starPropertiesButton"),
  unviewedViewButton: document.querySelector("#unviewedViewButton"),
  favouriteCount: document.querySelector("#favouriteCount"),
  starCount: document.querySelector("#starCount"),
  cards: document.querySelector("#cards"),
  comparisonTableBody: document.querySelector("#comparisonTableBody"),
  emptyState: document.querySelector("#emptyState"),
  countStat: document.querySelector("#countStat"),
  unviewedStat: document.querySelector("#unviewedStat"),
  noRoadStat: document.querySelector("#noRoadStat"),
  cityStat: document.querySelector("#cityStat"),
  updatedState: document.querySelector("#updatedState"),
  exportButton: document.querySelector("#exportButton"),
  exportTableButton: document.querySelector("#exportTableButton"),
  exportTablePanelButton: document.querySelector("#exportTablePanelButton"),
  tableTopButton: document.querySelector("#tableTopButton"),
  resetFiltersButton: document.querySelector("#resetFiltersButton"),
  comparisonTableWrap: document.querySelector("#comparisonTableWrap"),
  template: document.querySelector("#cardTemplate")
};

const aud = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0
});

const number = new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 });
const refreshIntervalSeconds = 5 * 60;
let refreshRemainingSeconds = refreshIntervalSeconds;
let manualRefreshActive = false;
let serverRefreshRunning = false;
let nextServerRefreshAt = null;
let lastServerRefreshState = null;
let lastServerRefreshUpdatedAt = null;
let lastPolledSearchMode = state.searchMode;
let investmentStarIdCache = null;
let pendingRenderFrame = null;
const investmentAnnualGrowthTarget = 15;
const investmentFiveYearGrowthTarget = 101;
const investmentMinimumShare = 0.05;
const largePropertyMinSqm = 20 * 10000;
const largePropertyMaxSqm = 2000 * 10000;

function renderRefreshTimer() {
  if (manualRefreshActive) return;
  if (serverRefreshRunning) {
    els.refreshTimer.textContent = "running";
    return;
  }
  if (nextServerRefreshAt) {
    const remaining = Math.max(0, Math.ceil((new Date(nextServerRefreshAt).getTime() - Date.now()) / 1000));
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    els.refreshTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return;
  }
  const minutes = Math.floor(refreshRemainingSeconds / 60);
  const seconds = refreshRemainingSeconds % 60;
  els.refreshTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startRefreshTimer() {
  renderRefreshTimer();
  window.setInterval(() => {
    refreshRemainingSeconds = refreshRemainingSeconds > 0 ? refreshRemainingSeconds - 1 : refreshIntervalSeconds;
    renderRefreshTimer();
  }, 1000);
}

async function pollServerRefreshStatus() {
  if (window.location.protocol === "file:") return;

  try {
    const statusPath = state.searchMode === "large" ? "/large-refresh-status" : "/refresh-status";
    if (lastPolledSearchMode !== state.searchMode) {
      serverRefreshRunning = false;
      lastServerRefreshState = null;
      lastServerRefreshUpdatedAt = null;
      nextServerRefreshAt = null;
      lastPolledSearchMode = state.searchMode;
    }
    const status = await fetch(statusPath).then(response => response.json());
    const previousState = lastServerRefreshState;
    const previousUpdatedAt = lastServerRefreshUpdatedAt;
    lastServerRefreshState = status.state;
    lastServerRefreshUpdatedAt = status.updatedAt;
    nextServerRefreshAt = status.nextAutoRefreshAt || nextServerRefreshAt;

    if (status.state === "running") {
      serverRefreshRunning = true;
      if (!manualRefreshActive) {
        els.reloadButton.disabled = true;
        els.saSearchButton.disabled = state.searchMode === "beach";
        els.reloadButton.textContent = status.mode === "auto" ? "Auto searching..." : "Searching...";
        els.saSearchButton.textContent = state.searchMode === "large" ? "Large mode" : "SA search";
        els.refreshLabel.textContent = status.message || "Searching...";
        renderRefreshTimer();
      }
      return;
    }

    if (serverRefreshRunning && previousState === "running" && status.state === "complete" && status.updatedAt !== previousUpdatedAt && !manualRefreshActive) {
      window.location.reload();
      return;
    }

    serverRefreshRunning = false;
    if (!manualRefreshActive) {
      els.reloadButton.disabled = false;
      els.saSearchButton.disabled = state.searchMode === "large";
      els.reloadButton.textContent = "Search now";
      els.saSearchButton.textContent = state.searchMode === "large" ? "Large mode" : "SA search";
      els.refreshLabel.textContent = status.state === "error" ? "Last search failed" : status.nextSearchArea ? `Next: ${status.nextSearchArea}` : "Next auto search";
      renderRefreshTimer();
    }
  } catch {
    if (!manualRefreshActive) {
      serverRefreshRunning = false;
      els.refreshLabel.textContent = "Server status unavailable";
      els.refreshTimer.textContent = "retry";
    }
  }
}

async function triggerManualRefresh(scope = "national") {
  if (window.location.protocol === "file:") {
    alert("Manual search needs the server launcher. Open Start Property X Factors Server.cmd, then press Search now.");
    return;
  }

  manualRefreshActive = true;
  els.reloadButton.disabled = true;
  els.saSearchButton.disabled = true;
  els.reloadButton.textContent = "Searching...";
  els.saSearchButton.textContent = scope === "sa" ? "SA searching..." : state.searchMode === "large" ? "Large mode" : "SA search";
  els.refreshLabel.textContent = state.searchMode === "large" ? "Large property search" : scope === "sa" ? "SA coast search" : "Manual search";
  let elapsedSeconds = 0;
  els.refreshTimer.textContent = "00:00";

  try {
    const refreshPath = state.searchMode === "large" ? "/refresh-large-listings" : scope === "sa" ? "/refresh-listings-sa" : "/refresh-listings";
    const statusPath = state.searchMode === "large" ? "/large-refresh-status" : "/refresh-status";
    const start = await fetch(refreshPath, { method: "POST" });
    if (!start.ok) throw new Error("Refresh could not start.");

    const poll = window.setInterval(async () => {
      try {
        const status = await fetch(statusPath).then(response => response.json());
        elapsedSeconds += 5;
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        els.refreshLabel.textContent = status.message || "Searching...";
        els.refreshTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        if (status.state === "complete") {
          window.clearInterval(poll);
          window.location.reload();
        }
        if (status.state === "error") {
          window.clearInterval(poll);
          els.reloadButton.disabled = false;
          els.saSearchButton.disabled = false;
          manualRefreshActive = false;
          els.reloadButton.textContent = "Search now";
          els.saSearchButton.textContent = state.searchMode === "large" ? "Large mode" : "SA search";
          els.refreshLabel.textContent = "Search failed";
          els.refreshTimer.textContent = "check log";
        }
      } catch {
        window.clearInterval(poll);
        els.reloadButton.disabled = false;
        els.saSearchButton.disabled = false;
        manualRefreshActive = false;
        els.reloadButton.textContent = "Search now";
        els.saSearchButton.textContent = state.searchMode === "large" ? "Large mode" : "SA search";
        els.refreshLabel.textContent = "Search status lost";
        els.refreshTimer.textContent = "retry";
      }
    }, 5000);
  } catch {
    els.reloadButton.disabled = false;
    els.saSearchButton.disabled = false;
    manualRefreshActive = false;
    els.reloadButton.textContent = "Search now";
    els.saSearchButton.textContent = state.searchMode === "large" ? "Large mode" : "SA search";
    els.refreshLabel.textContent = "Server required";
    els.refreshTimer.textContent = "open server";
  }
}

function compactAud(value) {
  if (!value) return "TBA";
  if (value >= 1000000) {
    return `$${(value / 1000000).toLocaleString("en-AU", { maximumFractionDigits: 2 }).replace(/\.0$/, "")}m`;
  }
  if (value >= 1000) {
    return `$${Math.round(value / 1000).toLocaleString("en-AU")}k`;
  }
  return aud.format(value);
}

function displayLandSize(value) {
  const size = Number(value || 0);
  if (!size) return "TBA";
  if (size >= 10000) {
    return `${(size / 10000).toLocaleString("en-AU", { maximumFractionDigits: 2 })} ha`;
  }
  return `${number.format(size)} sqm`;
}

function pricePerSqm(property) {
  return property.price && property.landSize ? Math.round(property.price / property.landSize) : 0;
}

function daysOnMarket(property) {
  const explicitDays = Number(property.daysOnMarket || property.days_on_market || 0);
  if (Number.isFinite(explicitDays) && explicitDays > 0) return Math.round(explicitDays);

  const listedDate = property.listedDate || property.listed_date || property.dateListed || property.date_listed;
  if (!listedDate) return 0;

  const listed = new Date(listedDate);
  if (Number.isNaN(listed.getTime())) return 0;
  const elapsed = Date.now() - listed.getTime();
  return elapsed > 0 ? Math.max(1, Math.floor(elapsed / 86400000)) : 0;
}

function propertyStatus(property) {
  return String(property.status || "active").toLowerCase();
}

function isActiveProperty(property) {
  return !["sold", "under_offer", "under contract", "under_contract", "withdrawn", "off_market", "leased"].includes(propertyStatus(property));
}

function isLargeProperty(property) {
  const land = Number(property.landSize || 0);
  return land >= largePropertyMinSqm && land <= largePropertyMaxSqm;
}

function matchesSearchMode(property) {
  if (state.searchMode === "large") return isLargeProperty(property);
  return property.beachfront || property.directBeachAccess || property.noRoadFrontage || /beach|coast|ocean|esplanade|waterfront|foreshore/i.test(`${property.title || ""} ${property.notes || ""} ${(property.factors || []).join(" ")}`);
}

function majorCityMinutes(property) {
  const minutes = Number(property.majorCityMinutes || property.major_city_minutes || property.cityMinutes || property.city_minutes || 0);
  return Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
}

function isWithinMajorCityHour(property) {
  const minutes = majorCityMinutes(property);
  return minutes > 0 && minutes <= 60;
}

function majorCityBonus(property) {
  const minutes = majorCityMinutes(property);
  if (!minutes || minutes > 60) return 0;
  if (minutes <= 20) return 14;
  if (minutes <= 40) return 11;
  return 8;
}

function setMetric(node, selector, value, muted = false) {
  const element = node.querySelector(selector);
  element.textContent = value;
  element.classList.toggle("muted-value", muted);
}

function saveViewedState() {
  localStorage.setItem("viewedProperties", JSON.stringify([...state.viewed]));
  localStorage.setItem("knownProperties", JSON.stringify([...state.known]));
}

function initialiseViewedState() {
  const activeIds = state.properties.filter(isActiveProperty).map(property => property.id);
  if (!state.known.size) {
    activeIds.forEach(id => {
      state.known.add(id);
      state.viewed.add(id);
    });
    saveViewedState();
    return;
  }

  activeIds.forEach(id => state.known.add(id));
  saveViewedState();
}

function isUnviewedProperty(property) {
  return isActiveProperty(property) && state.known.has(property.id) && !state.viewed.has(property.id);
}

function isInUnviewedReviewQueue(property) {
  return state.unviewedViewIds ? state.unviewedViewIds.has(property.id) : isUnviewedProperty(property);
}

function numericField(property, fields) {
  for (const field of fields) {
    const value = Number(property[field]);
    if (Number.isFinite(value) && value > 0) return value;
  }
  return 0;
}

function investmentAnnualGrowth(property) {
  return numericField(property, [
    "investmentAnnualGrowth",
    "investmentAnnualGrowth5Yr",
    "annualGrowth5Yr",
    "fiveYearAnnualGrowth",
    "salesAnnualGrowth5Yr",
    "suburbAnnualGrowth5Yr"
  ]);
}

function investmentTotalGrowth(property) {
  return numericField(property, [
    "investmentFiveYearGrowth",
    "fiveYearGrowth",
    "salesGrowth5Yr",
    "suburbGrowth5Yr"
  ]);
}

function hasInvestmentGrowthEvidence(property) {
  if (!isActiveProperty(property)) return false;
  if (asBoolean(property.investmentStar ?? property.starProperty ?? property.starredInvestment)) return true;
  const annualGrowth = investmentAnnualGrowth(property);
  if (annualGrowth >= investmentAnnualGrowthTarget) return true;
  const totalGrowth = investmentTotalGrowth(property);
  return totalGrowth >= investmentFiveYearGrowthTarget;
}

function investmentCandidateScore(property, baseline = median(state.properties.map(pricePerSqm))) {
  if (!isActiveProperty(property)) return -Infinity;
  const factors = (property.factors || []).join(" ").toLowerCase();
  const notes = String(property.notes || "").toLowerCase();
  const text = `${factors} ${notes}`;
  const sqm = pricePerSqm(property);
  const minutes = majorCityMinutes(property);
  let score = scoreProperty(property, baseline);

  if (hasInvestmentGrowthEvidence(property)) score += 100;
  if (property.price && property.price <= 1000000) score += 14;
  else if (property.price && property.price <= 1500000) score += 9;
  else if (property.price && property.price <= 2500000) score += 4;
  if (sqm && sqm <= 1000) score += 14;
  else if (sqm && sqm <= 2000) score += 9;
  else if (sqm && sqm <= 3000) score += 5;
  if (property.landSize >= 1000) score += 8;
  if (minutes && minutes <= 60) score += 10;
  else if (minutes && minutes <= 120) score += 5;
  if (/development|subdivision|redevelopment|zoning|approved|vacant land|landholding|corner|dual/.test(text)) score += 14;
  if (/holiday rental|airbnb|income|tourism|holding income|rental/.test(text)) score += 8;
  if (/renovation|refurbished|upside|new build|fresh listing/.test(text)) score += 6;
  if (property.noRoadFrontage) score += 6;
  if (property.directBeachAccess) score += 5;

  return score;
}

function investmentStarIds() {
  if (investmentStarIdCache?.mode === state.searchMode) return investmentStarIdCache.ids;

  const active = state.properties.filter(property => isActiveProperty(property) && matchesSearchMode(property));
  const minimumStarCount = Math.ceil(active.length * investmentMinimumShare);
  const evidenceIds = new Set(active.filter(hasInvestmentGrowthEvidence).map(property => property.id));
  const baseline = median(state.properties.map(pricePerSqm));
  const fallback = active
    .filter(property => !evidenceIds.has(property.id))
    .sort((a, b) => investmentCandidateScore(b, baseline) - investmentCandidateScore(a, baseline))
    .slice(0, Math.max(0, minimumStarCount - evidenceIds.size));

  fallback.forEach(property => evidenceIds.add(property.id));
  investmentStarIdCache = { mode: state.searchMode, ids: evidenceIds };
  return investmentStarIdCache.ids;
}

function isStarInvestmentProperty(property) {
  return investmentStarIds().has(property.id);
}

function scheduleRender() {
  if (pendingRenderFrame) window.cancelAnimationFrame(pendingRenderFrame);
  pendingRenderFrame = window.requestAnimationFrame(() => {
    pendingRenderFrame = null;
    render();
  });
}

function investmentStarTitle(property) {
  const annualGrowth = investmentAnnualGrowth(property);
  const totalGrowth = investmentTotalGrowth(property);
  if (annualGrowth >= investmentAnnualGrowthTarget) return `Investment watch: ${annualGrowth}% annualised 5-year sales growth recorded`;
  if (totalGrowth >= investmentFiveYearGrowthTarget) return `Investment watch: ${totalGrowth}% total 5-year sales growth recorded`;
  return property.investmentReason || property.investmentNotes || "Investment watch: top 5% candidate by local score";
}

function markPropertyViewed(propertyId, rerender = true) {
  if (!propertyId || state.viewed.has(propertyId)) return;
  state.viewed.add(propertyId);
  state.known.add(propertyId);
  saveViewedState();
  if (rerender) render();
}

function renderComparisonTable(properties) {
  els.comparisonTableBody.innerHTML = "";
  const rows = document.createDocumentFragment();
  const starIds = investmentStarIds();

  properties.forEach(property => {
    const sqm = pricePerSqm(property);
    const minutesToMajorCity = majorCityMinutes(property);
    const row = document.createElement("tr");
    const values = getTableValues(property, sqm, minutesToMajorCity);
    const unviewed = isUnviewedProperty(property);
    const investmentStar = starIds.has(property.id);
    row.tabIndex = 0;
    row.dataset.propertyId = property.id;
    row.classList.toggle("unviewed-row", unviewed);
    row.classList.toggle("investment-star-row", investmentStar);

    values.forEach((value, index) => {
      const cell = document.createElement("td");
      if (index === 0 && (unviewed || investmentStar)) {
        if (investmentStar) {
          const investmentStarIcon = document.createElement("span");
          investmentStarIcon.className = "investment-star";
          investmentStarIcon.textContent = "\u2605";
          investmentStarIcon.title = investmentStarTitle(property);
          cell.append(investmentStarIcon, document.createTextNode(" "));
        }
        const star = document.createElement("span");
        if (unviewed) {
          star.className = "unviewed-star";
          star.textContent = "\u2605";
          star.title = "Not viewed yet";
          cell.append(star, document.createTextNode(" "));
        }
        cell.append(document.createTextNode(value));
      } else {
        cell.textContent = value;
      }
      row.append(cell);
    });

    rows.append(row);
  });

  els.comparisonTableBody.append(rows);
}

function focusPropertyCard(propertyId) {
  if (state.view === "unviewed") {
    markPropertyViewed(propertyId, false);
    render();
    const card = els.cards.querySelector(`[data-id="${CSS.escape(propertyId)}"]`);
    if (!card) return;
    els.cards.querySelectorAll(".property-card.focused").forEach(item => item.classList.remove("focused"));
    card.classList.add("focused");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => card.classList.remove("focused"), 2200);
    return;
  }

  markPropertyViewed(propertyId, false);
  render();
  const card = els.cards.querySelector(`[data-id="${CSS.escape(propertyId)}"]`);
  if (!card) return;

  els.cards.querySelectorAll(".property-card.focused").forEach(item => item.classList.remove("focused"));
  card.classList.add("focused");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => card.classList.remove("focused"), 2200);
}

function getTableValues(property, sqm, minutesToMajorCity) {
  return [
    property.displayId || "TBA",
    property.state || "TBA",
    property.title || "TBA",
    property.price ? aud.format(property.price) : "TBA",
    sqm ? `${aud.format(sqm)}/sqm` : "TBA",
    minutesToMajorCity && property.nearestMajorCity ? `${minutesToMajorCity} min to ${property.nearestMajorCity}` : "TBA",
    displayLandSize(property.landSize)
  ];
}

function median(values) {
  const sorted = values.filter(Boolean).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
}

function scoreProperty(property, baseline) {
  let score = 0;
  if (property.beachfront) score += 32;
  if (property.noRoadFrontage) score += 30;
  if (property.directBeachAccess) score += 16;
  if (property.landSize >= 1000) score += 10;
  if (pricePerSqm(property) && pricePerSqm(property) <= baseline) score += 8;
  score += majorCityBonus(property);
  score += Math.min((property.factors || []).length * 2, 12);
  return Math.min(score, 100);
}

function normaliseProperty(row, index) {
  const factors = Array.isArray(row.factors)
    ? row.factors
    : String(row.factors || "")
        .split(/[|;,]/)
        .map(item => item.trim())
        .filter(Boolean);

  return {
    id: row.id || `import-${Date.now()}-${index}`,
    title: row.title || row.address || "Untitled property",
    suburb: row.suburb || row.location || "",
    state: String(row.state || "").toUpperCase(),
    nearestMajorCity: row.nearestMajorCity || row.nearest_major_city || row.majorCity || row.major_city || row.nearestCity || row.nearest_city || row.city || "",
    majorCityMinutes: Number(row.majorCityMinutes || row.major_city_minutes || row.cityMinutes || row.city_minutes || row.minutesToCity || row.minutes_to_city || 0),
    daysOnMarket: Number(row.daysOnMarket || row.days_on_market || row.daysListed || row.days_listed || 0),
    listedDate: row.listedDate || row.listed_date || row.dateListed || row.date_listed || "",
    price: Number(row.price || 0),
    landSize: Number(row.landSize || row.land_size || row.blockSize || row.block_size || 0),
    beachfront: asBoolean(row.beachfront),
    noRoadFrontage: asBoolean(row.noRoadFrontage ?? row.no_road_frontage ?? row.noRoad),
    directBeachAccess: asBoolean(row.directBeachAccess ?? row.direct_beach_access),
    factors,
    investmentStar: asBoolean(row.investmentStar ?? row.starProperty ?? row.starredInvestment),
    investmentAnnualGrowth5Yr: Number(row.investmentAnnualGrowth5Yr || row.annualGrowth5Yr || row.fiveYearAnnualGrowth || row.salesAnnualGrowth5Yr || row.suburbAnnualGrowth5Yr || 0),
    investmentFiveYearGrowth: Number(row.investmentFiveYearGrowth || row.fiveYearGrowth || row.salesGrowth5Yr || row.suburbGrowth5Yr || 0),
    investmentReason: row.investmentReason || row.investmentNotes || "",
    status: propertyStatus(row),
    notes: row.notes || "",
    image: row.image || row.imageUrl || row.image_url || "",
    listingUrl: row.listingUrl || row.listing_url || row.exactUrl || row.exact_url || "",
    searchUrl: row.searchUrl || row.search_url || "",
    source: row.source || row.url || ""
  };
}

function getListingLink(property) {
  const candidate = property.listingUrl || property.source || property.url || "";
  if (!candidate) return "";
  return looksLikeSearchUrl(candidate) ? "" : candidate;
}

function getSearchLink(property) {
  return property.searchUrl || (looksLikeSearchUrl(property.source) ? property.source : "");
}

function looksLikeSearchUrl(url) {
  const text = String(url || "").toLowerCase();
  return text.includes("/buy/") ||
    text.includes("/sale/") ||
    text.includes("/sold/") ||
    text.includes("/rent/") ||
    text.includes("list-") ||
    text.endsWith("/sale/") ||
    text.endsWith("/buy/");
}

function asBoolean(value) {
  if (typeof value === "boolean") return value;
  return ["true", "yes", "y", "1"].includes(String(value || "").trim().toLowerCase());
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (current || row.length) rows.push([...row, current]);
      row = [];
      current = "";
      if (char === "\r" && next === "\n") i += 1;
    } else {
      current += char;
    }
  }

  if (current || row.length) rows.push([...row, current]);
  const headers = rows.shift()?.map(header => header.trim()) || [];
  return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
}

function populateStaticControls() {
  const states = [...new Set(state.properties.map(property => property.state).filter(Boolean))].sort();
  els.stateColumnFilter.innerHTML = '<option value="all">All</option>' +
    states.map(item => `<option value="${item}">${item}</option>`).join("");
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  els.themeToggle.textContent = state.theme === "dark" ? "Light mode" : "Dark mode";
  els.themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

function applySearchModeUi() {
  const largeMode = state.searchMode === "large";
  els.beachModeButton.classList.toggle("active", !largeMode);
  els.largeModeButton.classList.toggle("active", largeMode);
  document.body.dataset.searchMode = state.searchMode;
  els.saSearchButton.disabled = largeMode || manualRefreshActive;
  els.saSearchButton.textContent = largeMode ? "Large mode" : "SA search";
  els.reloadButton.title = largeMode ? "Search for new large land listings now" : "Search for new beach listings now";
}

function filterProperties() {
  const addressQuery = els.addressColumnFilter.value.trim().toLowerCase();
  const selectedState = els.stateColumnFilter.value;
  const priceFilter = els.priceColumnFilter.value;
  const sqmFilter = els.sqmColumnFilter.value;
  const cityFilter = els.cityColumnFilter.value;
  const landFilter = els.landColumnFilter.value;

  return state.properties.filter(property => {
    const text = [property.title, property.suburb, property.state, property.notes, property.nearestMajorCity, ...(property.factors || [])]
      .join(" ")
      .toLowerCase();
    const minutes = majorCityMinutes(property);
    const sqm = pricePerSqm(property);
    const land = Number(property.landSize || 0);
    const price = Number(property.price || 0);
    return isActiveProperty(property) &&
      matchesSearchMode(property) &&
      (!addressQuery || text.includes(addressQuery)) &&
      (selectedState === "all" || property.state === selectedState) &&
      matchesPriceFilter(price, priceFilter) &&
      matchesSqmFilter(sqm, sqmFilter) &&
      matchesCityFilter(minutes, cityFilter) &&
      matchesLandFilter(land, landFilter) &&
      (
        state.view === "all" ||
        (state.view === "favourites" && state.favourites.has(property.id)) ||
        (state.view === "unviewed" && isInUnviewedReviewQueue(property)) ||
        (state.view === "stars" && isStarInvestmentProperty(property))
      );
  });
}

function matchesPriceFilter(price, filter) {
  if (filter === "known") return price > 0;
  if (filter === "unknown") return !price;
  if (filter === "under1m") return price > 0 && price < 1000000;
  if (filter === "1m2m") return price >= 1000000 && price <= 2000000;
  if (filter === "2m5m") return price >= 2000000 && price <= 5000000;
  if (filter === "over5m") return price > 5000000;
  return true;
}

function matchesSqmFilter(sqm, filter) {
  if (filter === "known" || filter === "asc" || filter === "desc") return sqm > 0;
  if (filter === "under500") return sqm > 0 && sqm < 500;
  if (filter === "under1000") return sqm > 0 && sqm < 1000;
  if (filter === "under2000") return sqm > 0 && sqm < 2000;
  return true;
}

function matchesCityFilter(minutes, filter) {
  if (filter === "asc" || filter === "desc") return minutes > 0;
  if (filter === "under60") return minutes > 0 && minutes <= 60;
  if (filter === "under120") return minutes > 0 && minutes <= 120;
  if (filter === "over120") return minutes > 120;
  return true;
}

function matchesLandFilter(land, filter) {
  if (filter === "known" || filter === "asc" || filter === "desc") return land > 0;
  if (filter === "over1000") return land >= 1000;
  if (filter === "over1ha") return land >= 10000;
  return true;
}

function sortProperties(properties) {
  const baseline = median(state.properties.map(pricePerSqm));
  const priceFilter = els.priceColumnFilter.value;
  const sqmFilter = els.sqmColumnFilter.value;
  const cityFilter = els.cityColumnFilter.value;
  const landFilter = els.landColumnFilter.value;
  const sorted = [...properties].sort((a, b) => {
    if (priceFilter === "asc") return (a.price || Infinity) - (b.price || Infinity);
    if (priceFilter === "desc") return (b.price || 0) - (a.price || 0);
    if (sqmFilter === "asc" || sqmFilter.startsWith("under")) return (pricePerSqm(a) || Infinity) - (pricePerSqm(b) || Infinity);
    if (sqmFilter === "desc") return pricePerSqm(b) - pricePerSqm(a);
    if (cityFilter === "asc" || cityFilter.startsWith("under")) return (majorCityMinutes(a) || Infinity) - (majorCityMinutes(b) || Infinity);
    if (cityFilter === "desc" || cityFilter === "over120") return (majorCityMinutes(b) || 0) - (majorCityMinutes(a) || 0);
    if (landFilter === "asc") return (a.landSize || Infinity) - (b.landSize || Infinity);
    if (landFilter === "desc" || landFilter.startsWith("over")) return (b.landSize || 0) - (a.landSize || 0);
    return scoreProperty(b, baseline) - scoreProperty(a, baseline);
  });
  return sorted;
}

function render() {
  const baseline = median(state.properties.map(pricePerSqm));
  const filtered = sortProperties(filterProperties());
  const activeFavouriteCount = state.properties.filter(property => isActiveProperty(property) && matchesSearchMode(property) && state.favourites.has(property.id)).length;
  const starIds = investmentStarIds();
  const activeStarCount = starIds.size;
  const cards = document.createDocumentFragment();
  els.cards.innerHTML = "";
  els.emptyState.hidden = filtered.length > 0;
  els.emptyState.textContent = state.view === "favourites"
    ? "No favourited properties match these filters yet."
    : state.view === "unviewed"
      ? "No new unviewed properties match these filters yet."
      : state.view === "stars"
        ? "No AI Picks match these filters yet."
      : "No matching properties yet.";
  els.allViewButton.classList.toggle("active", state.view === "all");
  els.favouritesViewButton.classList.toggle("active", state.view === "favourites");
  els.starPropertiesButton.classList.toggle("active", state.view === "stars");
  els.unviewedViewButton.classList.toggle("active", state.view === "unviewed");
  applySearchModeUi();
  els.favouriteCount.textContent = number.format(activeFavouriteCount);
  els.starCount.textContent = number.format(activeStarCount);
  els.countStat.textContent = number.format(filtered.length);
  const unviewedCount = filterPropertiesForView("all").filter(isUnviewedProperty).length;
  els.unviewedStat.textContent = `${number.format(unviewedCount)} new unviewed`;
  els.noRoadStat.textContent = number.format(state.searchMode === "large" ? filtered.filter(isLargeProperty).length : filtered.filter(property => property.noRoadFrontage).length);
  els.noRoadStat.nextElementSibling.textContent = state.searchMode === "large" ? "20ha to 2000ha" : "no road frontage";
  els.cityStat.textContent = number.format(filtered.filter(isWithinMajorCityHour).length);
  els.updatedState.textContent = `Database last updated ${databaseUpdatedAt}. Monitor runs every 5 minutes when the automation runner is active.`;
  renderComparisonTable(filtered);

  filtered.forEach(property => {
    const node = els.template.content.cloneNode(true);
    const card = node.querySelector(".property-card");
    const media = node.querySelector(".media");
    const img = node.querySelector("img");
    const shortlist = node.querySelector(".shortlist");
    const source = node.querySelector(".source");
    const signals = node.querySelector(".signals");
    const sqm = pricePerSqm(property);
    const score = scoreProperty(property, baseline);
    const minutesToMajorCity = majorCityMinutes(property);
    const marketDays = daysOnMarket(property);
    const unviewed = isUnviewedProperty(property);
    const investmentStar = starIds.has(property.id);

    card.dataset.id = property.id;
    card.classList.toggle("unviewed-card", unviewed);
    card.classList.toggle("investment-star-card", investmentStar);
    card.addEventListener("click", event => {
      if (event.target.closest("button, a")) return;
      markPropertyViewed(property.id);
    });
    img.alt = property.title;
    if (property.image) {
      img.src = property.image;
      img.loading = "lazy";
      img.decoding = "async";
    } else {
      img.hidden = true;
      media.classList.add("no-image");
    }
    node.querySelector(".badge").textContent = state.searchMode === "large"
      ? "Large landholding"
      : property.noRoadFrontage ? "Beachfront, no road in front" : property.beachfront ? "Beachfront" : "Coastal comparator";
    node.querySelector("h2").textContent = property.title;
    node.querySelector(".location").textContent = [property.suburb, property.state].filter(Boolean).join(", ");
    setMetric(node, ".price", compactAud(property.price), !property.price);
    setMetric(node, ".land", property.landSize ? `${number.format(property.landSize)} m2` : "TBA", !property.landSize);
    setMetric(node, ".sqm", sqm ? `${compactAud(sqm)}/m2` : "TBA", !sqm);
    setMetric(
      node,
      ".city",
      minutesToMajorCity && property.nearestMajorCity ? `${minutesToMajorCity} min to ${property.nearestMajorCity}` : "TBA",
      !minutesToMajorCity || !property.nearestMajorCity
    );
    setMetric(node, ".market", marketDays ? `${number.format(marketDays)} days` : "TBA", !marketDays);
    node.querySelector(".notes").textContent = property.notes;
    node.querySelector(".score").textContent = `${score}/100 X score`;
    const listingLink = getListingLink(property);
    const searchLink = getSearchLink(property);
    source.href = listingLink || searchLink || "#";
    source.textContent = listingLink ? "Open exact listing" : searchLink ? "Search area" : "No listing link";
    source.classList.toggle("muted", !listingLink);
    source.toggleAttribute("hidden", !listingLink && !searchLink);
    source.addEventListener("click", () => markPropertyViewed(property.id));

    const tags = [
      investmentStar ? "\u2605 AI Pick" : null,
      state.searchMode === "large" ? "Large property" : null,
      unviewed ? "★ New" : null,
      property.beachfront ? "Beachfront" : "Not beachfront",
      property.noRoadFrontage ? "No road in front" : "Road/reserve check",
      property.directBeachAccess ? "Direct beach access" : null,
      isWithinMajorCityHour(property) ? `Major city +${majorCityBonus(property)}` : null,
      sqm && sqm <= baseline ? "Lower $/m2" : null,
      ...(property.factors || [])
    ].filter(Boolean);

    tags.forEach(tag => {
      const item = document.createElement("span");
      item.className = "signal";
      if (tag === "Road/reserve check") item.classList.add("warning");
      if (tag === "Not beachfront") item.classList.add("alert");
      item.textContent = tag;
      signals.append(item);
    });

    shortlist.classList.toggle("saved", state.favourites.has(property.id));
    shortlist.textContent = state.favourites.has(property.id) ? "Favourited" : "Favourite";
    shortlist.addEventListener("click", () => {
      if (state.favourites.has(property.id)) state.favourites.delete(property.id);
      else state.favourites.add(property.id);
      localStorage.setItem("favouriteProperties", JSON.stringify([...state.favourites]));
      localStorage.setItem("shortlistedProperties", JSON.stringify([...state.favourites]));
      render();
    });

    cards.append(node);
  });

  els.cards.append(cards);
}

function exportFavourites() {
  const favourites = state.properties
    .filter(property => state.favourites.has(property.id))
    .map(property => ({
      ...property,
      pricePerSqm: pricePerSqm(property),
      daysOnMarket: daysOnMarket(property),
      nearestMajorCity: property.nearestMajorCity || "",
      majorCityMinutes: majorCityMinutes(property),
      listingUrl: getListingLink(property),
      searchUrl: getSearchLink(property)
    }));
  const blob = new Blob([JSON.stringify(favourites, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "property-x-factors-favourites.json";
  link.click();
  URL.revokeObjectURL(url);
}

function exportCurrentTable() {
  const rows = sortProperties(filterProperties());
  const headers = ["ID", "State", "Address", "Price", "$ per sqm", "Mins to City", "Land Size Sqm"];
  const csvRows = [
    headers,
    ...rows.map(property => {
      const sqm = pricePerSqm(property);
      const minutesToMajorCity = majorCityMinutes(property);
      return getTableValues(property, sqm, minutesToMajorCity);
    })
  ];
  const csv = csvRows.map(row => row.map(escapeCsvValue).join(",")).join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `property-x-factors-table-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function resetFilters() {
  state.view = "all";
  state.unviewedViewIds = null;
  els.idColumnFilter.value = "all";
  els.stateColumnFilter.value = "all";
  els.addressColumnFilter.value = "";
  els.priceColumnFilter.value = "all";
  els.sqmColumnFilter.value = "all";
  els.cityColumnFilter.value = "all";
  els.landColumnFilter.value = "all";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  els.comparisonTableWrap.scrollTo({ top: 0, behavior: "smooth" });
}

function setSearchMode(mode) {
  if (state.searchMode === mode) return;
  state.searchMode = mode;
  localStorage.setItem("propertySearchMode", mode);
  state.view = "all";
  state.unviewedViewIds = null;
  resetFilters();
  pollServerRefreshStatus();
}

function filterPropertiesForView(view) {
  const previousView = state.view;
  state.view = view;
  const properties = filterProperties();
  state.view = previousView;
  return properties;
}

function escapeCsvValue(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function assignDisplayIds() {
  state.properties.forEach((property, index) => {
    property.displayId = property.displayId || String(index + 1).padStart(5, "0");
  });
}

[
  els.idColumnFilter,
  els.stateColumnFilter,
  els.addressColumnFilter,
  els.priceColumnFilter,
  els.sqmColumnFilter,
  els.cityColumnFilter,
  els.landColumnFilter
].forEach(control => control.addEventListener("input", scheduleRender));

els.allViewButton.addEventListener("click", () => {
  state.view = "all";
  state.unviewedViewIds = null;
  render();
});

els.favouritesViewButton.addEventListener("click", () => {
  state.view = "favourites";
  state.unviewedViewIds = null;
  render();
});

els.starPropertiesButton.addEventListener("click", () => {
  state.view = "stars";
  state.unviewedViewIds = null;
  render();
});

els.unviewedViewButton.addEventListener("click", () => {
  if (state.view === "unviewed") {
    state.view = "all";
    state.unviewedViewIds = null;
  } else {
    state.view = "unviewed";
    state.unviewedViewIds = new Set(state.properties.filter(isUnviewedProperty).map(property => property.id));
  }
  render();
});

els.beachModeButton.addEventListener("click", () => setSearchMode("beach"));
els.largeModeButton.addEventListener("click", () => setSearchMode("large"));

els.themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("propertyTheme", state.theme);
  applyTheme();
});

els.exportButton.addEventListener("click", exportFavourites);
els.exportTableButton.addEventListener("click", exportCurrentTable);
els.exportTablePanelButton.addEventListener("click", exportCurrentTable);
els.tableTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  els.comparisonTableWrap.scrollTo({ top: 0, behavior: "smooth" });
});
els.resetFiltersButton.addEventListener("click", resetFilters);
els.reloadButton.addEventListener("click", () => triggerManualRefresh("national"));
els.saSearchButton.addEventListener("click", () => triggerManualRefresh("sa"));
els.comparisonTableBody.addEventListener("click", event => {
  const row = event.target.closest("tr[data-property-id]");
  if (row) focusPropertyCard(row.dataset.propertyId);
});
els.comparisonTableBody.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const row = event.target.closest("tr[data-property-id]");
  if (!row) return;
  event.preventDefault();
  focusPropertyCard(row.dataset.propertyId);
});

populateStaticControls();
assignDisplayIds();
initialiseViewedState();
applyTheme();
startRefreshTimer();
pollServerRefreshStatus();
window.setInterval(pollServerRefreshStatus, 10000);
render();
