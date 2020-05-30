import React from 'react';
import {APP_DB_STATUS_INITIALIZATION} from '@/core/AppDB/DBStatuses';

const DBContext = React.createContext(
  {}
);

export const DBContextStatus = React.createContext(APP_DB_STATUS_INITIALIZATION);

export default DBContext;
