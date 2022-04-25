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
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MKBox from "../../../components/MKBox";
import MKButton from "../../../components/MKButton";

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
const initialState = {
  titref: "",
  descriptionf: "",
  ciblef: "",
};
const coursState = {
  titre: "",
  description: "",
  cible: "",
  contenu: "",
  createur: "",
};
const user = JSON.parse(localStorage.getItem("user"));
export default function FloatingActionButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { titref, descriptionf, ciblef } = state;
  const [cours, setCours] = useState(coursState);
  const { titre, description, cible, contenu, createur } = cours;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line
    console.log(e);
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setCours({ ...cours, [titre]: state.titref });
    setCours({ ...cours, [description]: state.descriptionf });
    setCours({ ...cours, [contenu]: null });
    setCours({ ...cours, [cible]: state.ciblef });
    setCours({ ...cours, [createur]: user });
    cours.titre = state.titref;
    cours.description = state.descriptionf;
    cours.cible = state.ciblef;
    cours.createur = Object.assign(user);
    cours.contenu = null;
    // eslint-disable-next-line
    console.log(state);
    // eslint-disable-next-line
    console.log(cours);
    // eslint-disable-next-line
    console.log("Submitting");
    axios
      .post(`http://localhost:8080/api/cours/`, cours, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        // eslint-disable-next-line
          console.log(res);
        // eslint-disable-next-line
          console.log(res.data);
      });
  };

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
          <MKBox
            component="form"
            role="form"
            onSubmit={onSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            Validate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="titre"
                label="Titre"
                name="titref"
                value={titref}
                onChange={handleInputChange}
              />
              <TextField
                id="description"
                label="Description"
                name="descriptionf"
                value={descriptionf}
                onChange={handleInputChange}
                maxRows={8}
                multiline
              />
              <TextField
                id="cible"
                label="Cible"
                name="ciblef"
                value={ciblef}
                onChange={handleInputChange}
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
            <Divider sx={{ my: 0, mt: 3 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" type="submit" startIcon={<SendIcon />}>
                Enregistrer
              </MKButton>
              <MKButton variant="gradient" color="primary" onClick={handleClose}>
                Annuler
              </MKButton>
            </MKBox>
          </MKBox>
        </Card>
      </Modal>
    </>
  );
}
