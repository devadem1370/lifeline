import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import Button from '../components/Button';
import BloodBadge from '../components/BloodBadge';
import { ALL_BLOOD_TYPES } from '../utils/bloodCompatibility';
const EXTENDED_BLOOD_TYPES = [...ALL_BLOOD_TYPES, "Don't Know"];

export default function RegisterPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState('donor');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    bloodType: 'O+',
    lastDonationDate: '',
    password: '',
    confirmPassword: '',
    agreeToAlerts: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
    // Clear field-specific error as user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleBloodSelect = (type) => {
    setFormData((prev) => ({ ...prev, bloodType: type }));
    if (errors.bloodType) {
      setErrors((prev) => ({ ...prev, bloodType: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for emergency alerts';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City or healthcare district is required';
    }

    if (!formData.bloodType) {
      newErrors.bloodType = 'Please select a blood type';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate instant local UI transition (no backend/API)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  // Success view once registered
  if (isSuccess) {
    return (
      <div className="page-container register-page">
        <div className="register-card success-card">
          <div className="success-icon-wrapper" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="success-title">Account Created!</h1>
          <p className="success-desc">
            Welcome to Lifeline, <strong>{formData.fullName}</strong>. You are now part of a life-saving network ready to respond to urgent blood shortages.
          </p>

          <div className="success-summary-box">
            <div className="success-summary-row">
              <span style={{ color: 'var(--color-text-subtle)' }}>Registered Role:</span>
              <strong style={{ textTransform: 'capitalize' }}>{role}</strong>
            </div>
            <div className="success-summary-row">
              <span style={{ color: 'var(--color-text-subtle)' }}>Blood Group:</span>
              <BloodBadge bloodType={formData.bloodType} size="sm" />
            </div>
            <div className="success-summary-row">
              <span style={{ color: 'var(--color-text-subtle)' }}>Location:</span>
              <strong>{formData.city}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', maxWidth: '320px', margin: '0 auto' }}>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard →
            </Button>
            <Link to="/">
              <Button variant="secondary" size="md" fullWidth>
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container register-page">
      <div className="register-card">
        <header className="register-header">
          <div className="register-badge-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="register-title">Create Your Lifeline Account</h1>
          <p className="register-subtitle">
            Join voluntary donors and hospitals working together to save lives.
          </p>
        </header>

        {/* Role Toggle */}
        <div className="role-selector" role="group" aria-label="Select account role">
          <button
            type="button"
            className={`role-option-button ${role === 'donor' ? 'active' : ''}`}
            onClick={() => setRole('donor')}
            aria-pressed={role === 'donor'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>Voluntary Blood Donor</span>
          </button>
          <button
            type="button"
            className={`role-option-button ${role === 'recipient' ? 'active' : ''}`}
            onClick={() => setRole('recipient')}
            aria-pressed={role === 'recipient'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Hospital / Recipient</span>
          </button>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <FormField
              id="fullName"
              label="Full Legal Name"
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
              autoComplete="name"
            />

            <FormField
              id="email"
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-row">
            <FormField
              id="phone"
              label="Mobile Phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              hint="Emergency text alerts are sent here"
              required
              autoComplete="tel"
            />

            <FormField
              id="city"
              label="City or Healthcare District"
              placeholder="e.g. Metro Central"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              required
            />
          </div>

          {/* Blood Group Selector */}
          <div className="blood-picker-field">
            <span id="blood-type-label" className="blood-picker-label">
              Blood Type <span className="form-field-required" aria-hidden="true">*</span>
            </span>

            <div
              className="blood-picker-grid"
              role="radiogroup"
              aria-labelledby="blood-type-label"
            >
              {EXTENDED_BLOOD_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  role="radio"
                  aria-checked={formData.bloodType === type}
                  className={`blood-picker-btn ${formData.bloodType === type ? 'active' : ''}`}
                  onClick={() => handleBloodSelect(type)}
                >
                  <span>{type}</span>
                </button>
              ))}
            </div>
            {errors.bloodType && (
              <span className="form-field-error" role="alert">
                {errors.bloodType}
              </span>
            )}
          </div>

          {/* Last Donation Date (Only for Donors) */}
          {role === 'donor' && (
            <FormField
              id="lastDonationDate"
              label="Date of Last Blood Donation (Optional)"
              type="date"
              value={formData.lastDonationDate}
              onChange={handleChange}
              hint="Leave blank if you have never donated before. We compute your 90-day recovery cycle automatically."
            />
          )}

          <div className="form-row">
            <FormField
              id="password"
              label="Create Password"
              type="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="new-password"
            />

            <FormField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
              autoComplete="new-password"
            />
          </div>

          {/* Checkbox */}
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="agreeToAlerts"
              checked={formData.agreeToAlerts}
              onChange={handleChange}
              className="checkbox-input"
            />
            <label htmlFor="agreeToAlerts" className="checkbox-label">
              I agree to receive urgent blood request notifications in my district and accept Lifeline's donor code of conduct.
            </label>
          </div>

          {/* Submit Actions */}
          <div className="form-actions">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Complete Registration
            </Button>

            <p className="register-login-switch">
              Already have an account?{' '}
              <Link to="/dashboard">Go directly to Dashboard</Link>
            </p>
          </div>

          {/* Trust Badge */}
          <div className="register-trust-badge">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            <span>Your personal and medical contact details are stored securely & privately.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
