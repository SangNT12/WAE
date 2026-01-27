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
    hasSubmenu: true
  },
  {
    id: 4,
    label: "LEARN",
    url: "/learn",
    description: "Educational resources and courses",
    order: 4,
    hasSubmenu: true
  },
  {
    id: 5,
    label: "WHAT'S UP",
    url: "/what-s-up",
    description: "News and updates",
    order: 5,
    hasSubmenu: true
  },
  {
    id: 6,
    label: "SCI-HUB",
    url: "/science-hub",
    description: "Research and scientific resources",
    order: 6,
    hasSubmenu: true
  }
];

module.exports = navigationData;
