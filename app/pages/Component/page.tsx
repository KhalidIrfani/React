import Header from "./Header"
import { Container, Row, Col } from "react-bootstrap"
import Page1 from "public/Page1.jpg"
import page2 from "public/page2.jpg"
import page3 from "public/page3.jpg"
import page4 from "public/page4.jpg"
import i2 from "public/i2.png"
import i1 from "public/i1.png"

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
            <Image src={page2} alt=''/>
        </Col>
        <Col>
        <h1>20 years of relationship + experience</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
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


        <Row>
 <Col>
            <Image src={page4} alt=''/>
        </Col>
        <Col>
        <h1>Utopia</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        </Col>
        </Row>


        
        <Row>
        <Col>
        <h1>Reality</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        </Col>
        <Col>
            <Image src={i2} alt=''/>
        </Col>
        
        </Row>


        <Row>
 <Col>
            <Image src={i1} alt=''/>
        </Col>
        <Col>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde quia, ad consectetur optio excepturi quas delectus deleniti quam earum saepe autem atque, nulla tempora quibusdam quae soluta cumque, repudiandae maxime. Expedita eligendi veritatis aut, illo non obcaecati eaque doloremque?</p>
        </Col>
        </Row>


        

    </Container>
 
</>
    )
}

export default Page