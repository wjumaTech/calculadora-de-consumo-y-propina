const cliente = {
  mesa: '',
  hora: '',
  pedido: []
}

const btnCrearOrden = document.querySelector('#crear-orden');
btnCrearOrden.addEventListener('click', guardarCliente);


function guardarCliente() {

  const mesa = document.querySelector('#mesa').value;
  const hora = document.querySelector('#hora').value;

  const isCampoVacio = [mesa, hora].some(campo => campo === "");

  if (isCampoVacio) {
    console.log('Si, hay al menos un campo vacio');
  } else {
    console.log('Todos los campos estan llenos');
  }

}