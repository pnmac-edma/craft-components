import React, { useState } from 'react';
import { Modal } from '../../../src/components';
import { Button } from '@material-ui/core';
import { divStyle } from '../styles';

export default () => {
  const [openModalBasic, setIsOpenModalBasic] = useState(false);
  const handleOpenModalBasic = () => setIsOpenModalBasic(true);
  const handleCloseModalBasic = () => setIsOpenModalBasic(false);

  return (
    <div style={divStyle}>
      <h2>Modal</h2>
      <Button color="primary" onClick={handleOpenModalBasic}>
        Open Modal
      </Button>
      <Modal
        modalTitle={'Basic Modal Title'}
        render="Basic Modal"
        openModal={openModalBasic}
        handleModalToggle={handleCloseModalBasic}
        handleOpenNotification={() => {}}
        handleRemoveSelected={() => {}}
        footerButtonText={'Footer Button'}
      />
    </div>
  );
};
