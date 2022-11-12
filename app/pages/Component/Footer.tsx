import { Container, Row, Col } from "react-bootstrap"

const Footer=()=>{
    return(
       
<>
<footer className="fotter">


<Container >
    <Row >
        <Col>

            <button className="Fotter"><h4>HYPEINDUSTRY</h4></button>
            <button className="Fotter">HYPEINDUSTRY Concept</button>
            <button className="Fotter">Buying Guide</button> <br />
            <button className="Fotter">Selling Guide</button>


        </Col>
        <Col>
            <button className="Fotter"><h4>HYPEOFFERS</h4></button> <br />
            <button className="Fotter">FOOT Wears</button> <br />
            <button className="Fotter">Pearl</button> <br />
            <button className="Fotter">Ascessories</button>




        </Col>
        <Col>
            <button className="Fotter"><h4>Shipping</h4></button> <br />
            <button className="Fotter">Shipping For Buyers</button> <br />
            <button className="Fotter">Shipping For Seller</button>


        </Col>
        <Col>
            <button className="Fotter"><h4>Contact US</h4></button>
            <button className="Fotter">Shipping@hypeindustry.com</button>
            <button className="Fotter">Sale@hypeindustry.com</button>



        </Col>
    </Row>

    <hr className="hr" />


</Container>


</footer>
</>

    )
}
export default Footer