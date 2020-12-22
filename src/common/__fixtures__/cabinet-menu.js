const iconFeedback = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/feedback.svg';
const iconMainPage = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/main-page.svg';
const iconMarkHeart = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/mark-heart.svg';
const iconPayment = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/payment.svg';
const iconStatement = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/statement.svg';
const iconUnitedCustomers = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/united-customers.svg';
const iconNotification = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/notification.svg';

export const cabinetMenuItems = [
  { name: 'Главная', url: '/0', icon: iconMainPage },
  { name: 'Заказы', url: '/1', icon: iconPayment, isMarked: false, isCurrent: true },
  { name: 'Уведомления', url: '/2', icon: iconNotification, isMarked: true },
  { name: 'Лист ожидания', url: '/3', icon: iconMarkHeart, isMarked: false },
  { name: 'Отзывы и вопросы', url: '/4', icon: iconFeedback, isMarked: false },
  { name: 'Претензии', url: '/5', icon: iconStatement, isMarked: false },
  { name: 'Профиль организатора', url: '/6', icon: iconUnitedCustomers, isMarked: false },
];
