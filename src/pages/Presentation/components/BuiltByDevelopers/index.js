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
  const bgImage = "assets/images/Accueil/accueil3.png";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "justify",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Que proposons-nous ?
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Un environnement d’apprentissage faisant ressentir, comprendre et surmonter aux
            apprenants/developpeurs le fossé entre le cadre théorique des cours et les réalités du
            terrain.
          </MKTypography>
          <MKTypography variant="h5" color="white" mb={1}>
            Qui ciblons-nous?
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            <ul>
              <li>Etudiants en informatique/developpeurs</li>
              <li>Promoteurs/Porteurs de projets informatiques</li>
            </ul>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
