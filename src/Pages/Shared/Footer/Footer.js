import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
}
    from "./FooterStyles";
import './Footer.css';

const Footer = () => {
    return (
        <Box className="footer " >
            <h1 style={{
                textAlign: "center",
                marginTop: "-50px"
            }}>
                MotorMania
            </h1>
            <br />
            <Container>
                <Row>
                    <Column>
                        <Heading>Get In Touch</Heading>
                        <FooterLink href="#">Address:<br />
                            (843) 846-2230 20 Island Tank Rd Beaufort, South Carolina(SC).</FooterLink>
                        <FooterLink href="#">Email: motomania@gmail.com</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Our Services</Heading>
                        <FooterLink href="#">Delivery Information</FooterLink>
                        <FooterLink href="#">01542169385</FooterLink>
                        <FooterLink href="#">Let's Talk</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Useful Links</Heading>

                        <FooterLink href="#">Home</FooterLink>
                        <FooterLink href="#">lovetravel@gmail.com</FooterLink>
                        <p>3146 Koontz, California</p>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i
                                className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                <br />
                <br />
                <footer>©Copyright | MotorMania 2021.All Right Reserved</footer>
            </Container>
        </Box >
    );
};
export default Footer;
