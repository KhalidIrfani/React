import Buying from "./Component/Buying"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Question from "./Component/Question"


const Page3 = () => {
    return (
        <>
            <Header />
            <h2 className="page3h3">Buying on HypeIndustry is Simple!</h2>
            <Buying />

            <Question />

            <Footer />
        </>
    )

}

export default Page3