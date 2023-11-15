import { Fade } from "react-awesome-reveal";

import { MdArrowBackIos } from 'react-icons/md';

import image from "../../../images/benefits/benefits-1.jpg"

import "./Advantages.scss"

const Advantages = () => {

    return (
        <>
            <section className="advantages">
                <div className="advantages__container">
                    <Fade
                        triggerOnce={true}
                    >
                        <h2 className="advantages__title">Наші переваги <br />  <strong>ваш результат</strong></h2>
                    </Fade>
                    <div className="advantages__cover">
                        <div className="advantages__left">
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text left-side first">Нове італійське<br />  обладнання donaton</div>
                                    <MdArrowBackIos className='advantages__arrow-left' style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text middle left-side second">Власне <br /> виробництво</div>
                                    <MdArrowBackIos className='advantages__arrow-left' style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />

                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text left-side third">Широкий <br /> асортимент</div>
                                    <MdArrowBackIos className='advantages__arrow-left' style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />
                                </div>
                            </Fade>
                        </div>

                        <div className="advantages__middle">
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__image">
                                    <img src={image} alt="" />
                                </div>
                            </Fade>
                        </div>
                        <div className="advantages__right">
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text right-side fourth">Вироби <br /> з наявності</div>
                                    <MdArrowBackIos style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text middle right right-side fifth">Працюєм під <br />ключ</div>
                                    <MdArrowBackIos style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="advantages__cover-text">
                                    <div className="text right-side sixth">Консультації по догляду <br /> за виробом</div>
                                    <MdArrowBackIos style={{ 'color': '#28553F', 'transform': 'rotate(-90deg)' }} />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages;