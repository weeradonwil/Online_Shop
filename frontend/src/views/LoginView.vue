<template>
  <div class="login-page">
    <!-- ส่วน Hero -->
    <section class="hero-section">
      <div class="container py-5">
        <h1 class="hero-title">เข้าสู่ระบบ</h1>
        <p class="hero-text">ยินดีต้อนรับกลับมา</p>
      </div>
    </section>

    <!-- ส่วนฟอร์มล็อกอิน -->
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="login-card">
            <div class="login-header">
              <div class="login-icon">🔐</div>
              <h2 class="login-title">เข้าสู่ระบบ</h2>
            </div>

            <!-- ฟอร์มล็อกอิน -->
            <form class="login-form" @submit.prevent="handleLogin">
              <!-- อีเมล -->
              <div class="form-group">
                <label for="email" class="form-label">อีเมล *</label>
                <input
                  type="email"
                  id="email"
                  v-model="loginData.email"
                  class="form-control"
                  placeholder="กรุณากรอกอีเมล"
                  required
                />
              </div>

              <!-- รหัสผ่าน -->
              <div class="form-group">
                <label for="password" class="form-label">รหัสผ่าน *</label>
                <div class="password-input-group">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    id="password"
                    v-model="loginData.password"
                    class="form-control"
                    placeholder="กรุณากรอกรหัสผ่าน"
                    required
                  />
                  <button
                    type="button"
                    class="password-toggle"
                    @click="showPassword = !showPassword"
                  >
                    {{ showPassword ? "👁️" : "👁️‍🗨️" }}
                  </button>
                </div>
              </div>

              <!-- จำไว้ในอุปกรณ์นี้ -->
              <div class="form-check">
                <input
                  type="checkbox"
                  id="remember"
                  v-model="loginData.remember"
                  class="form-check-input"
                />
                <label for="remember" class="form-check-label">
                  จำไว้ในอุปกรณ์นี้
                </label>
              </div>

              <!-- ปุ่มเข้าสู่ระบบ -->
              <button type="submit" class="btn-login">
                🔓 เข้าสู่ระบบ
              </button>
            </form>

            <!-- ลิงค์เพิ่มเติม -->
            <div class="login-links">
              <router-link to="#forgot-password" class="link-forgot">
                ลืมรหัสผ่าน?
              </router-link>
              <span class="divider">|</span>
              <router-link to="#register" class="link-register">
                สมัครสมาชิกใหม่
              </router-link>
            </div>

            <!-- ข้อความสำเร็จ/ข้อผิดพลาด -->
            <div v-if="successMessage" class="success-message">
              ✅ {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="error-message">
              ❌ {{ errorMessage }}
            </div>
          </div>

          <!-- วิธีเข้าสู่ระบบอื่นๆ -->
          <div class="social-login">
            <div class="divider-text">หรือเข้าสู่ระบบผ่าน</div>
            <div class="social-buttons">
              <button class="social-btn facebook">
                <span class="social-icon">f</span> Facebook
              </button>
              <button class="social-btn google">
                <span class="social-icon">G</span> Google
              </button>
              <button class="social-btn line">
                <span class="social-icon">🟢</span> LINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ℹ️ ส่วนข้อมูล -->
    <section class="info-section">
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="info-card">
              <div class="info-icon">🛡️</div>
              <h5>ปลอดภัย</h5>
              <p>ข้อมูลของคุณได้รับการเข้ารหัส SSL 100%</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="info-card">
              <div class="info-icon">⚡</div>
              <h5>รวดเร็ว</h5>
              <p>เข้าสู่ระบบได้ในไม่กี่วินาที</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="info-card">
              <div class="info-icon">📱</div>
              <h5>ทุกที่ทุกเวลา</h5>
              <p>เข้าสู่ระบบจากมือถือหรือคอมพิวเตอร์</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="info-card">
              <div class="info-icon">💬</div>
              <h5>ช่วยเหลือ</h5>
              <p>บริการลูกค้า 24/7 พร้อมช่วยเสมอ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loginData = ref({
  email: "",
  password: "",
  remember: false,
});

const showPassword = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const handleLogin = () => {
  // ตรวจสอบอีเมล
  if (!loginData.value.email.includes("@")) {
    errorMessage.value = "กรุณากรอกอีเมลที่ถูกต้อง";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
    return;
  }

  // ตรวจสอบรหัสผ่าน
  if (loginData.value.password.length < 6) {
    errorMessage.value = "รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
    return;
  }

  // ล็อกอินสำเร็จ
  successMessage.value = `ยินดีต้อนรับ ${loginData.value.email.split("@")[0]}! กำลังเข้าสู่ระบบ...`;

  // เปลี่ยนหน้าไปหน้าแรกหลังจาก 2 วินาที
  setTimeout(() => {
    router.push("/");
  }, 2000);

  // รีเซ็ตฟอร์ม
  loginData.value = {
    email: "",
    password: "",
    remember: false,
  };
};
</script>

<style scoped>
/* 🎨 ตัวแปรธีมสี */
.login-page {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ✨ ส่วน Hero */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 3rem 0;
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

/* 🔐 การ์ดล็อกอิน */
.login-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: block;
}

.login-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
}

/* 📋 ฟอร์ม */
.login-form {
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
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 👁️ ปุ่มแสดงรหัสผ่าน */
.password-input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input-group .form-control {
  padding-right: 2.5rem;
}

.password-toggle {
  position: absolute;
  right: 0.8rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.password-toggle:hover {
  opacity: 1;
}

/* ☑️ Checkbox */
.form-check {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-check-input {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.form-check-label {
  color: #64748b;
  cursor: pointer;
  margin: 0;
}

/* 🔓 ปุ่มเข้าสู่ระบบ */
.btn-login {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

/* 🔗 ลิงค์เพิ่มเติม */
.login-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.link-forgot,
.link-register {
  text-decoration: none;
  color: #667eea;
  font-weight: 600;
  transition: color 0.2s ease;
}

.link-forgot:hover,
.link-register:hover {
  color: #764ba2;
}

.divider {
  color: #cbd5e1;
}

/* ✅ ข้อความสำเร็จ */
.success-message {
  margin-top: 1rem;
  padding: 0.8rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  color: #155724;
  font-weight: 600;
  text-align: center;
}

/* ❌ ข้อความข้อผิดพลาด */
.error-message {
  margin-top: 1rem;
  padding: 0.8rem;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
  font-weight: 600;
  text-align: center;
}

/* 📱 โซเชียลล็อกอิน */
.social-login {
  margin-top: 2rem;
}

.divider-text {
  text-align: center;
  color: #94a3b8;
  margin-bottom: 1rem;
  position: relative;
}

.divider-text::before,
.divider-text::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 35%;
  height: 1px;
  background: #e2e8f0;
}

.divider-text::before {
  left: 0;
}

.divider-text::after {
  right: 0;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.social-icon {
  font-size: 1.2rem;
}

.social-btn.facebook {
  color: #1877f2;
  border-color: #1877f2;
}

.social-btn.facebook:hover {
  background: #1877f2;
  color: white;
}

.social-btn.google {
  color: #ea4335;
  border-color: #ea4335;
}

.social-btn.google:hover {
  background: #ea4335;
  color: white;
}

.social-btn.line {
  color: #00c300;
  border-color: #00c300;
}

.social-btn.line:hover {
  background: #00c300;
  color: white;
}

/* ℹ️ ส่วนข้อมูล */
.info-section {
  background: #f8fbff;
  padding: 4rem 0;
  margin-top: auto;
}

.info-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
}

.info-card:hover {
  transform: translateY(-4px);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h5 {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .login-card {
    padding: 2rem;
  }

  .login-icon {
    font-size: 2.5rem;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .form-control {
    font-size: 16px; /* ป้องกานการ zoom iOS */
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .login-card {
    border-radius: 15px;
    padding: 1.5rem;
  }

  .social-buttons {
    margin-top: 1.5rem;
  }

  .social-btn {
    font-size: 0.9rem;
    padding: 0.7rem;
  }

  .divider-text {
    font-size: 0.85rem;
  }
}
</style>
