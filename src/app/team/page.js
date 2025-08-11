import Stars from '../../components/Stars';
import TeamCard from '../../components/TeamCard';
import teamData from '../../data/team.json';
import './page.css';

export default function Team() {
  return (
    <div className="team-container">
      <Stars />
      <div className="team-content">
        <div className="team-wrapper">
          {/* Hero Section */}
          <div className="team-header">
            <h1 className="team-title">
              Meet Our Team
            </h1>
            <p className="team-subtitle">
              The visionaries, innovators, and dreamers who make the Sci-Fi Innovation Club a reality.
            </p>
          </div>

          {/* Team Grid */}
          <div className="team-grid">
            {teamData.teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Join Team Section */}
          <div className="join-section">
            <div className="join-card">
              <h2 className="join-title">Want to Join Our Team?</h2>
              <p className="join-description">
                We're always looking for passionate individuals who share our vision of using science fiction 
                to inspire real-world innovation. Join us in shaping the future!
              </p>
              <div className="join-buttons">
                <a href="/join" className="join-button primary">
                  Join the Club
                </a>
                <a href="/contact" className="join-button secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
