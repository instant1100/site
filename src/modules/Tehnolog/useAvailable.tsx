import { useContext } from 'react';
import { FirebaseContext } from '/core/FirebaseProvider/FirebaseProvider';

const useAvailable = () => {
  const firebase = useContext(FirebaseContext);

  return firebase;
};

export default useAvailable;
