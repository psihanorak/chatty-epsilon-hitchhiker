import utils from '../helpers/utils';

// $('html').setAttribute('data-theme', 'dark')
const darkTheme = () => {
  if ($('html').attr('data-theme') === 'light') {
    $('html').attr('data-theme', 'dark');
  } else $('html').attr('data-theme', 'light');
};

const createDarkThemeButton = () => {
  const domString = '<button type="button" class="btn btn-dark" id="theme">light / dark</button>';
  utils.printToDom('#dark-mode', domString);
};

// button listeners
const buttonListeners = () => {
  $('#theme').click(darkTheme);
};

export default { buttonListeners, createDarkThemeButton };
