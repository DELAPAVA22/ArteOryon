<script setup>
import { ref, onMounted } from 'vue'
import { database, databaseRef, get } from '@/firebaseConfig'
import { storage, storageReference, getDownloadURL } from '@/firebaseConfig'

const whatsappLink = 'https://w.app/oryon' // Reemplaza con tu enlace de WhatsApp

// Lista de productos
const products = ref([])

// Función para obtener productos desde Firebase Database y Storage
const fetchProducts = async () => {
  const productsRef = databaseRef(database, 'products')
  try {
    const snapshot = await get(productsRef)
    if (snapshot.exists()) {
      const productsData = snapshot.val()
      const productList = await Promise.all(
        Object.keys(productsData).map(async (key) => {
          const product = productsData[key]
          if (product.imageUrl && !product.imageUrl.startsWith('http')) {
            try {
              const imageRef = storageReference(storage, `products/${product.imageUrl}`)
              let imageUrl = await getDownloadURL(imageRef)

              product.imageUrl = imageUrl
            } catch (error) {
              console.error('Error obteniendo la imagen:', error)
              product.imageUrl = '/placeholder.jpg'
            }
          }
          return { id: key, ...product }
        }),
      )
      products.value = productList
    }
  } catch (error) {
    console.error('Error al obtener productos:', error)
  }
}

// Reseñas
const reviews = ref([
  { id: 1, text: 'Las artesanías son hermosas, la calidad es increíble.', author: 'Ana López' },
  { id: 2, text: 'Muy buen servicio y productos con detalles únicos.', author: 'Carlos Pérez' },
  { id: 3, text: 'Me encantó el diseño, realmente artesanías de lujo.', author: 'María Rodríguez' },
])

const currentReview = ref(0)

// Función para cambiar de reseña
const nextReview = () => {
  currentReview.value = (currentReview.value + 1) % reviews.value.length
}

const prevReview = () => {
  currentReview.value = (currentReview.value - 1 + reviews.value.length) % reviews.value.length
}

// Cargar productos al montar el componente
onMounted(fetchProducts)
</script>

<template>
  <section class="welcome">
    <div class="banner">
      <img src="/manos-tejedoras.png" alt="Manos tejiendo" class="banner-img left" />
      <img src="/tejido.png" alt="Tejido artesanal" class="banner-img right" />
      <h1 class="banner-text">MÁS QUE ARTESANÍAS · CREAMOS MOMENTOS</h1>
    </div>
  </section>

  <section class="products">
    <h2 class="title">Productos</h2>
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">$ {{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </section>

  <!-- Sección de reseñas -->
  <section class="reviews">
    <h2>Reseñas</h2>
    <p>Opiniones de nuestros clientes sobre nuestras artesanías.</p>
    <div class="review-box">
      <button class="arrow left-arrow" @click="prevReview">‹</button>
      <div class="review-content">
        <p class="review-text">"{{ reviews[currentReview].text }}"</p>
        <p class="review-author">- {{ reviews[currentReview].author }}</p>
      </div>
      <button class="arrow right-arrow" @click="nextReview">›</button>
    </div>
  </section>

  <!-- BOTÓN FLOTANTE DE WHATSAPP -->
  <a :href="whatsappLink" target="_blank" class="whatsapp-button">
    <img src="/wplogo.png" alt="WhatsApp" class="whatsapp-logo" />
  </a>
</template>

<style scoped>
/* SECCIÓN DE BIENVENIDA */

.title {
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
}
.welcome {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.banner {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.banner-img {
  width: 50%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 450px) {
  .banner-img {
    width: 100%;
  }
}

.banner-text {
  position: absolute;
  color: white;
  font-size: 3rem; /* Tamaño grande en pantallas grandes */
  font-weight: bold;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Poppins', sans-serif;
  padding: 10px;
}

/* 🔹 Ajuste para celulares (menos de 768px) */
@media screen and (max-width: 768px) {
  .banner-text {
    font-size: 2rem; /* Reduce el tamaño de la fuente */
    width: 90%; /* Evita que el texto se corte en pantallas pequeñas */
  }
}

/* 🔹 Ajuste para celulares aún más pequeños (menos de 480px) */
@media screen and (max-width: 480px) {
  .banner-text {
    font-size: 1.5rem; /* Reduce aún más el tamaño */
    width: 95%;
  }
}

/* SECCIÓN DE PRODUCTOS */
.products {
  text-align: center;
  padding: 40px 20px;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-item {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: small;
}

.product-item:hover {
  transform: scale(1.05);
}

.product-image {
  width: 75%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

/* SECCIÓN DE RESEÑAS */
.reviews {
  text-align: center;
  padding: 40px 20px;
  background: #f8f8f8;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

.review-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
}

.arrow {
  background: none;
  border: none;
  font-size: 6rem;
  cursor: pointer;
  padding: 40px;
  color: #333;
  transition: color 0.2s;
}

.arrow:hover {
  color: #555;
}

/* BOTÓN DE WHATSAPP */
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #68c512;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s,
    opacity 0.3s;
  z-index: 1000;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

.whatsapp-logo {
  width: 40px;
  height: 40px;
}
</style>
