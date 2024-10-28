const notificationElement = document.getElementById(
  'notification-free-delivery',
);
const notificationHideBtn = document.getElementById(
  'notification-free-delivery-hide-btn',
);

const hideNotification = () => {
  notificationElement.classList.add('none');
};

notificationHideBtn.addEventListener('click', hideNotification);
