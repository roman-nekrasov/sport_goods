import Slider from "../Slider/Slider";
import "./home.scss";

function Home() {
    return (
        <section className="page__home home-page">
            <Slider />
            <div className="home-page__container">
                <div className="home-page__content">
                    <h1 className="home-page__title">
                        Швидше. Вище. Сильніше.
                    </h1>
                    <p className="home-page__subtitle">Разом із Nike</p>
                </div>
                <div className="home-page__sales">
                    <dl className="home-page__items">
                        <dt>Знижки до 40%</dt>
                        <dd>Залишився лише тиждень</dd>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Home;
