import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <i className="bi bi-house me-3"></i>
                    {props.name}
                </Link>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <Link to="/Services" className="nav-link me-3">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;