// Controlador para interactuar con los endpoints del backend
//import router from '../router/index'

const url = 'http://localhost:5000';





// Endpoint de obtener todos los productos
export function getAllProductos() {
  var myHeaders = new Headers();
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return new Promise((resolve, reject) => {
    fetch(url + "/productos", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        reject(error);
      });
  });
}

// Endpoint de obtener un producto por ID
export function getProductoById(productoId) {
  return fetch(url + `/productos/${productoId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data; // Devuelve los datos del trabajador
    })
    .catch(error => {
      console.error('Error al obtener el producto:', error);
    });
}

// Endpoint de crear un producto
export function createProducto(productoData) {
  return fetch(url + '/productos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productoData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes realizar las operaciones necesarias con la respuesta de creación del producto
    })
    .catch(error => {
      console.error('Error al crear el producto:', error);
    });
}

// Actualizar un producto
export const updateProducto = (productoId, data) => {
  fetch(url + `/productos/${productoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      // Realizar acciones adicionales después de la actualización exitosa
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error de la actualización
    });
};

// Eliminar un producto
export const deleteProducto = (productoId) => {
  fetch(url + `/productos/${productoId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      // Realizar acciones adicionales después de la eliminación exitosa
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error de la eliminación
    });
};
