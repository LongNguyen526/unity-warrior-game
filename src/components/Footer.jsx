import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src="/logo.png" alt="Galaxy" className="footer-logo" />
      <p>&copy; 2025 Galaxy Cinema. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a> | <a href="#">YouTube</a> | <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer; // ✅ Dòng này là bắt buộc
