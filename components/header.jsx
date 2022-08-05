import './header.css';

function Header() {
    return (
        <div className='header'>
        <div className="container">
            <h1 className="header-title text-white">How do you <span className='text-yellow'>react</span> after drinking <span className='text-yellow'>coffee?</span></h1>
        <button type='button' className='btn bg-yellow'><a href='./menu'>Menu</a></button>
        </div>
        </div>
        );
    }

export default Header