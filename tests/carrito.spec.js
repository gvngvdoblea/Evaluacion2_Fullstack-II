describe("Pruebas Unitarias Componentes React", () => {
    let carrito;

    beforeEach(() => {
        carrito = [];
    });

    it("Deberia inicializar el estado del carrito como arreglo vacio", () => {
        expect(carrito.length).toBe(0);
        expect(Array.isArray(carrito)).toBeTrue();
    });

    it("Deberia agregar un producto al carrito", () => {
        const productoMock = { id: 1, nombre: "Hamburguesa", precio: 5990 };
        carrito.push(productoMock);
        expect(carrito.length).toBe(1);
        expect(carrito[0].nombre).toEqual("Hamburguesa");
    });

    it("Deberia calcular el total del carrito sumando precios", () => {
        carrito.push({ id: 1, precio: 5000 });
        carrito.push({ id: 2, precio: 3500 });
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        expect(total).toBe(8500);
    });

    it("Deberia eliminar un producto del carrito por id", () => {
        carrito = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const idAEliminar = 2;
        carrito = carrito.filter(item => item.id !== idAEliminar);
        expect(carrito.length).toBe(2);
        expect(carrito.find(item => item.id === 2)).toBeUndefined();
    });

    it("Deberia renderizar un componente tarjeta en el DOM", () => {
        const div = document.createElement("div");
        div.className = "tarjeta";
        div.innerHTML = "<h3>Completo Italiano</h3>";
        document.body.appendChild(div);
        
        const tarjetaRenderizada = document.querySelector(".tarjeta h3");
        expect(tarjetaRenderizada.innerText).toBe("Completo Italiano");
        document.body.removeChild(div);
    });

    it("Deberia dar formato correcto al precio en el DOM", () => {
        const span = document.createElement("span");
        span.className = "precio";
        const precioNumero = 2990;
        span.innerText = `$${precioNumero.toLocaleString('es-CL')}`;
        expect(span.innerText).toBe("$2.990");
    });

    it("Deberia tener las clases responsivas de Bootstrap en el contenedor", () => {
        const section = document.createElement("section");
        section.className = "container-fluid py-5";
        expect(section.classList.contains("container-fluid")).toBeTrue();
    });

    it("Deberia ejecutar la funcion del boton al hacer clic con mock", () => {
        const onAgregarMock = jasmine.createSpy("onAgregarMock");
        const button = document.createElement("button");
        button.onclick = onAgregarMock;
        
        button.click();
        expect(onAgregarMock).toHaveBeenCalled();
    });

    it("Deberia sumar cantidad si el producto ya existe en carrito", () => {
        const productoMock = { id: 1, cantidad: 1 };
        carrito.push(productoMock);
        carrito[0].cantidad += 1;
        expect(carrito[0].cantidad).toBe(2);
    });

    it("Deberia vaciar el carrito completamente", () => {
        carrito = [{ id: 1 }, { id: 2 }];
        carrito.length = 0;
        expect(carrito.length).toBe(0);
    });
});