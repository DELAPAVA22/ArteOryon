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
/* CONTENEDOR PRINCIPAL */
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* CONTENIDO */
.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 208, 121);
  padding: 30px;
  max-width: 900px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  flex-wrap: wrap; /* Permite que los elementos se ajusten en pantallas pequeñas */
}

/* SECCIÓN DE TEXTO */
.text-section {
  flex: 1;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-right: 20px;
}

/* SECCIÓN DE IMAGEN */
.image-section {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.horus-image {
  width: 350px;
  max-width: 100%;
  opacity: 0.6; /* Opacidad ajustada */
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column; /* Apila los elementos en pantallas pequeñas */
    text-align: center;
    padding: 20px;
  }

  .text-section {
    font-size: 1rem;
    margin-right: 0;
  }

  .image-section {
    margin-top: 20px;
  }

  .horus-image {
    width: 250px;
    opacity: 0.7; /* Más visible en móviles */
  }
}

@media (max-width: 480px) {
  .about-container {
    padding: 10px;
  }

  .about-content {
    padding: 15px;
  }

  .text-section {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .horus-image {
    width: 200px;
    opacity: 0.8;
  }
}
</style>
