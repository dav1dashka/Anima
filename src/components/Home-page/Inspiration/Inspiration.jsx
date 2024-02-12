import { Fade } from "react-awesome-reveal";

import { HiArrowLongRight } from 'react-icons/hi2';

import imageOne from "../../../images/inspiration/inspiration-1.jpg"
import imageSecond from "../../../images/inspiration/inspiration-2.jpg"
import imageThird from "../../../images/inspiration/inspiration-3.jpg"
import imageFourth from "../../../images/inspiration/inspiration-4.jpg"
import imageFifth from "../../../images/inspiration/inspiration-5.jpg"

import "./Inspiration.scss"

const Inspiration = () => {
    return (
        <>
            <section className="inspiration">
                <div className="inspiration__container">
                    <Fade
                        triggerOnce={true}

                    >
                        <h2 className="inspiration__title">Ідеї для <br />  <strong>натхнення</strong></h2>
                    </Fade>
                    <div className="inspiration__cover">
                        <div className="inspiration__left left-inspiration">
                            <Fade
                                triggerOnce={true}

                            >
                                <div className="left-inspiration__image">
                                    <img src={imageOne} alt="" />
                                </div>
                            </Fade>
                        </div>
                        <div className="inspiration__right right-inspiration">
                            <div className="right-inspiration__image">
                                <Fade
                                    triggerOnce={true}

                                >
                                    <img src={imageSecond} alt="" />
                                </Fade>
                            </div>
                            <div className="right-inspiration__image">
                                <Fade
                                    triggerOnce={true}

                                >
                                    <img src={imageThird} alt="" />
                                </Fade>
                            </div>
                            <div className="right-inspiration__image">
                                <Fade
                                    triggerOnce={true}

                                >
                                    <img src={imageFourth} alt="" />
                                </Fade>
                            </div>
                            <div className="right-inspiration__image">
                                <Fade
                                    triggerOnce={true}

                                >
                                    <img src={imageFifth} alt="" />
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <Fade
                        triggerOnce={true}

                    >
                        <div className="inspiration__watch-all">
                            <a href="">
                                <span>Більше фотографій</span>
                                <HiArrowLongRight viewBox="5 3 10 15" />
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default Inspiration;