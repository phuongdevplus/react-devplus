import React, {useState} from 'react';
import logo from '../../../assets/images/logo_devplus.png';
import Navigation from '../Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function NavBar(setShow) {
    const [navAnimation, setNavAnimation] = useState(false)
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
            setNavAnimation(true)
        }  
        else{
            setNavAnimation(false)
        }
      })
    return (
   
        <Container fluid className={navAnimation?"header__container header--active":"header__container"}>
            <Row  className="header__section">
                <Col xs={6} className="logo header__logo col-lg-2">
                    <a href="index.html">
                        <img src={logo} alt="logo" />
                    </a>
                </Col>
                <Col className="header__nav col-lg-8">
                    <ul className={setShow.value.showRightMenu?'main__nav main__nav--active':'main__nav'}>
                        <Navigation value="HOME" submenu={false} />
                        <Navigation value="ABOUT DEVPLUS" submenu={false} />
                        <Navigation value="OUR PROGRAMME" submenu={true} />
                        <Navigation value="DEVPLUS ACTIVITIES" submenu={false} />
                    </ul>
                </Col>
                <Col xs={6} className="nav__list col-lg-2">
                    <div className="header__menu-icon right__menu--active" onClick={() => setShow.value.setShowRightMenu(!setShow.value.showRightMenu)}>
                        <span className="header__menu-icon--dot"></span>
                        <span className="header__menu-icon--dot"></span>
                        <span className="header__menu-icon--dot"></span>
                    </div>
                </Col>
            </Row>
        </Container>  
    )
}