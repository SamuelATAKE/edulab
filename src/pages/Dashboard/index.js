import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import Counters from "pages/Presentation/sections/Counters";
import Grid from "@mui/material/Grid";
import routes from "./menu";
// import Stack from "@mui/material/Stack";
// import MKButton from "components/MKButton";

function Dashboard() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
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
        <Counters />
      </Card>
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
