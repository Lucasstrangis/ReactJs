import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem (item, quantity)
    }

    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
           </picture>
           <section>
            <p>
                Categoría: {category}
            </p>
            <p>
                Descripción: {description}
            </p>
            <p>
                Precio: {price}
            </p>
           </section>
           <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="Option">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
           </footer>
        </article>
    )
}

export default ItemDetail