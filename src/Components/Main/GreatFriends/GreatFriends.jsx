import friend from "../../../assets/img/main/friend.jpeg";

function GreatFriends() {
    return (
        <section className="page__great-friends great-friends-page">
            <div className="great-friends-page__container">
                <div className="great-friends-page__content">
                    <h2 className="great-friends-page__title">
                        Ми знаємо, що сподобається вашим “великим” друзям!
                    </h2>
                    <p className="great-friends-page__text">
                        Обирай подарунок своїм друзями бодібілдерам із нашою
                        новою колекцію термобілизни “Big warm”
                    </p>
                    <a href="#" className="great-friends-page__link">
                        До каталогу
                    </a>
                </div>
                <div className="great-friends-page__image">
                    <img src={friend} alt="image" />
                </div>
            </div>
        </section>
    );
}

export default GreatFriends;
