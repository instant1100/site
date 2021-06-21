import React from 'react';
import { APP_DB_STATUS } from './DBStatuses';
import { EntityMap } from './interfaces';

const DBContext = React.createContext<EntityMap>(
  {},
);

export const DBContextStatus = React.createContext(APP_DB_STATUS.INITIALIZATION);

export default DBContext;
