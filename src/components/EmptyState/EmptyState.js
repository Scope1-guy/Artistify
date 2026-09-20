import "./EmptyState.css";

/*
  Use this for "nothing here yet" moments: no search results,
  no favorites saved, etc. Pass an action if there's something
  useful for the user to do next.
*/
function EmptyState({ title, description, action }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18V6l11-2v12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </div>
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__description">{description}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  );
}

export default EmptyState;
