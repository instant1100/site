import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import MuiDialogContent from '@material-ui/core/DialogContent/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

// @ts-ignore
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

// @ts-ignore
const DialogTitle = withStyles(styles)((props) => {
  const {
    // @ts-ignore
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

type AlertDialogProps = {
  handleClose: any,
  title?: string,
  buttonTitle: string,
  open: boolean,
};

const AlertDialog: FC<AlertDialogProps> = (
  {
    handleClose,
    title,
    children,
    buttonTitle,
    open,
  },
) => (
  <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
    {title && (// @ts-ignore
      <DialogTitle onClose={handleClose}>
        {title}
      </DialogTitle>
    )}
    <DialogContent dividers>
      <Typography gutterBottom>
        {children}
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose} color="primary">
        {buttonTitle}
      </Button>
    </DialogActions>
  </Dialog>
);

AlertDialog.defaultProps = {
  title: null,
  open: false,
};

export default AlertDialog;
