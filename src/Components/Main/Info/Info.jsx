// import slide1 from "../../assets/img/main/info/insta.svg";

function Info() {
    return (
        <section className="page__info info-page">
            <div className="info-page__container">
                <div className="info-page__contact contacts-info-page">
                    <h3 className="contacts-info-page__title">
                        Контакт - центр
                    </h3>
                    <ul className="contacts-info-page__items">
                        <li className="contacts-info-page__items">
                            <a
                                href="tel:+380989000909"
                                className="contacts-info-page__tel"
                            >
                                098 900 09 09
                            </a>
                        </li>
                        <li className="contacts-info-page__items">
                            Пн - Пт 09:00 - 21:00
                        </li>
                        <li className="contacts-info-page__items">
                            Пн - Пт 09:00 - 21:00
                        </li>
                    </ul>
                </div>
                <div className="info-page__social social-info-page">
                    <a href="" className="social-info-page__link-insta">
                        {/* <img src="" alt="icon" /> */}
                    </a>
                    <a href="" className="social-info-page__link-viber">
                        {/* <img src="" alt="icon" /> */}
                    </a>
                    <a href="" className="social-info-page__link-tel">
                        {/* <img src="" alt="icon" /> */}
                    </a>
                </div>

                <div className="info-page__clients clients-info-page">
                    <h3 className="clients-info-page__title">Покупцям</h3>
                    <ul className="clients-info-page__items">
                        <li className="clients-info-page__item">
                            <a href="">Оплата і доставка</a>
                        </li>
                        <li className="clients-info-page__item">
                            <a href="">Повернення</a>
                        </li>
                        <li className="clients-info-page__item">
                            <a href="">Питання та відповіді</a>
                        </li>
                    </ul>
                </div>
                <div className="info-page__account account-info-page">
                    <h3 className="account-info-page__title">
                        Особистий кабінет
                    </h3>
                    <ul className="account-info-page__items">
                        <li className="account-info-page__item">
                            <a href="Мої дані">Мої дані</a>
                        </li>
                        <li className="account-info-page__item">
                            <a href="">Історія замовлень</a>
                        </li>
                        <li className="account-info-page__item">
                            <a href="">Улюблені</a>
                        </li>
                        <li className="account-info-page__item">
                            <a href="">Розсилки</a>
                        </li>
                    </ul>
                </div>
                <div className="info-page__about about-info-page">
                    <h3 className="about-info-page__title">Про компанію</h3>
                    <ul className="about-info-page__items">
                        <li className="about-info-page__item">
                            <a href="">Про нас</a>
                        </li>
                        <li className="about-info-page__item">
                            <a href="">Новини</a>
                        </li>
                        <li className="about-info-page__item">
                            <a href="">Стати партнером</a>
                        </li>
                        <li className="about-info-page__item">
                            <a href="">Угода користувача</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Info;
