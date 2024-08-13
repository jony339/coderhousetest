//Jonathan Monti >>> Pre-entrega3
/* const productos = [
    {
        id: 0,
        nombre: "Remera",
        precio: 5500,
        cantidad: 1
    },
    {
        id: 1,
        nombre: "Jeans",
        precio: 6000,
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Top",
        precio: 2000,
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Bucanera",
        precio: 15000,
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Media",
        precio: 1000,
        cantidad: 1
    },
] */


const cartProducts = []

let productsContainer = document.getElementById("products-container")

//let cartStorage = localStorage.getItem("cartProducts")
//cartStorage = JSON.parse(cartStorage)

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

//renderProductos(productos)
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

            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}


