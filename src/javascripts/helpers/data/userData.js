const users = [
  { id: 'user0', name: 'Xavier', trashBefore: 0 },
  { id: 'user1', name: 'Joanna', trashBefore: 0 },
  { id: 'user2', name: 'Gunter', trashBefore: 0 },
  { id: 'user3', name: 'Sven', trashBefore: 0 },
  { id: 'user4', name: 'Mackenzie', trashBefore: 0 },
];

let currentUser = 0;

const getAllusers = () => users;

const getCurrentUser = () => currentUser;

const setCurrentUser = (userIndex) => {
  currentUser = userIndex;
};

const getUsers = () => users;

const setTrashBefore = (timestamp) => {
  users[currentUser].trashBefore = timestamp;
};

export default {
  getUsers, setTrashBefore, setCurrentUser, getCurrentUser, getAllusers,
};
