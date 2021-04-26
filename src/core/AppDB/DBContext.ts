import React from 'react';
import { APP_DB_STATUS } from '/core/AppDB/DBStatuses';
import { EntityMap } from '/core/AppDB/interfaces';

const DBContext = React.createContext<EntityMap>(
  {},
);

export const DBContextStatus = React.createContext(APP_DB_STATUS.INITIALIZATION);

export default DBContext;
