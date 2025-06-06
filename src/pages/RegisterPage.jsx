import React, { useState } from 'react';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    alert('Đăng ký thành công!');
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="form-box">
        <h2>Đăng Ký</h2>
        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Đăng ký</button>
        <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage; // ✅ Phải có dòng này
