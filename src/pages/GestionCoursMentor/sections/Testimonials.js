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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">
            Pourquoi s&apos; inscrire sur une plateforme de developpeurs en ligne ?
          </MKTypography>
          <MKTypography variant="h3" color="info" textGradient mb={2}>
            Tous les professionels tech sont unanimes !
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              date="2022"
              review="Les comptences technologiques s'
              acquierent avec de la pratique et rien d'autre. Et près de 50% des recruteurs peinent à trouver des developpeurs qualifies."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              date="2022"
              review=" 42% des recruteurs ont commencé à embaucher des travailleurs freelances ou se
              sont tournés davantage vers de l’externe du fait de la pandémie. Dans cet environnement, la maitrise du travail collaboratif est devenu une necessite."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              date="2022"
              review="Environ 57 % des recruteurs sont ouverts à abandonner le CV ou du moins en minimiser l'impact en se focalisant plus sur les comptences reelles des candidats."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
