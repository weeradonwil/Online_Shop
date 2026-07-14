<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const currentPage = ref(1);
const perPage = 10;

// จำนวนหน้าทั้งหมด
const totalPages = computed(() => {
  return Math.ceil(products.value.length / perPage);
});

// สินค้าที่แสดงแต่ละหน้า
const showProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return products.value.slice(start, start + perPage);
});

// เปลี่ยนหน้า
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

// โหลดสินค้าจาก API
onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/products");
    console.log(res.data);
    products.value = res.data;
  } catch (error) {
    console.error("ไม่สามารถโหลดสินค้าได้", error);
  }
});
</script>




<template>
  <div class="shop-container">
    <!-- Title -->
    <div class="title">
      <h1>🛍️ Product List</h1>
      <p>สินค้าทั้งหมดของเรา</p>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">
      <div class="product-card" v-for="p in showProducts" :key="p.id">
        <img :src="`/images/${p.image}`" :alt="p.name" class="product-image" />
        <div class="product-body">
          <h3>{{ p.name }}</h3>
          <p class="price">{{ Number(p.price).toLocaleString() }} ฿</p>
          <button class="buy-btn">🛒 ซื้อสินค้า</button>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination" v-if="totalPages > 1">
      <button
        class="page-btn"
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        ◀ ก่อนหน้า
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="page-number"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>

      <button
        class="page-btn"
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        หน้าถัดไป ▶
      </button>
    </div>
  </div>
</template>





<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container */
.shop-container {
  width: 95%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: 100vh;
}

/* Title Section */
.title {
  text-align: center;
  margin-bottom: 40px;
}

.title h1 {
  font-size: 2.5rem;
  color: #4f6d9b;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title p {
  font-size: 1rem;
  color: #888;
  font-weight: 500;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(79, 109, 155, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(79, 109, 155, 0.15);
  border-color: #8cb9ff;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 10px;
  background: #f8f9fa;
  padding: 8px;
}

.product-body {
  text-align: center;
}

.product-body h3 {
  font-size: 1rem;
  color: #4f6d9b;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 1.3rem;
  color: #198754;
  font-weight: 700;
  margin-bottom: 12px;
}

.buy-btn {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 24px;
  background: linear-gradient(135deg, #8cb9ff 0%, #6fa8ff 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.buy-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(107, 168, 255, 0.4);
}

.buy-btn:active {
  transform: scale(0.98);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-top: 30px;
  border-top: 2px solid #f0f0f0;
}

.page-btn,
.page-number {
  border: 2px solid #bfdfff;
  padding: 10px 16px;
  border-radius: 24px;
  background: white;
  color: #4f6d9b;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.page-btn:hover:not(:disabled),
.page-number:hover {
  background: #8cb9ff;
  color: white;
  border-color: #8cb9ff;
  transform: translateY(-2px);
}

.page-number.active {
  background: #8cb9ff;
  color: white;
  border-color: #8cb9ff;
}

.page-btn:disabled {
  background: #f0f0f0;
  color: #ccc;
  border-color: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Responsive Design */
@media (max-width: 1400px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .shop-container {
    width: 97%;
    padding-top: 100px;
  }

  .title h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .shop-container {
    width: 98%;
    padding-top: 100px;
  }

  .title h1 {
    font-size: 1.8rem;
  }

  .page-btn,
  .page-number {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .shop-container {
    width: 100%;
    padding-top: 80px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .title h1 {
    font-size: 1.5rem;
  }

  .title p {
    font-size: 0.9rem;
  }

  .product-image {
    height: 120px;
  }

  .product-body h3 {
    font-size: 0.95rem;
    min-height: 36px;
  }

  .price {
    font-size: 1.1rem;
  }

  .buy-btn {
    padding: 10px 14px;
    font-size: 0.9rem;
  }

  .page-btn,
  .page-number {
    padding: 8px 10px;
    font-size: 0.8rem;
  }
}
</style>