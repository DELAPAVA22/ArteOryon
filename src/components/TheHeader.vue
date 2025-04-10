<script setup>
import { ref } from 'vue'

const language = ref('EN')
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="logo-container">
      <img src="/ojo.png" alt="Oryon Logo" class="logo" />
      <h1 class="title">ORYON</h1>
    </div>

    <div class="right-section">
      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/about" class="nav-link">Nosotros</router-link>
        <a href="#" class="nav-link">Contacto</a>
      </nav>

      <div class="icons">
        <img src="/cart.png" alt="Cart" class="cart-icon" />
        <div class="language-selector">
          <span>{{ language }}</span>
          <img src="/us-flag.png" alt="USA Flag" class="flag" />
        </div>
      </div>

      <!-- Botón de menú hamburguesa -->
      <button class="menu-button" @click="toggleMenu">
        <img src="/menu.png" alt="Menu" class="menu-icon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
/* Asegura que el enlace de About us tenga el mismo estilo que los otros */
.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  padding: 5px 10px;
}

.nav-link:hover {
  color: #ff6600; /* Color de hover opcional */
}
</style>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  border-bottom: 1px solid black;
  background: white;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.title {
  font-size: 40px;
  font-weight: lighter;
  font-family: 'Neuton', serif;
  margin-bottom: 7px;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
}

.nav-links a {
  text-decoration: none;
  color: black;
}

/* ICONOS */
.icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-icon {
  height: 28px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.flag {
  height: 18px;
}

/* MENU RESPONSIVO */
.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 25px;
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }

  .title {
    font-size: 28px;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.open {
    display: flex;
  }

  .menu-button {
    display: block;
  }

  .icons {
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 24px;
  }

  .cart-icon {
    height: 25px;
  }

  .flag {
    height: 16px;
  }
}
</style>
