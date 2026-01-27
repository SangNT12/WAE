import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedCardsSection from "../components/FeaturedCardsSection";
import TargetPictureSection from "../components/TargetPictureSection";
import ContributionsSection from "../components/ContributionsSection";
import InteroperabilitySection from "../components/InteroperabilitySection";
import TechDetailsSection from "../components/TechDetailsSection";
import "./Home.css";

function Home() {
  const [content, setContent] = useState(null);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [homeData, partnersData] = await Promise.all([
          apiService.getHomeContent(),
          apiService.getPartners()
        ]);
        setContent(homeData);
        setPartners(partnersData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load content");
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="home loading">Loading...</div>;
  }

  if (error) {
    return <div className="home error">{error}</div>;
  }

  if (!content) {
    return null;
  }

  return (
    <div className="home">
      <HeroSection hero={content.hero} />
      <AboutSection about={content.about} />
      <FeaturedCardsSection featuredCards={content.featuredCards} />
      <TargetPictureSection targetPicture={content.targetPicture} />
      <ContributionsSection contributions={content.contributions} />
      <InteroperabilitySection interoperability={content.interoperability} partners={partners} />
      <TechDetailsSection techDetails={content.techDetails} />
    </div>
  );
}

export default Home;
