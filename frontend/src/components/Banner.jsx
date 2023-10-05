import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/mainImg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Styling/Banner.css'
import BgImageOne from '../assets/Bg-Image1.jpg'
import BgImageTwo from '../assets/Bg-Image2.jpg'
import BgImageThree from '../assets/Bg-Image7.jpg'

const Banner = () => {
    const { isAuthenticated } = useSelector((state) => state.userData)
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Fashion", "Electronics", "Home Appliances", "Mobiles"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <>
            {isAuthenticated ?
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    {/* <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={BgImageOne} className="d-block w-100" alt="..." />
                            <Container className='carousel-container'>
                                <Row className="align-items-center">
                                    <Col xs={12} md={6} xl={7}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                    <h3 className='banner-text'>{`Get the Latest`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                                                    <h5 className='banner-text2'>Get The Hot deals from India's Most Modern Store in India.Mellow is the Most Trusted brand among the customers ever since the 2020's.The Industry Standards and customers Satisfaction is the aim to build the Best Brand in the Decade.</h5>

                                                    <Link to={isAuthenticated ? "/products" : "/login"}><button className='shop-button'>Shop Now<ArrowRightCircle size={25} /></button></Link>
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                    <Col xs={12} md={6} xl={5}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                                    <img className='visible-image' src={headerImg} alt="Header Img" />
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="carousel-item">
                            <img src={BgImageTwo} className="d-block w-100" alt="..." />
                            <Container className='carousel-container'>
                                <Row className="align-items-center">
                                    <Col xs={12} md={6} xl={7}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                    <h3 className='banner-text'>{`Get the Latest`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                                                    <h5 className='banner-text2'>Get The Hot deals from India's Most Modern Store in India.Mellow is the Most Trusted brand among the customers ever since the 2020's.The Industry Standards and customers Satisfaction is the aim to build the Best Brand in the Decade.</h5>

                                                    <Link to={isAuthenticated ? "/products" : "/login"}><button className='shop-button'>Shop Now<ArrowRightCircle size={25} /></button></Link>
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                    <Col xs={12} md={6} xl={5}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                                    <img className='visible-image' src={headerImg} alt="Header Img" />
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="carousel-item">
                            <img src={BgImageThree} className="d-block w-100" alt="..." />
                            <Container className='carousel-container'>
                                <Row className="align-items-center">
                                    <Col xs={12} md={6} xl={7}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                    <h3 className='banner-text'>{`Get the Latest`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                                                    <h5 className='banner-text2'>Get The Hot deals from India's Most Modern Store in India.Mellow is the Most Trusted brand among the customers ever since the 2020's.The Industry Standards and customers Satisfaction is the aim to build the Best Brand in the Decade.</h5>

                                                    <Link to={isAuthenticated ? "/products" : "/login"}><button className='shop-button'>Shop Now<ArrowRightCircle size={25} /></button></Link>
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                    <Col xs={12} md={6} xl={5}>
                                        <TrackVisibility>
                                            {({ isVisible }) =>
                                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                                    <img className='visible-image' src={headerImg} alt="Header Img" />
                                                </div>}
                                        </TrackVisibility>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                :
                <section className="banner" id="home">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} xl={7}>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                            <h3 className='banner-text'>{`Get the Latest`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                                            <h5 className='banner-text2'>Get The Hot deals from India's Most Modern Store in India.Mellow is the Most Trusted brand among the customers ever since the 2020's.The Industry Standards and customers Satisfaction is the aim to build the Best Brand in the Decade.</h5>

                                            <Link to={isAuthenticated ? "/products" : "/login"}><button className='shop-button'>Shop Now<ArrowRightCircle size={25} /></button></Link>
                                        </div>}
                                </TrackVisibility>
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                            <img className='visible-image' src={headerImg} alt="Header Img" />
                                        </div>}
                                </TrackVisibility>
                            </Col>
                        </Row>
                    </Container>
                </section >
            }



        </>
    )
}

export default Banner