import { useState } from "react";
import { products } from "../../../Consts/products";

function Products() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === products.length - 1 ? 0 : currentSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? products.length - 1 : currentSlide - 1
        );
    };
    return (
        <section className="page__products products-page">
            <div className="products-page__container">
                <div className="products-page__swipers-btns">
                    <p className="products-page__fraction">1/3</p>
                    <button
                        className="products-page__slider-left"
                        onClick={prevSlide}
                    ></button>
                    <button
                        className="products-page__slider-right"
                        onClick={nextSlide}
                    ></button>
                </div>
                <div className="products-page__slides">
                    {products.map(
                        ({ id, img, title, gender, value, price }) => (
                            <div key={id} className="products-page__card">
                                <div className="products-page__img">
                                    <img src={img} alt="img" />
                                </div>

                                <h3 className="products-page__title-card">
                                    {title}
                                </h3>
                                <p className="products-page__gender">
                                    {gender}
                                </p>
                                <p className="products-page__value">{value}</p>
                                <p className="products-page__price">{price}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Products;
