import { Fade } from "react-awesome-reveal";

import Header from "../../Header/Header";
import SwiperHero from '../Swiper-hero/Swiper-hero';

import "./Hero.scss"

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <Header />
                <Fade
                    triggerOnce={true}
                >
                    <div className="hero__cover">
                        <SwiperHero />
                        <div className="hero__info info-hero">
                            <div className="info-hero__cover">
                                <span className="info-hero__label">Камінь з душею</span>
                                <h1 className="info-hero__title">Кам'яні вироби <br /> <strong>для вашого дому</strong></h1>
                                <div className="info-hero__buttons">
                                    <a href="" className="info-hero__button">
                                        Розрахувати вартість
                                    </a>
                                    <a href="" className="info-hero__button">
                                        Зв'язатися з нами
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        </>
    )
}

export default Hero;