import { Link } from "react-router-dom";
import "./ArtistCard.css";
// import { getArtistImage } from "../../services/audiodb";
import { getArtistImage } from "../../services/wikipedia";
import { useEffect, useState } from "react";

function ArtistCard({ artist }) {
  const [audioDbImage, setAudioDbImage] = useState(null);
  const { name, genres = [], listeners } = artist;
  const fallbackImage = "https://via.placeholder.com/400x400?text=No+Image";

  useEffect(() => {
    getArtistImage(name).then((image) => {
      setAudioDbImage(image);
    });
  }, [name]);

  return (
    <Link to={`/artist/${encodeURIComponent(name)}`} className="artist-card">
      <div className="artist-card__image-wrap">
        <img
          src={audioDbImage || fallbackImage}
          alt={name}
          className="artist-card__image"
        />
        <div className="artist-card__overlay">
          <h3 className="artist-card__name">{name}</h3>
          {genres.length > 0 && (
            <p className="artist-card__genres">
              {genres.slice(0, 2).join(" • ")}
            </p>
          )}
        </div>
      </div>
      {listeners && (
        <div className="artist-card__meta">
          <span>{listeners} listeners</span>
        </div>
      )}
    </Link>
  );
}

export default ArtistCard;
