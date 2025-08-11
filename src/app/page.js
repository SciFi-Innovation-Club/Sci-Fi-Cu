import Stars from '../components/Stars';
import './page.css';

export default function Home() {
  return (
    <div className="home-container">
      <Stars />
      
      {/* Blue Orbital Background Effect */}
      <div className="orbital-background">
        <div className="orbital-center">
          {/* Large blue orbital ring */}
          <div className="orbital-ring large"></div>
          
          {/* Medium blue orbital ring */}
          <div className="orbital-ring medium"></div>
          
          {/* Inner blue glow */}
          <div className="orbital-glow inner"></div>
          
          {/* Central bright spot */}
          <div className="orbital-glow central"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          {/* Small subtitle */}
          <div className="hero-subtitle-wrapper">
            <p className="hero-subtitle">
              Chandigarh University's premier science fiction and innovation hub with passionate tech enthusiasts.
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Sci-Fi Innovation
            <br />
            <span className="hero-title-accent">
              Club
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            A new era of technological innovation and sci-fi exploration.
          </p>

          {/* Join Now Button */}
          <div className="hero-button-wrapper">
            <a href="/join" className="hero-button">
              Join Now
            </a>
          </div>

          {/* Status Indicator */}
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">Registrations Open!</span>
          </div>
        </div>
      </main>
    </div>
  );
}
