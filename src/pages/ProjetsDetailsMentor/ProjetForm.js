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
import { TextField } from "@mui/material";
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
  npmbreMaxApprenantf: "",
  dateDebutProjetf: "",
  createurf: "",
};
const projetState = {
  nom: "",
  description: "",
  objectif: "",
  technologies: "",
  prerequis: "",
  dureef: "",
  npmbreMaxApprenant: "",
  dateDebutProjet: "",
  createurf: "",
};
const user = JSON.parse(localStorage.getItem("user"));
function ProjetForm() {
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
    nom,
    objectif,
    description,
    technologies,
    prerequis,
    duree,
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
    setprojet({ ...projet, [description]: state.descriptionf });
    setprojet({ ...projet, [objectif]: state.objectiff });
    setprojet({ ...projet, [technologies]: state.technologiesf });
    setprojet({ ...projet, [duree]: state.dureef });
    setprojet({ ...projet, [createur]: user });
    setprojet({ ...projet, [prerequis]: state.prerequisf });
    setprojet({ ...projet, [dateDebutProjet]: null });
    setprojet({ ...projet, [nombreMaxApprenant]: state.npmbreMaxApprenantf });
    projet.nom = state.nomf;
    projet.description = state.descriptionf;
    projet.objectif = state.objectiff;
    projet.technologies = state.technologiesf;
    projet.duree = state.dureef;
    projet.npmbreMaxApprenant = state.npmbreMaxApprenantf;
    projet.prerequis = state.prerequisf;
    projet.nom = state.nomf;
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
      .post(`http://localhost:8080/api/projet/`, projet, {
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
      <DefaultNavbar routes={routes} sticky dark />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          height="14em"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h2">
            {" "}
            <LibraryBooksIcon />
            Les projet{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mt: -8,
            mb: 4,
            ml: 14,
            mr: 14,
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
              autoComplete="off"
            >
              <TextField
                required
                id="Nom"
                label="Nom"
                name="nomf"
                value={nomf}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                id="description"
                label="Description"
                name="descriptionf"
                value={descriptionf}
                onChange={handleInputChange}
                maxRows={12}
                rows={8}
                multiline
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />

              <TextField
                id="prerequis"
                label="Prerequis"
                name="prerequisf"
                value={prerequisf}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                id="technolohies"
                label="Technologies"
                name="technologiesf"
                value={technologiesf}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                id="nombreMaxApprenant"
                label="Nombre maximum de participant"
                name="nombreMaxApprenantf"
                value={nombreMaxApprenantf}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                id="duree"
                label="Durée"
                name="dureef"
                value={dureef}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />

              <MKBox
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                <MKTypography sx={{ mb: 3 }}>Ressources</MKTypography>
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

export default ProjetForm;
