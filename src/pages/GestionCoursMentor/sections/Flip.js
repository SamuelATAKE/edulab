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
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Flip() {
  return (
    <MKBox display="flex" alignItems="center" borderRadius="xl">
      <Container>
        <Grid container item xs={250} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
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
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Flip;
