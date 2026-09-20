import { Link } from "react-router-dom";
import "./SimilarArtistCard.css";
import { getArtistImage } from "../../services/wikipedia";
import { useEffect, useState } from "react";

function SimilarArtistCard({ artist }) {
  const [similarArtistsImage, setSimilarArtistImage] = useState(null);

  useEffect(() => {
    getArtistImage(artist.name).then((image) => {
      setSimilarArtistImage(image);
    });
  }, [artist.name]);

  return (
    <Link to={`/artist/${artist.name}`} className="similar-artist-card">
      <div className="similar-artist-card__image-wrap">
        <img
          src={similarArtistsImage}
          alt={artist.name}
          className="similar-artist-card__image"
        />
      </div>
      <span className="similar-artist-card__name">{artist.name}</span>
    </Link>
  );
}

export default SimilarArtistCard;
