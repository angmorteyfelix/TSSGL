

//COMPANY DATA
export const companyData = {
 name: "Thalassa And Shore Services Ghana Ltd (TSSGL)", // [cite: 2, 4]
  tagline: "Simplifying Onshore & Offshore Services.", // [cite: 3]
  location: "Tema, Ghana", // [cite: 4, 38]
  contact: {
    hq: "Tema, Greater Accra, Ghana",
    email: "operations@thalassashoreservicesgh.com",
    phone: "+233 (0) 538 584 722",
    ops247: "+233 (0) 538 584 722",
    location: "P.O. Box TM, Community 2, Tema Port Area"
  }
};

//COMPANY SERVICES///
export const services_h = [
  { title: "Shipping Agency", icon: "🚢" , description: "Full attendance to vessels in all Ghanaian ports, handling port clearances, pilotage, and berthing coordination." },
  { title: "Offshore Support", icon: "🌊" , description: "Specialized offshore support services including provisioning, direct delivery, and boat transportation." },
  { title: "Logistics & Cargo", icon: "📦" , description: "Comprehensive logistics solutions for efficient cargo handling and supply chain management." },
  { title: "Chandlery", icon: "🛒" , description: "Comprehensive chandlery services providing high-quality supplies and equipment for vessels operating in the Gulf of Guinea." }
];


export const aboutContent = [
  {
    title: "Who We Are",
    text: "/about-us.txt",
    isTextFile: true, // load from about-us.txt (served from public)
  },
  {
    title: "Mission",
    text: "To deliver excellence in shipping management through high-quality, integrated offshore and onshore logistics tailored to the unique requirements of our global clientele. And to uphold the highest standards of safety, environmental responsibility, and customer satisfaction in all our operations.  " // [cite: 9]
  },
  {
    title: "Vision",
    text: "To be the industry leader in safe, cost-efficient maritime services. Our primary focus is the Code of Safe Working Practice, followed closely by achieving total customer satisfaction through premium service at competitive pricing." 
  }
];




export const services = [
  {
    title: "Ships Agency", // [cite: 20]
    image: "./images/ship-agency.png", // [cite: 21]
    description: "Full attendance to vessels in all Ghanaian ports, handling port clearances, pilotage, and berthing coordination.", // [cite: 21]
    //description: "As a leading maritime service provider in Ghana, we offer a strategic presence and local expertise to navigate port authorities and supplier networks. ", // [cite: 21]", // [cite: 21]
    icon: "🚢",
    items: [
      "Full Agency & Husbandry", // [cite: 22]
      "Protective & Owners Agency", // [cite: 23]
      "Dry-Dock Coordination", // [cite: 23]
      "Security Services (Rummaging at anchorage and port)" // [cite: 24]
    ]
  },
  {
    title: "Logistics & Cargo", // [cite: 25]
    image: "./images/logistics.png", // [cite: 26]
    description: "Comprehensive logistics solutions for efficient cargo handling and supply chain management.", // [cite: 26]
    icon: "📦",
    items: [
      "Cargo Discharge & Handling", // [cite: 26]
      "Clearing Services (Customs & Documentation)", // [cite: 26]
      "Crew Management & 24/7 Transportation" // [cite: 27]
    ]
  },
  {
    title: "Offshore & Chandling", // [cite: 28]
    image: "./images/chandlery.png", // [cite: 29]
    description: "Specialized offshore support services including provisioning, direct delivery, and boat transportation.", // [cite: 29-31]
    icon: "🌊",
    items: [
      "Provisioning (Stores, spares, dry & fresh provisions and fresh water)", // [cite: 29]
      "Direct Delivery to port and anchorage", // [cite: 30]
      "Boat Transportation (Anchorage and OPL)" // [cite: 31]
    ]
  },
  {
    title: "Chandlery", // [cite: 32]
    image: "./images/deck-engine.png", // [cite: 33]
    description: "Comprehensive chandlery services providing high-quality supplies and equipment for vessels operating in the Gulf of Guinea.", // [cite: 33]
    icon: "🛒" ,
    items: [
      "Provisioning (Stores, spares, dry & fresh provisions and fresh water)", // [cite: 33]
      "Direct Delivery to port and anchorage", // [cite: 33]
      "Boat Transportation (Anchorage and OPL)" // [cite: 33]
    ]
  }
];








export const fleetData = [
  {
    name: "M/V THUNDER",
    image: "/images/T.image.png", // Fast Crew Vessel vibe
    type: "Fast Crew Supplier / Utility Vessel",
    status: "Active",
    specs: {
      length: "35 Meters",
      speed: "25 Knots",
      capacity: "50 Passengers / 40 Tons Deck Cargo",
      engine: "3x Cummins KTA 38-M2",
      safety: "Fully SOLAS Compliant"
    },
    features: [
      "High-speed personnel transfer",
      "Offshore platform supply",
      "Emergency response & standby",
      "Security & patrol capabilities"
    ]
  }
,
  {
    name: "M/V Ierissos",
    image: "/images/ierissos.png", // Fiber craft / patrol vessel style
    type: "Single Screw Fiber Craft",
    status: "Active",
    specs: {
      length: "35 Meters",
      speed: "25 Knots",
      capacity: "10 Passengers / 10 Tons Deck Cargo",
      engine: "1x Cummins KTA 38-M2",
      safety: "Fully SOLAS Compliant"
    },
    features: [
      "High-speed personnel transfer",
      "Offshore platform supply",
      "Emergency response & standby",
      "Security & patrol capabilities"
    ]
  }
];








export const contactDepartments = [
  {
    name: "Operations (24/7)", //
    phone: "+233-54 435 8438", //[cite: 41]
    email: "operations@thalassashoreservicesgh.com"// [cite: 46]
  },
  {
    name: "Marketing", //
    phone: "+233-24 571 5286",// [cite: 43]
    email: "marketing@thalassashoreservicesgh.com" //[cite: 45]
  },
  {
    name: "Finance", //
    phone: "+233-24 924 0054" //[cite: 42]
  },
  {
    name: "Main Office", //
    phone: ["+233-30 296 2601", "+233-50 357 1074"]// [cite: 40]
  }
];




export const physicalAddress = {
  location: "Community 2, Meridian Road, Tema", //[cite: 37]
  postBox: "P. O. Box CO DTD 164, Tema-Ghana" //[cite: 38]
};






export const coreValues = [
  {
    title: "Safety First",
    description: "Conducting operations safely is our paramount concern as it directly impacts the well-being of our crew and the success of our missions." //[cite: 14]
  },
  {
    title: "Efficiency",
    description: "24/7 staff ensures a speedy turnaround to avert costly waiting periods at Ghanaian port anchorages while maintaining high standards of service." //[cite: 15, 16]
  },
  {
    title: "Integrity",
    description: "Rigorous corporate governance and transparent business practices in every contract to ensure trust and accountability.  "// [cite: 17]
  },
  {
    title: "Win-Win Partnerships",
    description: "Cost-benefit structure that remains standard while offering flexibility for negotiated terms and mutual benefit. " //[cite: 18]
  }
]







