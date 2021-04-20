import React, { FC, useEffect, useState } from 'react';
import DBContext, { DBContextStatus } from '@/core/AppDB/DBContext';
import {
  APP_DB_STATUS
} from '@/core/AppDB/DBStatuses';
import PropTypes from 'prop-types';

const statusesForConnection = [APP_DB_STATUS.INITIALIZATION];

const AppProviderDB: FC = ({ children }) => {
  const [data, setData] = useState({});
  const [firstConnect, setFirstConnect] = useState(false);
  const [status, setStatus] = useState(APP_DB_STATUS.INITIALIZATION);

  useEffect(
    () => {
      if (statusesForConnection.includes(status)) {
        setStatus(APP_DB_STATUS.CONNECTING);
        const ws = new WebSocket('ws://localhost:8002/');

        ws.onclose = () => {
          setFirstConnect(true);
          setStatus(APP_DB_STATUS.CLOSE);
        };

        ws.onopen = () => {
          setStatus(APP_DB_STATUS.OPEN);
        };

        ws.onerror = () => {
          setStatus(APP_DB_STATUS.ERROR);
        };

        ws.onmessage = (response) => {
          if (status !== APP_DB_STATUS.HAS_DATA) {
            setFirstConnect(true);
            setStatus(APP_DB_STATUS.HAS_DATA);
          }
          setData(JSON.parse(response.data));
        };
      }
    }, [status],
  );

  return (
    <DBContextStatus.Provider value={status}>
      <DBContext.Provider value={data}>
        {firstConnect && children}
      </DBContext.Provider>
    </DBContextStatus.Provider>
  );
};

AppProviderDB.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviderDB;
