const toolchainData = {
  id: 3,
  label: "TOOL CHAIN",
  url: "/toolchain",
  description: "Tools and technologies",
  order: 3,
  tools: [
    {
      id: 31,
      label: "playground",
      url: "/toolchain/playground",
      description: "Digital.auto playground",
      fullDescription: "Interactive playground for exploring digital.auto capabilities and testing your SDV applications in a sandbox environment.",
      features: [
        "Interactive development environment",
        "Real-time testing and debugging",
        "Sample projects and templates",
        "Community contributions"
      ],
      getStarted: "Visit the playground to start experimenting with digital.auto tools",
      icon: "🎮"
    },
    {
      id: 32,
      label: "digital.auto/verse",
      url: "/toolchain/verse",
      description: "Digital.auto Verse",
      fullDescription: "Digital.auto Verse is a virtual ecosystem that enables developers to build, test, and validate Software-Defined Vehicle (SDV) applications in a simulated environment.",
      features: [
        "Virtual vehicle simulation",
        "Advanced sensor simulation",
        "Traffic and environment modeling",
        "Integration with V2X communication",
        "Performance analytics"
      ],
      getStarted: "Get started with Verse by setting up your first virtual scenario",
      icon: "🌐"
    },
    {
      id: 33,
      label: "dreamKIT",
      url: "/toolchain/dreamkit",
      description: "Digital.auto dreamKIT",
      fullDescription: "dreamKIT is a comprehensive toolkit designed to accelerate software development for distributed, real-time embedded and mixed-criticality systems in vehicles.",
      features: [
        "Middleware for middleware-less distribution",
        "Real-time scheduling and management",
        "Mixed-criticality support",
        "Automotive-grade tooling",
        "End-to-end development cycle support",
        "DDS middleware integration"
      ],
      getStarted: "Download dreamKIT and follow the installation guide to begin development",
      icon: "🛠️"
    },
    {
      id: 34,
      label: "E/E Starter Kit",
      url: "https://www.digikey.com/en/resources/technology/digital-auto-starter-kit",
      description: "E/E Starter Kit",
      fullDescription: "The E/E Starter Kit provides hardware and software resources to get started with electrical and electronics development for modern vehicles.",
      features: [
        "Reference hardware design",
        "Development board",
        "Sample applications",
        "Documentation and tutorials",
        "Community support"
      ],
      getStarted: "Order the starter kit and begin with the quick start guide",
      icon: "⚙️",
      external: true
    }
  ]
};

module.exports = toolchainData;
