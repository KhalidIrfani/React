import Header from "./Header"
import { Container, Row, Col } from "react-bootstrap"
import Page1 from "public/Page1.jpg"
import page2 from "public/page2.jpg"
import page3 from "public/page3.jpg"
import Image from "next/image"

const Page=()=>{
    return(
<>
<Header/>
    <Container>
        <Row>
        <Col>
        <h1>Why HypeIndustry and What is it excatly?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        </Col>
        
         <Col>
            <Image src={Page1} alt=''/>
        </Col>
        </Row>


        <Row>
        <Col>
        <h1>Always the same issue through the years</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        </Col>
        
         <Col>
            <Image src={page3} alt=''/>
        </Col>
        </Row>
    </Container>
 
</>
    )
}

export default Page