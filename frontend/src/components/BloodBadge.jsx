export default function BloodBadge({ bloodType, size = 'md', className = '' }) {
  if (!bloodType) return null;

  return (
    <span
      className={`blood-badge blood-badge-${size} ${className}`.trim()}
      aria-label={`Blood type ${bloodType}`}
    >
      <svg
        className="blood-badge-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
      <span>{bloodType}</span>
    </span>
  );
}

