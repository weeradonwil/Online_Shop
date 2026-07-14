<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);

const formatPrice = (price) => {
  return Number(price || 0).toLocaleString();
};

const getImageUrl = (imageName) => {
  return new URL(`../assets/image/${imageName}`, import.meta.url).href;
};

onMounted(async () => {
  const res = await axios.get("http://localhost:3000/products");
  products.value = res.data;
});
</script>

<template>
  <div class="shop-page">
    <section class="hero-section">
      <div class="container py-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <p class="hero-badge">✨ สินค้าต่างๆ พร้อมให้คุณเลือกซื้อ</p>
            <h1 class="hero-title">เลือกสินค้าให้ตรงใจคุณ</h1>
            <p class="hero-text">
              ช้อปง่าย สะดวก และมีสินค้าใหม่ให้คุณได้สัมผัสทุกสัปดาห์
            </p>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-light btn-lg">🛍️ ช้อปเลย</button>
              <button class="btn btn-outline-light btn-lg">📦 โปรโมชั่น</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="hero-card">
              <h3 class="mb-2">ยอดขายวันนี้</h3>
              <div class="display-6 fw-bold">+25%</div>
              <p class="mb-0">จากเมื่อวาน</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h2 class="fw-bold mb-1">สินค้าทั้งหมด</h2>
          <p class="text-muted mb-0">เลือกสินค้าได้ทันทีพร้อมรับประกันความพึงพอใจ</p>
        </div>
        <span class="badge rounded-pill bg-primary-subtle text-primary px-3 py-2">
          {{ products.length }} รายการ
        </span>
      </div>

      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="p in products"
          :key="p.id"
        >
          <div class="product-card h-100">
            <div class="image-wrap">
              <img :src="getImageUrl(p.image)" :alt="p.name" />
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">{{ p.name }}</h5>
              <p class="text-muted small mb-3">สินค้าคุณภาพดีพร้อมส่งทันที</p>
              <p class="price-tag">{{ formatPrice(p.price) }} ฿</p>
              <button class="btn btn-primary w-100">
                🛒 เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-page {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.hero-text {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  max-width: 560px;
}

.hero-card {
  background: rgba(255,255,255,0.16);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 20px;
  padding: 1.4rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.product-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.14);
}

.image-wrap {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  padding: 1rem;
}

.image-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-body {
  padding: 1rem 1rem 1.2rem;
}

.card-title {
  font-weight: 700;
  color: #1e293b;
}

.price-tag {
  font-size: 1.15rem;
  font-weight: 800;
  color: #16a34a;
  margin-bottom: 0.9rem;
}
</style>