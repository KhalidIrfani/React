
import { Container, Row, Col } from "react-bootstrap";

const Industry = () => {
    return (
        <>
            <Container className="industry">

                <Row >
                    <Col> <img src="public/factory-workshop-interior-mac" alt="factory" />
                    </Col>

                    <Col><h2>Why Hypindustry and what is it?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod adipisci recusandae enim quibusdam sed cum obcaecati nulla dolorum fugiat voluptas tenetur doloremque accusantium nihil quasi eveniet aliquid sit ullam rem est, expedita nam quis cumque quisquam. Incidunt, deleniti animi.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="industry">

                <Row>

                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod adipisci recusandae enim quibusdam sed cum obcaecati nulla dolorum fugiat voluptas tenetur doloremque accusantium nihil quasi eveniet aliquid sit ullam rem est, expedita nam quis cumque quisquam. Incidunt, deleniti animi.</p>
                        <button className="btn1">Read more </button>
                    </Col>

                    <Col>
                        <img src="public/factory-workshop-interior-mac" alt="factory" />
                    </Col>
                </Row>
            </Container>

            <Container className="industry1">

                <Row>
                    <h2>Selling on HypeIndustry</h2>

                    <Col>
                        <button className="btn2">Become a Seller</button>
                    </Col>
                    <Col>
                        <button className="btn2 ">CREATE A LISTING</button>
                    </Col>
                    <Col>
                        <button className="btn2 ">CREATE A LISTING</button>
                    </Col>

                    <Col>
                        <button className="btn2 ">CREATE A LISTING</button>
                    </Col>
                </Row>
            </Container>


            <Container className=" industry">
                <Row>
                    <Col> <select className="form-select">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio nam rerum nemo rem ut necessitatibus, sint voluptatem, facilis expedita sequi unde voluptate laboriosam dolore? Autem quaerat rerum cumque laudantium?</p>
                    </select>
                    </Col>
                </Row>
            </Container>



        </>
    )

}

export default Industry;