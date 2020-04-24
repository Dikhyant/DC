import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../styles/ImageResize.css";

class ImageSlides extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row className="justify-content-md-center img-5">
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="img-5" alt="Img not found" src="https://cdn.collider.com/wp-content/uploads/2016/03/darkseid.jpg" />
                                    <Carousel.Caption>
                                        <h3>Darkseid</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="img-5" alt="Img not found" src="https://insidepulse.com/wp-content/uploads/2020/01/Batman-86-banner-inverted-regular-e1578365705703.png" />
                                    <Carousel.Caption>
                                        <h3>Batman</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                        <img className="img-5" alt="Img not found" src="https://i0.wp.com/www.nerdpool.it/wp-content/uploads/2019/12/Comics-Wonder-Woman-DC-Comics-Woman-Warrior-Blue-Eyes-HD-Wallpaper-Background.jpg?resize=1068%2C601&ssl=1" />
                                        <Carousel.Caption>
                                            <h3>Wonder Woman</h3>
                                        </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="img-5" alt="Img not found" src="https://wallpaperaccess.com/full/1917734.jpg" />
                                    <Carousel.Caption>
                                        <h3>Batman who laughs</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ImageSlides;