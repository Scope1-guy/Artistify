import "./AlbumCard.css";

function AlbumCard({ album }) {
  const largeImage = album.image.find((img) => img.size === "extralarge");
  const coverUrl = largeImage?.["#text"];
  return (
    <div className="album-card">
      <div className="album-card__cover-wrap">
        <img src={coverUrl} alt={album.name} className="album-card__cover" />
      </div>
      <h4 className="album-card__title">{album.name}</h4>
      <p className="album-card__year">{album.year}</p>
    </div>
  );
}

export default AlbumCard;
