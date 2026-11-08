import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="page-container" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-md)' }}>
      <h1 style={{ fontSize: 'var(--font-size-4xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
        404
      </h1>
      <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>
        Page Not Found
      </h2>
      <p style={{ maxWidth: '460px', margin: '0 auto var(--space-xl)', color: 'var(--color-text-muted)' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary" size="md">
          Back to Safety (Home)
        </Button>
      </Link>
    </div>
  );
}

