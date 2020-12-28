import { useContext } from 'react';
import FirebaseContext from '@/core/FirebaseProvider/FirebaseContext';

const useAvailable = () => {
  const firebase = useContext(FirebaseContext);

  return firebase;
};

export default useAvailable;
