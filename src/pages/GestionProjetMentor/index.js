/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";

// import Flip from "pages/Presentation/sections/Flip";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";

// import Download from "pages/Presentation/sections/Download";

// Presentation page components

// Routes
import footerRoutes from "footer.routes";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Divider, Chip } from "@mui/material";

import MKTypography from "../../components/MKTypography";
import FloatingActionButtons from "./FloatingActionButton";
import routes from "../MenuPerUset/Mentor/menu";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/bg-coworking.jpeg";

function GestionContenuProjet() {
  const param = useParams();
  const [projet, setProjet] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/api/projet/${param.id}`).then((res) => {
      setProjet(res.data);
    });
  }, []);
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="5em"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          ml: 15,
          mr: 15,
          mt: 1,
          mb: 4,
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <FloatingActionButtons id={projet.id} projet={projet} align="center" />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            mb: 3,
            p: 2,
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          {projet.nom}
        </Typography>
        <MKTypography
          mt={3}
          mb={3}
          sx={{
            mb: 3,
            p: 2,
            fontSize: "14px",
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          <h4>Description</h4>
          {projet.description}
        </MKTypography>
        <MKTypography
          mt={3}
          mb={3}
          sx={{
            mb: 3,
            p: 2,
            fontSize: "14px",
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          <h4>Objectifs</h4>
          <p>{projet.objectifs}</p>
        </MKTypography>
        <MKTypography
          mt={3}
          mb={3}
          sx={{
            mb: 3,
            p: 2,
            fontSize: "14px",
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          <h4>Technologies</h4>
          <p>{projet.technologies}</p>
        </MKTypography>
        <MKTypography
          mt={3}
          mb={3}
          sx={{
            mb: 3,
            p: 2,
            fontSize: "14px",
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          <h4>Prerequis</h4>
          <p>{projet.prerequis}</p>
        </MKTypography>
        <MKTypography
          mt={3}
          mb={3}
          sx={{
            mb: 3,
            p: 2,
            fontSize: "14px",
            borderRadius: "0.1em",
            boxShadow: ({ boxShadows: { xs } }) => xs,
          }}
        >
          <h4>Duree</h4>
          <p>{projet.dureeProjet} Jours</p>
        </MKTypography>
        <MKBox p="auto">
          {" "}
          <Divider
            sx={{
              border: "0.5px solid darkblue",
              borderRadius: "0.4em",
              color: "darkblue",
              backgroundColor: "darkblue",
            }}
          >
            <Chip
              sx={{
                color: "darkblue",
              }}
              label="Supports et Ressources"
            />
          </Divider>
        </MKBox>
        <MKTypography mt={5} mb={3}>
          <h4>Ressources</h4>
          <p> </p>
        </MKTypography>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default GestionContenuProjet;
