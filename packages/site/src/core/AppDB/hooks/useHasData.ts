import { useContext } from 'react';
import { DBContextStatus } from '../DBContext';
import { APP_DB_STATUS } from '../DBStatuses';

const useHasData = () => useContext(DBContextStatus) === APP_DB_STATUS.HAS_DATA;

export default useHasData;
