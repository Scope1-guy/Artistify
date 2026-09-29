import SearchBar from "../../components/SearchBar/SearchBar";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
import { trendingArtists, featuredGenres } from "../../data/placeholderData";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  function handleSearchSubmit() {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  }
  return (
    <div>
      <section className="hero">
        <div className="page-container hero__inner">
          <h1 className="hero__headline">
            Find the story
            <br />
            behind the sound.
          </h1>
          <p className="hero__description">
            Search any artist to see their biography, top tracks, albums and the
            listeners behind the numbers — then save your favorites to come back
            to later.
          </p>
          <div className="hero__search">
            <SearchBar
              size="large"
              placeholder="Try “Burna Boy” or “Fela Kuti”"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={handleSearchSubmit}
            />
            <p className="hero__search-note">Artist data provided by Last.fm</p>
          </div>
        </div>
      </section>

      {currentUser && (
        <>
          <section className="page-section">
            <div className="page-container">
              <SectionHeader
                title="Trending this week"
                subtitle="Artists getting the most attention right now."
              />
              <ArtistGrid artists={trendingArtists} />
            </div>
          </section>

          <section className="page-section discovery">
            <div className="page-container discovery__inner">
              <div className="discovery__text">
                <h2 className="discovery__title">Discover by genre</h2>
                <p className="discovery__description">
                  From Afrobeats to Amapiano, explore the sounds shaping the
                  continent's music scene and find your next favorite artist.
                </p>
              </div>
              <div className="discovery__tags">
                {featuredGenres.map((genre) => (
                  <span key={genre} className="discovery__tag">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
