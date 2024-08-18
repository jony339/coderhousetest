//Jonathan Monti >>> EntregaFinal

const cartProducts = []

let productsContainer = document.getElementById("products-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                          <p>${producto.precio}</p>
                          <button class="productoAgregar" id="${producto.id}"> Agregar </button>`
        productsContainer.appendChild(card)
    })
    addToCartButton(productsArray)
}

fetch("./db/data.json").then(response => response.json()).then(data => {
    renderProductos(data)
})

function addToCartButton(productos) {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)


            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}


