import AlertDialog from '@/ui-kit/Dialogs/Alert';
import React from 'react';
import {useTranslation} from 'react-i18next';

const InDeveloping = ({children}) => {
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
      {children({onClick: handleClickOpen})}

      <AlertDialog
        open={open}
        handleClose={handleClose}
        buttonTitle="ok"
        content={[t('In developing')]}
      />
    </>
  )
};

export default InDeveloping;
