import AlbumCard from "../AlbumCard/AlbumCard";
import "./AlbumGrid.css";

function AlbumGrid({ albums = [] }) {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <AlbumCard key={album.name} album={album} />
      ))}
    </div>
  );
}

export default AlbumGrid;
