// $('html').setAttribute('data-theme', 'dark')
const darkTheme = () => {
  if ($('html').attr('data-theme') === 'light') {
    $('html').attr('data-theme', 'dark');
  } else $('html').attr('data-theme', 'light');
};


// button listeners
const buttonListeners = () => {
  $('#theme').click(darkTheme);
};

export default { buttonListeners };
