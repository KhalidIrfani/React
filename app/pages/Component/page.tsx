import Header from "./Header"
import { Container, Row, Col } from "react-bootstrap"
import Page1 from "public/Page1.jpg"
import Image from "next/image"

const Page=()=>{
return(
    <>
    <Header/>
    <Container>
        <Row>
            <Col>
            <h2>Why Hypeindustry and What is it excatly?</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatibus similique ipsam eos minus inventore quae? Adipisci minima hic, temporibus aut repellendus, rem quaerat maiores voluptas corporis tempore nobis sed!</p>
            </Col>
            <Col>

            <Image src={Page1} alt='' />
            </Col>
        </Row>
    </Container>



    </>
)
}

export default Page