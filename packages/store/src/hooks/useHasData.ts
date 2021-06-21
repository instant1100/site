import { useContext } from 'react';
import { DBContextStatus } from '../core/DBContext';
import { APP_DB_STATUS } from '../core/DBStatuses';

const useHasData = () => useContext(DBContextStatus) === APP_DB_STATUS.HAS_DATA;

export default useHasData;
