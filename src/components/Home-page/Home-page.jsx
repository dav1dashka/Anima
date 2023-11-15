import Footer from '../Footer/Footer'
import Hero from '../Home-page/Hero/Hero'
import Advantages from '../Home-page/Advantages/Advantages'
import Ware from '../Home-page/Ware/Ware'
import Discounts from '../Home-page/Discounts/Discounts'
import Inspiration from '../Home-page/Inspiration/Inspiration'
import Quest from '../Quest/Quest'
import Burger from '../Header/Burger/Burger'

const HomePage = () => {
    return (
        <>
            <div className="wrapper">
                <main className="main">
                    <Burger />
                    <Hero />
                    <Advantages />
                    <Ware />
                    <Discounts />
                    <Inspiration />
                    <Quest />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default HomePage;