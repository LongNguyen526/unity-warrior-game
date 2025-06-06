import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/logo.png" alt="Galaxy Logo" className="logo-img" />
      </Link>

      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/#lich-chieu">Lịch Chiếu</Link></li>
          <li><Link to="/#phim">Phim</Link></li>
          <li><Link to="/#uudai">Ưu Đãi</Link></li>
          <li><Link to="/#gocdienanh">Góc Điện Ảnh</Link></li>
          <li><Link to="/#ungdung">Ứng Dụng</Link></li>
          <li><Link to="/#lienhe">Liên Hệ</Link></li>
        </ul>
      </nav>

      <div className="account">
        <Link to="/login">
          <button className="login-button">Đăng nhập</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
