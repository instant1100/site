import {useContext} from 'react';
import {DBContextStatus} from '@/core/AppDB/DBContext';
import {APP_DB_STATUS_HAS_DATA} from '@/core/AppDB/DBStatuses';

const useHasData = () => {
  return useContext(DBContextStatus) === APP_DB_STATUS_HAS_DATA;
};

export default useHasData;
