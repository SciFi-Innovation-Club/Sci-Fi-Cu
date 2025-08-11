import Stars from '../../components/Stars';
import './page.css';

export default function Join() {
  return (
    <div className="join-container">
      <Stars />
      <div className="join-content">
        <div className="join-wrapper">
          <div className="join-header">
            <h1 className="join-title">
              Join the Future
            </h1>
            <p className="join-subtitle">
              Ready to explore the future through creativity, innovation, and science fiction? 
              Join the Sci-Fi Innovation Club and embark on an exciting journey!
            </p>
          </div>

          <div className="join-grid">
            <div className="join-card blue">
              <h2 className="card-title blue">Why Join Us?</h2>
              <ul className="benefits-list">
                <li>Explore cutting-edge technologies and futuristic concepts</li>
                <li>Participate in innovation workshops and brainstorming sessions</li>
                <li>Network with like-minded innovators and creators</li>
                <li>Take part in hackathons, tech hunts, and competitions</li>
                <li>Access exclusive resources and guest lectures</li>
              </ul>
            </div>

            <div className="join-card purple">
              <h2 className="card-title purple">Membership Benefits</h2>
              <ul className="benefits-list">
                <li>Free access to all club events and workshops</li>
                <li>Participation certificates and achievement badges</li>
                <li>Mentorship from senior members and industry experts</li>
                <li>Opportunities to showcase your projects and ideas</li>
                <li>Leadership opportunities within the club</li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h2 className="cta-title">Ready to Join?</h2>
            <p className="cta-description">
              Connect with us on our social media platforms or reach out directly!
            </p>
            
            <div className="cta-buttons">
              <a
                href="https://www.instagram.com/scifiinnovationclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                Follow on Instagram
              </a>
              <a
                href="https://cuintranet.in/clubs"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                Join Now
              </a>
              <a
                href="https://www.linkedin.com/company/103704187"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="contact-info">
              <p className="contact-text">Or contact us directly at our events on campus!</p>
              <p className="contact-text">
                <span>📍</span> Chandigarh University, Punjab
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
