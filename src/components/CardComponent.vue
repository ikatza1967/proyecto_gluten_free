<template>
  <div v-for="producto in listaProductos" :key="producto.id">
    <div class="card">
      <h1 class="h1">{{ producto.texto }}</h1>
      <div class="cat"></div>
      <img class="img" :src= "producto.img " alt="" />
      <h2 class="h2">{{ producto.Nombre }}</h2>
      <img
        class="icono free"
        :src="producto.icono"
        alt="Imagen en la esquina inferior izquierda"
      />
    </div>
  </div>
</template>

<script setup>
let listaProductos = [
  {
    id: "1",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/303/349/000/4521/front_fr.93.400.jpg",
    Nombre: "Yogur natural - Danone - 500 g (4 × 125 g)",
    icono: "no-gluten.svg",
  },

  {
    id: "2",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/303/371/006/5967/front_es.328.400.jpg",
    Nombre: "Nesquik - Nestlé - 1 kg",
    icono: "no-gluten.svg",
  },
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex-direction: column;
  text-align: center;
  position: relative;
}
.img {
  width: 90%;
  height: auto;
  display: block;
  margin-bottom: 20px;
  padding: 15px;
}
.h1 {
  background-color: rgb(28, 238, 28);
  font-size: 1rem;
  display: inline-block ;
  text-align: center;
  margin-top: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 2px;
}
img {
  max-width: 100%;
  max-height: 100%;
}

.h2 {
  font-size: medium;
  text-align: center;
}
</style>
