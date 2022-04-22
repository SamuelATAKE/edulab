// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import footerRoutes from "footer.routes";

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import routes from "../MenuPerUset/Mentor/menu";
import FloatingActionButtons from "./sections/FloatingActionButton";
import MKTypography from "../../components/MKTypography";

function CoursDetailsMentor() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
  return (
    <>
      <DefaultNavbar routes={routes} sticky dark />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h1">
            {" "}
            <LibraryBooksIcon />
            Les cours{" "}
          </MKTypography>
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
          <FloatingActionButtons />
          <MKBox>
            <Container>
              <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
                <AppBar position="static">
                  <Tabs value={activeTab} onChange={handleTabType}>
                    <Tab label="Publiés" />
                    <Tab label="En cours de redaction" />
                  </Tabs>
                </AppBar>
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={2}>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={9} sm={5} lg={3}>
                  <Accordion color="primary" bgcolor="dark" sx={{ width: "100%", height: "100%" }}>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header1"
                      sx={{ padding: "25", width: "100%" }}
                    >
                      <div style={{ padding: "25", margin: "10", width: "100%" }}>
                        {" "}
                        <MKTypography variant="h1" verticalAlign="center" SX={{ width: "100%" }}>
                          SA
                        </MKTypography>
                      </div>{" "}
                      <br />
                      <div style={{ padding: "10", margin: "10", width: "100%" }}>
                        <MKTypography variant="h6">Titre : </MKTypography>
                        <MKTypography variant="h6">Auteur : </MKTypography>
                      </div>
                      <hr />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. malesuada lacus ex,
                        sit amet blandit leo lobortis eget. malesuada lacus ex, sit amet blandit leo
                        lobortis eget. malesuada lacus ex, sit amet blandit leo lobortis eget.
                        malesuada lacus ex, sit amet blandit leo lobortis eget. malesuada lacus ex,
                        sit amet blandit leo lobortis eget. malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                      <MKBox left={0}>
                        <Button color="primary">Rejoindre</Button>
                      </MKBox>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default CoursDetailsMentor;
