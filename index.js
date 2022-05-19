const pizzas = [];

class Pizza {
    constructor(id, nombre, ingredientes, precio) {
        this.id = id,
            this.nombre = nombre,
            this.ingredientes = [ingredientes],
            this.precio = precio
    }

}

const pizzaMuzza = new Pizza(1, "muzza", ["muzzarella", "aceitunas"], 554);
const pizzaRoquefort = new Pizza(2, "roquefort", ["roquefort", "muzzarella", "aceitunas"], 854);
const pizzaCuatroQ = new Pizza(3, "4 quesos", ["roquefort", "muzzarella", "chedar", "gouda", "aceitunas"], 1154);
const pizzaAnana = new Pizza(4, "anana", ["anana", "muzzarella", "aceitunas"], 954);
const pizzaCalabresa = new Pizza(5, "calabresa", ["calabresa", "muzzarella", "aceitunas negras"], 854);
const pizzaAnchoas = new Pizza(6, "anchoas", ["anchoas", "muzzarella", "aceitunas negras"], 654);

pizzas.push(pizzaMuzza, pizzaRoquefort, pizzaCuatroQ, pizzaAnana, pizzaCalabresa, pizzaAnchoas)

const btn = document.querySelector(".boton");
const idPizza = document.querySelector(".idPizza");
const h2 = document.querySelector("H2");
const h4 = document.querySelector("H4");


function mostrarInfo(nombre, precio) {
    h2.innerHTML = `El NOMBRE de la Pizza es: ${nombre}`;
    h4.innerHTML = `El PRECIO de la Pizza es: ${precio}`;
}

btn.addEventListener("click", () => {
    h2.innerHTML = "";
    h4.innerHTML = "";
    pizzas.forEach(p => {

        (p.id == idPizza.value) ? mostrarInfo(p.nombre, p.precio) : null;

    })
    if (h2.innerHTML == "") return alert("No existe el ID");
})


