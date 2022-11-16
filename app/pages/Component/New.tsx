
const New= () => {
    return (
        <>
            <header className="header" >

                <nav className="navbar-nav navbar-expand-sm  bg-info ">
                    <div className="container">
                        <div className="navbar ">

                            <button className="navbar-toggler nav " data-bs-toggle="collapse" data-bs-target="#mynavbar" >
                                <span className="navbar-toggler-icon "></span>
                            </button>

                            <div className="collapse navbar-collapse " id="mynavbar" >
                                <ul className="navbar-nav d-flex  me-auto ">

                                    <li className="nav-link"><a href="#home" className="nav-item">Home</a></li>
                                    <li className="nav-link"><a href="#testimonial" className="nav-item">Testimonial</a></li>
                                
                                <li className="nav-link"><a href="#gallery" className="nav-item">Gallery</a></li>

                            <li className="nav-link dropdown "><a href="#about" className="nav-item dropdown-toggle" data-bs-toggle="dropdown">
                                News</a>
                                <div className="dropdown-menu">
                                    <a href="" className="dropdown-item">link 1</a>
                                    <a href="" className="dropdown-item">link 2</a>
                                    <a href="" className="dropdown-item">link 3</a>
                                    <a href="" className="dropdown-item">link4</a>
                                </div>

                                <li className="nav-link"><a href="#about" className="nav-item">About us</a></li>

                            </li>
                            <li className="nav-link"><a href="#footer" className="nav-item">Contact</a></li>
                        </ul>
                    </div>
                   </div>
                </div>
            </nav>

        </header>

        </>
    )
}
export default New