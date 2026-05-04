// pages/HomePage.jsx
import { useEffect, useState } from "react";
import {
  fetchTrendingGames,
  fetchTopRatedGames,
  fetchSpotlightGame,
} from "../api/homeApi";

import HeroSection from "../sections/HeroSection";
import TrendingSection from "../sections/TrendingSection";
import TopRatedSection from "../sections/TopRatedSection";
import SpotlightSection from "../sections/SpotlightSection";

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [spotlight, setSpotlight] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [t, tr, s] = await Promise.all([
        fetchTrendingGames(),
        fetchTopRatedGames(),
        fetchSpotlightGame(),
      ]);
      setTrending(t);
      setTopRated(tr);
      setSpotlight(s);
      setLoading(false);
    }

    loadData();
  }, []);


  if (loading) return <p>Loading...</p>;
  

  return (
    <>
      <HeroSection />
      <TrendingSection games={trending} />
      <TopRatedSection games={topRated} />
      <SpotlightSection game={spotlight} />
    </>
  );
}

export default HomePage;