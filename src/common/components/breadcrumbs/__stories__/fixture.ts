export interface Category {
  name: string;
  url: string;
  active?: boolean;
}

export interface Breadcrumb extends Category {
  siblings?: Array<Category>;
}

export const breadcrumbs: Breadcrumb[] = [
  {
    name: 'Главная',
    url: 'https://sima-land.ru/',
  },
  {
    name: 'Каталог',
    url: 'https://sima-land.ru/catalog/',
  },
  {
    name: 'Бытовая техника и электроника',
    url: 'https://sima-land.ru/bytovaya-tehnika-i-elektronika/',
    siblings: [
      {
        url: 'https://sima-land.ru/avto-i-moto/',
        name: 'Авто и мото',
      },
      {
        url: 'https://sima-land.ru/kozhgalantereya/',
        name: 'Аксессуары',
      },
      {
        url: 'https://sima-land.ru/banya-i-sauna/',
        name: 'Баня и сауна',
      },
      {
        url: 'https://sima-land.ru/bizhuteriya/',
        name: 'Бижутерия',
      },
      {
        name: 'Бытовая техника и электроника',
        url: 'https://sima-land.ru/bytovaya-tehnika-i-elektronika/',
        active: true,
      },
      {
        url: 'https://sima-land.ru/bytovaya-himiya/',
        name: 'Бытовая химия',
      },
      {
        url: 'https://sima-land.ru/detskie-tovary/',
        name: 'Детские товары',
      },
      {
        url: 'https://sima-land.ru/zootovary/',
        name: 'Зоотовары',
      },
      {
        url: 'https://sima-land.ru/igrushki/',
        name: 'Игрушки',
      },
      {
        url: 'https://sima-land.ru/instrumenty/',
        name: 'Инструменты',
      },
      {
        url: 'https://sima-land.ru/interer/',
        name: 'Интерьер',
      },
      {
        url: 'https://sima-land.ru/dizaynerskoe-osveshchenie/',
        name: 'Интерьерный свет',
      },
      {
        url: 'https://sima-land.ru/kanctovary/',
        name: 'Канцтовары',
      },
      {
        url: 'https://sima-land.ru/knigi/',
        name: 'Книги',
      },
      {
        url: 'https://sima-land.ru/krasota-i-zdorove/',
        name: 'Красота и здоровье',
      },
      {
        url: 'https://sima-land.ru/letnie-tovary/',
        name: 'Летние товары',
      },
      {
        url: 'https://sima-land.ru/mebel/',
        name: 'Мебель',
      },
      {
        url: 'https://sima-land.ru/nasha-razrabotka/',
        name: 'Создано в Сима-ленд',
      },
      {
        url: 'https://sima-land.ru/oborudovanie-dlya-biznesa-i-proizvodstva/',
        name: 'Оборудование для бизнеса',
      },
      {
        url: 'https://sima-land.ru/odezhda-i-obuv/',
        name: 'Одежда и обувь',
      },
      {
        url: 'https://sima-land.ru/osveschenie/',
        name: 'Освещение',
      },
      {
        url: 'https://sima-land.ru/posuda/',
        name: 'Посуда',
      },
      {
        url: 'https://sima-land.ru/shveynaya-galantereya/',
        name: 'Швейная галантерея',
      },
      {
        url: 'https://sima-land.ru/prazdniki/',
        name: 'Праздники',
      },
      {
        url: 'https://sima-land.ru/produkty-pitaniya/',
        name: 'Продукты питания',
      },
      {
        url: 'https://sima-land.ru/sad-i-ogorod/',
        name: 'Сад и огород',
      },
      {
        url: 'https://sima-land.ru/stroitelstvo-i-remont/santehnika/',
        name: 'Сантехника',
      },
      {
        url: 'https://sima-land.ru/sobstvennoe-proizvodstvo/',
        name: 'Собственное производство',
      },
      {
        url: 'https://sima-land.ru/sport-i-turizm/',
        name: 'Спорт и туризм',
      },
      {
        url: 'https://sima-land.ru/stroitelstvo-i-remont/',
        name: 'Строительство и ремонт',
      },
      {
        url: 'https://sima-land.ru/suveniry/',
        name: 'Сувениры',
      },
      {
        url: 'https://sima-land.ru/tvorchestvo/',
        name: 'Творчество',
      },
      {
        url: 'https://sima-land.ru/tekstil/',
        name: 'Текстиль',
      },
      {
        url: 'https://sima-land.ru/tovary-dlya-vzroslyh/',
        name: 'Товары для взрослых',
      },
      {
        url: 'https://sima-land.ru/tovary-s-lyubimymi-geroyami/',
        name: 'Товары с любимыми героями',
      },
      {
        url: 'https://sima-land.ru/upakovka/',
        name: 'Упаковка',
      },
      {
        url: 'https://sima-land.ru/hoztovary/',
        name: 'Хозтовары',
      },
      {
        url: 'https://sima-land.ru/elektrotovary/',
        name: 'Электротовары',
      },
    ],
  },
  {
    name: 'Хобби и развлечения',
    url: 'https://sima-land.ru/elektronika-dlya-hobbi-i-uvlecheniya/',
    siblings: [
      {
        url: 'https://sima-land.ru/detskaya-bytovaya-tehnika-i-elektronika/',
        name: 'Детская электроника',
      },
      {
        url: 'https://sima-land.ru/tekhnika-dlya-kuhni/',
        name: 'Техника для кухни',
      },
      {
        url: 'https://sima-land.ru/smartfony-gadzhety-i-planshety/',
        name: 'Смартфоны, гаджеты и планшеты',
      },
      {
        url: 'https://sima-land.ru/tekhnika-dlya-doma/',
        name: 'Техника для дома',
      },
      {
        url: 'https://sima-land.ru/bytovaya-tekhnika-i-elektronika-dlya-krasoty-i-zdorovya/',
        name: 'Красота и здоровье',
      },
      {
        url: 'https://sima-land.ru/televizory-audio-i-video-tekhnika/',
        name: 'Телевизоры, видео и аудио',
      },
      {
        url: 'https://sima-land.ru/kompyutery-i-noutbuki/',
        name: 'Компьютеры и периферия',
      },
      {
        url: 'https://sima-land.ru/oborudovanie-dlya-umnogo-doma/',
        name: 'Умный дом',
      },
      {
        url: 'https://sima-land.ru/sistemy-bezopasnosti-i-nablyudeniya/',
        name: 'Системы безопасности и наблюдения',
      },
      {
        name: 'Хобби и развлечения',
        url: 'https://sima-land.ru/elektronika-dlya-hobbi-i-uvlecheniya/?c_id=59692',
        active: true,
      },
    ],
  },
  {
    name: 'Игровые консоли и аксессуары',
    url: 'https://sima-land.ru/igrovye-konsoli-i-aksessuary/',
    siblings: [
      {
        name: 'Игровые консоли и аксессуары',
        url: 'https://sima-land.ru/igrovye-konsoli-i-aksessuary/',
        active: true,
      },
      {
        url: 'https://sima-land.ru/foto-i-videoapparatura/',
        name: 'Фото- и видеоаппаратура',
      },
      {
        url: 'https://sima-land.ru/3d-ruchki-i-aksessuary/',
        name: '3D-ручки и аксессуары',
      },
      {
        url: 'https://sima-land.ru/vse-dlya-geymera/?c_id=59718',
        name: 'Все для геймера',
      },
      {
        url: 'https://sima-land.ru/paneli-dlya-risovaniya/',
        name: 'Панели для рисования',
      },
      {
        url: 'https://sima-land.ru/bytovaya-tehnika-i-elektronika/hobbi-i-razvlecheniya/tovary-dlya-blogerov/',
        name: 'Товары для блогеров',
      },
      {
        url: 'https://sima-land.ru/ekshn-kamery-i-aksessuary/',
        name: 'Экшн-камеры и аксессуары',
      },
    ],
  },
  {
    name: 'Игровые приставки',
    url: 'https://sima-land.ru/igrovye-pristavki/',
    siblings: [
      {
        url: 'https://sima-land.ru/aksessuary-dlya-igrovyh-pristavok/',
        name: 'Аксессуары для игровых приставок',
      },
      {
        url: 'https://sima-land.ru/geympady/?c_id=74138',
        name: 'Геймпады',
      },
      {
        name: 'Игровые приставки',
        url: 'https://sima-land.ru/igrovye-pristavki/',
        active: true,
      },
      {
        url: 'https://sima-land.ru/bytovaya-tehnika-i-elektronika/hobbi-i-razvlecheniya/igrovye-konsoli-i-aksessuary/ruli/',
        name: 'Рули',
      },
    ],
  },
  {
    name: 'Игровая приставка MYBIT',
    url: 'https://sima-land.ru/7353717/igrovaya-pristavka-mybit-game-5-8-16-32-bita-3500-igr-4k-hd-32-gb-hdmi-microsd-2-dzhoystika-chernaya/',
    active: true,
  },
];
