import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";


const NavBar = ()=> {
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>Inicio</h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/alimentos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Alimentos</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/snacks`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Snacks</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/salud`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Salud</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/estetica`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Estetica</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar