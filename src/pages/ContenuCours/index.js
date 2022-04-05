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
import Divider from "@mui/material/Divider";
import { Chip } from "@mui/material";
import MKTypography from "../../components/MKTypography";
import routes from "./menu";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/bg-coworking.jpeg";

function ContenuCours() {
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
          mx: { xs: 2, lg: 3 },
          mt: 1,
          backgroundColor: "dark",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
        color="secondary"
      >
        <Typography
          variant="h4"
          component="h2"
          bgcolor="white"
          color="white"
          sx={{
            mb: 3,
            p: 2,
            border: "0.5px solid darkgray",
            borderRadius: "0.4em",
            bgcolor: "dark",
          }}
        >
          Comment aborder la logique des composants reacts ?
        </Typography>
        <hr />
        <MKBox bgColor="white" p="auto">
          {" "}
          <Divider color="secondary">
            <Chip color="secondary" label="Generalites" />
          </Divider>
        </MKBox>

        <MKTypography mt={2} mb={3}>
          <h3>Descriptif</h3>
          <p>Le but de ce cours est de vous apprendre à utiliser les composants React.</p>
          <p>
            Les composants React sont des composants qui sont développés par des développeurs et qui
            sont utilisés dans des applications web. Nous atelerons ici sur la maniere de concevoir
            une achitecture efficace de composants reutilisables.
            <br />
            Le support principal dans la prochaine section contiendra tous les elements de base pour
            prendre en main ce concept.
            <br />
            D&apos autres ressources sont disponibles dans la sections ressources supplementaires.
          </p>
        </MKTypography>
        <hr />
        <MKBox bgColor="white" p="auto">
          {" "}
          <Divider color="secondary">
            <Chip color="secondary" label="Supports et Ressources du cours" />
          </Divider>
        </MKBox>
        <MKTypography mt={5} mb={3}>
          <h3>Support Principal</h3>
        </MKTypography>
        <br />
        <br />
        <MKTypography mt={5} mb={3}>
          <h3>Ressources secondaires</h3>
        </MKTypography>
        <br />
        <br />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContenuCours;
