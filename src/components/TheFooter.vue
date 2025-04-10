<script setup></script>

<template>
  <footer class="footer">
    <h2 class="title">Impacto Social, Económico y Sostenible</h2>
    <div class="impact-container">
      <div class="impact-item">
        <img src="/mundo.png" alt="Sostenibilidad" class="icon" />
        <p class="impact-text">
          Productos ecológicamente sostenibles con materia prima local hechos a mano.
        </p>
      </div>
      <div class="impact-item">
        <img src="/personas.png" alt="Apoyo a familias" class="icon" />
        <p class="impact-text">
          Con tu aporte en esta compra apoyas a 4 mil familias artesanas del Atlántico.
        </p>
      </div>
      <div class="impact-item">
        <img src="/envios.png" alt="Envíos garantizados" class="icon" />
        <p class="impact-text">Nuestros envíos son garantizados a toda Colombia y el mundo.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 30px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 24px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

.impact-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap; /* Permite que los elementos se ajusten según el ancho */
}

.impact-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 280px;
  text-align: left;
  gap: 12px;
}

.icon {
  height: 45px;
}

.impact-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'Poppins', sans-serif;
}

/* 🔹 Adaptabilidad Responsiva */
@media (max-width: 768px) {
  .impact-container {
    justify-content: center;
    gap: 20px;
  }

  .impact-item {
    max-width: 90%; /* Se amplía un poco en tablets */
  }
}

@media (max-width: 480px) {
  .impact-container {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .impact-item {
    flex-direction: column;
    text-align: center;
    max-width: 100%;
  }

  .icon {
    height: 50px;
  }

  .impact-text {
    font-size: 16px; /* Letra más grande en móviles */
  }
}
</style>
