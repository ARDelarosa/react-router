import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <Link to="/blue">This is blue!</Link>
            <Link to="/red">This is red!</Link>
            <Link to="/green">This is green!</Link>
            <Link to="/orange">This is orange!</Link>
        </div>
    )
}

export default Navbar;