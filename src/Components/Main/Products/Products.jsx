import { useState } from "react";
import { products } from "../../../consts/products";

const slides = 3;
const pagesCount = Math.ceil(products.length / slides);

function Products() {
    const [currentPage, setCurrentPage] = useState(0);

    const nextSlide = () => {
        setCurrentPage(Math.min(currentPage + 1, pagesCount - 1));
    };

    const prevSlide = () => {
        setCurrentPage();
        setCurrentPage(Math.max(currentPage - 1, 0));
    };
    return (
        <section className="page__products products-page">
            <div className="products-page__container">
                <div className="products-page__swipers-btns">
                    <p className="products-page__fraction">
                        {currentPage + 1}/{pagesCount}
                    </p>
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
                    {products
                        .slice(
                            currentPage * slides,
                            currentPage * slides + slides
                        )
                        .map(({ id, img, title, gender, value, price }) => (
                            <div className="products-page__card" key={id}>
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
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
