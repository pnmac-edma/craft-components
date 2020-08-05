import React, { useState } from 'react';
import { SnackBar } from '../../../src/components';
import { Button } from '@material-ui/core';
import { divStyle } from '../styles';

export default () => {
  const [notification, setIsNotification] = useState(false);
  const [successApi, setIsSuccessApi] = useState(null);

  const handleOpenNotification = () => {
    setTimeout(() => {
      setIsSuccessApi(true);
      setIsNotification(true);
    }, 700);
  };

  const handleCloseNotification = () => setIsNotification(false);

  return (
    <div style={divStyle}>
      <h2>SnackBar</h2>
      <Button color="primary" onClick={handleOpenNotification}>
        Open SnackBar
      </Button>
      <SnackBar
        message="You are a Success"
        notification={notification}
        handleCloseNotification={handleCloseNotification}
        isApiSucceeded={successApi}
      />
    </div>
  );
};
