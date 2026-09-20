import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./ArtistHeader.css";
import { getArtistImage } from "../../services/wikipedia";
import { useEffect, useState } from "react";

function ArtistHeader({ artist, isFavorite, onToggleFavorite }) {
  // const { name,genres = [], listeners, playcount } = artist;
  const { name } = artist;
  const [artistImage, setArtistImage] = useState(null);

  useEffect(() => {
    getArtistImage(name).then((data) => {
      setArtistImage(data);
    });
  }, [name]);

  return (
    <div className="artist-header">
      <div className="artist-header__image-wrap">
        <img src={artistImage} alt={name} className="artist-header__image" />
      </div>

      <div className="artist-header__details">
        <div className="artist-header__genres">
          {artist.tags.tag.map((genre) => (
            <span key={genre.name} className="artist-header__genre-tag">
              {genre.name}
            </span>
          ))}
        </div>

        <h1 className="artist-header__name">{name}</h1>

        <div className="artist-header__stats">
          <div className="artist-header__stat">
            <span className="artist-header__stat-value">
              {artist.stats.listeners}
            </span>
            <span className="artist-header__stat-label">Listeners</span>
          </div>
          <div className="artist-header__stat">
            <span className="artist-header__stat-value">
              {artist.stats.playcount}
            </span>
            <span className="artist-header__stat-label">Plays</span>
          </div>
        </div>

        <div className="artist-header__actions">
          <FavoriteButton isFavorite={isFavorite} onClick={onToggleFavorite} />
        </div>
      </div>
    </div>
  );
}

export default ArtistHeader;
