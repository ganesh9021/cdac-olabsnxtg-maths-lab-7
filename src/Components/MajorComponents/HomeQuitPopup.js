import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

import Slide from '@mui/material/Slide';
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HomeQuitPopup = ({ openDialog, onAgree, closeDialog }) => {
  const { t, i18n } = useTranslation(); 
  return (
    <>
      <Dialog open={openDialog} TransitionComponent={Transition}>
        <DialogContent>
          <Typography>{t("quit")}</Typography>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onAgree}
          >
            {t("Yes")}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={closeDialog}
          >
            {t("Cancel")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeQuitPopup;
