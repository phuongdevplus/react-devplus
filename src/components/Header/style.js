import styled from 'styled-components';

const HeaderContainer = styled.div`
a{
  text-decoration: none;
}

@keyframes headerNotifyGrowth{
  from{
      opacity: 0;
      transform: scaleY(0); 
  }
  to{
      opacity: 1;
      transform: scaleY(1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}
.header__container{
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
  z-index: 190;
  height: 120px;
  display: block;
  align-items: center;
  background-color: #fff;
  transition: headerNotifyGrowth 0.3s ease;
}

.header__section {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
}
.header__logo {
  height: 100%;
  width: 16.66666667%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  top: 0.55vh;
}
.header__logo a img {
  max-width: 100%;
  height: auto;
  width:  182px;
  max-height: 40px
}
nav{
  height: 100%;
}
.header__nav{
  width: 66.66666667%;
}
.main__nav {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 4.6vw;
  padding: 0;
  list-style: none;
  height: 100%;
  z-index: 1000000;
  left: 0.7vw;

}
.main__nav li {
  padding: 0 1.9vw;
  margin-bottom: 2px;
}
.main__nav li a {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  font-family: 'Rubik', sans-serif;
  margin-top: 2px;
}
.main__nav li:first-child a {
  color: #226fb7;
}
.main__nav .sub__menu {
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  padding-left: 28.9px;
  padding-right: 10px;
  height: 100%;
}
.sub__menu:hover .sub__menu-option {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
  transform: scaleY(1);
}
.icon__minus{
  display: none;
}
.sub__menu:hover .icon__plus {
  display: none;
}
.sub__menu:hover .icon__minus {
  display: block;
}

.sub__menu .nav__icon {
  display: flex;
  align-items: center;
}
.sub__menu .nav__icon p {
  font-size: .95rem;
  margin: 0 0 2px 0px;
  font-weight: 700;
  color: var(--text-color);
  position: relative;
  right: -4px;
  width: 19px;
}

.sub__menu-option {
  position: absolute;
  background-color: #fff;
  top: 100%;
  width: 13vw;
  padding: 12px 0;
  left:0px;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  z-index: 5;
  font-weight: 300;
  opacity: 0;
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: 0 0 0;
  transition: .3s ease-in-out;
}

.sub__menu-option li {
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__link:hover .nav__link--href{
  color: #226FB7;
}
.sub__menu-option li:first-child a{ 
  color: var(--text-color);
}


.nav__link-option:hover .nav__link-option--href{
  color: #226FB7;
  cursor: pointer;
}

.nav__link-option:hover .sub__menu .nav__link--href{
  color: red!important;
}

.sub__menu-option li a {
  font-weight: 400;
  
}
.nav__list {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 16.66666667%;
  left: 3.3vw;
}

.header__menu-icon{
  position: relative;
  left: 3.05vw;
  width:  34px;
  height: 28.61px;
  margin-right: 24px; 
}
.header__menu-icon--dot{
  height: 2.88px;
  background-color: #111;
  width: 29.5px;
  margin: 5.2px 0;
  display: block;
}

/* right menu */

.right__menu{
  display: block;
  width: 500px;
  height: 100% ;
  overflow: auto;
  display: block;
  background-color: #FAFAFA;
  right:-500px;
  top: 0;
  transition: all 0.4s ease;
  z-index: 1000;
  position: fixed;
  padding: 30px 50px;
}
.right__menu-container {
  width: 100%;
  height: 100% ;
}
.right__menu--active {
  right: 0;
}
/* close menu */
.nav__close {
  width: 100%;
  height: 40px;
}
.close__btn {
  width: 40px;
  height: 100%;
  background: #226fb7;
  border-radius: 20px;
  position: relative;
  left: 0px;
}
.close__btn:hover{
  cursor: pointer;
}
.close__btn:hover .line .line1 { 
  transform: rotate(315deg) translateZ(0);
}
.close__btn:hover .line .line2 {
  transform: rotate(405deg) translateZ(0);
}
.line{
  width: 40px;
  height: 40px;
  position: relative;
}
.line1 {
  left: 25.3%;
  top: 49.65%;
  position: absolute;
  display: block;
  width: 20.5px;
  height:1px;
  background-color: rgb(255, 255, 255);
  transform: rotate(45deg);
  transition: transform 0.5s;
}
.line2 {
  left: 25.3%;
  top: 49.65%;
  position: absolute;
  display: block;
  width: 20.5px;
  height:1px;
  background-color: #fff;
  transform: rotate(135deg);
  transition: transform 0.5s;
}
.right__menu-logo{
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 30px 0;
}
.right__menu-logo img {
  width: 210px;
  height: 35px;
}

.right__menu--text p{
  font-size: 15px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  line-height: 27px;
  color:#505050;
  width: 100%;
  margin:  0 0 28px 0;
  text-align: center;
}
.album{
  position: relative;
  width: 415px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top:-2px
}
.album__img{
  width: 116.45px;
  height: 116.45px;
  margin: 0 5px 10px;
  border: none;
  overflow: hidden;
}
.album__img img{
  width: 100%;
  height: 100%;
  transition: transform .2s;
  object-fit: cover;
}
.album__img .button__popup{
  width: 100%;
  height: 100%;
  border: none; 
}
.album__img img:hover{
  transform: scale(1.1);

}
.map__img{
  margin-top:31.5px;
  width: 100%;
  height: 227.7px;
}
.map__img img{
  width: 100%;
  height: 100%;
}
.right__menu-contact{
  width: 100%;
  height: 76px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social{
  margin: 0;
  padding: 30.4px 0 32px 0;
}
.social li{
  list-style: none;
}
.social a i{
  color: #111;
  font-size: 1.2rem;
}
.social a i:hover{
  color: #226fb7;
  
}
/* modal-image */

.modal__active{
  display: flex; 
  align-items: center;
  position: fixed; 
  z-index: 200; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.8); 
  padding: 0;
}
.modal__container{
  height: 100%;
  width: calc(100vw - 484px);
  display: flex;  
}


.modal__content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.modal__handleClose{
  position: absolute;
  height: 130%;
  width: 100%;
}
.modal__figure{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: zoomInDown ease-in 1s;
}


.modal__arrow{
  cursor: pointer;
  position: relative;
  margin: 0 5vw;
  border: none;
  width: 0;
  height: 0;
  border-top: 22px solid transparent;
  border-right: 27px solid #2a323d;
  border-bottom: 22px solid transparent;
  background-color: transparent;
}
.modal__arrow--next:hover .next__button{
  opacity: 1;
}
.modal__arrow--previous:hover .previous__button{
  opacity: 1;
}
.next__button,
.previous__button{
  position: absolute;
  top: -13px;
  right: -23px;
  position:absolute;
  border-top: 13px solid transparent;
  border-right: 18px solid #fff;
  border-bottom: 13px solid transparent;
  background-color: transparent;
  opacity: 0.6;
}
.next__button{
  left: -23px;
  border-right: 0;
  border-left: 16px solid #fff;
}
.modal__arrow--next{
  border-right: 0;
  border-left: 27px solid #2a323d;
}
.modal__img{
  height: 80%;
  width: 88%;
  z-index: 10000;
}
.modal__img-item{
  width: 100%;
  z-index: 10000;
  
}
.modal__close{
  background-color: transparent;
  border: none;
  width: 88%;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
}
.modal__close:hover i{
  opacity: 1;
}
.modal__close i{
  color: #fff;
  opacity: .6;
  font-size: 1.2rem;
  padding-bottom: 10px;
}

/* reponsive header*/
@media screen and (max-width: 1290px){
  .main__nav{
    .nav__link{
      .nav__link--href{
        margin-top: 7px;
        font-size: 12px;
      }
    }
    .nav__icon{
      p{
        margin-top: 6px;
        font-size: 12px;
      }
    }
  }
}
@media screen and (max-width: 1080px){
  .main__nav{
    .nav__link{
      .nav__link--href{
        font-size: 10px;
      }
    }
    .nav__icon{
      p{
        font-size: 10px;
      }
    }
  }
}
@media screen and (max-width: 990px) {
  .header__container {
    height: 90px;
    position: fixed;
  }

  .header__section {
    padding-left: 15px;
  }

  .header__logo {
    height: 90px;
    width: 250px;
    margin-left: 5vw;
  }

  .header__logo a img {
    height: 50px;
    width: 200px;
    object-fit: contain;
  }

  .main__nav {
    display: block;
    position: absolute;
    align-items: center;
    margin-bottom: 0;
    margin: auto;
    padding: 0;
    background-color: #fff;
    width: 71.71vw;
    left: 11.5vw;
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0);
    transform-origin: 0 0 0;
    transition: .3s ease-in-out;
    top: 100%;
    height: 288px;
  }

  .main__nav--active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transform: scaleY(1);
  }

  .main__nav li {
    padding: 0 10px;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #505050;

  }

  .main__nav li:last-child {
    border-bottom: 1px solid transparent;
  }

  /* .main__nav .nav__link:hover .nav__link--href{
    color: #226FB7;
  } */
  .main__nav li a {
    font-size: 0.9.7vw;
    font-weight: bold;
    color: var(--text-color);
    font-size: 14px;
  }

  .main__nav .sub__menu {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 2px;
    justify-content: space-between;
    padding-left: 15px !important;
    height: 70px;
  }

  .sub__menu:hover .icon__plus {
    display: block;
  }

  .sub__menu:hover .icon__minus {
    display: none;
  }

  .sub__menu-option {
    top: 98%;
    width: 71.7vw;
    padding: 12px 0 0 0;
    left: 0px;
    transform: scaleY(1);
    opacity: 1;
    display: none;
    visibility: hidden;
  }

  .option--active {
    visibility: visible;
    display: block !important;
  }

  .sub__menu-option .nav__link-option {
    width: 100%;
    border: none;
    display: flex;
    justify-content: start;
    padding: 10px 0 10px 30px !important;
    height: 100%;

  }

  .sub__menu-option .nav__link a {
    font-weight: 400;
    font-size: 15px;
    padding: 5px 0;
  }

  .sub__menu-option .nav__link-option a {
    font-weight: 400;
    font-size: 13px;
    padding: 4px 0;
  }

  .sub__menu-option li:last-child {
    padding: 0 !important;
    height: 40px;
    background-color: #F6F3ED;
    color: var(--text-color);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
  .sub__menu--option li:last-child i {
    color: var(--text-color);
  }

  .sub__menu a {
    z-index: 1;
  }

  .sub__menu .nav__icon {
    display: none;
  }

  .sub__menu .nav__icon-1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dddd;
    width: 45px;
    height: 70px;
    top: -1px;
    right: -10px;
  }

  .sub__menu .nav__icon-1 i {
    color: var(--text-color);
  }
  .right__menu {
    right: -500px;
  }
  .nav__list {
    position: relative;
    margin-top: 5px;
    right: -2px;
  }
  .header__menu-icon {
    position: absolute;
    margin: 0px;
    height: 28px;
    top: -15px;
    left: -25px;
  }
  .header__menu-icon--dot {
    height: 3px;
    background-color: #111;
    width: 19.8px;
    margin: 3.5px 0;
    display: block;
  }
}

@media only screen and (min-width: 720px) {
  .concerns__img-video .close {
    top: 13%;
    left: 81%;
    transform: translate(50%, 50%);
  }
}
@media screen and (min-width: 991px) {
  .header__logo {
    position: relative;
    left: 7.55vw;
    top:1px;
  }
  .header__nav{
    height: 100%;
  }
  .main__nav{
    position: absolute;
   margin-left: 100px;
  }

  .toggle__modal {
    display: none;
  }

  .main__nav {
    position: relative;
  }

  .header__menu-icon {
    position: relative;
    left: 1.88vw;
  }

  .header--active {
    position: fixed !important;
    height: 90px;
    display: flex;
    animation: headerNotifyGrowth ease-in 0.4s;
    transform-origin: top;
  }

  .sub__menu .nav__icon-1 {
    display: none;
  }

  .sub__menu .sub__menu-option .close__btn-option {
    display: none;
  }

}
@media screen and (max-width: 1270px) {
  .our__main-container {
    max-width: 1170px
  }

  .courses__item {
    width: 30%;
  }

  .main__nav li a {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 990px) {
  .our__main {
    height: 100vh;
  }

  .our__main-container {
    margin: auto;
    max-width: 720px;
    padding: 64px 0 40px 0;
  }

  .our__main-title h1 {
    font-size: 30px;
    margin: 0;
  }

  .courses__item {
    flex: 0 0 auto;
    width: 45.8%;
    padding-bottom: 0;
    height: 335px;
    margin-bottom: 30px;
  }

  .courses__item img {
    height: auto;
    width: 100%;
  }

  .courses__item span {
    font-size: 19px;
  }
}

@media screen and (max-width: 768px) {
  .header__logo {
    width: 200px;
  }
  .our__main-container {
    margin: auto;
    max-width: 540px;
    padding-top: 0;
  }

  .our__main {
    padding: 64px 0 40px 0;
  }

  .courses__item {
    flex: 100%;
    margin-bottom: 30px;
    height: 425px;
  }
}
@media screen and (max-width: 480px) {
  .header__logo {
    width: 170px;
  }
}
`
export default HeaderContainer