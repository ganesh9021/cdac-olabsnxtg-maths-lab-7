import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import Slide from '@mui/material/Slide';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const InfoPopup = ({ openDialog, onAgree, closeDialog, content,popuptitle }) => {
  const { t, i18n } = useTranslation(); 
  return (
    <>
      <Dialog open={openDialog} TransitionComponent={Transition}>
        <DialogTitle>
          {popuptitle}
        </DialogTitle>
        <DialogContent dividers style={{marginLeft:"5%"}}>
          {content}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" size="small" onClick={onAgree}>
            {t("ok")}
          </Button>
          <Button variant="contained" color="secondary" size="small" onClick={closeDialog}>
            {t("cancel")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InfoPopup;
