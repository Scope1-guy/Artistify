import ArtistCard from "../ArtistCard/ArtistCard";
import "./ArtistGrid.css";

function ArtistGrid({ artists = [] }) {
  return (
    <div className="artist-grid">
      {artists.map((artist) => (
        <ArtistCard key={artist.name} artist={artist} />
      ))}
    </div>
  );
}

export default ArtistGrid;
