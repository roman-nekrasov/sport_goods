Запуск проекта
-Установите зависимости, выполнив команду npm install.
-Запустите проект, выполнив команду npm run dev.

Основные компоненты
1.Header: Компонент, отображающий верхнюю часть страницы, содержащий логотип,меню навигационное, поиск, товары которые понравились, корзиную
2.Main: Лежат компоненты, такие как:
-Home
-GreatFriends
-Products
-Promotions
-Rewiews
-Info
3.Footer: Компонент, отображающий основное содержимое страницы.

Стили

1. Variables.scss:содержаться: миксины, переменные.
2. App.scss: лежитат обнуляющие стили, а также основные стили для body, wrapper, container.
3. Components/Main/main.scss: лежат все стили компонентов main.

Константы
src/consts/лежит 3 константы для распаковки карточек слайдера
1.products для component Products
2.sliderImage для слайдера сomponent Home
3.reviews для component Rewiews
