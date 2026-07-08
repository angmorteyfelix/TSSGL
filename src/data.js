

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
  { title: "Shipping Agency", icon: "🚢" , description: "Complete ship’s agency representation across all Ghanaian ports, delivering fast port clearance, berth coordination, customs liaison, and timely operational support for owners, charterers, and masters." },
  { title: "Offshore Support", icon: "🌊" , description: "Purpose-built offshore logistics and replenishment services for anchorage, platform and open-water operations, including provisioning, boat transfer and crew movement." },
  { title: "Logistics & Cargo", icon: "📦" , description: "Integrated cargo management and supply chain services that connect port operations with inland transport pathways, customs brokerage, warehousing, and project logistics." },
  { title: "Chandlery", icon: "🛒" , description: "Specialized ship supply services delivering premium provisions, spares and technical stores with fast delivery to ports and anchorages throughout the Gulf of Guinea." }
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
    description: "Thalassa And Shore Services Gh. Ltd. (TSSGL) stands as a trusted maritime partner for vessels navigating Ghana’s bustling shipping corridors. Operating across all major Ghanaian ports, we deliver strategic, end-to-end ship agency services designed to optimize every phase of your port call. We understand that in the shipping industry, time is the ultimate currency. That is why our dedicated agency team operates 24/7, leveraging our deep local knowledge and strong relationships with port authorities to ensure a frictionless transition from open water to berth, and back again.",
    icon: "🚢",
    details: [
      {
        title: "Pre-Arrival & Port Call Planning",
        text: "A successful port call begins long before a vessel reaches the anchorage. Our proactive port call planning involves meticulous coordination with vessel masters, charterers, and local maritime agencies. By anticipating potential bottlenecks, contributing to optimized voyage planning, and pre-clearing regulatory hurdles, we actively avert costly waiting periods at Ghanaian anchorages. Our team handles all preliminary documentation and continuous vessel monitoring so that operations can commence immediately upon arrival."
      },
      {
        title: "Berthing, Pilotage & Customs Clearance",
        text: "Navigating local port logistics requires absolute precision. We seamlessly coordinate all pilotage and towage requirements to guarantee safe, timely, and efficient berthing. Simultaneously, our expert personnel manage the complex web of customs clearance. By ensuring strict compliance with local and international maritime regulations, we eliminate bureaucratic friction and process inward and outward clearances rapidly, facilitating immediate cargo discharge or loading operations."
      },
      {
        title: "Husbandry & Crew Support",
        text: "Beyond the vessel’s cargo operations, we prioritize the human and technical elements through our comprehensive husbandry services. Utilizing our own fleet of dedicated service boats—including the M/V Thunder, M/V Ierissos, and M.V. Sea Horse 1—we facilitate safe off-port limit (OPL) operations and anchorage deliveries. Whether coordinating seamless crew changes, securing prompt medical assistance, delivering vital ship spares, or supplying fresh water and provisions, we keep your crew supported and your vessel fully equipped."
      },
      {
        title: "Protective Agency & Total Voyage Support",
        text: "As your protective agent, TSSGL acts as your eyes and ears on the ground. We fiercely safeguard the interests of owners and charterers by closely supervising daily port operations, mitigating risks, resolving local conflicts, and providing real-time, transparent updates. From initial pre-arrival planning to post-departure reporting and final disbursement accounting, our holistic approach provides a single point of contact for every voyage stage, ensuring total peace of mind in Ghanaian waters."
      }
    ],
    items: [
      "Full agency representation for vessel arrival, berthing and departure",
      "Port authority liaison, customs documentation, and clearance management",
      "Protective and owner’s agency services with 24/7 local support",
      "Crew welfare, husbandry coordination and on-site operational oversight"
    ]
  },
  {
    title: "Logistics & Cargo", // [cite: 25]
    image: "./images/logistics.png", // [cite: 26]
    description: "TSSGL delivers integrated logistics and cargo management services that connect maritime operations to inland distribution, customs clearance, warehousing, and route optimization across Ghana and the wider West African corridor.", // [cite: 26]
    icon: "📦",
    details: [
      {
        title: "Freight Forwarding & Customs Brokerage",
        text: "Our end-to-end forwarding service ensures cargo moves efficiently through Ghanaian customs and regulatory checkpoints. We manage documentation, tariff classification, and clearance processing so shipments reach their destination with minimal delay."
      },
      {
        title: "Warehousing, Handling & Distribution",
        text: "We provide secure warehousing, cargo handling, and consolidation services that support import/export flows. By combining storage, cross-docking and local distribution, we keep inventories moving while reducing handling costs."
      },
      {
        title: "Multimodal Transport & Route Optimization",
        text: "Our operations team designs multimodal transport solutions that combine road, sea and air transportation where appropriate. This holistic planning improves transit times, lowers logistics spend and provides a more resilient supply chain."
      },
      {
        title: "Project Cargo & Special Consignments",
        text: "For heavy, oversized or time-sensitive consignments, we coordinate custom logistics plans with specialised equipment, on-site handling and flexible delivery options tailored to complex maritime projects."
      }
    ],
    icon: "📦",
    items: [
      "Customs brokerage and import/export documentation support",
      "Cargo handling, shore operations, and secure consolidation services",
      "Multimodal transport planning across road, sea and air networks",
      "Project cargo coordination for time-sensitive or oversized shipments"
    ]
  },
  {
    title: "Offshore Operations", // [cite: 28]
    image: "./images/chandlery.png", // [cite: 29]
    description: "TSSGL supports offshore operations with reliable provisioning, direct delivery and boat transfer services that keep vessels, platforms and crews supplied around the clock.", // [cite: 29-31]
    icon: "🌊",
    details: [
      {
        title: "Offshore Provisioning & Replenishment",
        text: "We supply the full range of offshore materials—from dry and fresh provisions to technical spares and fuel—delivered safely to anchorage and platform locations as required by your operation."
      },
      {
        title: "Direct Delivery to Anchorage & OPL",
        text: "Our team manages direct deliveries to anchorage, off-port limit locations and offshore support points. This includes route planning, port coordination and timely handover to on-board teams."
      },
      {
        title: "Boat Transportation & Crew Movement",
        text: "We arrange secure boat movements for personnel, spare parts and mission-critical equipment. Our offshore transport capacity is designed to support crew changes, inspections, and urgent deliveries with minimal disruption."
      },
      {
        title: "Emergency Support & Offshore Logistics Coordination",
        text: "In offshore operations, speed and reliability are essential. TSSGL provides rapid-response logistics coordination, emergency stores procurement, and real-time operational communication to keep your offshore mission on course."
      }
    ],
    icon: "🌊",
    items: [
      "Offshore provisioning of fresh, dry and technical stores",
      "Direct delivery to port, anchorage and offshore locations",
      "Boat transportation for personnel, supplies and equipment",
      "Offshore logistics planning and offshore husbandry services"
    ]
  },
  {
    title: "Chandlery", // [cite: 32]
    image: "./images/deck-engine.png", // [cite: 33]
    description: "Our chandlery services supply vessels with high-quality provisions, spare parts, safety equipment and technical stores, with fast delivery to port and anchorage locations throughout the Gulf of Guinea.", // [cite: 33]
    icon: "🛒",
    details: [
      {
        title: "Ship Supply & Equipment Sourcing",
        text: "We source a comprehensive selection of marine stores, spares and safety equipment from trusted suppliers, ensuring vessels receive the right items when they need them."
      },
      {
        title: "Fresh, Dry & Technical Provisions",
        text: "From fresh food and water to technical spares and deck gear, our provisioning services cover every type of vessel requirement and voyage profile."
      },
      {
        title: "Anchorage & Port Delivery",
        text: "We deliver supplies directly to port alongside or to anchorage locations, keeping vessel timelines intact with reliable handover and verification procedures."
      },
      {
        title: "Emergency Stores Procurement",
        text: "When urgent supply needs arise, our emergency procurement service is ready to source and deliver critical stores quickly to minimize operational downtime."
      }
    ],
    icon: "🛒",
    items: [
      "Quality ship supplies, safety equipment and technical spares",
      "Fresh and dry provisions tailored to voyage requirements",
      "Direct anchorage and port delivery for urgent replenishment",
      "Inventory sourcing and emergency stores procurement"
    ]
  }
  
];








export const fleetData = [
  {
    name: "M/V THUNDER",
    image: "/images/T.image.png", // Fast Crew Vessel vibe
    type: "Fast Crew Supplier Boat",
    status: "Active",
    specs: {
      length: "10 Meters",
      speed: "25 Knots",
      capacity: "12 Passengers / 10 Tons Deck Cargo",
      engine: "2x Johndeer 6.8L 6-cylinder diesel engines",
      safety: "Fully SOLAS Compliant"
    },
    features: [
      "High-speed personnel transfer",
      "Offshore platform supply",
      "Emergency response & standby"
      
    ]
  }
,
  {
    name: "M/V Ierissos",
    image: "/images/ierissos.png", // Fiber craft / patrol vessel style
    type: "Services Boat",
    status: "Active",
    specs: {
      length: "8.58 Meters",
      speed: "12 Knots",
      capacity: "7 Passengers / 4 Tons Deck Cargo",
      engine: " Yanmar 6LY2A-STP"
    },
    features: [
      "High-speed personnel transfer",
      "Offshore platform supply",
      "Emergency response & standby",
      "Security & patrol capabilities"
    ]
  },
  {
    name: "M/V Sea Horse 1",
    image: "/images/sea-horse.png", // Utility / workboat style
    type: "Utility / Workboat",
    status: "Inactive",
    specs: {
      length: "9.5 Meters",
      speed: "15 Knots",
      capacity: "10 Passengers / 6 Tons Deck Cargo",
      engine: "2x Cummins QSB 6.7L diesel engines"
    },
    features: [
      "Offshore supply & provisioning",
      "Crew transfer & personnel movement",
      "Emergency response & standby"
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







