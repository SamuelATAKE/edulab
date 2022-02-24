import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import routes from "menu";
import footerRoutes from "footer.routes";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import MKButton from "components/MKButton";
import "./ResponsiveDrawer.css";
import FloatingButton from "./FloatingButton";
// import ResponsiveDrawer from "./ResponsiveDrawer";

function Dashboard() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/connexion",
          label: "Déconnexion",
          color: "info",
        }}
        sticky
      />

      <MKBox
        minHeight="75vh"
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
              variant="h1"
              color="secondary"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Bienvenu Amah KWTACHA
            </MKTypography>
            <MKTypography variant="body1" color="dark" opacity={0.8} pr={6} mr={6}>
              Sur votre tableau de bord.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <FloatingButton />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>

      {/* <MKBox className="fab" component="nav"> */}
      {/* <ResponsiveDrawer className="fab" /> */}
      {/* </MKBox> */}
    </>
  );
}

export default Dashboard;
