<template>
  <div class="about-container">
    <HeaderComponent />

    <div class="about-content">
      <div class="text-section">
        <p>
          En ORYON, transformamos la tradición artesanal de Usiacurí en piezas exclusivas de lujo.
          Nuestros accesorios de iraca, tejidos a mano por artesanos colombianos, combinan historia,
          diseño y sofisticación, llevando el talento de Colombia al mundo. Cada pieza es única,
          hecha con pasión y dedicada a quienes buscan distinción en cada detalle.
        </p>
        <p>Descubre ORYON y lleva la esencia de la tradición a tu mesa.</p>
      </div>

      <div class="image-section">
        <img src="/horus.png" alt="Horus Logo" class="horus-image" />
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 208, 121);
  padding: 20px;
  max-width: 800px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: small;
}

.text-section {
  flex: 1;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-right: 20px;
}

.image-section {
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.horus-image {
  width: 400px;
  max-width: 500px; /* Ajusta el tamaño de la imagen */
  opacity: 0.5; /* Opacidad del 50% */
}
</style>
