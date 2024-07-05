//
let item
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
}