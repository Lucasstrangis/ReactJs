import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3 class="titulo">Papelera King</h3>
            <div>
                <button>Inicio</button>
                <button>Bolsas</button>
                <button>Bandejas</button>
                <button>Papeles</button>
                <button>Contacto</button>
                <button class="carrito"><CartWidget /></button>
            </div>
            
        </nav>
    )
}

export default NavBar