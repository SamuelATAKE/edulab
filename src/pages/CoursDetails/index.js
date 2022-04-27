// @mui material components
import Card from "@mui/material/Card";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
// eslint-disable-next-line import/extensions
import footerRoutes from "footer.routes";

// Images
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import routes from "./menu";
import MKTypography from "../../components/MKTypography";

function CoursDetails() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
    if (activeTab) {
      setActiveTab(0);
    } else {
      setActiveTab(1);
    }
  };
  const handleJoin = (id) => {
    let item;
    axios.get(`http://localhost:8080/api/cours/${id}`).then((res) => {
      item = res.data;
      axios
        .put(`http://localhost:8080/api/utilisateur/joincourse/${user.id}`, res.data, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((secres) => {
          // eslint-disable-next-line
                console.log(secres.data);
          // eslint-disable-next-line
                console.log(item);
        });
    });

    axios.get(`http://localhost:8080/api/utilisateur/${user.id}`).then((secres1) => {
      // eslint-disable-next-line
          console.log(secres1.data);
      // eslint-disable-next-line
        console.log(item);
      localStorage.setItem("user", JSON.stringify(secres1.data));
      setUser(JSON.parse(localStorage.getItem("user")));
    });
    navigate(`/contenucours/${id}`);
  };
  const [empty, isEmpty] = useState(true);
  const DATE_OPTIONS = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
  const [cours, setCours] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cours/")
      .then((res) => {
        axios
          .get(`http://localhost:8080/api/utilisateur/joinedcourse/${user.id}`)
          .then((secres1) => {
            // eslint-disable-next-line
              console.log(secres1.data);
            if (activeTab) {
              setCours(res.data.filter((x) => !secres1.data.includes(x)));
            } else {
              setCours(secres1.data);
            }
          });
      })
      // eslint-disable-next-line
        .catch((err) => console.log(err));
    if (Object.keys(cours).length === 0) {
      isEmpty(false);
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [activeTab]);
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
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox mb={3}>
            <Container>
              <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
                <AppBar position="static">
                  <Tabs value={activeTab} onChange={handleTabType}>
                    <Tab label="Mes cours" />
                    <Tab label="Decouverte" />
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
                            {activeTab ? (
                              <Button
                                onClick={() => {
                                  handleJoin(post.id);
                                }}
                                sx={{
                                  alignSelf: "center",
                                  borderRadius: "0.1em",
                                  fontSize: "13.5px",
                                  color: "white",
                                }}
                              >
                                {" "}
                                Rejoindre
                              </Button>
                            ) : (
                              <Button
                                href={`contenucours/${post.id}`}
                                sx={{
                                  alignSelf: "center",
                                  borderRadius: "0.1em",
                                  fontSize: "12.5px",
                                  color: "white",
                                }}
                              >
                                {" "}
                                Plus
                              </Button>
                            )}
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

export default CoursDetails;
