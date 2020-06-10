import React, { useEffect, useState } from 'react';
import DBContext, { DBContextStatus } from '@/core/AppDB/DBContext';
import {
  APP_DB_STATUS_CLOSE,
  APP_DB_STATUS_CONNECTING,
  APP_DB_STATUS_ERROR,
  APP_DB_STATUS_HAS_DATA,
  APP_DB_STATUS_INITIALIZATION,
  APP_DB_STATUS_OPEN,
} from '@/core/AppDB/DBStatuses';
import PropTypes from 'prop-types';

const statusesForConnection = [APP_DB_STATUS_INITIALIZATION];

const AppProviderDB = ({ children }) => {
  const [data, setData] = useState({});
  const [firstConnect, setFirstConnect] = useState(false);
  const [status, setStatus] = useState(APP_DB_STATUS_INITIALIZATION);

  useEffect(
    () => {
      if (statusesForConnection.includes(status)) {
        setStatus(APP_DB_STATUS_CONNECTING);
        const ws = new WebSocket('ws://localhost:8002/');

        ws.onclose = () => {
          setFirstConnect(true);
          setStatus(APP_DB_STATUS_CLOSE);
        };

        ws.onopen = () => {
          setStatus(APP_DB_STATUS_OPEN);
        };

        ws.onerror = () => {
          setStatus(APP_DB_STATUS_ERROR);
        };

        ws.onmessage = (response) => {
          if (status !== APP_DB_STATUS_HAS_DATA) {
            setFirstConnect(true);
            setStatus(APP_DB_STATUS_HAS_DATA);
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
