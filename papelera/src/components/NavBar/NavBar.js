import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h3>Papelera King</h3>
            </Link>
            <div>    
                <NavLink to={`/category/bolsas`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Bolsas</NavLink>
                <NavLink to={`/category/bandejas`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Bandejas</NavLink>
                <NavLink to={`/category/papeles`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Papeles</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar