// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
// import team1 from "assets/images/team-5.jpg";
import team5 from "assets/images/team-4.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import maella from "assets/images/maella.jpeg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              L&apos;équipe exécutive
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              L&apos;équipe dynamique ayant bossé sur le projet
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={maella}
                name="Adjélé Kafui Maella ADJETEY-BAHUN"
                position={{ color: "info", label: "Etudiante en Génie Logiciel" }}
                description="Passionnée du design, elle rapporte sa touche particulière au projet non selement dans le Design mais aussi dans le développement."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Didi Orlog SOSSOU"
                position={{ color: "info", label: "Etudiant en Génie Logiciel" }}
                description="Passionné du Data, des Systèmes et de la programmation, il est iniatiateur et développeur du projet."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Essowaza Samuel ATAKE"
                position={{ color: "info", label: "Etudiant en Génie Logiciel" }}
                description="Passionné de la programmation, il est développeur sur le projet."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Mr Komi ABOLO-SEWOVI"
                position={{ color: "info", label: "Mentor du projet" }}
                description="A Coordonné et validé toutes les étapes du projet."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
