import Header from "./Component/Header"
import { Container, Row, Col } from "react-bootstrap"
import Page1 from "public/Page1.jpg"
import page2 from "public/page2.jpg"
import page3 from "public/page3.jpg"
import page4 from "public/page4.jpg"
import i2 from "public/i2.png"
import i1 from "public/i1.png"
import any from "public/any.jpg"
import brand from "public/brand.jpg"
import free from "public/free.jpg"
import flip from "public/flip.jpg"
import Footer from "./Component/Footer"
import Image from "next/image"

const Page = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className="page">
                    <Col>
                        <h2 className="Pageh1">Why HypeIndustry and What is it excatly?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>

                    <Col>
                        <Image  src={Page1} alt='' width={630} height={400}/>
                    </Col>
                </Row>

                <Row className="page">

                    <Col>
                        <Image src={page2} alt='' />
                    </Col>
                    <Col>
                        <h2 className="Pageh1">20 years of relationship + experience</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>

                </Row>


                <Row className="page">
                    <Col>
                        <h2>Always the same issue through the years</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>

                    <Col>
                        <Image src={page3} alt='' />
                    </Col>
                </Row>


                <Row className="page">
                    <Col>
                        <Image src={page4} alt='' />
                    </Col>
                    <Col>
                        <h2>Utopia</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>
                </Row>



                <Row className="page">
                    <Col>
                        <h2>Reality</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>
                    <Col>
                        <Image src={i2} alt='' />
                    </Col>

                </Row>


                <Row className="page">
                    <Col>
                        <Image src={i1} alt='' />
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
                    </Col>
                </Row>


                <h3 className="pageh3">The PROS of Such Platform</h3>

                <Row className="page">
                    <Col>
                        <i className="bi bi-box-seam  Box1"></i>

                        <h6>Shipping</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur provident distinctio dolorum incidunt totam nobis sapiente consequuntur saepe iusto!</p>
                    </Col>
                    <Col>
                        <Image src={any} alt='' />
                        <h6>Anonymithy</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias fugit repudiandae vero voluptatibus ex. Laboriosam voluptates distinctio temporibus earum!</p>
                    </Col>
                    <Col>
                        <Image src={brand} alt='' />
                        <h6>Brand Integrity</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero modi eius nemo sed et ex excepturi aut commodi aliquid!</p></Col>
                </Row>


                <Row className="page">

                    <Col>
                        <Image src={free} alt='' />
                        <h6>Freedom</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta</p>
                    </Col>

                    <Col>
                        <Image src={flip} alt='' />
                        <h6>Flash Flipping</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta</p>
                    </Col>
                    <Col>
                    </Col>
                </Row>

            </Container>
            <Footer />

        </>
    )
}

export default Page