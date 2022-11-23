import React, { useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
function ModalRightMenu(setShow) {
    const modalRef = useRef(null)
    const img = setShow.value.img
    const currentImg = setShow.value.currentImg;
    const modalFigure = useRef(null)
    useEffect(() => {
        modalFigure.current.style.display = "none";
        setTimeout(function () { modalFigure.current.style.display = "flex" }, 1);
    }, [img, currentImg])
    useEffect(() => {
        modalRef.current.onclick = () => {
            setShow.value.setShowModal(false)
            console.log('oke')
        }
    }, [img, currentImg])
    return (
        <Container fluid className='modal modal__active' >
            <Row className="modal__container">
                <Col className="modal__content">
                    <div className="modal__handleClose" ref={modalRef}></div>
                    <div className="modal__arrow modal__arrow--previous" onClick={() => setShow.value.setCurrentImg(currentImg - 1)}>
                        <div className="previous__button"></div>
                    </div>
                    <div className="modal__figure" ref={modalFigure}>
                        <button className="modal__close" onClick={() => setShow.value.setShowModal(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div className="modal__img button__popup" >
                            <img className="modal__img-item" alt="" src={img} />
                            <div>
                                <div className="modal__bottom-bar">
                                    <div className="modal__title"></div>
                                    <div className="modal__counter"> of 6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal__arrow modal__arrow--next" onClick={() => setShow.value.setCurrentImg(currentImg + 1)} >
                        <div className="next__button"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default ModalRightMenu;