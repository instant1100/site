import { useContext } from 'react';
import { DBContextStatus } from '@/core/AppDB/DBContext';
import { APP_DB_STATUS } from '/core/AppDB/DBStatuses';

const useHasData = (): APP_DB_STATUS => useContext(DBContextStatus);

export default useHasData;
