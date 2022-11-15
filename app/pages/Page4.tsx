import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Industry from "./Component/industry"
import Question from "./Component/Question"
import { Container, Row, Col } from "react-bootstrap"


const Page4=()=>{
    return(
        <>
        <Header/>
        <Container className="industry1">

<Row>
    <h2>Selling on HypeIndustry</h2>

    <Col className="btn3">
        <button className="btn2">Become a Seller</button>
        <button className="btn2">Become a Seller</button>
        <button className="btn2">Become a Seller</button>
        <button className="btn2">Become a Seller</button>

    </Col>

</Row>
</Container>

        <Question/>

        <Footer/>
        </>
    )
}
export default Page4