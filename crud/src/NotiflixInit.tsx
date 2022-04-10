import Notiflix from 'notiflix';

Notiflix.Confirm.init({
  borderRadius: '8px',
  titleColor: '#000',
  okButtonBackground: '#29CC97',
  cancelButtonBackground: '#F12B2C',
});

Notiflix.Notify.init({
  borderRadius: '8px',
  success: {
    background: '#29CC97',
  },
});
