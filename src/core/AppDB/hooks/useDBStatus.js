import {useContext} from 'react';
import {DBContextStatus} from '@/core/AppDB/DBContext';

const useHasData = () => {
  return useContext(DBContextStatus)[status];
};

export default useHasData;
