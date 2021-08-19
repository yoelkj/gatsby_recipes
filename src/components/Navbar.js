import React, {useState} from 'react'
import {Link} from 'gatsby'
import {FiAlignJustify} from 'react-icons/fi'
import logo from '../assets/images/logo.svg'
const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Recipes"></img>
                    </Link>
                    <button className="nav-btn" onClick={() => setShow(!show)}>
                        <FiAlignJustify/>
                    </button>
                </div>
                <div className={ show ? "nav-links show-links": "nav-links"}   >

                    <Link onClick={() => setShow(false)} to="/" className="nav-link" activeClassName="active-link">Home</Link>
                    <Link onClick={() => setShow(false)} to="/recipes" className="nav-link" activeClassName="active-link">Recipes</Link>
                    <Link onClick={() => setShow(false)} to="/tags" className="nav-link" activeClassName="active-link">Tags</Link>
                    <Link onClick={() => setShow(false)} to="/about" className="nav-link" activeClassName="active-link">About</Link>
                    
                    <div className="nav-link contact-link">

                    <Link to="/contact" className="btn">Contact</Link>
                    </div>

                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
