import utils from '../helpers/utils';

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
  if (e.target.checked) {
    messages.add('enlarge');
    return;
  }
  messages.remove('enlarge');
};

const makeLarge = () => {
  document.querySelector('#enlarge').addEventListener('change', changeText);
};

export default { largeText, makeLarge };
