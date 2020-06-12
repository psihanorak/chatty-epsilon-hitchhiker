import data from '../helpers/data/userData';
import utils from '../helpers/utils';
import messageUsers from './messageUsers';

const createUserButtons = () => {
  const users = data.getUsers();
  let domString = `
    <form name="userList">
      <legend>Set active user:</legend>
  `;
  users.forEach((user, index) => {
    domString += `
    <div class="form-check">
    <label class="form-check-label font-weight-light" for="user${index}" id="userLabel${index}">
    <input class="form-check-input" type="radio" name="userButton" id="user${index}" value="option">
      <span>${user.name}</span>
    </label>
    </div>`;
  });
  domString += '</form>';
  utils.printToDom('#user-list', domString);
};

const logInUser = (e) => {
  const userId = (e.target.id);
  const index = parseInt(userId.slice(4), 10);
  data.setCurrentUser(index);
  messageUsers.displayMessages();
};

const addEventListeners = () => {
  const userButtons = document.forms.userList.elements.userButton;
  userButtons.forEach((userButton) => {
    userButton.addEventListener('click', logInUser);
  });
};

export default { createUserButtons, addEventListeners };
