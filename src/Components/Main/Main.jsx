import Home from "./Home/Home";
import GreatFriends from "./GreatFriends/GreatFriends";
import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";
import Rewiews from "./Reviews/Reviews";
import Info from "./Info/Info";

function Main() {
    return (
        <main className="page">
            <Home />
            <GreatFriends />
            <Products />
            <Promotions />
            <Rewiews />
            <Info />
        </main>
    );
}

export default Main;
