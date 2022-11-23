import styled from 'styled-components';

const OurMainContainer = styled.div`
.our__main{
  background: url("../images/home.png");
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 94px;
  padding-bottom: 70px;
}
.our__main-container{
  max-width: 1270px;
  margin-top: 6px; 
  padding: 90px 0 66px 0;

}
.our__main-title{
  margin:0 0 50px 15px;
}
.our__main-title h1{
  font-size: 36px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
    color: #111111;
}
.content__courses-item{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2px;
}
.courses__item{
  padding: 30px;
  background-color: #F9F7F8;
  transition: all 0.3s ease;
  margin: 0 15px;
  border: 1px solid #dfe9eb;
  height: 386.6px;
  width: 393.3px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

}
.courses__item img{
  width: 100%;
  height: 65%;
    border-radius: 5px;
    transition: all 0.3s ease;
    margin-bottom: 29px;
}
.courses__item span{
  font-size: 1.56vw;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
    color: #111111;
    margin: 0 0 26px;
    padding-top: 0.5px;
    line-height: 1.8rem;
    /* padding-bottom: 20px; */
}

.background{
  background-color: red;
  height: 500px;
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

`
export default OurMainContainer