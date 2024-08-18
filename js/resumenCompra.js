let clienteStorage = localStorage.getItem("clienteInfo")
let cartStorage = localStorage.getItem("cartProducts")

clienteStorage = JSON.parse(clienteStorage) || []
cartStorage = JSON.parse(cartStorage) || []

let cartContainer = document.getElementById("resumen-section")
let cartProducts = []


function renderResumen(cartItems, cliente) {
    let totalGeneral = 0
    cartContainer.innerHTML = "";
    const clienteinfo = document.createElement("div");
    clienteinfo.innerHTML = `<h2>Datos del Cliente</h2>
                                <p>Nombre: ${cliente.name} &nbsp Email: ${cliente.email} &nbsp Diereccion: ${cliente.address}</p>`;
    cartContainer.appendChild(clienteinfo)
    cartItems.forEach(producto => {
        totalGeneral += producto.precio //voy sumando los montos para saber el total de los items
        const item = cartProducts.find(item => item.id === producto.id)
        if (item) {
            item.cantidad += producto.cantidad; // modifico el valor 
        } else {
            cartProducts.push(producto)
        }
    })
    cartProducts.forEach(producto => {
        const totalItem = producto.precio * producto.cantidad  //calculo el total del item
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                              <p>$${totalItem}</p>
                              <p>Cantidad: ${producto.cantidad}</p>`
        cartContainer.appendChild(card)
    })
    // Mostrar el total general
    const totalElement = document.createElement("div");
    totalElement.innerHTML = `<h3>Total: $${totalGeneral}</h3>`;
    cartContainer.appendChild(totalElement);
}

renderResumen(cartStorage, clienteStorage)

function clearLocalStorage() {// reinicia el local storage cada vez que refresco la pantalla
    localStorage.clear()
    window.onload = clearLocalStorage
}
clearLocalStorage()