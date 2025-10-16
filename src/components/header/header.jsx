import { Link, NavLink } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/#" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/users" className="nav-link">User</NavLink></li>
                <li className="nav-item"><NavLink to="/products" className="nav-link">Product</NavLink></li>
            </ul>
        </header>
    )
}

export default HeaderComponent