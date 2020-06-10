import data from '../helpers/userData';
import utils from '../helpers/utils';

const createUserButtons = () => {
  const users = data.getUsers();
  let domString = `
    <form name="userList">
      <legend>Set active user:</legend>
  `;
  for (let i = 0; i < users.length; i += 1) {
    domString += `
    <div class="form-check">
    <label class="form-check-label font-weight-light" for="user${i}" id="userLabel${i}">
    <input class="form-check-input" type="radio" name="userButton" id="user${i}" value="option">
      <span>${users[i].name}</span>
    </label>
    </div>`;
  }
  domString += '</form>';
  utils.printToDom('#user-list', domString);
};

const logInUser = (e) => {
  const userId = (e.target.id);
  const index = parseInt(userId.slice(4), 10);
  const currentUserName = data.getUsers()[index].name;
  console.error(currentUserName, userId); // user should be pushed to some type of 'current user' function
};

const addEventListeners = () => {
  const userButtons = document.forms.userList.elements.userButton;
  userButtons.forEach((userButton) => {
    userButton.addEventListener('click', logInUser);
  });
};

export default { createUserButtons, addEventListeners };
