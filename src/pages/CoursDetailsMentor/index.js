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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
// import axios from "axios";
import axios from "axios";
import Link from "@mui/material/Link";
import MKTypography from "../../components/MKTypography";
import routes from "../MenuPerUset/Mentor/menu";

const user = JSON.parse(localStorage.getItem("user"));
function CoursDetailsMentor() {
  const [activeTab, setActiveTab] = useState(0);
  const [cours, setCours] = useState([]);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
  const navigate = useNavigate();
  const [empty, isEmpty] = useState(true);
  const DATE_OPTIONS = { weekday: "short", month: "long", day: "numeric", year: "numeric" };

  const handleOpen = () => {
    navigate("/coursform");
  };
  useEffect(() => {
    // eslint-disable-next-line
      axios.get(`http://localhost:8080/api/utilisateur/addedcourse/${user.id}`).then((secres1) => {
      // eslint-disable-next-line
          console.log(secres1.data);
      setCours(secres1.data);
    });

    if (Object.keys(cours).length === 0) {
      isEmpty(false);
    }
  }, [user]);
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
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab variant="extended" color="primary" onClick={handleOpen} aria-label="search">
              <AddIcon />
              Ajouter un cours
            </Fab>
          </Box>
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
              {empty ? (
                <MKTypography sx={{ textAlign: "center" }}>
                  {" "}
                  Vous n&apos avez soumis aucun cours pour l&apos instant
                </MKTypography>
              ) : (
                <Grid container spacing={6}>
                  {cours.map((post) => (
                    <Grid item xs="6" sm="6" lg="6">
                      <Accordion
                        color="primary"
                        bgcolor="dark"
                        sx={{ width: "100%", height: "100%" }}
                      >
                        <AccordionSummary
                          aria-controls="panel1a-content"
                          id="panel1a-header1"
                          sx={{ width: "100%" }}
                        >
                          <div
                            style={{
                              margin: "5",
                              width: "100%",
                              alignSelf: "center",
                            }}
                          >
                            {" "}
                            <MKTypography
                              variant="h1"
                              verticalAlign="center"
                              SX={{
                                width: "100%",
                                alignSelf: "center",
                                border: "1px solid darkgrey",
                              }}
                            >
                              {post.titre.substring(0, 2).toUpperCase()}
                            </MKTypography>
                          </div>{" "}
                          <br />
                          <div style={{ margin: "5", width: "100%" }}>
                            <span>
                              <MKTypography variant="h6">Titre : </MKTypography>{" "}
                              <p style={{ fontSize: "14px" }}>{post.titre}</p>
                            </span>
                            <span>
                              <MKTypography variant="h6">Cible : </MKTypography>{" "}
                              <p style={{ fontSize: "14px" }}>{post.cible}</p>
                            </span>
                            <span>
                              <MKTypography variant="h6">Date de creation : </MKTypography>{" "}
                              <p style={{ fontSize: "14px" }}>
                                {new Intl.DateTimeFormat("fr-FR", DATE_OPTIONS).format(
                                  new Date(post.dateCreation)
                                )}
                              </p>
                            </span>
                          </div>
                          <hr />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography variant="body1" sx={{ fontSize: "13px" }}>
                            {post.description}
                          </Typography>
                          <hr />
                          <MKBox sx={{ alignSelf: "center" }}>
                            <Link
                              href={`/gestioncours/${post.id}`}
                              sx={{
                                alignSelf: "center",
                                borderRadius: "0.1em",
                                fontSize: "13.5px",
                                color: "white",
                              }}
                            >
                              {" "}
                              Explorer
                            </Link>
                          </MKBox>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  ))}
                </Grid>
              )}
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
