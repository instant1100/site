import { useContext } from 'react';
import { FirebaseContext } from '@instant1100/store';

const useAvailable = () => {
  const firebase = useContext(FirebaseContext);

  return firebase;
};

export default useAvailable;
