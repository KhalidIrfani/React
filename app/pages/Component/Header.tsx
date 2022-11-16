import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";
import logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link";

const Header = () => (
    <Navbar expand="lg" className="Navi">
        <Image className="Img1" src={logo} alt="logo" width={50} height={70}  ></Image>

        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div className="hepertext">

                        <NavDropdown className="Navigation" title="HypeIndustry" id="basic-nav-dropdown">
                            <Link href='./Page'>
                                <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown> 
                    </div>


                    <div className="hepertext">

                        <NavDropdown className="Navigation" title="HYPE OFFERS" id="basic-nav-dropdown">
                            <Link href='Page3'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown> 
                    </div>





                    <div className="hepertext">
                        <NavDropdown className="Navigation" title="SHIPPING" id="basic-nav-dropdown">
                            <Link href="Page5">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                    </div>
                    <div className="hepertext">
                        <Nav.Link className="Link" href="Page6">SELECT REQUEST FORM</Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>


            <div className="Iframe">
                <i className="bi bi-person Person">Login</i>
            </div>

            <input className="Input" type="search" placeholder="Brand, Modules " />


        </Container>
    </Navbar>



)

export default Header