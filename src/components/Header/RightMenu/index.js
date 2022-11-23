import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function RightMenu(setShow) {
  const data = setShow.value.data
  function getImages(e){
    setShow.value.setShowModal(true)
    setShow.value.setImg(e.target.src)
    setShow.value.setCurrentImg(e.target.tabIndex)

  }

  return (
      <Container className={setShow.value.showRightMenu?"right__menu right__menu--active":"right__menu"}>
        <Col className="right__menu-container">
          <div className="nav__close">
            <div className="right__menu--active close__btn">
              <div className="line" onClick={()=>setShow.value.setShowRightMenu(false)}>
                <span className="line1"></span>
                <span className="line2"></span>
              </div>
            </div>
          </div>
          <div className="right__menu-logo">
            <img src={data?data[0].logo:''} alt="logo" />
          </div>
          <div className="right__menu--text">
            <p>
            {data?data[0].description:''}
            </p>
          </div>
          <div className="album">
            {
              data?data[0].images.map((img, index)=>(
                <div key={index} className="album__img button__popup" onClick={(e)=>getImages(e)}>
                  <img tabIndex={index} src= {img.src} alt="" />
                </div>  
              )):''
            }
          </div>
          <div className="map__img">
            <img src={data?data[0].map:''} alt="" />
          </div>
          <div className="right__menu-contact">
            <div className="social">
              <a
                href="https://www.facebook.com/Devplusprogramme"
                target="_blank"
              ><i className="fa-brands fa-facebook-f"></i>
              </a>

            </div>
          </div>
        </Col>
      </Container>
  );
}

export default RightMenu;
