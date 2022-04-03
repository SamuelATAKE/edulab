import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import NavigationIcon from "@mui/icons-material/Navigation";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MKButton from "../../../components/MKButton";
import MKBox from "../../../components/MKBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "24px",
  border: "1px solid white",
  boxShadow: 24,
  p: 4,
};

export default function FloatingActionButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {" "}
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" color="primary" onClick={handleOpen} aria-label="search">
          <AddIcon />
          Ajouter un cours
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Recherche
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            Veuillez repondre a ces questions
          </Typography>
          <Divider />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField required id="titre" label="Titre" defaultValue="Titre" />
              <TextField
                id="description"
                label="Description"
                defaultValue="Description"
                maxRows={8}
                multiline
              />
              <TextField id="cible" label="Cible" defaultValue="Cible" />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="principal">
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
                  Support Principal
                </Typography>
              </label>
              <input id="principal" name="principal" type="file" accept="*" />

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="optionnels">
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
                  Support Optionnels
                </Typography>
              </label>
              <input id="principal" name="principal" type="file" accept="*" />
            </div>
          </Box>
          <Divider sx={{ my: 0, mt: 3 }} />
          <MKBox display="flex" justifyContent="space-between" p={1.5}>
            <MKButton
              variant="gradient"
              color="dark"
              onClick={handleClose}
              startIcon={<SendIcon />}
            >
              Enregistrer
            </MKButton>
            <MKButton variant="gradient" color="primary" onClick={handleClose}>
              Annuler
            </MKButton>
          </MKBox>
        </Card>
      </Modal>
    </>
  );
}
