import "./LoadingState.css";

/*
  Show this while a fetch request is in progress, e.g.:
    {isLoading && <LoadingState message="Searching artists..." />}
*/
function LoadingState({ message = "Loading..." }) {
  return (
    <div className="loading-state">
      <div className="loading-state__bars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loading-state__message">{message}</p>
    </div>
  );
}

export default LoadingState;
