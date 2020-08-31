import utils from '../helpers/utils';

import './largeText.scss';

const largeText = () => {
  let domString = '';
  domString += `<div>
                <input id="enlarge" type="checkbox">
                <label for="enlarge">Large Text</label>
                </div>`;
  utils.printToDom('#checkbox', domString);
};

const changeText = (e) => {
  const messages = document.querySelector('#text').classList;
  const allMessages = document.querySelector('#user-messages').classList;
  if (e.target.checked) {
    messages.add('enlarge');
    allMessages.add('enlarge');
    return;
  }
  messages.remove('enlarge');
  allMessages.remove('enlarge');
};

const makeLarge = () => {
  document.querySelector('#enlarge').addEventListener('change', changeText);
};

export default { largeText, makeLarge };
