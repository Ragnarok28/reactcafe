import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="container" id='navbar-container' >
            <a href="/" id="navbar-logo"><span className='text-white'>Cafe </span>React</a>
                <ul className='navbar-items'>
                    <a href="/" id="navbar-link">Home</a>
                    <a href="about" id="navbar-link">About</a>
                    <a href="menu" id="navbar-link">Menu</a>
                    <a href="contact" id="navbar-link">Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;