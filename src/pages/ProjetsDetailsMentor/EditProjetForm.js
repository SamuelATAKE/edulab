/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import footerRoutes from "footer.routes";

// import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Slider, TextField, Box, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import Box from "@mui/material/Box";
import * as React from "react";
import Divider from "@mui/material/Divider";
// import FileUpload from "react-mui-fileuploader";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MKTypography from "../../components/MKTypography";
import routes from "../MenuPerUset/Mentor/menu";
import MKButton from "../../components/MKButton";

const initialState = {
  nomf: "",
  descriptionf: "",
  objectiff: "",
  technologiesf: "",
  prerequisf: "",
  dureef: "",
  nombreMaxApprenantf: 5,
  dateDebutProjetf: "",
  createurf: "",
};
const projetState = {
  nom: "",
  description: "",
  objectif: "",
  technologies: "",
  prerequis: "",
  dureeProjet: "",
  nombreMaxApprenant: 5,
  dateDebutProjet: "",
  createurf: "",
};
const user = JSON.parse(localStorage.getItem("user"));
function EditProjetForm() {
  const param = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const {
    nomf,
    objectiff,
    descriptionf,
    technologiesf,
    prerequisf,
    dureef,
    nombreMaxApprenantf,
    dateDebutProjetf,
  } = state;
  const [projet, setprojet] = useState(projetState);
  const {
    id,
    nom,
    objectif,
    description,
    technologies,
    prerequis,
    dureeProjet,
    nombreMaxApprenant,
    dateDebutProjet,
    createur,
  } = projet;
  const [selectedFile, setSelectedFile] = useState();

  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line
        console.log(e);
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setprojet({ ...projet, [nom]: state.titre });
    setprojet({ ...projet, [id]: param.id });
    setprojet({ ...projet, [description]: state.descriptionf });
    setprojet({ ...projet, [objectif]: state.objectiff });
    setprojet({ ...projet, [technologies]: state.technologiesf });
    setprojet({ ...projet, [dureeProjet]: state.dureef });
    setprojet({ ...projet, [createur]: user });
    setprojet({ ...projet, [prerequis]: state.prerequisf });
    setprojet({ ...projet, [dateDebutProjet]: null });
    setprojet({ ...projet, [nombreMaxApprenant]: state.nombreMaxApprenantf });
    projet.nom = state.nomf;
    projet.id = param.id;
    projet.description = state.descriptionf;
    projet.objectif = state.objectiff;
    projet.technologies = state.technologiesf;
    projet.dureeProjet = state.dureef;
    projet.nombreMaxApprenant = state.nombreMaxApprenantf;
    projet.prerequis = state.prerequisf;
    projet.nom = state.nomf;
    projet.createur = user;
    // eslint-disable-next-line
        console.log(state);
    // eslint-disable-next-line
        console.log(projet);
    // eslint-disable-next-line
      console.log(user);
    // eslint-disable-next-line
        console.log("Submitting");
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    axios
      .put(`http://localhost:8080/api/projet/`, projet, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        // eslint-disable-next-line
                console.log(res);
        // eslint-disable-next-line
                console.log(res.data);
        axios
          .post(`http://localhost:8080/api/projet/${res.data.id}`, formData, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          .then((sres) => {
            // eslint-disable-next-line
                  console.log(sres);
            // eslint-disable-next-line
                  console.log(sres.data);
          });
      });

    axios.get(`http://localhost:8080/api/utilisateur/${user.id}`).then((secres1) => {
      // eslint-disable-next-line
          console.log(secres1.data);
      localStorage.setItem("user", JSON.stringify(secres1.data));
      navigate("/projetsdetails");
    });
  };

  const handleClose = () => {
    navigate("/projetsdetails");
  };

  return (
    <>
      <DefaultNavbar routes={routes} transparent dark />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          height="16em"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h3">
            {" "}
            <LibraryBooksIcon />
            Les projets{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mt: -8,
            mb: 4,
            ml: 18,
            mr: 18,
            borderRadius: 0,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid>
            {" "}
            <Typography
              id="title"
              variant="h4"
              sx={{
                m: 2,
                textAlign: "center",
              }}
            >
              Configuration du projet
            </Typography>
            <Divider />
            <Grid
              container
              item
              flexDirection="column"
              justifyContent="center"
              component="form"
              role="form"
              onSubmit={onSubmit}
              sx={{
                width: "auto",
              }}
              Validate
              autoComplete="on"
            >
              <TextField
                required
                id="Nom"
                label="Nom"
                name="nomf"
                value={nomf}
                onChange={handleInputChange}
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                required
                id="description"
                label="Description"
                name="descriptionf"
                value={descriptionf}
                onChange={handleInputChange}
                maxRows={12}
                rows={8}
                multiline
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />

              <TextField
                required
                id="prerequis"
                label="Prerequis"
                name="prerequisf"
                value={prerequisf}
                onChange={handleInputChange}
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                required
                id="technolohies"
                label="Technologies"
                name="technologiesf"
                value={technologiesf}
                onChange={handleInputChange}
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                required
                id="duree"
                label="Durée"
                name="dureef"
                value={dureef}
                onChange={handleInputChange}
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <InputLabel
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                Nombre maximum de participant{" "}
              </InputLabel>
              <Slider
                required
                label="Nombre maximum de participant"
                name="nombreMaxApprenantf"
                value={nombreMaxApprenantf}
                onChange={handleInputChange}
                aria-label="Default"
                max={50}
                valueLabelDisplay="auto"
                color="secondary"
                sx={{
                  m: 1,
                  alignSelf: "center",
                  width: "50%",
                }}
              />
              <MKBox
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                <InputLabel
                  sx={{
                    width: "75%",
                    alignSelf: "center",
                    fontSize: "1rem",
                  }}
                >
                  Ressources{" "}
                </InputLabel>
                <input type="file" name="file" onChange={changeHandler} />
              </MKBox>
              <MKBox
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <Divider sx={{ my: 0, mt: 3 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="primary" type="submit">
                  Enregistrer
                </MKButton>
                <MKButton variant="gradient" color="secondary" onClick={handleClose}>
                  Annuler
                </MKButton>
              </MKBox>
            </Grid>
          </Grid>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default EditProjetForm;
