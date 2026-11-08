import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="page-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primary)" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>Lifeline</span>
            </div>
            <p className="footer-description">
              Connecting life-saving blood donors with patients in urgent need. Built for speed, dignity, and community resilience.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/register" className="footer-link">Register as Donor</Link>
              </li>
              <li>
                <Link to="/dashboard" className="footer-link">Live Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-emergency-box">
              <div className="footer-emergency-title">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>24/7 Blood Emergency Hotline</span>
              </div>
              <a href="tel:18005553767" className="footer-emergency-phone">
                1-800-555-DROP
              </a>
              <p style={{ fontSize: 'var(--font-size-xs)', marginTop: '4px', color: 'var(--color-urgent)' }}>
                Toll-free emergency routing for hospitals and intensive care units.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lifeline Blood Network. All rights reserved.</p>
          <p>Medical information is provided for emergency guidance only. Always consult medical staff.</p>
        </div>
      </div>
    </footer>
  );
}

