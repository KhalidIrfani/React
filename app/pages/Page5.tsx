import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Question from "./Component/Question"
import { Container, Row, Col } from "react-bootstrap"


const Page5=()=>{
return(
    <>
    <Header/>

<Container className="page5">
    <Row >
        <Col >
        <h3>Shipping for Buyers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, officiis deleniti ipsam consequatur aspernatur numquam temporibus unde sunt fuga praesentium libero quod sequi rerum hic repellat magni nemo voluptatem perferendis. <br /> Ipsa ex officiis, amet sequi voluptatum similique eos repellendus aspernatur distinctio <br /> dolorum sit explicabo! Dolore perferendis, ullam repudiandae cum aliquid excepturi cumque autem vero natus unde est aut dignissimos quae?</p>
        </Col>
        <Col>
        {/* <Image src={page3} alt='' /> */}
        </Col>
    </Row>
    <Row className="page5r">
        <Col>
        </Col>

        <Col>
        <h3>How much does Shipping COST</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum unde quae, cumque laudantium numquam odio ea, dicta in minima fuga, quisquam nobis reprehenderit esse. Consectetur repellendus minima officiis omnis?</p>
        </Col>
    </Row>
  </Container>

    <Question/>
    <Footer/>
    </>
)
}

export default Page5