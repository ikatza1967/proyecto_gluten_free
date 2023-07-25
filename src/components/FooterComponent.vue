<template>
    <div>
         <!-- Tu contenido principal aquí -->

  <!-- Footer -->
  <footer>
    <div class="redes-sociales">
      <a href="#" target="_blank"><img src="../assets/img/facebook.png" alt="Logo de Facebook" />
      Facebook</a>
      <a href="#" target="_blank"><img src="../assets/img/twitter.png" alt="Logo de twitter" />Twitter</a>
      <a href="#" target="_blank"><img src="../assets/img/instagram.png" alt="Logo de Instagram" />Instagram</a>
    </div>
    <img class="logo" src="../assets/img/logoglutenfree.jpg" alt="Logo de la empresa" />
    <p>© 2023 Gluten Free. Todos los derechos reservados.</p>
  </footer>
    </div>
</template>
<script setup>
</script>
<style scoped>
 /* Estilos generales */
 body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Estilos para el footer */
    footer {
      background-color: #5d615d;
      color: #fff;
      text-align: center;
      padding: 20px;
    }

    /* Estilos para las redes sociales */
    .redes-sociales {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    .redes-sociales a {
      display: inline-block;
      margin: 0 10px;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
    }

    /* Estilos para el logo */
    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

</style>