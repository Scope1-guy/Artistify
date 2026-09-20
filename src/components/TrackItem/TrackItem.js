import "./TrackItem.css";

function TrackItem({ rank, track }) {
  return (
    <li className="track-item">
      <span className="track-item__rank">{String(rank).padStart(2, "0")}</span>
      <span className="track-item__name">{track.name}</span>
      <span className="track-item__playcount">{track.playcount} plays</span>
      <span className="track-item__duration">{track.duration}</span>
    </li>
  );
}

export default TrackItem;
