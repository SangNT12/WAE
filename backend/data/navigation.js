const navigationData = [
  {
    id: 1,
    label: "HOME",
    url: "/",
    description: "Home page",
    order: 1
  },
  {
    id: 2,
    label: "USE CASES",
    url: "/use-cases",
    description: "Real-world use cases and applications",
    order: 2
  },
  {
    id: 3,
    label: "TOOL CHAIN",
    url: "/toolchain",
    description: "Tools and technologies",
    order: 3,
    hasSubmenu: true,
    submenu: [
      {
        id: 31,
        label: "playground",
        url: "/playground",
        description: "Digital.auto playground"
      },
      {
        id: 32,
        label: "digital.auto/verse",
        url: "/verse",
        description: "Digital.auto Verse"
      },
      {
        id: 33,
        label: "dreamKIT",
        url: "/dreamkit",
        description: "Digital.auto dreamKIT"
      },
      {
        id: 34,
        label: "E/E Starter Kit",
        url: "https://www.digikey.com/en/resources/technology/digital-auto-starter-kit",
        description: "E/E Starter Kit"
      }
    ]
  },
  {
    id: 4,
    label: "LEARN",
    url: "/learn",
    description: "Educational resources and courses",
    order: 4,
    hasSubmenu: true,
    submenu: [
      {
        id: 41,
        label: "SDV Online Course",
        url: "https://www.coursera.org/learn/sdv101/",
        description: "SDV Online Course"
      },
      {
        id: 42,
        label: "SDV Guide",
        url: "https://www.sdv.guide/",
        description: "SDV Guide"
      }
    ]
  },
  {
    id: 5,
    label: "WHAT'S UP",
    url: "/what-s-up",
    description: "News and updates",
    order: 5,
    hasSubmenu: true,
    submenu: [
      {
        id: 51,
        label: "SDV Webinars",
        url: "/sdv-webinars",
        description: "SDV Webinars"
      },
      {
        id: 52,
        label: "digital.auto Garage",
        url: "/garage",
        description: "Digital.auto Garage"
      },
      {
        id: 53,
        label: "Past Highlights",
        url: "/past-highlights",
        description: "Past Highlights"
      }
    ]
  },
  {
    id: 6,
    label: "SCI-HUB",
    url: "/science-hub",
    description: "Research and scientific resources",
    order: 6,
    hasSubmenu: true,
    submenu: [
      {
        id: 61,
        label: "BYOD project",
        url: "/bring-your-own-device-initiative",
        description: "BYOD project"
      },
      {
        id: 62,
        label: "SDVxAI project",
        url: "/sdvxai-project",
        description: "SDVxAI project"
      }
    ]
  }
];

module.exports = navigationData;
