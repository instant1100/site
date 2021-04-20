import React from 'react';
import { APP_DB_STATUS } from '/core/AppDB/DBStatuses';
import { entityMap } from '/core/AppDB/interfaces';

const DBContext = React.createContext<entityMap>(
  {},
);

export const DBContextStatus = React.createContext(APP_DB_STATUS.INITIALIZATION);

export default DBContext;
