import BloodBadge from './BloodBadge';
import StatusChip from './StatusChip';
import Button from './Button';
import { isBloodCompatible } from '../utils/bloodCompatibility';
export default function RequestCard({
  request,
  donorBloodType,
  onRespond,
  isResponding = false,
}) {
  const isMatch = donorBloodType
    ? isBloodCompatible(donorBloodType, request.bloodType)
    : false;

  const formattedDate = new Date(request.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <article
      className={`request-card ${request.urgency === 'urgent' ? 'request-card-urgent' : ''}`}
      aria-labelledby={`req-title-${request.id}`}
    >
      <header className="request-card-header">
        <div className="request-card-title-group">
          <h3 id={`req-title-${request.id}`} className="request-card-title">
            {request.patientName}
          </h3>
          <p className="request-card-hospital">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{request.hospital}, {request.city}</span>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
          <BloodBadge bloodType={request.bloodType} size="md" />
          <StatusChip status={request.status} />
        </div>
      </header>

      <div className="request-card-body">
        <div className="request-card-meta-row">
          <span className="request-card-meta-label">Units Needed:</span>
          <span className="request-card-meta-value">{request.unitsNeeded} unit{request.unitsNeeded > 1 ? 's' : ''}</span>
        </div>

        {request.reason && (
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            {request.reason}
          </p>
        )}

        {isMatch && (
          <div className="request-card-match-banner" role="status">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Compatible with your blood type ({donorBloodType})</span>
          </div>
        )}
      </div>

      <footer className="request-card-footer">
        <span className="request-card-date">Posted {formattedDate}</span>
        <Button
          size="sm"
          variant={isMatch ? 'primary' : 'secondary'}
          onClick={() => onRespond && onRespond(request)}
          loading={isResponding}
          ariaLabel={`Respond to donation request for ${request.patientName}`}
        >
          {isMatch ? 'I Can Donate' : 'Details & Contact'}
        </Button>
      </footer>
    </article>
  );
}

