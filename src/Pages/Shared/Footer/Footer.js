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
                LOVE TRAVEL
            </h1>
            <br />
            <Container>
                <Row>
                    <Column>
                        <Heading>Menu</Heading>
                        <FooterLink href="#">Home</FooterLink>
                        <FooterLink href="#">Our packages</FooterLink>
                        <FooterLink href="#">My Booking</FooterLink>
                        <FooterLink href="#">Manage All Booking</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Information</Heading>
                        <FooterLink href="#">Emergency Information</FooterLink>
                        <FooterLink href="#">01542169385</FooterLink>
                        <FooterLink href="#">lovetravel@gmail.com</FooterLink>
                    </Column>
                    <Column>
                        <Heading>About Travel</Heading>

                        <FooterLink href="#">01542169385</FooterLink>
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
                <footer>©Copyright | Love Travel 2021.All Right Reserved</footer>
            </Container>
        </Box >
    );
};
export default Footer;
