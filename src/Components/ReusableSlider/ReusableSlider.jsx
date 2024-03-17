import { useState } from "react";

function ReusableSlider({ slides, items, type, title }) {
    const pagesCount = Math.ceil(items.length / slides);

    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        setCurrentPage(Math.min(currentPage + 1, pagesCount - 1));
    };

    const prevSlide = () => {
        setCurrentPage(Math.max(currentPage - 1, 0));
    };
    return (
        <div>
            <div className="reviews-page__swipers-btns">
                {title && <h2 className="reviews-page__title">{title}</h2>}

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
            <div
                className={
                    type === "products"
                        ? "products-page__slides"
                        : "reviews-page__slides"
                }
            >
                {items
                    .slice(currentPage * slides, currentPage * slides + slides)
                    .map((item) =>
                        type === "products" ? (
                            <div className="products-page__card" key={item.id}>
                                <div className="products-page__img">
                                    <img src={item.img} alt="img" />
                                </div>

                                <h3 className="products-page__title-card">
                                    {item.title}
                                </h3>
                                <p className="products-page__gender">
                                    {item.gender}
                                </p>
                                <p className="products-page__value">
                                    {item.value}
                                </p>
                                <p className="products-page__price">
                                    {item.price}
                                </p>
                            </div>
                        ) : (
                            <blockquote
                                key={item.id}
                                className="reviews-page__slide"
                            >
                                <div className="reviews-page__card">
                                    <img
                                        src={item.img}
                                        alt="img"
                                        className="reviews-page__img"
                                    />
                                    <div className="reviews-page__rate">
                                        <img
                                            src={item.imgIcon}
                                            alt="img"
                                            className="reviews-page__icons"
                                        />
                                        <cite className="reviews-page__name">
                                            {item.name}
                                        </cite>
                                    </div>
                                </div>
                                <p className="reviews-page__text">
                                    {item.title}
                                </p>
                            </blockquote>
                        )
                    )}
            </div>
        </div>
    );
}

export default ReusableSlider;
