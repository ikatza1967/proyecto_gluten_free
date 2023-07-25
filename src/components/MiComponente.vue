<template>
    <div>
        <div class="card-formulario">
          <input v-model="nuevoProducto.texto" type="text" name="texto" id="texto" placeholder="Adecuado" />
          <input v-model="nuevoProducto.imgSrc" type="text" name="imgSrc" id="imgSrc" placeholder="URL de la foto" />
          <input v-model="nuevoProducto.Nombre" type="text" name="nombre" id="nombre" placeholder="Nombre del producto" />
          <input v-model="nuevoProducto.iconoSrc" type="text" name="iconoSrc" id="iconoSrc" placeholder="URL del icono" />
          <img class="icono free"  alt="" />
        </div>
        <button class="boton" @click="nuevaTarjeta">Nuevo</button>
      </div>
    
      <div class="card-container">
        <div v-for="producto in listaProductos" :key="producto.id" >
          <div>
            <div class="card" @click="seleccionarTarjeta(producto)">
              <h1 :style="getH1Style(producto)">{{ producto.texto }}</h1>
              <div class="cat"></div>
              <img class="img" :src="producto.img" alt="" />
              <h2 class="h2">{{ producto.Nombre }}</h2>
              <img
                class="icono free"
                :src="producto.icono"
                alt="Imagen en la esquina inferior izquierda"
              />
            </div>
            <div v-if="tarjetaSeleccionada">
              <h3>Editar contenido de la tarjeta seleccionada:</h3>
              <button @click="editarTarjeta(producto)">Editar</button>
              <button @click="eliminarTarjeta (producto.id)">eliminar</button>
              <textarea v-model="tarjetaSeleccionada.Nombre"></textarea>
              <!-- Agregar más campos para editar otros contenidos de la tarjeta según sea necesario -->
            </div>
    
          </div>
        </div>
      </div>
      <div>
        <footer>
          
        </footer>
      </div>
    </template>
    
    <script setup>
    import { ref , onMounted} from 'vue';
    import * as ProductosControler from '../controlers/productoscontrolers';
    
    let listaProductos = ref([]);
    
    // Hacer tarjetaSeleccionada reactiva usando ref()
    let tarjetaSeleccionada = ref(null);
    
    // Datos del nuevo producto
    let nuevoProducto = ref({
      texto: '',
      imgSrc: '',
      Nombre: '',
      iconoSrc: '',
      color: 'verde'
    });
    // Obtener los productos después de que el componente se monta
    onMounted(async () => {
      listaProductos.value = await ProductosControler.getAllProductos();
      console.log(listaProductos.value);
    });
    
    function getH1Style(producto) {
      if (producto.texto === 'Poca informacion 20%') {
        return 'background-color: orange;';
      } else if (producto.texto === 'sin informacion suficiente') {
        return 'background-color: grey;';
      } else if (producto.texto === 'No Recomendable') {
        return 'background-color: red;';
      } else {
        return 'background-color: green;';
      }
    }
    
    function seleccionarTarjeta(producto) {
      // Si la misma tarjeta ya estaba seleccionada, deseleccionarla
      if (tarjetaSeleccionada.value === producto) {
        tarjetaSeleccionada.value = null;
      } else {
        tarjetaSeleccionada.value = producto;
      }
    }
    
    function eliminarTarjeta(id){
      ProductosControler.deleteProducto(id)
    
      const index = listaProductos.value.findIndex((producto) => producto.id === id);
      if (index !== -1) {
        // Utilizar splice para eliminar el producto con el ID específico
        listaProductos.value.splice(index, 1);
        // Si quieres también puedes eliminar la selección después de eliminar la tarjeta
        tarjetaSeleccionada.value = null;
      }
      
    }
    
    function editarTarjeta(producto){
      console.log('editar', producto);
      ProductosControler.updateProducto(producto.id,producto)
      tarjetaSeleccionada.value = null;
    }
    
    function nuevaTarjeta(){
      
      // Crea un nuevo objeto para representar el producto
      const producto = {
        texto: nuevoProducto.value.texto,
        img: nuevoProducto.value.imgSrc,
        Nombre: nuevoProducto.value.Nombre,
        icono: nuevoProducto.value.iconoSrc,
        color: 'verde'
      };
      
      console.log(producto);
      ProductosControler.createProducto(producto)
      // Agrega el nuevo producto a la lista de productos
      listaProductos.value.push(producto);
      
      // Reinicia los campos del formulario después de agregar el producto
      nuevoProducto.value.texto = '';
      nuevoProducto.value.imgSrc = '';
      nuevoProducto.value.Nombre = '';
      nuevoProducto.value.iconoSrc = '';
    }
    
    </script>
    