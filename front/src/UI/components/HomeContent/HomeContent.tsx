import React from 'react'
import len from '../../../assets/img/1.png'
// import {useEffect} from 'react'
import Icon from '../../../assets/img/Icon.svg'
import Logo from '../../../assets/img/Logo.svg'
// import Vector from '../../../assets/img/Vector.svg'
// import {Modal} from '../common/Modal/Modal'
// import avatar from '../../../assets/img/avatar.jpg'
import {ContactsForm} from './ContactsForm/ContactsForm'
// import RegistrationForm from './RegistrationForm';


export const HomeContent: React.FC = () => {
    // @ts-ignore
    return (
        <div className="header">
            <div className="works">
            <div className="container">
                <div className="header__option">
                    <div className="logo">
                        <a href="#" className="logo">
                            <img src={Logo} alt=""/>
                        </a>
                    </div>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li><a href="#">ПОРТФОЛИО</a></li>
                            <li><a href="#">ОБО МНЕ</a></li>
                            <li><a href="#">СВЯЗЬ</a></li>
                        </ul>
                    </nav>
                    <div className="header-btn">
                        <a className="header__contact" href="">СВЯЗАТЬСЯ</a>
                    </div>
                </div>
                <div className="header-slider">
                    <div className="header-slider__item-content">
                        <div className="header-slider__item-info">
                            <h3>Full-stack разработчик</h3>
                            <div className="header-slider__item-description">
                                JavaScript, React, NodeJs
                            </div>
                            <a href="#" className="portfolio">ПОРТФОЛИО</a>
                            <div className="header-slider__item-title">ФОРМА СВЯЗИ СО МНОЙ</div>
                            <ContactsForm/>
                            {/*<form  >*/}
                            {/*    <input className='input' type="text" placeholder="ВВЕДИТЕ ВАШ НОМЕР"/>*/}
                            {/*        <input  type="text" placeholder="ВВЕДИТЕ ВАШЕ СООБЩЕНИЕ"/>*/}
                            {/*            <button type='submit' className='header__send'>ОТПРАВИТЬ</button>*/}
                            {/*</form>*/}
                        </div>


                        <div className="header-slider__item-images">
                            <img src={Icon} alt=""/>
                        </div>
                    </div>
                </div>

                 <div className="works__title">ПОРТФОЛИО</div>

                <ul className="works__list">
                    <li className="work__item">
                        <div className="work__img">
                            <img src={len} alt=""/>
                        </div>
                        <div className="work__title">ПРОЕКТ ЛЕНДИНГ</div>

                    </li>
                    <li className="work__item">
                        <div className="work__img">
                            <img src={len} alt=""/>
                        </div>
                        <div className="work__title">ПРОЕКТ ЛЕНДИНГ</div>

                    </li>
                    <li className="work__item">
                        <div className="work__img">
                            <img src={len} alt=""/>
                        </div>
                        <div className="work__title">ПРОЕКТ ЛЕНДИНГ</div>

                    </li>
                </ul>
                <div className="footer__contacts">
                    <p className="footer__contact">САХАРОВ АЛЕКСАНДР</p>
                    <p className="footer__contact"> СТУДЕНТ БВТ1905</p>
                    <div className="header-btn">
                        <a className="header__contact" href="">СВЯЗАТЬСЯ</a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )

}