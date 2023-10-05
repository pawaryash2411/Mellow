import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import mellowIcon from '../assets/mellowIcon.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Android from '../assets/android.png'
import Ios from '../assets/ios.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={mellowIcon} alt='logo' />
                        <p>Download Our App for Android and IOS</p>
                        <div className='application mt-3 '>
                            <a href='/'><img src={Android} alt='instagram' /></a>
                            <a href='/'><img src={Ios} alt='linkedin' /></a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <p>Follow Me On</p>
                        <div className='social-icon mt-4'>
                            <a href='https://www.instagram.com/_yash__2411/' target='_blank' rel="noreferrer"><img src={Instagram} alt='instagram' /></a>
                            <a href='https://www.linkedin.com/in/yash-pawar-kamdi-8041921b5/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='linkedin' /></a>
                            <a href='https://github.com/pawaryash2411' target='_blank' rel="noreferrer"><img src={Github} alt='github' /></a>
                        </div>
                        <p>CopyRight ©2022 | All Rights Reserved | Created by <b> Yash Pawar Kamdi </b></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer