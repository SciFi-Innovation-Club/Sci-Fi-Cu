import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Sci-Fi Innovation Club, CU. All rights reserved.
      </p>
    </footer>
  );
}
