import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from './HomeScreen.module.css';
import NavBar from '../../common/NavBar';

const videoSource = "https://videos.pexels.com/video-files/20683835/20683835-hd_1080_1920_30fps.mp4";
const videoSource2 = "https://videos.pexels.com/video-files/7244811/7244811-hd_1080_1920_25fps.mp4";
const videoSource3 = "https://videos.pexels.com/video-files/20683835/20683835-hd_1080_1920_30fps.mp4";

const HomeScreen = ({onClick}) => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredVideo(index);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <div>
      <NavBar />
      <div className={`${style.home_bg}`}>
        <Container fluid className='d-none d-lg-block'>
          <Row className={`d-flex justify-content-center align-items-center px-5 ${style.home_hero}`}>
            {[videoSource, videoSource2, videoSource3].map((src, index) => (
              <Col lg key={index} className={`mx-5 ${style.home_cards}`} >
                <div 
                onClick={() => onClick(index)}
                  className={`${style.videoContainer} ${hoveredVideo !== null && hoveredVideo !== index ? style.blur : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: 'filter 0.3s, opacity 0.3s', // Add transition effect
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    height="100%"
                   
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`${style.overlayText}`}>
                    <h3>{index === 0 ? 'Men' : index === 1 ? 'CUSTOIZEM' : 'Women'}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div fluid className='d-block d-lg-none'>
          <div className={`${style.videoWrapper}`}>
            <video
              autoPlay
              loop
              muted
              playsInline>
              <source src={videoSource3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeScreen;