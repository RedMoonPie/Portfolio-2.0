import { Modal, Grid, Box } from "@mui/material";
import { style } from "@mui/system";
import React from "react";

export interface ModalImgProps {
  open: boolean;
  handleClose: () => void;
  imageSrc: string;
}

export const ModalImg = (props: ModalImgProps) => {
  const { open, handleClose, imageSrc } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{ padding: "40px" }}>
        <img
          src={imageSrc}
          draggable="false"
          style={{
            height: "100%",
            maxHeight: "100vh",
            width: "100%",
            maxWidth: "100vw",
          }}
          onClick={handleClose}
        />
      </Box>
    </Modal>
  );
};
