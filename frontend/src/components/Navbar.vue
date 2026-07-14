<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <span class="logo-icon">🛒</span>
        <span class="logo-text">ShopStore</span>
      </router-link>

      <!-- Toggler Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu Items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav gap-2 mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">🏠 หน้าแรก</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">🛍️ สินค้า</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">📦 บริการ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">📞 ติดต่อ</router-link>
          </li>
        </ul>

        <!-- Right Menu -->
        <div class="navbar-right ms-auto">
          <router-link to="/login" class="nav-link login-link">🔐 เข้าสู่ระบบ</router-link>
          <button class="cart-btn">
            🛒 ตะกร้า <span class="badge bg-danger">0</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  color: white !important;
  transition: transform 0.2s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 1.8rem;
}

.logo-text {
  letter-spacing: 1px;
}

.navbar-nav {
  padding: 0.5rem 0;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
  transition: color 0.2s ease, transform 0.2s ease;
  padding: 0.5rem 1rem !important;
  border-radius: 8px;
}

.nav-link:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0;
  margin-top: 0;
  border-top: none;
}

.login-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
}

.cart-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cart-btn:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.badge {
  font-size: 0.75rem;
  margin-left: 0.3rem;
}

/* Mobile Responsive */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    margin: 1rem 0;
  }

  .navbar-right {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }

  .cart-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>