import { MdArrowBackIos } from 'react-icons/md';

import './Menu.scss'

const Menu = ({ menuState, setMenuState, onChangeSelect }) => {
    const toggleSpollers = ((e) => {
        e.parentElement.classList.toggle('open')
        e.classList.toggle('open')
    })

    let menuClass = 'menu';
    menuState == false ? menuClass = 'menu' : menuClass = 'menu open';

    const onChangeThrow = (e, i) => {
        onChangeSelect(i)

        let allButtons = document.querySelectorAll('.spoller__item')
        allButtons.forEach(e => { e.classList.remove('clicked') })

        const clickedElement = e.target;
        clickedElement.classList.remove('clicked');
    }

    return (
        <>
            <section className={menuClass}>
                <div className="menu__cover">
                    <div className='spoiler'>
                        <button className='toggle-button first' onClick={(e) => { toggleSpollers(e.target) }}>
                            Вид каменю <MdArrowBackIos className='spoiler__arrow' />
                        </button>
                        <div className="spoller__items">
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Дикий камінь <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button id='flagstone' onClick={(e) => { onChangeThrow(e, 'flagstone'); setMenuState(!menuState) }} className="spoller__item">Плитняк плаский<MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button id="butovy" onClick={(e) => { onChangeThrow(e, 'butovy'); setMenuState(!menuState) }} className="spoller__item">Бутовий <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button id="kladochny" onClick={(e) => { onChangeThrow(e, 'kladochny'); setMenuState(!menuState) }} className="spoller__item">Кладочний <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Граніт <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button onClick={(e) => { onChangeThrow(e, 'gabro'); setMenuState(!menuState) }} id="gabro" className="spoller__item">Габро <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'labradorite'); setMenuState(!menuState) }} id="labradorite" className="spoller__item">Лабрадорит <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Мрамур <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button onClick={(e) => { onChangeThrow(e, 'brecciaOniciata'); setMenuState(!menuState) }} id="brecciaOniciata" className="spoller__item">Breccia Oniciata<MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'palissandro'); setMenuState(!menuState) }} id="palissandro" className="spoller__item">Palissandro <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'calacatta'); setMenuState(!menuState) }} id="calacatta" className="spoller__item">Calacatta <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='spoiler'>
                        <button className='toggle-button first' onClick={(e) => { toggleSpollers(e.target) }}>
                            Вироби <MdArrowBackIos className='spoiler__arrow' />
                        </button>
                        <div className="spoller__items">
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Камін <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button onClick={(e) => { onChangeThrow(e, 'marble'); setMenuState(!menuState) }} id="marble" className="spoller__item">Мармур <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'granite'); setMenuState(!menuState) }} id="granite" className="spoller__item">Граніт <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Стільниця <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button onClick={(e) => { onChangeThrow(e, 'marble'); setMenuState(!menuState) }} id="marble" className="spoller__item">Мармур <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'granite'); setMenuState(!menuState) }} id="granite" className="spoller__item">Граніт <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'wildStone'); setMenuState(!menuState) }} id="wildStone" className="spoller__item">Дикий камінь <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                            <div className='spoiler spoiler-second'>
                                <button className='toggle-button second' onClick={(e) => { toggleSpollers(e.target.parentElement) }}>
                                    Сходи <MdArrowBackIos className='spoiler__arrow' />
                                </button>
                                <div className="spoller__items spoller__items-second">
                                    <button onClick={(e) => { onChangeThrow(e, 'granite'); setMenuState(!menuState) }} id="granite" className="spoller__item">Граніт <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                    <button onClick={(e) => { onChangeThrow(e, 'wildStone'); setMenuState(!menuState) }} id="wildStone" className="spoller__item">Дикий камінь <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='spoiler'>
                        <button className='toggle-button first' onClick={(e) => { toggleSpollers(e.target) }}>
                            Родовище <MdArrowBackIos className='spoiler__arrow' />
                        </button>
                        <div className="spoller__items">
                            <div className="spoller__items spoller__items-second">
                                <button onClick={(e) => { onChangeThrow(e, 'pokostivske'); setMenuState(!menuState) }} id="pokostivske" className="spoller__item">Покостівсье <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'greatStone'); setMenuState(!menuState) }} id="greatStone" className="spoller__item">Великокам’янецьке <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'osokovka'); setMenuState(!menuState) }} id="osokovka" className="spoller__item">Осоковка <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>

                            </div>
                        </div>
                    </div>
                    <div className='spoiler'>
                        <button className='toggle-button first line' onClick={(e) => { toggleSpollers(e.target) }}>
                            Колір <MdArrowBackIos className='spoiler__arrow' />
                        </button>
                        <div className="spoller__items">
                            <div className="spoller__items spoller__items-second">
                                <button onClick={(e) => { onChangeThrow(e, 'black'); setMenuState(!menuState) }} id="black" className="spoller__item">Чорний <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'pink'); setMenuState(!menuState) }} id="pink" className="spoller__item">Рожевий <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'green'); setMenuState(!menuState) }} id="green" className="spoller__item">Зелений <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'blue'); setMenuState(!menuState) }} id="blue" className="spoller__item">Синій <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                                <button onClick={(e) => { onChangeThrow(e, 'beige'); setMenuState(!menuState) }} id="beige" className="spoller__item">Бежевий <MdArrowBackIos viewBox="0 0 24 30" className='spoiler__arrow-second' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;
