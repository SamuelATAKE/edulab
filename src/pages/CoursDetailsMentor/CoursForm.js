// @mui material components
import Card from "@mui/material/Card";
import FileUpload from "react-mui-fileuploader";

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
import axios from "axios";
import Grid from "@mui/material/Grid";
import MKTypography from "../../components/MKTypography";
import routes from "../MenuPerUset/Mentor/menu";
import MKButton from "../../components/MKButton";

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
function CoursForm() {
  const navigate = useNavigate();
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
    setCours({ ...cours, [titre]: state.titre });
    setCours({ ...cours, [description]: state.descriptionf });
    setCours({ ...cours, [contenu]: null });
    setCours({ ...cours, [cible]: state.ciblef });
    setCours({ ...cours, [createur]: user });
    cours.titre = state.titref;
    cours.description = state.descriptionf;
    cours.cible = state.ciblef;
    cours.createur = user;
    // eslint-disable-next-line
        console.log(state);
    // eslint-disable-next-line
        console.log(cours);
    // eslint-disable-next-line
      console.log(user);
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
    axios
      .put(`http://localhost:8080/api/utilisateur/addcourse/${user.id}`, cours, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((secres) => {
        // eslint-disable-next-line
          console.log(secres.data);
      });
    axios.get(`http://localhost:8080/api/utilisateur/${user.id}`).then((secres1) => {
      // eslint-disable-next-line
          console.log(secres1.data);
      localStorage.setItem("user", JSON.stringify(secres1.data));
      navigate("/coursdetails");
    });
  };
  const handleFileUploadError = (error) => {
    // Do something...
  };

  const handleFilesChange = (files) => {
    // Do something...
  };
  const handleClose = () => {
    navigate("/coursdetails");
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky dark />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h1">
            {" "}
            <LibraryBooksIcon />
            Les cours{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
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
              Veuillez repondre a ces questions
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
                id="titre"
                label="Titre"
                name="titref"
                value={titref}
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
                maxRows={8}
                multiline
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <TextField
                id="cible"
                label="Cible"
                name="ciblef"
                value={ciblef}
                onChange={handleInputChange}
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              />
              <MKBox
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                <FileUpload
                  multiFile
                  disabled={false}
                  title="Support principal"
                  header="Glissez-deposer"
                  leftLabel="ou"
                  rightLabel=" pour selectionner"
                  buttonLabel="Cliquez ici"
                  maxFileSize={10}
                  maxUploadFiles={0}
                  maxFilesContainerHeight={150}
                  errorSizeMessage="fill it or move it to use the default error message"
                  allowedExtensions={["jpg", "jpeg"]}
                  onFilesChange={handleFilesChange}
                  onError={handleFileUploadError}
                  bannerProps={{ elevation: 0, variant: "gradiant" }}
                  containerProps={{ elevation: 0, variant: "gradiant" }}
                  sx={{
                    m: 3,
                    width: "75%",
                    alignSelf: "center",
                  }}
                />
              </MKBox>
              <MKBox
                sx={{
                  m: 3,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                <FileUpload
                  multiFile
                  disabled={false}
                  title="Supports Optionnels"
                  header="Glissez-deposer"
                  leftLabel="ou"
                  rightLabel=" pour selectionner"
                  buttonLabel="Cliquez ici"
                  maxFileSize={10}
                  maxUploadFiles={0}
                  maxFilesContainerHeight={150}
                  errorSizeMessage="fill it or move it to use the default error message"
                  allowedExtensions={["jpg", "jpeg"]}
                  onFilesChange={handleFilesChange}
                  onError={handleFileUploadError}
                  bannerProps={{ elevation: 0, variant: "gradiant" }}
                  containerProps={{ elevation: 0, variant: "gradiant" }}
                  sx={{
                    m: 3,
                    width: "75%",
                    alignSelf: "center",
                  }}
                />
              </MKBox>
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

export default CoursForm;
