import { mount } from '@vue/test-utils';
import MiComponente from './ruta/del/componente/CardComponent.vue'; // Ajusta la ruta según la ubicación real del componente
// import * as ProductosControler from '../controlers/productoscontrolers'; // Importa ProductosControler si es necesario

// Define una prueba
describe('MiComponente', () => {
  it('debe devolver el estilo de fondo adecuado para "Poca informacion 20%"', () => {

    const wrapper = mount(MiComponente);
    const h1 = wrapper.find('h1');
    
    const style = h1.attributes('style');

    expect(style).toContain('background-color: orange;');
  });

  // Agrega más pruebas para las otras condiciones de getH1Style()

  // Ejemplo de prueba para la función nuevaTarjeta
  it('debe agregar un nuevo producto a listaProductos al llamar a nuevaTarjeta', () => {
    const wrapper = mount(MiComponente);
    const inputTexto = wrapper.find('#texto');
    inputTexto.setValue('Nuevo producto');
    const inputImgSrc = wrapper.find('#imgSrc');
    inputImgSrc.setValue('ruta/imagen.png');
    const inputNombre = wrapper.find('#nombre');
    inputNombre.setValue('Nuevo producto');
    const inputIconoSrc = wrapper.find('#iconoSrc');
    inputIconoSrc.setValue('ruta/icono.png');

    const botonNuevo = wrapper.find('.boton');
    botonNuevo.trigger('click');

    // Verificar que el nuevo producto se agregó a listaProductos
    expect(wrapper.vm.listaProductos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          texto: 'Nuevo producto',
          imgSrc: 'ruta/imagen.png',
          Nombre: 'Nuevo producto',
          iconoSrc: 'ruta/icono.png',
        }),
      ])
    );
  });
});
