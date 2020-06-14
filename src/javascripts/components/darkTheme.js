import utils from '../helpers/utils';

const renameButton = (newName) => {
  document.getElementById('theme').innerText = newName;
};

const darkTheme = () => {
  let buttonName = 'Dark Mode';
  if ($('html').attr('data-theme') === 'light') {
    $('html').attr('data-theme', 'dark');
    buttonName = 'Light Mode';
  } else $('html').attr('data-theme', 'light');
  renameButton(buttonName);
};

const createDarkThemeButton = () => {
  let buttonName = 'Dark';
  if ($('html').attr('data-theme') === 'dark') {
    buttonName = 'Light';
  }
  const domString = `<button type="button" class="btn btn-dark" id="theme">${buttonName} Mode</button>`;
  utils.printToDom('#dark-mode', domString);
};

// button listeners
const buttonListeners = () => {
  $('#theme').click(darkTheme);
};

export default { buttonListeners, createDarkThemeButton };
