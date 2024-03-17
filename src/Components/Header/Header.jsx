import "./header.scss";
import heart from "../../assets/img/header/heart.svg";
import bag from "../../assets/img/header/bag.svg";

const headerNavItems = ["новинки", "чоловіки", "жінки", "аксесуари", "акції"];
function Header() {
    return (
        <header className="header">
            <div className="header__user user-header">
                <div className="user-header__container">
                    <div className="user-header__contacts">
                        <a href="tel:+380989000909">098 900 09 09</a>
                        <a href="#">Допомога</a>
                    </div>
                    <div className="user-header__login">
                        <a href="#">Увійти</a>/<a href="#">Зареєструватися</a>
                    </div>
                </div>
            </div>

            <div className="header__container">
                <nav className="header__nav nav-header">
                    <a href="#" className="nav-header__logo">
                        IGNAT
                    </a>
                    <ul className="nav-header__menu">
                        {headerNavItems.map((el) => (
                            <li key={el} className="nav-header__item">
                                <a href="#" className="nav-header__link">
                                    {el}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-header__icons">
                        <input className="nav-header__search" type="text" />
                        <div className="nav-header__items">
                            <a href="#">
                                <img src={heart} alt="icon-like" />
                            </a>
                            <a href="#">
                                <img src={bag} alt="icon-cart" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
