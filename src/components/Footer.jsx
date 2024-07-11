import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <Link to="/">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link> 
            <Link to="/green">Green</Link> 
            <Link to="/orange">Orange</Link> 
        </div>
    )
}

export default Footer;