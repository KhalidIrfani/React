import { Col,Row } from "react-bootstrap";
import Header from "./Header"
import Industry from "./industry";
import hero from "/public/hero.png"
import Image from "next/image";





const Hero = () => {
    return (
        <>
            <Header />
            
            <Row className="Row">
        
                <Col>    <h1 className="h1">New marketplace that <br /> allow you to buy bulk</h1>
                <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Veniam quisquam labore odit sapiente officiis sunt ex error, ad  esse ut saepe ipsum numquam tenetur aliquam architecto dolorum voluptates nesciunt eveniet?</p>

            <button className="btn btn-success">Read more</button>
                </Col>

                <Col>
                <Image className="Img" src={hero} alt="Hero" width={450} height={300}></Image>
                </Col>
            </Row>

            <Industry />

        </>
    )
}

export default Hero;