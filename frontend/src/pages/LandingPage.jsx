import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BloodBadge from '../components/BloodBadge';
import RequestCard from '../components/RequestCard';
import { BLOOD_COMPATIBILITY, ALL_BLOOD_TYPES } from '../utils/bloodCompatibility';
// Featured sample requests for the landing page showcase
const FEATURED_REQUESTS = [
  {
    id: 'landing-1',
    patientName: 'Emma Richardson',
    bloodType: 'O-',
    unitsNeeded: 2,
    urgency: 'urgent',
    hospital: 'St. Jude Memorial Hospital',
    city: 'Downtown Medical District',
    reason: 'Emergency cardiovascular surgery requiring universal donor units.',
    status: 'urgent',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'landing-2',
    patientName: 'David Chen',
    bloodType: 'A+',
    unitsNeeded: 3,
    urgency: 'urgent',
    hospital: 'City General Trauma Wing',
    city: 'North Metro Health Complex',
    reason: 'Acute post-accident trauma stabilization.',
    status: 'urgent',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'landing-3',
    patientName: 'Sophia Patel',
    bloodType: 'B+',
    unitsNeeded: 1,
    urgency: 'standard',
    hospital: 'Mercy Children Hospital',
    city: 'Westside Pediatric Center',
    reason: 'Routine supportive transfusion for severe anemia.',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
];

export default function LandingPage() {
  const [selectedBlood, setSelectedBlood] = useState('O-');
  const compatibilityInfo = BLOOD_COMPATIBILITY[selectedBlood];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="page-container">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            <span>Critical Need: O- & B+ donors urgently needed today</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            When Seconds Count, <span className="hero-title-highlight">Blood Donors</span> Save Lives
          </h1>

          <p className="hero-lead">
            Lifeline bridges the vital gap between local hospitals, emergency patients, and voluntary blood donors. Connect in minutes, donate safely, and track your lifesaving impact.
          </p>

          <div className="hero-actions">
            <Link to="/register">
              <Button size="lg" variant="primary" fullWidth>
                Register as a Donor
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" fullWidth>
                View Live Requests
              </Button>
            </Link>
          </div>

          {/* Key Metrics Banner */}
          <div className="hero-stats-banner">
            <div className="hero-stat-card">
              <span className="hero-stat-number">14,250+</span>
              <span className="hero-stat-label">Units Donated</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-number">&lt; 14 Mins</span>
              <span className="hero-stat-label">Avg. Match Time</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Voluntary & Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Blood Compatibility Section */}
      <section className="page-container" aria-labelledby="compat-title">
        <div className="compatibility-section">
          <div className="section-header">
            <span className="section-tag">Compatibility Guide</span>
            <h2 id="compat-title" className="section-title">
              Who Can You Help?
            </h2>
            <p className="section-subtitle">
              Select your blood type below to immediately see which recipients can receive your donation, and who you can receive from.
            </p>
          </div>

          {/* Blood Type Selection Tabs */}
          <div className="blood-selector-tabs" role="tablist" aria-label="Select blood type">
            {ALL_BLOOD_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={selectedBlood === type}
                className={`blood-tab-button ${selectedBlood === type ? 'active' : ''}`}
                onClick={() => setSelectedBlood(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Compatibility Details Card */}
          <div className="compatibility-display-card">
            <div className="compatibility-col">
              <h3 className="compatibility-col-title">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="var(--color-primary)" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span>If you are {selectedBlood}, you can donate red blood cells to:</span>
              </h3>
              <div className="compatibility-badges-row">
                {compatibilityInfo?.canDonateTo.map((recipientType) => (
                  <BloodBadge key={recipientType} bloodType={recipientType} size="md" />
                ))}
              </div>
              <p style={{ fontSize: 'var(--font-size-xs)', marginTop: '8px' }}>
                {compatibilityInfo?.description}
              </p>
            </div>

            <div className="compatibility-col">
              <h3 className="compatibility-col-title">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="var(--color-success)" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.707-7.293l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414z" clipRule="evenodd" />
                </svg>
                <span>If you are {selectedBlood}, you can receive red blood cells from:</span>
              </h3>
              <div className="compatibility-badges-row">
                {compatibilityInfo?.canReceiveFrom.map((donorType) => (
                  <span key={donorType} className="compatibility-badge-item">
                    {donorType}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Urgent Requests Preview */}
      <section className="page-container" aria-labelledby="urgent-title">
        <div className="section-header">
          <span className="section-tag">Urgent Shortages</span>
          <h2 id="urgent-title" className="section-title">
            Patients In Immediate Need
          </h2>
          <p className="section-subtitle">
            Hospitals in your district have requested emergency units. Every minute matters.
          </p>
        </div>

        <div className="requests-grid">
          {FEATURED_REQUESTS.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              donorBloodType={selectedBlood}
            />
          ))}
        </div>

        <div className="requests-footer-action">
          <Link to="/dashboard">
            <Button variant="secondary" size="md">
              Browse All Active Requests in Dashboard →
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="page-container" aria-labelledby="how-it-works-title">
        <div className="section-header">
          <span className="section-tag">Step-by-step</span>
          <h2 id="how-it-works-title" className="section-title">
            How Lifeline Works
          </h2>
          <p className="section-subtitle">
            A simple, secure process engineered to eliminate emergency blood shortages.
          </p>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <div className="step-number" aria-hidden="true">1</div>
            <h3 className="step-title">Register Your Profile</h3>
            <p className="step-desc">
              Create an account with your blood type, location, and the date of your last donation so we know when you are eligible.
            </p>
          </article>

          <article className="step-card">
            <div className="step-number" aria-hidden="true">2</div>
            <h3 className="step-title">Get Matched Instantly</h3>
            <p className="step-desc">
              When a local hospital or recipient submits a request that matches your blood type, you receive a direct notification.
            </p>
          </article>

          <article className="step-card">
            <div className="step-number" aria-hidden="true">3</div>
            <h3 className="step-title">Donate & Save a Life</h3>
            <p className="step-desc">
              Head to the verified medical center to complete your donation. Track your resting period and view your lifetime impact.
            </p>
          </article>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="page-container">
        <div className="cta-banner">
          <h2>Be the Reason Someone Goes Home Today</h2>
          <p>
            One single donation can save up to three lives. Join thousands of compassionate donors in your city.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Create Free Account Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

