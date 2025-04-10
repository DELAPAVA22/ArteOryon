<script setup>
import { ref, onMounted } from 'vue'
import { storage, ref as storageRef, getDownloadURL, listAll } from '@/firebaseConfig'

const productImages = ref([])

const fetchImages = async () => {
  const imagesRef = storageRef(storage, 'products/') // Carpeta donde guardas las imágenes en Firebase
  const imageList = await listAll(imagesRef)

  const urls = await Promise.all(
    imageList.items.map(async (item) => {
      const url = await getDownloadURL(item)
      return url
    }),
  )

  productImages.value = urls
}

onMounted(fetchImages)
</script>

<template>
  <section class="products">
    <h2>Our Products</h2>
    <div class="product-grid">
      <img
        v-for="(image, index) in productImages"
        :key="index"
        :src="image"
        class="product-image"
      />
    </div>
  </section>
</template>

<style scoped>
.products {
  text-align: center;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
