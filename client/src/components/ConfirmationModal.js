import React, { useContext } from "react";

import { ModalOpenContext } from "../modalOpenContext";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ConfirmationModal = () => {
  const modalOpenContext = useContext(ModalOpenContext);
  const [modalOpen, setModalOpen] = modalOpenContext;

  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "80%", md: "550px" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    mt: 2,
  };

  const handleBtnClick = () => {
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen}>
      <Box sx={style}>
        <Typography>
          We've received your reservation request!
          <br />
          Here are the cats you'll be meeting during your visit
        </Typography>
        <Button
          variant="outlined"
          type="submit"
          sx={{ maxWidth: 50, mt: 2 }}
          onClick={handleBtnClick}
        >
          Great!
        </Button>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
