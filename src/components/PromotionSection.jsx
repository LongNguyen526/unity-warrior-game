import React from 'react';
import './PromotionSection.css';

const PromotionSection = () => {
  const promotions = [
    {
      title: "Ưu đãi Galaxy",
      img: "/assets/images/promotions/uudai1.jpg",
      description: "Ưu đãi hấp dẫn cho thành viên Galaxy"
    },
    {
      title: "Mua vé nhận quà",
      img: "/assets/images/promotions/uudai2.jpg",
      description: "Mua vé xem phim nhận combo quà tặng"
    },
    {
      title: "Thẻ thành viên",
      img: "/assets/images/promotions/uudai3.jpg",
      description: "Tích điểm - Đổi quà - Nhận ưu đãi"
    }
  ];

  return (
    <section className="promotion-section">
      <h2>Khuyến mãi</h2>
      <div className="promo-list">
        {promotions.map((promo, index) => (
          <div key={index} className="promo-card">
            <img src={promo.img} alt={promo.title} />
            <h4>{promo.title}</h4>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionSection;
