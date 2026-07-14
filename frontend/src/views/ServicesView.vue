<template>
  <div class="services-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="container py-5">
        <h1 class="hero-title">บริการของเรา</h1>
        <p class="hero-text">บริการที่เราให้ คือความสำคัญที่สุดของเรา</p>
      </div>
    </section>

    <div class="container py-5">
      <div class="row g-4">
        <!-- บริการที่ 1 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">🚚</div>
            <h4 class="service-title">ส่งด่วน 24 ชั่วโมง</h4>
            <p class="service-desc">
              ส่งสินค้าถึงมือคุณภายใน 24 ชั่วโมง ทั้งในพื้นที่กรุงเทพและต่างจังหวัด
            </p>
          </div>
        </div>

        <!-- บริการที่ 2 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">💯</div>
            <h4 class="service-title">สินค้าแท้ 100%</h4>
            <p class="service-desc">
              ทุกสินค้าที่ขายเป็นของแท้ 100% รับประกัน หากไม่ใช่คืนเงินเต็มจำนวน
            </p>
          </div>
        </div>

        <!-- บริการที่ 3 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">🔒</div>
            <h4 class="service-title">ชำระเงินปลอดภัย</h4>
            <p class="service-desc">
              เข้ารหัส SSL และการชำระเงินผ่านช่องทางที่ปลอดภัย ข้อมูลส่วนตัวคุณปลอดภัยอย่างแน่นอน
            </p>
          </div>
        </div>

        <!-- บริการที่ 4 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">📞</div>
            <h4 class="service-title">บริการลูกค้า 24/7</h4>
            <p class="service-desc">
              ทีมบริการลูกค้าของเราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง ทุกวัน
            </p>
          </div>
        </div>

        <!-- บริการที่ 5 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">💰</div>
            <h4 class="service-title">คืนเงินรับประกัน</h4>
            <p class="service-desc">
              ไม่พอใจ? คืนเงินได้ภายใน 30 วัน โดยไม่ต้องให้เหตุผล
            </p>
          </div>
        </div>

        <!-- บริการที่ 6 -->
        <div class="col-md-6 col-lg-4">
          <div class="service-card">
            <div class="service-icon">🎁</div>
            <h4 class="service-title">โปรโมชั่นพิเศษ</h4>
            <p class="service-desc">
              สมาชิกใหม่รับส่วนลด 10% และมีโปรโมชั่นพิเศษตลอดปี
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container py-5">
        <h2 class="section-title">คำถามที่พบบ่อย</h2>
        <div class="faq-items">
          <div class="faq-item">
            <h5 class="faq-question">❓ ค่าส่งเท่าไหร่?</h5>
            <p class="faq-answer">ส่งฟรีสำหรับการซื้อครั้งแรก หลังจากนั้นค่าส่ง 50 บาท สำหรับพื้นที่เมือง 100 บาท สำหรับต่างจังหวัด</p>
          </div>
          <div class="faq-item">
            <h5 class="faq-question">❓ ใช้เวลานานแค่ไหนในการจัดส่ง?</h5>
            <p class="faq-answer">ส่งด่วน 24 ชั่วโมง สำหรับการสั่งซื้อก่อน 15:00 น. ส่งได้ในวันเดียวกัน</p>
          </div>
          <div class="faq-item">
            <h5 class="faq-question">❓ มีวิธีติดต่อเราอย่างไร?</h5>
            <p class="faq-answer">ติดต่อผ่าน LINE, Facebook, Phone: 08-XXXX-XXXX หรือ Email: support@shopstore.com</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.8rem;
}

.service-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.faq-section {
  background: #f8fbff;
  padding: 4rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
}

.faq-items {
  display: grid;
  gap: 1.5rem;
}

.faq-item {
  background: white;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.faq-question {
  color: #667eea;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.faq-answer {
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .service-icon {
    font-size: 2.5rem;
  }
}
</style>