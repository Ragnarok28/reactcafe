import './about.css';
import Navbar from '../components/navbar';

function About() {
    return (
        <div className="about" id='about'>
            <Navbar />
            <h1 className='text-yellow'>About Our Cafe</h1>
            <div className="container">
            <div className="about-text">
            <h2 className='text-yellow'>Our Story</h2>
            <p className="text-white">Established in 2022, Cafe React is a locally-owned coffee shop. 
            We serve a range of espresso coffees made from the finest coffee beans. With their superior 
            technical knowledge and a passion for making amazing coffee our baristas will make you the perfect coffee.</p>
            <a href="gallery" className='about-link'>Check out our GALLERY OF PHOTOS</a>
            </div>
            <div className="about-image">
            </div>
            </div>
        </div>
        );
    }

export default About;