import React, { useState } from 'react';
import './menu.css';
import Navbar from '../components/navbar';
import img1 from '../components/images/cafemenu.jpg';

function Menu() {
    const [imageClicked, setImageClicked] = useState({
        cafemenu: false
      });
      const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
          ...prevState,
          [order]: !prevState[order]
        }));
      };

    return (
        <div className="menu" id='menu'>
            <Navbar />
            <div className="container">
            <h1 className="menu-title"> ~ Menu ~</h1>
            </div>
            <div className="text-box">
            <p className="menu-text" onClick={() => onClickHandler("cafemenu")}>Click to reveal our menu.</p>   
            </div>
            <div className="image">
        {imageClicked.cafemenu && <img src={img1} alt="cafemenu" id='cafemenu' />}
      </div>
        </div>
        );
    }

export default Menu;