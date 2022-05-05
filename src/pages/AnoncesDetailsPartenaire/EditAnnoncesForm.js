/* eslint-disable react/no-unescaped-entities */
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
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

const user = JSON.parse(localStorage.getItem("user"));
function EditAnnoncesForm() {
  const param = useParams();
  let initialState = {
    titref: "",
    descriptionf: "",
    ciblef: "",
  };
  const coursState = {
    id: `${param.id}`,
    titre: "",
    description: "",
    createur: "",
  };
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { titref, descriptionf } = state;
  const [cours, setCours] = useState(coursState);
  const { titre, description, createur } = cours;
  const [selectedFile, setSelectedFile] = useState();

  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/annonces/${param.id}`)
      .then((res) => {
        initialState = {
          titref: res.data.titre,
          descriptionf: res.data.description,
          ciblef: res.data.cible,
        };
        setState(initialState);
        // eslint-disable-next-line
                console.log(res.data)
        // eslint-disable-next-line
                console.log(initialState.titref)
      })
      // eslint-disable-next-line
            .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setCours({ ...cours, [titre]: state.titre });
    setCours({ ...cours, [description]: state.descriptionf });
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
    // eslint-disable-next-line
      const formData = new FormData();
    // eslint-disable-next-line
      formData.append("file", selectedFile, selectedFile.name);
    axios
      .put(`http://localhost:8080/api/annonces/`, cours, {
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
          .post(`http://localhost:8080/api/annonces/${res.data.id}`, formData, {
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
      navigate(`/gestionannonces/${param.id}`);
    });
  };

  const handleClose = () => {
    navigate("/annoncesdetails");
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
            <CampaignIcon sx={{ marginRight: 2, fontSize: "medium" }} />
            Annonces{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            ml: 14,
            mr: 14,
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
              Parametrage de l'annonce
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
              <MKBox
                sx={{
                  m: 1,
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                <MKTypography sx={{ mb: 3 }}>Ressources Jointes</MKTypography>
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

export default EditAnnoncesForm;
