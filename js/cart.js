let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage) || []

let cartContainer = document.getElementById("cart-section")

let cartProducts = []
let delItems = []

function renderCarrito(cartItems) {
    let totalGeneral = 0

    cartItems.forEach(producto => {
        totalGeneral += producto.precio //voy sumando los montos para saber el total de los items
        const item = cartProducts.find(item => item.id === producto.id)
        if (item) {
            item.cantidad += producto.cantidad; // modifico el valor 
        } else {
            cartProducts.push(producto)
        }
    })
    cartContainer.innerHTML = "";
    cartProducts.forEach(producto => {
        const totalItem = producto.precio * producto.cantidad  //calculo el total del item
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                              <p>$${totalItem}</p>
                              <p>Cantidad: ${producto.cantidad}</p>
                              <button class="eliminarItem" id="${producto.id}"> Delete </button>`
        cartContainer.appendChild(card)
    })
    // Mostrar el total general
    const totalElement = document.createElement("div");
    totalElement.innerHTML = `<h3>Total: $${totalGeneral}</h3>`;
    cartContainer.appendChild(totalElement);
    cartProducts = []
    deleteItem(cartItems)
    completarCompra(cartItems)
}

function deleteItem(storage) {
    delButton = document.querySelectorAll(".eliminarItem")
    delButton.forEach(button => {
        button.onclick = (d) => {
            const productId = d.currentTarget.id
            const selectedProduct = storage.filter(producto => producto.id != productId)
            delItems.push(selectedProduct)
            localStorage.setItem("cartProducts", JSON.stringify(selectedProduct))

            Swal.fire({
                title: "Seguro que quiere eliminar?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI!",
                showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                    `
                },
                hideClass: {
                    popup: `
                      animate__animated
                      animate__bounceOut
                    `
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    renderCarrito(selectedProduct)
                    Swal.fire({
                        title: "Item Eliminado!",
                        icon: "success",
                        showClass: {
                            popup: `
                              animate__animated
                              animate__fadeInUp
                            `
                        },
                        hideClass: {
                            popup: `
                              animate__animated
                              animate__fadeOutDown
                            `
                        }
                    });
                }
            });
        }
    })
}

function completarCompra(storage) {
    completarCompraBtn = document.querySelectorAll(".finalizarCompra")
    completarCompraBtn.forEach(button => {
        button.onclick = (c) => {
            Swal.fire({
                title: 'Ingrese su información',
                html: `
                  <input id="swal-input1" class="swal2-input" placeholder="Nombre">
                  <input id="swal-input2" class="swal2-input" placeholder="Correo electrónico">
                  <input id="swal-input3" class="swal2-input" placeholder="Dirección">
                `,
                focusConfirm: false,
                preConfirm: () => {
                    const name = Swal.getPopup().querySelector('#swal-input1').value;
                    const email = Swal.getPopup().querySelector('#swal-input2').value;
                    const address = Swal.getPopup().querySelector('#swal-input3').value;

                    if (!name || !email || !address) {
                        Swal.showValidationMessage('Por favor, complete todos los campos');
                        return false;
                    }
                    return { name, email, address };
                }
            }).then((result) => {
                if (result.isConfirmed && cartProducts.length > 0) {
                    localStorage.setItem("clienteInfo", JSON.stringify(result.value))
                    localStorage.setItem("cartProducts", JSON.stringify(storage))
                    window.location.href = './resumen.html'
                } else {
                    Swal.fire({
                        text: "Porfavor agregue algo al carrito",
                        icon: "warning"
                    });
                }
            });
        }
    })

}

renderCarrito(cartStorage)
