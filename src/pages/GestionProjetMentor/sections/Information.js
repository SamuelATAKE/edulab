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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Redecouvrez
                    <br />
                    Le plaisir de programmer
                  </>
                }
                description="Un cadre de travail sain , concu pour que vous preniez plaisir a gagner en competence."
              />
              <RotatingCardBack
                image={bgBack}
                title="Devenez le developpeur dont vous revez"
                description="Une experience des plus benefiques notamment grace au suivi regulier de mentors qualifies et l'experience du travail en equipe."
                action={{
                  type: "internal",
                  route: "/pages/authentication/sign-in",
                  label: "lancez-vous a l'aventure",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="group"
                  title="Collaboration"
                  description="Eprouver le travail en equipe dans ses moindres aspects tout en echangeant avec des professionels et aines capables de vous inculquer les bonnes pratique."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="star"
                  title="Simple et Minimaliste"
                  description="Un ensemble sobre et coherent vous permettant d'etre plus productif que jamais. Devenez l'elite des developpeurs"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Totalement gratuit"
                  description="Notre plateforme est tout d'abord pensee pour vous permettre d'atteindre vos objectifs professionels. Le service est donc gratuit et ne necessite aucun frais."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Accessible"
                  description="Consulter vos activites , apprenez , gerez vos projets n'importe ou , n'importe quand"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
