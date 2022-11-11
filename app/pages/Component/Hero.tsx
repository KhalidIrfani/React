import Header from "./Header"
import Industry from "./industry";





const Hero = () => {
    return (
        <>
            <Header />



            <h1 className="h1">New marketplace that <br /> allow you to buy bulk</h1>

            <img className="image" src="../public/hero.png" alt="home" width={40} height={70} />

            <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Veniam quisquam labore <br /> odit sapiente officiis sunt ex error, ad  esse ut saepe ipsum numquam tenetur <br /> aliquam architecto dolorum voluptates nesciunt eveniet?</p>

            <button className="btn btn-success">Read more</button>


            <Industry />

        </>
    )
}

export default Hero;