<script setup>

import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

const products = ref([]);
const currentPage = ref(1);
const perPage = 10;



// ======================
// Load Product
// ======================

onMounted(async()=>{
  try{
    const res = await axios.get(
      "http://localhost:3000/products"
    );

    console.log(res.data);
    products.value = res.data;

  }catch(error){

    console.error(
      "ไม่สามารถโหลดสินค้าได้",
      error
    );

  }

});




// ======================
// Pagination
// ======================


// จำนวนหน้าทั้งหมด

const totalPages = computed(()=>{


  return Math.ceil(
    products.value.length / perPage
  );


});




// สินค้าที่แสดงแต่ละหน้า

const showProducts = computed(()=>{


  const start = 
  (currentPage.value - 1) * perPage;


  return products.value.slice(
    start,
    start + perPage
  );


});




// เปลี่ยนหน้า

function changePage(page){


  if(page >= 1 && page <= totalPages.value){

    currentPage.value = page;

  }


}


</script>




<template>


<!-- Navbar + Background -->

<Navbar>


<div class="shop-content">



  <!-- Title -->


  <div class="title">


    <h1>
      Product List
    </h1>


    <p>
      สินค้าทั้งหมดของเรา
    </p>


  </div>





  <!-- Product -->


  <div class="product-grid">



    <div

      class="product-card"

      v-for="p in showProducts"

      :key="p.ProductID"

    >



<img
  :src="`/images/${p.Image}`"
  :alt="p.ProductName"
  class="product-image"
/>




      <div class="product-body">



        <h3>

          {{ p.ProductName }}

        </h3>




        <p class="price">

          {{ Number(p.ProductPrice).toLocaleString() }} ฿

        </p>





        <button class="buy-btn">

          🛒 ซื้อสินค้า

        </button>



      </div>



    </div>



  </div>






  <!-- Pagination -->


  <div class="pagination">



    <button

      class="page-btn"

      @click="changePage(currentPage-1)"

      :disabled="currentPage === 1"

    >

      ◀ ก่อนหน้า

    </button>





    <button

      v-for="page in totalPages"

      :key="page"

      class="page-number"

      :class="{active: currentPage === page}"

      @click="changePage(page)"

    >

      {{ page }}

    </button>





    <button

      class="page-btn"

      @click="changePage(currentPage+1)"

      :disabled="currentPage === totalPages"

    >

      หน้าถัดไป ▶

    </button>



  </div>




</div>


</Navbar>


</template>





<style scoped>


/* ===================
Content
=================== */


.shop-content{


    width:95%;

    padding-top:400px;   /* เพิ่มระยะห่างจาก Navbar */

    text-align:center;


}




.title{


    margin-bottom:25px;


}



.title h1{


    font-size:42px;


    color:#4F6D9B;


}



.title p{


    font-size:18px;


    color:#666;


}





/* ===================
Product Grid
=================== */


.product-grid{


    display:grid;


    grid-template-columns:


    repeat(5,1fr);


    gap:20px;


}





.product-card{


    background:white;


    border-radius:18px;


    padding:15px;


    box-shadow:

    0 8px 20px rgba(0,0,0,.15);


    transition:.3s;


}




.product-card:hover{


    transform:translateY(-5px);


}





.product-image{


    width:100%;


    height:130px;


    object-fit:contain;


}





.product-body h3{


    color:#4F6D9B;


    font-size:17px;


    height:45px;


}






.price{


    color:#198754;


    font-size:20px;


    font-weight:bold;


    margin:10px;


}






.buy-btn{


    width:100%;


    padding:10px;


    border:none;


    border-radius:20px;


    background:#8CB9FF;


    color:white;


    cursor:pointer;


}





.buy-btn:hover{


    background:#6FA8FF;


}





/* ===================
Pagination
=================== */


.pagination{


    margin-top:30px;


    display:flex;


    justify-content:center;


    gap:10px;


}




.page-btn,
.page-number{


    border:none;


    padding:10px 15px;


    border-radius:20px;


    background:#BFDFFF;


    color:#4F6D9B;


    cursor:pointer;


}





.page-number.active{


    background:#8CB9FF;


    color:white;


}





.page-btn:disabled{


    background:#ddd;


    cursor:not-allowed;


}





/* Responsive */


@media(max-width:1200px){


.product-grid{


grid-template-columns:repeat(4,1fr);


}


}



@media(max-width:900px){


.product-grid{


grid-template-columns:repeat(2,1fr);


}


}



@media(max-width:600px){


.product-grid{


grid-template-columns:1fr;


}

}


</style>