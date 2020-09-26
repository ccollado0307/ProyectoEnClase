let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

async function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    
    let renglon = {
        "nombreProducto": producto,
        "precio": precio
    }
    
    let respuesta = await fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(renglon)
    });

    if (respuesta.ok) {
        compras.push(renglon)
        mostrarTablaCompras();
    } else {
        console.log('Hubo un error');
    }
}

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let r of compras) {
        html += `
            <tr>
            <td>${r.nombreProducto}</td>
            <td>${r.precio}</td>
            </tr>
        `;
    }
    document.querySelector("#tblCompras").innerHTML = html; 
}

 async function load() { console.log('carrito');
    let response = await fetch('/produto');
    compras = await response.json(); 
    mostrarTablaCompras();
}