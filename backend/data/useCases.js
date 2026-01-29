const useCasesData = {
  intro: {
    title: "digital.auto use cases",
    subtitle: "Real-life examples and projects"
  },
  practice: {
    title: "digital.auto in practice",
    description: "digital.auto is focusing on use cases enabled by software-defined vehicle (SDV) and vehicle APIs (e.g. COVESA VSS). These use cases benefit from the de-coupling of event chains and moving the non-safety-critical parts into a containerized SDV runtime environment, interacting with the safety-critical parts through well defined vehicle APIs.",
    characteristics: [
      "Mixture of safety-critical and non-safety-critical steps in the application",
      "Need to advance the non-safety-critical parts in an agile, incremental way",
      "Support of post-SOP (start-of-production) updates at least for the SDV parts",
      "Integration with vehicle functions via vehicle APIs and hardware abstraction"
    ],
    conclusion: "The first step in our \"digital first\" approach is to identify and prioritize the most relevant use cases. Afterwards we continue with a close alignment between off-board and on-board applications to generate true customer value."
  },
  examples: [
    {
      id: 1,
      title: "Passenger Welcome",
      image: "/images/passenger-welcome.jpg",
      benefits: "Run a sequence of events in order to welcome the driver, as he / she approaches the vehicle",
      implementation: "Opening the door (assuming door motor and sensors for safety checks), playing a light sequence, and adjusting the seat position and HVAC settings according to the driver's preferences",
      partners: "Bosch, Dassault Systemes, Ferdinand-Steinbeis-Institute",
      playgroundUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/sYi6V79NGZoxJW6AOKlG/view/journey",
      demoUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/sYi6V79NGZoxJW6AOKlG/view/run"
    },
    {
      id: 2,
      title: "Anti-Kinetosis",
      image: "/images/anti-kinetosis.jpg",
      benefits: "Avoid motion sickness when traveling longer distances in a car.",
      implementation: "Usage of different vehicle sensor values (e.g. pitch, yaw, roll) to detect the likelihood of motion sickness-related issues. This information, is used to automatically address various factors: the driving style, seat position, light environment, in-vehicle climate, etc. Utilization of VSS signals as input to calculate a kinetosis score. Usage of near real-world vehicle simulation to provide test data via the VSS APIs.",
      partners: "Bosch, ANSYS, IPG Carmaker, Ferdinand-Steinbeis-Institute",
      playgroundUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/c6oxvyUF5393t9G9Bi2b/view/journey",
      demoUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/c6oxvyUF5393t9G9Bi2b/view/run",
      blogUrl: "https://www.ansys.com/blog/discovering-what-sets-car-sickness-in-motion-with-simulation"
    },
    {
      id: 3,
      title: "EV Power Optimization",
      image: "/images/ev-power-optimization.jpg",
      benefits: "Support EV owners to reach their next destination more safely in case of range issues",
      implementation: "Monitoring the battery state of charge, to automatically detect different levels of criticality. Depending on the criticality level, different non-critical functions are powered down, in order to preserve energy – including HVAC, infotainment, and in-cabin light.",
      partners: "Hyundai Mobis, Bosch, ANSYS, Ferdinand-Steinbeis-Institute",
      playgroundUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/CLt8U3IFYAFkTMAgE6pV/view/run",
      demoUrl: "https://digitalauto.netlify.app/model/STLWzk1WyqVVLbfymb4f/library/prototype/EAFX7kq6hxIwOqAd5pDX/view/run"
    }
  ],
  cta: {
    title: "Find more use cases in the digital.auto playground",
    description: "The digital.auto playground provides a rich, highly visual prototyping environment for software-defined vehicle applications, using standardized vehicle APIs.",
    playgroundLink: "https://digitalauto.netlify.app/",
    wikiLink: "https://www.digitalplaybook.org/index.php?title=Overview:_playground.digital.auto"
  }
};

module.exports = useCasesData;
