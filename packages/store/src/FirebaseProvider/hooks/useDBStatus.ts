import { useContext } from 'react';
import { DBContextStatus } from '../../AppDB/DBContext';

const useDBStatus = () => useContext(DBContextStatus);

export default useDBStatus;
