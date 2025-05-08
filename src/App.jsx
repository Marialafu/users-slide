import { useState } from 'react';
import { USERS } from './constants/userInfo';

const App = () => {
  const [userNumber, setUserNumber] = useState(0);
  const isFirstUser = userNumber <= 0;
  const isLastUser = userNumber >= USERS.length - 1;

  return (
    <>
      <img src={USERS[userNumber].profileImage} alt='' />
      <h2>Name:{USERS[userNumber].name}</h2>
      <p>Username:{USERS[userNumber].username}</p>
      <p>Email:{USERS[userNumber].email}</p>
      <button
        disabled={isFirstUser}
        onClick={() => previousPicture(userNumber, setUserNumber)}
      >
        Previous
      </button>
      <button
        disabled={isLastUser}
        onClick={() => nextPicture(userNumber, setUserNumber)}
      >
        Next
      </button>
    </>
  );
};

const nextPicture = (userNumber, setUserNumber) => {
  setUserNumber(userNumber + 1);
};

const previousPicture = (userNumber, setUserNumber) => {
  setUserNumber(userNumber - 1);
};

export default App;
