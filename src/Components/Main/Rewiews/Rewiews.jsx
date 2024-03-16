import { useState } from "react";
import { reviews } from "../../../Consts/reviews";

function Rewiews() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === reviews.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? reviews.length - 1 : currentSlide - 1
        );
    };
    return (
        <section className="page__reviews reviews-page">
            <div className="reviews-page__container">
                <div className="reviews-page__swipers-btns">
                    <h2 className="reviews-page__title">
                        Відгуги наших клієнтів
                    </h2>
                    <div className="reviews-page__block">
                        <p className="reviews-page__fraction">1/3</p>
                        <button
                            className="reviews-page__slider-left"
                            onClick={prevSlide}
                        ></button>
                        <button
                            className="reviews-page__slider-right"
                            onClick={nextSlide}
                        ></button>
                    </div>
                </div>
                <div className="reviews-page__slides">
                    {reviews.map(({ id, img, imgIcon, title, name }) => (
                        <blockquote key={id} className="reviews-page__slide">
                            <div className="reviews-page__card">
                                <img
                                    src={img}
                                    alt="img"
                                    className="reviews-page__img"
                                />
                                <div className="reviews-page__rate">
                                    <img
                                        src={imgIcon}
                                        alt="img"
                                        className="reviews-page__icons"
                                    />
                                    <cite className="reviews-page__name">
                                        {name}
                                    </cite>
                                </div>
                            </div>
                            <p className="reviews-page__text">{title}</p>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Rewiews;
