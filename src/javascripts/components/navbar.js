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

// const makeNavbar = () => {
//   let domString = '';

//   domString += `<div>
//                 <nav class="navbar sticky-top navbar-light bg-light">
//                 <a class="navbar-brand" href="#">
//                 <img src="src/images/logo.jpg" alt="">
//                 <h1>Thanks for all the fish!</h1>
//                 </a>
//                 <button type="button" class="btn btn-dark" id="theme">light / dark</button>
//                 </nav>
//                 </div>`;
//   utils.printToDom('#navbar', domString);
// };


export default { makeNavbar };
