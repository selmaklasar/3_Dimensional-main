import React, { useState } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import NavBar from '../../common/NavBar';
import style from './product2.module.css';
import Crop_top from '../models/crop_top';

const ProductScreen2 = () => {
    const images = [
        { src: "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png", label: "F" },
       
    ];

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSide, setSelectedSide] = useState('F');
    const [selectedImage, setSelectedImage] = useState(images[0].src);
    const [color, setColor] = useState('#ffffff');
    const handleSideSelection = (sideProduct, index) => {
        setSelectedSide(sideProduct);
        setSelectedImage(images[index].src) 
    }
    return (
        <div className={`${style.bg}`}>

            <NavBar />
            <Container fluid className={`${style.product_container} d-flex flex-column`}>
                {/*     Image Section */}
                <Row className={`${style.product_img_box} justify-content-center align-items-center `}>
                    <Crop_top url="http://localhost:3000/api/gltf/get_gltf/crop_top.gltf" />
                </Row>


                <Row className='flex-grow-1'></Row>
                {/* size Tab */}
               
                <Row className={`${style.product_bottom_tab} py-3 px-5`}>
                    <Col xs={5}>
                <Row className={`${style.zoom_btn}`}>
                    <button className={`${style.zoomin}`}>+</button>
                    <i class="fa-solid fa-magnifying-glass"  className={`${style.magnifyglass}`}></i>
                    <button className={`${style.zoomout}`}>-</button>
                  </Row>  
                 <Row className={`${style.Material_btn}`}   >   
                      
                  <button className={`${style.Materialbtn}`}> MATERIALS</button><br></br></Row>  
                  </Col>
          <Row className={` ${style.shirt_colors} `}>
            <Col xs={9}>
          <input type="button" id="mesh" name="vest" className= {`${style.shirt1}`}onClick={(e) => setColor('black')} />
            <input type="button" id="mesh" name="vest" className={`${style.shirt2}`} onClick={(e) => setColor('white')} />
           
            <input type="button" id="mesh" name="vest" className= {`${style.shirt3}`} onClick={(e) => setColor('red')} />
            <input type="button" id="mesh" name="vest" className={`${style.shirt4}`} onClick={(e) => setColor('Yellow')} />
            <input type="button" id="mesh" name="vest" className={`${style.shirt5}`}onClick={(e) => setColor('blue')} />
            <input type="button" id="mesh" name="vest" className={`${style.shirt6}`} onClick={(e) => setColor('green')} />
            <input type="button" id="mesh" name="vest" className={`${style.shirt7}`}onClick={(e) => setColor('Orange')} />
            </Col>
          </Row>                  
                   <div className={`${style.bottom_btn}`}>
                        <Col lg={6} className='p-2 my-auto '>
                            <Row className=' d-flex justify-content-evenly'>
                                <Col xs={5}>
                                    <button className={`${style.myButton2} w-100 py-2`}> 〈  PREVIEW</button>

                                </Col>
                                <Col xs={5}>
                                    <button className={`${style.myButton2} w-100 py-2`}>NEXT 〉</button>
                                </Col>
                            </Row>
                        </Col>
                        </div>
                        
                   </Row>
               
            </Container>
        </div>
    );
};

export default ProductScreen2;