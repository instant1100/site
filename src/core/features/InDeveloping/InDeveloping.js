import AlertDialog from '@/ui-kit/Dialogs/Alert';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const InDeveloping = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {children({ onClick: handleClickOpen })}

      <AlertDialog
        open={open}
        handleClose={handleClose}
        buttonTitle="ok"
      >
        {t('In developing')}
      </AlertDialog>
    </>
  );
};

InDeveloping.defaultProps = {
  children: null,
};

InDeveloping.propTypes = {
  children: PropTypes.func,
};

export default InDeveloping;
