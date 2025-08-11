import Stars from '../../components/Stars';
import './page.css';

export default function About() {
  return (
    <div className="about-container">
      <Stars />
      <div className="about-content">
        <div className="about-wrapper">
          {/* Hero Section */}
          <div className="about-header">
            <h1 className="about-title">
              About Our Vision
            </h1>
            <p className="about-subtitle">
              Exploring the future through creativity, innovation, and the boundless imagination of science fiction.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                To create a dynamic and inclusive community at Chandigarh University where students can explore the realms of science fiction and harness its power to inspire real-world innovation.
              </p>
              <p className="mission-text">
                We foster a culture of creativity, critical thinking, and collaboration, encouraging members to dream beyond conventional boundaries and contribute to the advancement of technology and society.
              </p>
            </div>

            <div className="vision-card">
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-text">
                To be the leading platform for sci-fi enthusiasts and innovators, bridging the gap between imagination and reality.
              </p>
              <p className="vision-text">
                We envision a future where our club members become the pioneers of tomorrow's technologies, inspired by the limitless possibilities of science fiction.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="activities-section">
            <h2 className="activities-title">
              What We Do
            </h2>
            <div className="activities-grid">
              <div className="activity-card">
                <div className="activity-icon">🚀</div>
                <h3 className="activity-name">Explore Science Fiction</h3>
                <p className="activity-description">
                  Dive deep into sci-fi literature, movies, and concepts that challenge our understanding of the possible and impossible.
                </p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">🔬</div>
                <h3 className="activity-name">Innovation Workshops</h3>
                <p className="activity-description">
                  Hands-on sessions where we turn futuristic ideas into reality through practical experimentation and prototyping.
                </p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">🎉</div>
                <h3 className="activity-name">Tech Events</h3>
                <p className="activity-description">
                  Organize hackathons, think-a-thons, and tech hunts that challenge conventional thinking and spark innovation.
                </p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">🤝</div>
                <h3 className="activity-name">Community Building</h3>
                <p className="activity-description">
                  Create a space for like-minded individuals to collaborate, share ideas, and build lasting connections.
                </p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">🔮</div>
                <h3 className="activity-name">Future Technologies</h3>
                <p className="activity-description">
                  Research and discuss emerging technologies like AI, robotics, space exploration, and quantum computing.
                </p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">🎯</div>
                <h3 className="activity-name">Skills Development</h3>
                <p className="activity-description">
                  Build technical skills, critical thinking abilities, and leadership qualities through engaging activities.
                </p>
              </div>
            </div>
          </div>

          {/* Our Events */}
          <div className="events-section">
            <h2 className="events-title">
              Signature Events
            </h2>
            <div className="events-grid">
              <div className="event-card tech-hunt">
                <h3 className="event-name">TECH-A-HUNT</h3>
                <p className="event-description">
                  Our flagship technical treasure hunt that challenges participants to solve complex puzzles, 
                  decode futuristic scenarios, and navigate through mind-bending challenges that test both 
                  technical skills and creative thinking.
                </p>
              </div>

              <div className="event-card think-thon">
                <h3 className="event-name">THINK-A-THON</h3>
                <p className="event-description">
                  Intensive brainstorming sessions where brilliant minds come together to tackle real-world 
                  problems using sci-fi inspired solutions. From sustainable cities to space colonization, 
                  no idea is too ambitious.
                </p>
              </div>

              <div className="event-card workshops">
                <h3 className="event-name">Innovation Workshops</h3>
                <p className="event-description">
                  Hands-on learning experiences covering cutting-edge technologies, from AI and machine learning 
                  to robotics and virtual reality. Learn by doing, create by imagining.
                </p>
              </div>

              <div className="event-card lectures">
                <h3 className="event-name">Guest Lectures</h3>
                <p className="event-description">
                  Industry experts, researchers, and visionaries share their insights on the future of 
                  technology, space exploration, and the intersection of science fiction with reality.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h2 className="values-title">
              Our Core Values
            </h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3 className="value-name">Innovation</h3>
                <p className="value-description">Pushing boundaries and thinking beyond limits</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3 className="value-name">Exploration</h3>
                <p className="value-description">Venturing into uncharted territories of knowledge</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤖</div>
                <h3 className="value-name">Technology</h3>
                <p className="value-description">Embracing the power of emerging technologies</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3 className="value-name">Impact</h3>
                <p className="value-description">Creating positive change for humanity</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="join-action-section">
            <div className="join-action-card">
              <h2 className="join-action-title">Ready to Shape the Future?</h2>
              <p className="join-action-description">
                Join a community of dreamers, innovators, and future-builders at Chandigarh University.
              </p>
              <a href="/join" className="join-action-button">
                Join the Revolution
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
