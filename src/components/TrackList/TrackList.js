import TrackItem from "../TrackItem/TrackItem";
import "./TrackList.css";

function TrackList({ tracks = [] }) {
  return (
    <ul className="track-list">
      {tracks.map((track, index) => (
        <TrackItem key={track.name} rank={index + 1} track={track} />
      ))}
    </ul>
  );
}

export default TrackList;
