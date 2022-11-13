import { Container, Row, Col } from "react-bootstrap"

const Shipping=()=>{
    return(
<>
<Container className="Shipping">
    <Row>
        <Col>
        
        <i className="bi bi-box-seam  Box"></i>           
         <h2>Shipping For Seller</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi tempora ipsam quidem quia aliquam autem? Quos iure porro commodi consectetur, dolore maxime! Minus optio sapiente voluptate soluta fugit. Animi.</p>
            <button className="btn1">Read more <span><i className="bi bi-chevron-right"></i></span> </button>

            </Col>

            <Col>
        
            <i className="bi bi-credit-card-2-back Box"></i>        <h2>Shipping For Buyers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi tempora ipsam quidem quia aliquam autem? Quos iure porro commodi consectetur, dolore maxime! Minus optio sapiente voluptate soluta fugit. Animi.</p>
        <button className="btn1">Read more <span><i className="bi bi-chevron-right"></i></span> </button>

        </Col>
            
    </Row>
</Container>
</>
    )
}

export default Shipping