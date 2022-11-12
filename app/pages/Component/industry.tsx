
import { Container, Row, Col } from "react-bootstrap";
import factory from "public/factory.png";
import agricultural from "public/agricultural.png"
import Image from "next/image";

const Industry = () => {
    return (
        <>
            <Container className="industry">

                <Row >
                    <Col> <Image src={factory} alt="factory" width={500} height={300}></Image>
                    </Col>

                    <Col className="H2"><h2>Why Hypindustry and what is it?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod adipisci recusandae enim quibusdam sed cum obcaecati nulla dolorum fugiat voluptas tenetur doloremque accusantium nihil quasi eveniet aliquid sit ullam rem est, expedita nam quis cumque quisquam. Incidunt, deleniti animi.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="industry">

                <Row>

                    <Col className="H2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod adipisci recusandae enim quibusdam sed cum obcaecati nulla dolorum fugiat voluptas tenetur doloremque accusantium nihil quasi eveniet aliquid sit ullam rem est, expedita nam quis cumque quisquam. Incidunt, deleniti animi.</p>
                        <button className="btn1">Read more </button>
                    </Col>

                    <Col>
                        <Image src={agricultural} alt="factory" width={500} height={300}></Image>
                    </Col>
                </Row>
            </Container>

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


            {/* <Container className="industry3">
                <Row>
                    <Col> <select className="form-select">
                        <option value="">                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio nam rerum nemo rem ut necessitatibus, sint voluptatem, facilis expedita sequi unde voluptate laboriosam dolore? Autem quaerat rerum cumque laudantium?</p>
                        </option>                    </select>
                    </Col>
                </Row>

                <Row>
                    <Col> <select className="form-select">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio nam rerum nemo rem ut necessitatibus, sint voluptatem, facilis expedita sequi unde voluptate laboriosam dolore? Autem quaerat rerum cumque laudantium?</p>
                    </select>
                    </Col>
                </Row>


                <Row>
                    <Col> <select className="form-select">
                        <option value="">   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio nam rerum nemo rem ut necessitatibus, sint voluptatem, facilis expedita sequi unde voluptate laboriosam dolore? Autem quaerat rerum cumque laudantium?</p>
                        </option>
                    </select>
                    </Col>
                </Row>


                <Row>
                    <Col> <select className="form-select">
                        <option value="">   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio nam rerum nemo rem ut necessitatibus, sint voluptatem, facilis expedita sequi unde voluptate laboriosam dolore? Autem quaerat rerum cumque laudantium?</p></option>
                    </select>
                    </Col>
                </Row>
            </Container> */}



        </>
    )

}

export default Industry;