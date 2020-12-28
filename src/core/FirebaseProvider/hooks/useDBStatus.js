import { useContext } from 'react';
import { DBContextStatus } from '@/core/AppDB/DBContext';

const useHasData = (status) => useContext(DBContextStatus)[status];

export default useHasData;
