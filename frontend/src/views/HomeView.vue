<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="container py-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <p class="hero-badge">🎉 ยินดีต้อนรับสู่ Online Shop</p>
            <h1 class="hero-title">ช้อปสินค้าแบบใหม่ง่าย ๆ</h1>
            <p class="hero-text">
              เราเป็นแพลตฟอร์มช้อปออนไลน์ที่ให้บริการดีเยี่ยม ราคาถูก และมีสินค้าหลากหลาย สำหรับทุกไลฟ์สไตล์ของคุณ
            </p>
            <div class="d-flex flex-wrap gap-2">
              <router-link to="/shop" class="btn btn-primary btn-lg">🛍️ ไปช้อปเลย</router-link>
              <router-link to="/contact" class="btn btn-outline-light btn-lg">📞 ติดต่อเรา</router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="feature-cards">
              <div class="feature-card">
                <div class="feature-icon">📦</div>
                <h5>ส่งด่วน</h5>
                <p class="small">ส่งถึงมือในเวลา 24 ชั่วโมง</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">💯</div>
                <h5>100% ของแท้</h5>
                <p class="small">สินค้าแท้ 100% หรือคืนเงิน</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h5>ปลอดภัย</h5>
                <p class="small">ชำระเงินปลอดภัยด้วย SSL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container py-5">
        <div class="row g-4 text-center">
          <div class="col-md-3">
            <div class="stat-item">
              <div class="stat-number">10K+</div>
              <p class="stat-label">ลูกค้าพอใจ</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <p class="stat-label">สินค้า</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-item">
              <div class="stat-number">99%</div>
              <p class="stat-label">ความพึงพอใจ</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <p class="stat-label">บริการ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎯 ส่วน Call to Action - เชิญชวนผู้ใช้ไปช้อปสินค้า -->
    <section class="cta-section">
      <div class="container py-5">
        <div class="cta-content text-center">
          <h2 class="cta-title">เริ่มต้นช้อปของคุณวันนี้</h2>
          <p class="cta-text">ค้นหาสินค้าที่คุณชอบและสั่งซื้อได้ง่ายๆ ไม่มีค่าส่งสำหรับการซื้อครั้งแรก!</p>
          <router-link to="/shop" class="btn btn-light btn-lg mt-3">
            🛒 ไปตรวจสอบสินค้า
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 🎨 ตัวแปรธีมสีและการจัดวาง */
.home-page {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  min-height: 100vh;
}

/* Hero - พื้นหลังหลัก */
.hero-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%), url(@/assets/image/bg.jpg);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 3rem 0;
}

/* ป้ายแสดงสถานะพิเศษ */
.hero-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

/*  หัวข้อหลัก */
.hero-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
}

/*  ข้อความคำบรรยาย */
.hero-text {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.95);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/*  cards */
.feature-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.feature-card {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

/*  ไอคอนคุณลักษณะ */
.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.feature-card h5 {
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: white;
}

.feature-card p {
  color: rgba(255,255,255,0.8);
  margin: 0;
}

/* ส่วนแสดงสถิติ */
.stats-section {
  background: white;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.stat-item {
  padding: 2rem 1rem;
}

/*  ตัวเลขสถิติ */
.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}

/*  ส่วนเรียกชวน Call to Action */
.cta-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.cta-content {
  padding: 3rem 2rem;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.95);
  margin-bottom: 1rem;
}

/*  Responsive สำหรับ Mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
}
</style>