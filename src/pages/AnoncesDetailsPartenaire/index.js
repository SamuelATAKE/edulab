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
import CampaignIcon from "@mui/icons-material/Campaign";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import * as React from "react";
// import axios from "axios";
import axios from "axios";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import MKTypography from "../../components/MKTypography";
import routes from "../MenuPerUset/Mentor/menu";

const user = JSON.parse(localStorage.getItem("user"));
function AnnoncesDetailsPartenaire() {
  const [activeTab, setActiveTab] = useState(0);
  const [cours, setCours] = useState([]);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
  const navigate = useNavigate();
  const [empty, isEmpty] = useState(true);
  const [changed, isChanged] = useState(0);
  const DATE_OPTIONS = { weekday: "short", month: "long", day: "numeric", year: "numeric" };

  const handleOpen = () => {
    navigate("/annoncesform");
  };
  useEffect(() => {
    document.title = "Annonces";
    // eslint-disable-next-line
    axios
      .get(`https://edulab-backend.herokuapp.com/api/utilisateur/addedannonces/${user.id}`)
      .then((secres1) => {
        // eslint-disable-next-line
        console.log(secres1.data);
        setCours(secres1.data);
        if (secres1.data.length === 0) {
          isEmpty(true);
        } else {
          isEmpty(false);
        }
      });
  }, [user]);

  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value !== "" && value.length > 2) {
      axios
        .get(`https://edulab-backend.herokuapp.com/api/utilisateur/addedannonces/${user.id}`)
        .then((bd) => {
          if (
            bd.data.filter((cour) => cour.titre.toLowerCase().includes(value.toLowerCase())) !== []
          ) {
            setCours(
              bd.data.filter((cour) => cour.titre.toLowerCase().includes(value.toLowerCase()))
            );
            isChanged(changed + 1);
          }
        });
    } else {
      axios
        .get(`https://edulab-backend.herokuapp.com/api/utilisateur/addedannonces/${user.id}`)
        .then((bd) => {
          setCours(bd.data);
          isChanged(changed + 1);
        });
    }
    setSearch(value);

    // eslint-disable-next-line
    console.log(cours);
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          height="15em"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h2">
            {" "}
            <CampaignIcon sx={{ marginRight: 2, fontSize: "medium" }} />
            Annonces{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            ml: 15.5,
            mr: 15.5,
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
              Ajouter une annonce
            </Fab>
          </Box>
          <MKBox>
            <Container>
              <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
                <AppBar position="static">
                  <Tabs value={activeTab} onChange={handleTabType}>
                    <Tab label="Mes annonces" />
                  </Tabs>
                </AppBar>
              </Grid>
              <MKBox position="static" sx={{ margin: 2, alignSelf: "left" }}>
                <span
                  style={{
                    margin: "0 auto",
                    border: "1px solid #ccc",
                    outline: "none",
                    fontSize: "1rem",
                    padding: "0.5rem",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "0.5rem",
                  }}
                >
                  {" "}
                  <SearchIcon sx={{ marginRight: 2 }} />
                  <input
                    type="search"
                    placeholder="Rechercher"
                    value={search}
                    onChange={handleInputChange}
                    style={{
                      margin: "0 auto",
                      border: "none",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                </span>
              </MKBox>
            </Container>
          </MKBox>
          <MKBox component="section" py={2}>
            <Container>
              {empty ? (
                <MKTypography sx={{ textAlign: "center" }}>
                  {" "}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <pre>Vous n'avez pas encore ajouté d'annonce.</pre>
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
                              margin: "3",
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
                                fontSize: "2rem",
                              }}
                            >
                              {post.titre.substring(0, 2).toUpperCase()}
                            </MKTypography>
                          </div>{" "}
                          <Divider orientation="vertical" />
                          <br />
                          <div style={{ margin: "3", width: "100%" }}>
                            <span>
                              <MKTypography variant="h6">
                                <p
                                  style={{
                                    fontSize: "18px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {post.titre}
                                </p>
                              </MKTypography>{" "}
                            </span>
                            <span>
                              <p style={{ fontSize: "14px" }}> Pour {post.cible}</p>
                            </span>
                            <span style={{ justifySelf: "right", alignSelf: "right" }}>
                              <p
                                style={{ fontSize: "12px", color: "darkgrey", fontStyle: "italic" }}
                              >
                                <AccessTimeFilledIcon mr={4} ml={3} />
                                <p>
                                  {new Intl.DateTimeFormat("fr-FR", DATE_OPTIONS).format(
                                    new Date(post.dateCreation)
                                  )}
                                </p>
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
                              href={`/gestionannonces/${post.id}`}
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

export default AnnoncesDetailsPartenaire;
