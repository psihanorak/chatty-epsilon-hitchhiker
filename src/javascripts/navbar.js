import utils from './helpers/utils';

const makeNavbar = () => {
  let domString = '';

  domString += `<div>
                  <nav class="navbar sticky-top navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                      <img src="src/images/logo.jpg" alt="">
                      <h1>Thanks for all the fish!</h1>
                    </a>
                    <div class="toggle-contianer">
                      <h5>Light / Dark Mode</h5>
                      <input type="checkbox" id="switch" name="theme"/><label class="toggle" for="switch">toggle</label>
                    </div>
                  </nav>
                </div>`;
  utils.printToDom('#navbar', domString);
};

export default { makeNavbar };
