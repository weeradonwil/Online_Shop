<template>
  <div class="contact-page">
    <!-- 📞 ส่วน Hero -->
    <section class="hero-section">
      <div class="container py-5">
        <h1 class="hero-title">ติดต่อเรา</h1>
        <p class="hero-text">เราพร้อมรับฟังความคิดเห็นและข้อเสนอแนะของคุณ</p>
      </div>
    </section>

    <!-- 📋 ส่วนเนื้อหา -->
    <div class="container py-5">
      <div class="row g-4">
        <!-- ช่องทางติดต่อ -->
        <div class="col-lg-4">
          <div class="contact-info">
            <h3 class="info-title">ช่องทางติดต่อ</h3>

            <!-- เบอร์โทร -->
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-detail">
                <h5>เบอร์โทรศัพท์</h5>
                <p>08-XXXX-XXXX</p>
              </div>
            </div>

            <!-- อีเมล -->
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-detail">
                <h5>อีเมล</h5>
                <p>support@shopstore.com</p>
              </div>
            </div>

            <!-- ที่อยู่ -->
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-detail">
                <h5>ที่อยู่</h5>
                <p>123 ถนนสุขุมวิท เขตวัฒนา กรุงเทพฯ 10110</p>
              </div>
            </div>

            <!-- เวลาทำการ -->
            <div class="contact-item">
              <div class="contact-icon">🕐</div>
              <div class="contact-detail">
                <h5>เวลาทำการ</h5>
                <p>จันทร์ - ศุกร์: 08:00 - 18:00</p>
                <p>เสาร์ - อาทิตย์: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          <!-- โซเชียลมีเดีย -->
          <div class="social-section mt-4">
            <h5 class="social-title">ติดตามเราในโซเชียลมีเดีย</h5>
            <div class="social-links">
              <a href="#facebook" class="social-link facebook">
                <span>f</span> Facebook
              </a>
              <a href="#line" class="social-link line">
                <span>🔗</span> LINE
              </a>
            </div>
          </div>
        </div>

        <!-- แบบฟอร์มติดต่อ -->
        <div class="col-lg-8">
          <div class="form-section">
            <h3 class="form-title">ส่งข้อความถึงเรา</h3>
            <p class="form-subtitle">กรอกแบบฟอร์มด้านล่าง เราจะติดตอบคุณภายในวัน</p>

            <form class="contact-form" @submit.prevent="handleSubmit">
              <!-- ชื่อ -->
              <div class="form-group">
                <label for="name" class="form-label">ชื่อของคุณ *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="form-control"
                  placeholder="กรุณากรอกชื่อ"
                  required
                />
              </div>

              <!-- อีเมล -->
              <div class="form-group">
                <label for="email" class="form-label">อีเมล *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="form-control"
                  placeholder="กรุณากรอกอีเมล"
                  required
                />
              </div>

              <!-- เบอร์โทร -->
              <div class="form-group">
                <label for="phone" class="form-label">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="form-control"
                  placeholder="08-XXXX-XXXX"
                />
              </div>

              <!-- หัวข้อ -->
              <div class="form-group">
                <label for="subject" class="form-label">หัวข้อ *</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  class="form-control"
                  placeholder="เลือกหัวข้อ"
                  required
                />
              </div>

              <!-- ข้อความ -->
              <div class="form-group">
                <label for="message" class="form-label">ข้อความ *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-control"
                  rows="5"
                  placeholder="กรุณากรอกข้อความ"
                  required
                ></textarea>
              </div>

              <!-- ปุ่มส่ง -->
              <button type="submit" class="btn btn-submit">
                📧 ส่งข้อความ
              </button>
            </form>

            <!-- ข้อความสำเร็จ -->
            <div v-if="successMessage" class="success-message">
              ✅ {{ successMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🗺️ ส่วนแผนที่ -->
    <section class="map-section">
      <div class="container py-5">
        <h2 class="section-title">ตำแหน่งของเรา</h2>
        <div class="map-container">
          <!-- Loading Skeleton -->
          <div class="map-loader">
            <div class="skeleton-pulse"></div>
          </div>
          <!-- แผนที่ -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5476456654635!2d100.57307352342078!3d13.722897386816206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2949d15555555%3A0x1111111111111111!2z4LiFIOC4l-C4ueC5geC4geC4q-C4reC4nOC4oyDguIHguJLguKnguK3guJzguKMg4LiZ4Liq4Lil4Lix4Liq4LiB!5e0!3m2!1sth!2sth!4v1234567890"
            class="map-iframe"
            style="border: none"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const successMessage = ref("");
const mapLoaded = ref(false);

const handleSubmit = () => {
  // ตัวอย่างการส่งข้อมูล (ในจริงต้องส่งไปเซิร์ฟเวอร์)
  console.log("ข้อมูลที่ส่ง:", formData.value);

  successMessage.value = `ขอบคุณ ${formData.value.name} ที่ติดต่อเรา เราจะตอบกลับในไม่ช้า`;

  // รีเซ็ตฟอร์ม
  formData.value = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // ซ่อนข้อความสำเร็จหลังจาก 3 วินาที
  setTimeout(() => {
    successMessage.value = "";
  }, 3000);
};

// ฟังก์ชันสำหรับซ่อน loading เมื่อแผนที่โหลดเสร็จ
const onMapLoad = () => {
  mapLoaded.value = true;
};
</script>

<style scoped>
/* 🎨 ตัวแปรธีมสี */
.contact-page {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  min-height: 100vh;
}

/* ✨ ส่วน Hero */
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

/* 📞 ข้อมูลติดต่อ */
.contact-info {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  font-size: 1.8rem;
  min-width: 3rem;
  text-align: center;
}

.contact-detail h5 {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.3rem;
}

.contact-detail p {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}

/* 📱 โซเชียลมีเดีย */
.social-section {
  border-top: 1px solid #e2e8f0;
  padding-top: 1.5rem;
}

.social-title {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  color: white;
}

.social-link.facebook {
  background: #1877f2;
}

.social-link.facebook:hover {
  background: #0a66c2;
}

.social-link.line {
  background: #00c300;
}

.social-link.line:hover {
  background: #009c00;
}

.social-link.instagram {
  background: #e4405f;
}

.social-link.instagram:hover {
  background: #d03a56;
}

/* 📋 แบบฟอร์ม */
.form-section {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  font-family: inherit;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
}

textarea.form-control {
  resize: vertical;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

/* ✅ ข้อความสำเร็จ */
.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  color: #155724;
  font-weight: 600;
  text-align: center;
}

/* 🗺️ แผนที่ */
.map-section {
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

.map-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  /* สำหรับ Responsive Aspect Ratio */
  width: 100%;
  padding-bottom: 66.66%;
  height: 0;
}

.map-iframe {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.map-iframe[src] {
  opacity: 1;
}

/* 🔄 Loading Skeleton */
.map-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f4f8;
  border-radius: 10px;
  z-index: 2;
  animation: fadeOut 0.5s ease 2s forwards;
}

.skeleton-pulse {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f4f8 25%, #e0e8f0 50%, #f0f4f8 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  border-radius: 10px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    pointer-events: none;
  }
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .contact-info,
  .form-section {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .map-section {
    padding: 2rem 0;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .btn-submit {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .contact-item {
    margin-bottom: 1rem;
  }

  /* ปรับ padding container */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .form-title {
    font-size: 1.2rem;
  }

  .info-title {
    font-size: 1.2rem;
  }

  .contact-info,
  .form-section {
    padding: 1.5rem;
  }

  .form-control,
  .btn-submit {
    font-size: 16px; /* ป้องกันการ zoom บน iOS */
  }

  .section-title {
    font-size: 1.3rem;
  }
}
</style>