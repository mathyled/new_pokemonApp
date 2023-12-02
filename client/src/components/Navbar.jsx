import { Link } from "react-router-dom";
import style from "./navbar.module.css"


const Navbar = () => {
    return(
        <nav className={style} >
            <Link to="/home">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="about">About</Link>
        </nav>
    )
}

export default Navbar;