const iconFeedback = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/feedback.svg';
const iconMainPage = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/main-page.svg';
const iconMarkHeart = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/mark-heart.svg';
const iconPayment = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/payment.svg';
const iconStatement = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/statement.svg';
const iconUnitedCustomers = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/united-customers.svg';
const iconNotification = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/notification.svg';
const iconMail = 'https://assets.static1-sima-land.com/ui-icons/24x24/Stroked/mail.svg';

export const cabinetMenuItems = [
  { name: 'Главная', url: '/', icon: iconMainPage },
  { name: 'Заказы', url: '/', icon: iconPayment, isMarked: false, isCurrent: true },
  { name: 'Уведомления', url: '/', icon: iconNotification, isMarked: true },
  { name: 'Лист ожидания', url: '/', icon: iconMarkHeart, isMarked: false },
  { name: 'Отзывы и вопросы', url: '/', icon: iconFeedback, isMarked: false },
  { name: 'Претензии', url: '/', icon: iconStatement, isMarked: false },
  { name: 'Профиль организатора', url: '/', icon: iconUnitedCustomers, isMarked: false },
  { name: 'Сообщить о проблеме', url: '/', icon: iconMail, isMarked: false },
];
