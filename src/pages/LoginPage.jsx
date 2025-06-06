import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      alert('Đăng nhập thành công!');
      navigate('/');
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="login-page">
      <div className="form-box">
        <h2>Đăng Nhập</h2>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Đăng nhập</button>
        <p>
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
