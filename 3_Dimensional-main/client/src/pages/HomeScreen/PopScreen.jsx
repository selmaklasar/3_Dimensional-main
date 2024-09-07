import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './HomeScreen.module.css';
import { Link } from 'react-router-dom';


import { setRouteModelSelected } from '../../redux/model_slice';
import { useDispatch, useSelector } from 'react-redux';
const BlackScreen = ({ onClick,type}) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'grey',
        filter: blur('50px'),
        opacity: 0.9,
        zIndex: 1,
      }}
      onClick={() => onClick(null)}
    >
      <Container className='h-100 w-100 d-flex justify-content-center align-items-center'>
        <Col xs={8}>
        <Row>
        
          <Col xs={6} className=' d-flex justify-content-center'   onClick={()=>{dispatch(setRouteModelSelected("crop_top"))}}>
          <button type="button" className={style.popbutton} >
                <Link to="/productscreen3" className={style.link}>Crop Top</Link>
              </button>
          </Col>
          <Col xs={6} className=' d-flex justify-content-center' onClick={()=>{dispatch(setRouteModelSelected("jump_suit"))}} >
          <button type="button" className={style.popbutton}>
                <Link to="/productscreen3" className={style.link}>Jump suit</Link>
              </button>
          </Col>
          <Col xs={6} className=' d-flex justify-content-center' onClick={()=>{dispatch(setRouteModelSelected("skirt"))}} >
          <button type="button" className={style.popbutton}>
                <Link to="/productscreen3" className={style.link}>Skirt</Link>
              </button>
          </Col>

          <Col xs={6} className=' d-flex justify-content-center' onClick={()=>{dispatch(setRouteModelSelected("wclth"))}} >
          <button type="button" className={style.popbutton}>
                <Link to="/productscreen3" className={style.link}>Wclth</Link>
              </button>
          </Col>
          <Col xs={6} className=' d-flex justify-content-center' onClick={()=>{dispatch(setRouteModelSelected("basic_shirt"))}} >
          <button type="button" className={style.popbutton}>
                <Link to="/productscreen3" className={style.link}>Basic Shirt</Link>
              </button>
          </Col>


        </Row>
        </Col>
      </Container>
    </div>
  );
};
export default BlackScreen;