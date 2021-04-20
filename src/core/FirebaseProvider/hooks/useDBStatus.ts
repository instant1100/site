import { useContext } from 'react';
import { DBContextStatus } from '/core/AppDB/DBContext';

const useDBStatus = () => useContext(DBContextStatus);

export default useDBStatus;
