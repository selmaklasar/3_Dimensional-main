import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../common/NavBar';
import style from './product.module.css';

const ProductScreen = () => {
    const images = [
        { src: "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png", label: "F" },
        { src: "https://cdn.pixabay.com/photo/2017/09/10/00/29/png-2734006_1280.png", label: "B" },
        { src: "https://cdn.pixabay.com/photo/2016/10/10/16/32/pinup-1729057_1280.png", label: "L" },
        { src: "https://cdn.pixabay.com/photo/2021/10/27/06/06/young-woman-6746061_1280.png", label: "R" }
    ];

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSide, setSelectedSide] = useState('F');
    const [selectedImage, setSelectedImage] = useState(images[0].src);

    
    const handleSideSelection = (sideProduct, index) => {
        setSelectedSide(sideProduct);
        setSelectedImage(images[index].src)
    }
    return (
        <div className={`${style.bg}`}>
            <NavBar />
            <Container fluid className={`${style.product_container} d-flex flex-column`}>
                {/*     Image Section */}
                <Row className={`${style.product_img_box} justify-content-center align-items-center `} >
                    <img src={selectedImage}
                        alt=""
                        className={`${style.product}`}

                    />
                </Row>
                <Row className='flex-grow-1'></Row>
                {/* size Tab */}
                <Row className={` justify-content-center ${style.bg}`}>
                    <Row className={`px-3 align-items-baseline`}>
                        <Col lg={6} className='p-2 mb-0 my-auto '>
                            <Row className='h-100 mx-auto '>
                                
                                <Col lg={3} className=' d-flex justify-content-center  my-2 my-lg-0 '>
                                <button className={`${style.myButton}`}>MODEL</button>
                                
                                </Col>
                                <Col >
                                    <Row className={style.myButton_small}>
                                        {sizes.map(size => (
                                            <Col key={size}>
                                                <button className={`${style.myButtonSmall}`}>{size}</button>
                                            </Col>
                                        ))}

                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='p-2 my-auto text-white '>
                            <Row className=''>
                                {images.map((image, index) => (
                                    <Col key={index} onClick={() => handleSideSelection(image.label, index)} className='d-flex justify-content-evenly'>
                                        <div className={`${selectedSide === image.label ? style.selected_image_view : style.image_view} position-relative d-flex justify-content-center align-items-center`}>
                                            <img src={image.src} alt="" className={`${style.product_side}`} />
                                            <div className="position-absolute bottom-0 end-0 me-2 fs-6 fw-bold">{image.label}</div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    {/* Bottom Tab */}
                    <Row className={`${style.product_bottom_tab} py-3 px-5`}>
                        <Col lg={6} className={`${style.image_styles}  p-2 my-auto`} >
                            <Row className='h-100'>
                                <Col xs={4}><button className={`${style.myButton} `}>UPLOAD IMAGE</button></Col>
                                <Col >
                                    <Row className={`${style.mybutton_row}`}>
                                        <Col ><button className={`${style.myButton2} w-100 `}>ADD TEXT</button></Col>
                                        <Col><button className={`${style.myButton3} w-100 `}>ADD FONT</button></Col>
                                    </Row>
                                    <Row className={`${style.inputtype}`}>
                                        <Col className='mt-2'>
                                            <input class="form-control" type="text" placeholder="Type here..."   />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} className={`${style.viewbutton} p-2 my-auto `}>
                            <Row className=' d-flex justify-content-evenly  mb- -10'>
                                <Col xs={6}>
                                    <button className={`${style.myButton4} w-65 py-2`}>PREVIEW (3D)</button>
                                </Col>
                                <Col xs={6}>
                                    <button className={`${style.myButton4} w-70 py-2  `}>NEXT 〉</button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default ProductScreen;