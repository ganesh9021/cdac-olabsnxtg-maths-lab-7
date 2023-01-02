import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exp1 from "../Superscript";
import { motion } from "framer-motion";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import letusverify from "../../Img/letusverify.png";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { t, i18n } = useTranslation();
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon />  */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Startact = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onForward = () => {
    localStorage.setItem("A", 1);
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
  };
  const onBackward = () => {
    navigate("/activity7");
  };

  const onNext = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="" style={{ height: "100%" }}>
      <div
        className=" d-flex justify-content-center align-items-center text-center"
        style={{ height: "50%" }}
      >
        <span className="">
          <b>{t("obj")}:</b> {t("obj_content")} <br /> {exp1()}
        </span>
      </div>
      <div
        className=" d-flex justify-content-center  "
        style={{ height: "50%" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" d-flex justify-content-center align-items-center col-2"
          style={{
            height: "50%",
            width: "20%",
            backdropFilter: "none",
          }}
          onClick={onNext}
        >
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
              // maxWidth: "100%",
              cursor: "pointer",
            }}
            src={letusverify}
            alt="Logo"
          />

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              className="fw-bold"
              style={{  }}
            >
              {t("instr_popup-1")}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <ul style={{ }}>
                  <li>
                    {" "}
                    {t("instr_popup-2")}
                    <br />
                    <u>{t("instr_popup-3")}</u>
                  </li>
                </ul>
              </Typography>
              <Typography gutterBottom>
                <ul style={{}}>
                  <li>
                  {t("instr_popup-4")} <br />
                  {t("instr_popup-5")}:{" "}
                  </li>
                  <ol>
                    <li>{t("instr_popup-6")} A,</li>
                    <li>B∩C </li>
                    <li>A∪(B∩C)</li>
                  </ol>
                  {t("instr_popup-7")}:
                  <ol>
                    <li>(A∪B) </li>
                    <li>(A∪C)</li>
                    <li>(A∪B)∩(A∪C)</li>
                  </ol>
                </ul>
              </Typography>
            </DialogContent>
            <DialogActions>
              {/* <Button autoFocus variant="contained" onClick={onForward}>
                I am ready!
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={onForward}
              >
                {t("ok")}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={onBackward}
              >
                {t("cancel")}
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </motion.div>
      </div>
    </div>
  );
};

export default Startact;
