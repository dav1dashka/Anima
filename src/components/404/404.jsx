import { Link } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";

import Header from '../Header/Header';
import Burger from '../Header/Burger/Burger';

import './404.scss'

const NotFound = () => {
    return (
        <>
            <div className='wrapper'>
                <Header styles={{ 'backgroundColor': 'black', 'paddingBottom': '20px' }} />
                <Burger />
                <main className="main">
                    <Fade
                        triggerOnce={true}
                    >
                        <div className="not-found">
                            <div className="not-found__container">
                                <div className="not-found__cover">
                                    <h1 className="not-found__title">404</h1>
                                    <div className="not-found__text">
                                        <span>Сторінка не знайдена</span>
                                    </div>
                                    <div className="not-found__link">
                                        <Link to={'/'}>
                                            До головної
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </main>
            </div>
        </>
    )
}

export default NotFound;
