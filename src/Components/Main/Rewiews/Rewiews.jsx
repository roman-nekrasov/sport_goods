import { useState } from "react";
import { reviews } from "../../../consts/reviews";

const slides = 4;
const pagesCount = Math.ceil(reviews.length / slides);

function Rewiews() {
    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        setCurrentPage(Math.min(currentPage + 1, pagesCount - 1));
    };

    const prevSlide = () => {
        setCurrentPage();
        setCurrentPage(Math.max(currentPage - 1, 0));
    };
    return (
        <section className="page__reviews reviews-page">
            <div className="reviews-page__container">
                <div className="reviews-page__swipers-btns">
                    <h2 className="reviews-page__title">
                        Відгуги наших клієнтів
                    </h2>
                    <div className="reviews-page__block">
                        <p className="reviews-page__fraction">
                            {currentPage + 1}/{pagesCount}
                        </p>
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
                    {reviews
                        .slice(
                            currentPage * slides,
                            currentPage * slides + slides
                        )
                        .map(({ id, img, imgIcon, title, name }) => (
                            <blockquote
                                key={id}
                                className="reviews-page__slide"
                            >
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
