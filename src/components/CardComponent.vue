<template>
  <div class="card-container">

    <div v-for="producto in listaProductos" :key="producto.id">
      <div class="card">
        <h1 :style="getH1Style(producto)">{{ producto.texto }}</h1>
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
  </div>
</template>

<script setup>
let listaProductos = [
  {
    id: "1",
    texto: "Muy recomendable 100%",
    img: "	https://images.openfoodfacts.org/images/products/303/349/000/4521/front_fr.93.200.jpg",
    Nombre: "Yogur natural - Danone - 500 g (4 × 125 g)",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },

  {
    id: "2",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/303/371/006/5967/front_es.328.400.jpg",
    Nombre: "Nesquik - Nestlé - 1 kg",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "3",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_es.445.200.jpg",
    Nombre: "Nutella - Ferrero - 400 g",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "4",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/541/118/811/2709/front_es.396.200.jpg",
    Nombre: "Almond No Sugars - Alpro - 1 l",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "5",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/541/118/810/3387/front_es.187.200.jpg",
    Nombre: "Alpro vainilla - 500 g",

    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "6",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/87157215/front_es.169.200.jpg",
    Nombre: "Ketchup - Heinz - 250 g ",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "7",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/848/000/003/8524/front_es.73.200.jpg",
    Nombre: "Guacamole - Hacendado - 200g",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "8",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/20095291/front_es.133.200.jpg",
    Nombre: "Chocolate negro Ecuador 70% cacao - J.D. Gross - 125g",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "9",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/20150907/front_es.115.200.jpg",
    Nombre: "Arándanos deshidratados - Alesto - 200 g",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "10",
    texto: "Muy recomendable 100%",
    img: "https://images.openfoodfacts.org/images/products/807/680/951/3722/front_es.878.200.jpg",
    Nombre: "Basilico - Barilla - 400 g",
    icono: "https://static.openfoodfacts.org/images/attributes/no-gluten.svg",
  },
  {
    id: "11",
    texto: "Poca informacion 20%",
    img: "https://images.openfoodfacts.org/images/products/304/514/010/5502/front_es.298.200.jpg",
    Nombre: "Schokolade - Alpenmilch - Milka - 100 g",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:"naranja"
  },
  {
    id: "12",
    texto: "Poca informacion 20%",
    img: "",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  },
  {
    id: "13",
    texto: "Poca informacion 20%",
    img: "",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  },
  {
    id: "14",
    texto: "poca informacion 20%",
    img: "",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  },
  {
    id: "15",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
    
  },
  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""

    
  },
  {
    id: "17",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
    
  },
  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  },
  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  },
  {
    id: "20",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
    
  },
  {
    id: "21",
    texto: "Sin informacion suficiente",
    img: "g",
    Nombre:"",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    color:""
  }, 
    
    {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/gluten-content-unknown.svg",
    color:"gris"
  },
    {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    },
  
  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    
  },
    
  
  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
  },    

  {
    id: "16",
    texto: "Poca informacion 20%",
    img: "g",
    Nombre: "",
    icono: "https://static.openfoodfacts.org/images/attributes/may-contain-gluten.svg",
    
  },
  function getH1Style(producto) {
  if (producto.texto === "Poca informacion 20%") {
    return "background-color:orange; ";
  } else if (producto.texto === "sin informacion suficiente") {
    return "background-color: grey; ";
  } else  if(producto.texto === "no recomendable 0%")
    return "";
  }

];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  flex-direction: row;
  
}

.card {
  width: 400px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  flex-direction: row;
  text-align: center;
  position: relative;
   margin: 10px; 
}

/* .card:last-child {
  margin-right: 0;
} */
.img {
  /* width: 46%;
  height: 20%;
  object-fit: cover;
  display: block;
  margin-bottom: 20px;
  padding: 15px;
  max-height: 260px;
  align: center ; */
  

}

.h1 {
  background-color: rgb(28, 238, 28);
  font-size: 1rem;
  display: inline-block block ;
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
.naranja{
  background-color: coral;
}
</style>
