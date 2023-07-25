<!-- eslint-disable vue/no-export-in-script-setup -->
<template>
  <nav>
 <div class="navbar">
      <div class="logo">
          <div class="glutenfree">
            <img
              class="glutenf"
              src="../assets/img/logoglutenfree.jpg"
              alt="Logo de la empresa"
            />
          </div>
        </div>

      <div class="navbar-items">
        <div class="navbar-item">
          <input
            class="buscar"
            type="text"
            placeholder="Buscar producto"
            @keydown.enter="realizarBusqueda"
          />
          <input class="buscar-logo" type="text" placeholder="" />
          <img
            class="buscar-logo-img"
            src="../assets/img/lupa.png"
            alt="Logo"
            @click="realizarBusqueda"
          />
        </div>
      
      </div>
      <div class="navbar-item">
        <a href="#">Iniciar sesión</a>
      </div>
      <div class="navbar-buttons">
      <button class="navbar-btn">Home</button>
      <button class="navbar-btn" disabled="disabled">intranet</button>
      </div>
 </div>
    </nav>
  
</template>
<script setup></script>
<style scoped>
.navbar {
  background-image: url(../assets/img/imgnavbar.jpg);
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* display: flex; */
}

.glutenf {
  width: 9rem;
}

.logo {
  position: absolute;
  top: 14%;
  left: 30px;
  border-radius: 20px;
  margin-top: 50px;
}
.navbar-item a {
  color: rgb(243, 243, 248);
  text-decoration: none;
}

.buscar {
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  height: 2em;
  width: 10rem;
  border: none;
  text-align: center;
}
.buscar-logo {
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2em;
  height: 2em;
  width: 1rem;
  border: none;
}
.glutenf {
  border-radius: 70px;
}
.navbar-items {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin: 0 10px;
  align-items: center;
  display: flex;
}

input.buscar {
  padding: 1px;
  border: none;
  border-top-left-radius: 5px;
  padding-right: 30px;
}

/* Estilos para el enlace */
a {
  color: #0c0b0b;
  text-decoration: none;
  padding: 4px;
  border-radius: 9em;
  background-color: #4a7503;
  margin-top: 1rem;
}
.buscar-logo-img {
  /* padding-left:0em; */
  width: 15px;
  margin-left: -15px;
  position: right ;
}
.navbar-buttons {
  display: flex;
  align-items: flex-end;
  justify-content: center; 
  
}
.navbar-btn {
  border: none;
  background-color:#4a7503; /* Ajusta el color de fondo según tus necesidades */
  color: #fff; /* Ajusta el color de texto según tus necesidades */
  height: 2em;
  width: 4rem; /* Ajusta el ancho de los botones según tus necesidades */
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2em;
  border-top-left-radius: 2em;
  margin-left: 8px; /* Ajusta el espaciado entre los botones */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
