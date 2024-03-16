function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <nav className="footer__menu">
                    <ul className="footer__items">
                        <li>
                            <a href="#">новинки</a>
                        </li>
                        <li>
                            <a href="#">чоловіки</a>
                        </li>
                        <li>
                            <a href="#">жінки</a>
                        </li>
                        <li>
                            <a href="#">аксесуари</a>
                        </li>
                        <li>
                            <a href="#">акції</a>
                        </li>
                    </ul>
                </nav>
                <p className="footer__copyright">
                    © 2022 — 2023 IGNAT. Усі права захищені.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
