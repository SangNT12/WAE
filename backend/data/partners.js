const partnersData = [
  {
    id: 1,
    name: "ANSYS",
    logo: "https://static.wixstatic.com/media/87c677_3ff70421052e459d92fb9de1a3aeb3cd~mv2.jpg/v1/fill/w_145,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Website_Logo_BGSW.jpg",
    url: "https://www.ansys.com/",
    category: "Simulation"
  },
  {
    id: 2,
    name: "Bosch",
    logo: "https://static.wixstatic.com/media/604381_0b992bae0e6043f68a1c41105590c2e0~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_Bosch_farbe.png",
    url: "https://www.bosch.com/",
    category: "Automotive"
  },
  {
    id: 3,
    name: "ETAS",
    logo: "https://static.wixstatic.com/media/604381_7e62379253a04028a8ea70e4b903bd20~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_ETAS_NEU_farbe.png",
    url: "https://www.etas.com/en/",
    category: "Tools"
  },
  {
    id: 4,
    name: "LeanIX",
    logo: "https://static.wixstatic.com/media/604381_59b94cdead524255b68ea59bba66b497~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_LeanIX_farbe.png",
    url: "https://www.leanix.net/en/",
    category: "Architecture"
  },
  {
    id: 5,
    name: "Popcorn SAR",
    logo: "https://static.wixstatic.com/media/87c677_25069661ffdb440a8ca91e311f42691c~mv2.jpg/v1/fill/w_145,h_145,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Website_Logo_PopcornSAR.jpg",
    url: "https://www.popcornsar.com/main/home",
    category: "Tools"
  },
  {
    id: 6,
    name: "Arduino",
    logo: "https://static.wixstatic.com/media/87c677_922d6dd07a004214839971e7bfa6b729~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RGB-Arduino-Logo_Color%20Stacked%20Centered%20(2)%20(002).png",
    url: "https://store.arduino.cc/en-de/apps/pagefly/preview?id=59c1ff5a-93d2-4f59-ab46-63a199e01aca",
    category: "Hardware"
  },
  {
    id: 7,
    name: "Dassault",
    logo: "https://static.wixstatic.com/media/604381_3ebc4f3da9964e8f8042754fae7adb93~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_dassault_farbe.png",
    url: "https://www.3ds.com/",
    category: "Simulation"
  },
  {
    id: 8,
    name: "Hochschule Heilbronn",
    logo: "https://static.wixstatic.com/media/604381_cfabb153c0324270b7decfc1bd88d488~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hochschule%20Heilbronn_200x200px.png",
    url: "https://www.hs-heilbronn.de/en",
    category: "Education"
  },
  {
    id: 9,
    name: "NTTDATA",
    logo: "https://static.wixstatic.com/media/cb5cea_50cf7bb2a38840be92f8b2ebae945fa7~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NTTDATA_Logo_200px_200px.png",
    url: "https://www.nttdata.com/global/en/",
    category: "Technology"
  },
  {
    id: 10,
    name: "Prototype Club",
    logo: "https://static.wixstatic.com/media/87c677_3cf4fe0ad618419999b200646d78ef45~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo_prototype_club.png",
    url: "https://www.prototype.club/",
    category: "Community"
  },
  {
    id: 11,
    name: "AWS",
    logo: "https://static.wixstatic.com/media/604381_3f99088bcd2b4c83a5be6c95dae34145~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_AWS_farbe.png",
    url: "https://aws.amazon.com/",
    category: "Cloud"
  },
  {
    id: 12,
    name: "EPAM",
    logo: "https://static.wixstatic.com/media/604381_24ae6f9973f4457084a3e9611d7419ee~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_epam_farbe.png",
    url: "https://www.epam.com/",
    category: "Technology"
  },
  {
    id: 13,
    name: "Landing AI",
    logo: "https://static.wixstatic.com/media/604381_09afb63b83ec4c559fc3e209881a25d6~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_LandingAI_farbe.png",
    url: "https://landing.ai/",
    category: "AI"
  },
  {
    id: 14,
    name: "RTI",
    logo: "https://static.wixstatic.com/media/604381_5570efbf03c941d2a2f8e6642c7b18f5~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_rti_farbe.png",
    url: "https://www.rti.com/en/",
    category: "Middleware"
  },
  {
    id: 15,
    name: "Ferdinand Steinbeis Institut",
    logo: "https://static.wixstatic.com/media/604381_4cfb566fc5fa481fa8743e5e2fbabf3e~mv2.png/v1/fill/w_145,h_145,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partnerlogos_200x200px_steinbei%C3%9F_farbe.png",
    url: "https://ferdinand-steinbeis-institut.de/",
    category: "Research"
  }
];

module.exports = partnersData;
