let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

let cartProducts = []

function renderCarrito(cartItems) {
    let totalGeneral = 0
    //cartContainer.innerHTML = "";

    cartItems.forEach(producto => {
        totalGeneral += producto.precio //voy sumando los montos para saber el total de los items
        if (cartProducts[producto.id]) {
            console.log('EL Item ya estaba', producto.id)
            cartProducts[producto.id].cantidad += producto.cantidad;
        } else {
            console.log('EL Item NO estaba', producto.id)
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


renderCarrito(cartStorage)

function deleteItem() {
    null
}



function clearLocalStorage() {// reinicia el local storage cada vez que refresco la pantalla
    localStorage.clear()
    window.onload = clearLocalStorage
}
clearLocalStorage()