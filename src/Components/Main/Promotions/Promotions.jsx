function Promotions() {
    return (
        <section className="page-promotions promotions-page">
            <div className="promotions-page__container">
                <div className="promotions-page__content">
                    <h2 className="promotions-page__title">
                        Спіймай всі акції!
                    </h2>
                    <p className="promotions-page__text">
                        Підписуйся на Email розсилку і отримуй інформацію про
                        всі акції, які будуть з`влятись у нашому магазині. А у
                        нас їх багато :D
                    </p>
                </div>

                <form className="promotions-page__form" action="#">
                    <input
                        className="promotions-page__input"
                        type="email"
                        id="mail"
                        placeholder="введіть"
                    />
                    <button className="promotions-page__btn" type="submit">
                        Підписатись
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Promotions;
