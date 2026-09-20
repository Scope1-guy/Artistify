import "./ErrorState.css";

/*
  Use this when a fetch request fails, e.g.:
    {error && <ErrorState message={error} onRetry={fetchAgain} />}
*/
function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load that. Please try again.",
  onRetry,
}) {
  return (
    <div className="error-state">
      <div className="error-state__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 9v4M12 17h.01"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10.29 3.86 1.82 18a1.5 1.5 0 0 0 1.29 2.25h17.78A1.5 1.5 0 0 0 22.18 18L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="error-state__title">{title}</h3>
      <p className="error-state__message">{message}</p>
      {onRetry && (
        <button type="button" className="error-state__retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
