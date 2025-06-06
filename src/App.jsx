import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import Section from './components/Section';
import PromotionSection from './components/PromotionSection';
import SeatBookingPage from './pages/SeatBookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './App.css';

const allMovies = [
  {
    title: 'Vệ Binh Dải Ngân Hà 2',
    genre: 'Aventure · Sci-Fi',
    duration: '137 phút',
    img: '/vebinh2.jpg',
    date: '19/04/2024',
    cinema: 'Galaxy Nguyễn Du',
    rating: 9.3,
    ageLabel: 'T13',
    status: 'now',
    trailerUrl: 'https://www.youtube.com/watch?v=TgkvytwAO2I',
  },
  {
    title: 'Săn Lùng',
    genre: 'Action · Thriller',
    duration: '125 phút',
    img: '/sanlung.jpg',
    date: '19/04/2024',
    cinema: 'Galaxy Quang Trung',
    rating: 7.7,
    ageLabel: 'T16',
    status: 'now',
    trailerUrl: 'https://www.youtube.com/watch?v=6W6t3WmFai0',
  },
  {
    title: 'Lilo và Stitch',
    genre: 'Animation · Comedy',
    duration: '98 phút',
    img: '/lilostitch.jpg',
    date: '23/05/2025',
    cinema: 'Galaxy Tân Bình',
    rating: 9.2,
    ageLabel: 'P',
    status: 'now',
    trailerUrl: 'https://www.youtube.com/watch?v=fxTIEjMGjZQ',
  },
  {
    title: 'Tiệc Trăng Máu',
    genre: 'Fantasy · Family',
    duration: '105 phút',
    img: '/tiectrangmau.jpg',
    date: '20/04/2024',
    cinema: 'Galaxy Nguyễn Du',
    rating: 7.0,
    ageLabel: 'P',
    status: 'coming',
    trailerUrl: 'https://www.youtube.com/watch?v=1VR1L6NFG7c',
  },
  {
    title: 'Hai Phượng',
    genre: 'Horror · Adventure',
    duration: '93 phút',
    img: '/haiphuong.jpg',
    date: '20/04/2024',
    cinema: 'Galaxy Quang Trung',
    rating: 9.4,
    ageLabel: 'T18',
    status: 'coming',
    trailerUrl: 'https://www.youtube.com/watch?v=5U3Pj5iuk3A',
  },
  {
    title: 'Nhà Bà Nữ',
    genre: 'Drama · Comedy',
    duration: '102 phút',
    img: '/nhabanu.jpg',
    date: '12/04/2024',
    cinema: 'Galaxy Kinh Dương Vương',
    rating: 8.5,
    ageLabel: 'T13',
    status: 'coming',
    trailerUrl: 'https://www.youtube.com/watch?v=1FzBaKBWj3Y',
  },
];

function HomePage({ onTrailerClick }) {
  const [activeTab, setActiveTab] = useState('now');
  const navigate = useNavigate();
  const filteredMovies = allMovies.filter((m) => m.status === activeTab);

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <Header />
      <Slider />

      <Section background="#ffffff" textColor="#000000">
        <div className="tab-wrapper">
          <div className="tab-bar">
            <button
              className={activeTab === 'now' ? 'active' : ''}
              onClick={() => setActiveTab('now')}
            >
              🎬 Đang Chiếu
            </button>
            <button
              className={activeTab === 'coming' ? 'active' : ''}
              onClick={() => setActiveTab('coming')}
            >
              🎥 Sắp Chiếu
            </button>
          </div>

          <div className="movie-grid">
            {filteredMovies.map((movie, i) => (
              <MovieCard
                key={i}
                movie={movie}
                onTrailerClick={(url) => onTrailerClick(url)}
                onBookClick={() => navigate('/booking')}
              />
            ))}
          </div>
        </div>
      </Section>

      <PromotionSection />

      <Section title="Góc Điện Ảnh" background="#ffffff" textColor="#000000">
        <img src="/assets/images/blog1.jpg" alt="Blog 1" style={{ width: 300 }} />
        <img src="/assets/images/blog2.jpg" alt="Blog 2" style={{ width: 300 }} />
        <img src="/assets/images/blog3.jpg" alt="Blog 3" style={{ width: 300 }} />
      </Section>
    </div>
  );
}

function App() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onTrailerClick={(url) => {
                setTrailerUrl(url);
                setShowTrailer(true);
              }}
            />
          }
        />
        <Route path="/booking" element={<SeatBookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-button" onClick={() => setShowTrailer(false)}>
              ✖
            </button>
            <iframe
              src={trailerUrl.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
