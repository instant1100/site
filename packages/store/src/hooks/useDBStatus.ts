import { useContext } from 'react';
import { DBContextStatus } from '../DBContext';
import { APP_DB_STATUS } from '../DBStatuses';

const useHasData = (): APP_DB_STATUS => useContext(DBContextStatus);

export default useHasData;
