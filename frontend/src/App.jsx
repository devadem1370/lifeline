import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import Button from './components/Button';
import './App.css';

function DashboardPlaceholder() {
  return (
    <div className="page-container" style={{ padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
      <h2>Dashboard Screen (Stage 3)</h2>
      <p style={{ margin: 'var(--space-md) auto', maxWidth: '480px' }}>
        Ready to be built in Stage 3 with donor eligibility countdown, blood matching, and active request cards.
      </p>
      <Link to="/">
        <Button variant="secondary">← Return to Landing Page</Button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPlaceholder />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
