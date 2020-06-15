const users = [
  {
    id: 'user0',
    name: 'Xavier',
    trashBefore: 0,
    likes: [],
    dislikes: [],
  },
  {
    id: 'user1',
    name: 'Joanna',
    trashBefore: 0,
    likes: [],
    dislikes: [],
  },
  {
    id: 'user2',
    name: 'Gunter',
    trashBefore: 0,
    likes: [],
    dislikes: [],
  },
  {
    id: 'user3',
    name: 'Sven',
    trashBefore: 0,
    likes: [],
    dislikes: [],
  },
  {
    id: 'user4',
    name: 'Mackenzie',
    trashBefore: 0,
    likes: [],
    dislikes: [],
  },
];

let currentUser = 0;

const getAllusers = () => users;

const getCurrentUser = () => currentUser;

const getCurrentUserInfo = () => users[currentUser];

const setCurrentUser = (userIndex) => {
  currentUser = userIndex;
};

const getUsers = () => users;

const setTrashBefore = (timestamp) => {
  users[currentUser].trashBefore = timestamp;
};

const addLike = (msgID) => {
  users[currentUser].likes.push(msgID);
};

const addDisike = (msgID) => {
  users[currentUser].dislikes.push(msgID);
};

export default {
  getUsers, setTrashBefore, setCurrentUser, getCurrentUser, getAllusers, getCurrentUserInfo, addLike, addDisike,
};
