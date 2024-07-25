//Jonathan Monti >>> Pre-entrega2
const productos = [
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
]


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
    addToCartButton()
}

renderProductos(productos)


function addToCartButton() {
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


/* let item
let continuar = true
const lista = []

function addItem(producto) {
    lista.push(producto)
    alert("se agrego el item con exito")
}

function deleteLastItem() {
    lista.pop()
    console.log("se elimino el ultimo item con exito")
    alert("se elimino el ultimo item con exito")
}

function showArray() {
    console.log("Items: ", lista)
    const longitud = lista.length
    console.log("Tiene un total de " + longitud + " producto/s.")
}
console.log("Bienvenido! Agrege los productos que necesite.")
while (continuar) {
    let menu = parseInt(prompt("Ingrese 1 para cargar un item al carrito, ingrese 2 ver el carrito, ingrese 3 para eliminar el ultimo item, 4 para salir"))

    switch (menu) {
        case 1:
            console.log("<============>")
            item = prompt("Ingrese algun producto: ")
            addItem(item)
            console.log("Se agrego el item con exito!")
            break
        case 2://se muestra el array y cantidad de items
            console.log("<====== Carrito ======>")
            showArray()
            break
        case 3:
            console.log("<============>")
            deleteLastItem()
            showArray()
            break
        case 4:
            console.log("<============>")
            console.log("Gracias vuelva pronto!")
            alert("Gracias vuelva pronto!")
            continuar = false
            break
        default:
            console.log("Opcion invalida")
            break
    }
} */