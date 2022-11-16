import { Col, Row, Container } from "react-bootstrap";
import Header from "./Header"
import Industry from "./industry";
import hero from "/public/hero.png"
import Image from "next/image";
import Question from "./Question";





const Hero = () => {
    return (
        <>
            <Header />

            <Container>
                <Row className="Row">

                    <Col>    <h1 className="h1">New marketplace that <br /> allow you to buy bulk</h1>
                        <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam quisquam labore odit sapiente officiis sunt ex error, ad  esse ut saepe ipsum <br /> numquam tenetur aliquam architecto dolorum voluptates nesciunt eveniet?</p>

                        <button className="btn">Read more</button>
                    </Col>

                    <Col>
                    
                    </Col>


                </Row>

            </Container>
            <Industry />


        </>
    )
}

export default Hero;