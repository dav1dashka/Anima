import { Fade } from "react-awesome-reveal";

import "./Quest.scss"

const Quest = () => {
    return (
        <>
            <section className="quest">
                <div className="quest__container">
                    <Fade
                        triggerOnce={true}
                        fraction={0.2}
                    >
                        <h2 className="quest__title">Залишилися питання?</h2>
                    </Fade>
                    <Fade
                        triggerOnce={true}
                        fraction={0.2}
                    >
                        <p className="quest__semi-title">зв'яжіться з нами, ми вам допоможемо!</p>
                    </Fade>
                    <Fade
                        triggerOnce={true}
                        fraction={0.2}
                    >
                        <span className="quest__label">Заповніть форму і ми зв'яжемося з Вами найближчим часом</span>
                    </Fade>
                    <form action="" className="quest__form form-quest">
                        <Fade
                            triggerOnce={true}
                            fraction={0.2}
                        >
                            <div className="form-quest__cover">
                                <div className="form-quest__name">
                                    <input placeholder="Ваше ім'я" type="text" className="form-quest__input" />
                                </div>
                                <div className="form-quest__phone">
                                    <input placeholder="Ваш телефон" type="text" className="form-quest__input" />
                                </div>
                                <div className="form-quest__submit">
                                    <button onClick={(e) => e.preventDefault()} type="submit" className="form-quest__button">Відправити</button>
                                </div>
                            </div>
                        </Fade>
                        <Fade
                            triggerOnce={true}
                            fraction={0.2}
                        >
                            <div className="form-quest__checkbox">
                                <label className="custom-checkbox">
                                    <input required type="checkbox" />
                                    <span className="checkbox-icon"></span>
                                    <span>Згоден/Згодна на обробку персональних даних</span>
                                </label>
                            </div>
                        </Fade>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Quest;