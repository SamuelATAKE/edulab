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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  // const bgImage = "assets/images/Accueil/accueil3.png";

  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl" my={2} py={6} bgColor="#eff7fa">
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="dark" fontWeight="bold">
            Que proposons-nous ?
          </MKTypography>
          <MKTypography variant="body1" color="dark" opacity={0.8} mt={2} mb={2}>
            Un environnement d’apprentissage faisant ressentir, comprendre et surmonter aux
            apprenants/developpeurs le fossé entre le cadre théorique des cours et les réalités du
            terrain.
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="dark" mb={2}>
            Qui ciblons-nous?
          </MKTypography>
          <MKTypography variant="body1" color="dark" opacity={0.8} mt={2} mb={2}>
            Etudiants en informatique/developpeurs et Promoteurs/Porteurs de projets informatiques
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
