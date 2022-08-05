import React, {useState} from "react";
import './gallery.css';
import {AiOutlineClose} from "react-icons/ai";
import Img1 from '../components/images/cafe1.jpg';
import Img2 from '../components/images/cafe2.jpg';
import Img3 from '../components/images/cafe3.jpg';
import Img4 from '../components/images/cafe4.jpg';
import Img5 from '../components/images/cafe5.jpg';
import Img6 from '../components/images/cafe6.jpg';

function Gallery() {
    
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} /> 
            <AiOutlineClose id="close-icon" onClick={()=> setModel(false)} />
        </div>
        <div className="gallery">
            <h1 className="gallery text-white">OUR GALLERY</h1>
            <div className="container">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} />
                        </div>
                    )
                })}
            </div>
            <a href="about" className='about-link'>Back To Previous Page</a>
            <a href="/" className='about-link'>Home Page</a>
        </div>
        </>
        );
    }

    export default Gallery;