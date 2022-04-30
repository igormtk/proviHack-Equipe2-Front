import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "./style.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const BaseModal = ({ open, handleClose, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>{children}</Container>
        </Box>
      </Modal>
    </>
  );
};

export default BaseModal;
