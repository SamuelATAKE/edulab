import React, { useEffect } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import axios from "axios";
import routeMentor from "../MenuPerUset/Mentor/menu";
import routeApprenant from "../MenuPerUset/Apprenant/menu";
import routePartenaire from "../MenuPerUset/Partenaire/menu";
import DefaultCounterCard from "../../examples/Cards/CounterCards/DefaultCounterCard";
import MKButton from "../../components/MKButton";
// import Stack from "@mui/material/Stack";
// import MKButton from "components/MKButton";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  // eslint-disable-next-line no-unused-vars
  const [projetCounter, setProjetCounter] = React.useState(0);
  const [coursCounter, setCoursCounter] = React.useState(0);
  let isapprenant = false;
  let ispartenaire = false;
  if (user != null) {
    if (user.role === "Apprenant") {
      isapprenant = true;
    }
    if (user.role === "Partenaire") {
      ispartenaire = true;
    }
  }
  useEffect(() => {
    document.title = "Dashboard";
    if (isapprenant) {
      axios
        .get(`https://edulab-backend.herokuapp.com/api/utilisateur/joinedcourse/${user.id}`)
        .then((res) => {
          setCoursCounter(res.data.length);
        });
      axios
        .get(`https://edulab-backend.herokuapp.com/api/utilisateur/joinedproject/${user.id}`)
        .then((res) => {
          setProjetCounter(res.data.length);
        });
    } else {
      axios
        .get(`https://edulab-backend.herokuapp.com/api/utilisateur/addedcourse/${user.id}`)
        .then((res) => {
          setCoursCounter(res.data.length);
        });
      axios.get(`https://edulab-backend.herokuapp.com/api/projet/`).then((res) => {
        setProjetCounter(
          res.data.filter((x) => x.createur !== null && x.createur.id === user.id).length
        );
      });
    }
  }, []);
  // eslint-disable-next-line
  console.log(user.role);
  return (
    <>
      {ispartenaire ? (
        <DefaultNavbar routes={routePartenaire} transparent />
      ) : (
        <DefaultNavbar routes={isapprenant ? routeApprenant : routeMentor} transparent />
      )}
      <MKBox
        height="20em"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h2"
              color="secondary"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {`Bienvenue  ${user.prenom}`}
            </MKTypography>
            <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
              Sur votre tableau de bord.
            </MKTypography>
          </Grid>
        </Container>
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
        <MKBox component="section" py={3}>
          <Container sx={{ alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
            <Grid
              container
              sx={{ alignContent: "center", alignSelf: "center", justifyContent: "center" }}
            >
              <MKBox sx={{ alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
                <DefaultCounterCard
                  count={projetCounter}
                  title="Projets"
                  description={
                    isapprenant
                      ? "Participez à plus de projets, développez vos compétences"
                      : "Créez des projets, partagez vos compétences"
                  }
                />
                <MKButton
                  variant="outlined"
                  color="secondary"
                  sx={{ border: "none" }}
                  href={isapprenant ? "/projets-details" : "/projetsdetails"}
                >
                  {" "}
                  {isapprenant ? "Participer à un projet" : "Créer un projet"}
                </MKButton>
              </MKBox>
              <Divider
                orientation="vertical"
                sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
              />
              <MKBox sx={{ alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
                <DefaultCounterCard
                  count={coursCounter}
                  title={isapprenant ? "Cours suivis" : "Cours proposés"}
                  description={
                    isapprenant
                      ? "Suivez plus de cours, enrichissez vos connaissances"
                      : "Proposez des cours, développez vos compétences"
                  }
                />
                <MKButton
                  variant="outlined"
                  color="secondary"
                  sx={{ border: "none" }}
                  href={isapprenant ? "/cours-details" : "/coursdetails"}
                >
                  {" "}
                  {isapprenant ? "Suivre un cours" : "Proposer un cours"}
                </MKButton>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Dashboard;
