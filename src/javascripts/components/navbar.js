import utils from '../helpers/utils';

const makeNavbar = () => {
  let domString = '';

  domString += `
                <div id="titlebar">
                  <img src="src/images/logo.jpg" alt="">
                  <h1>Thanks for all the fish!</h1>
                </div>`;
  utils.printToDom('#navbar', domString);
};

export default { makeNavbar };
