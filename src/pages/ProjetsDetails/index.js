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
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import routes from "../MenuPerUset/Apprenant/menu";
import MKTypography from "../../components/MKTypography";

function ProjetDetails() {
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
    axios.get(`http://localhost:8080/api/projet/${id}`).then((res) => {
      item = res.data;
      axios
        .put(`http://localhost:8080/api/utilisateur/joinproject/${user.id}`, res.data, {
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
    navigate(`/contenuprojet/${id}`);
  };
  const [empty, isEmpty] = useState(true);
  const DATE_OPTIONS = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
  const [cours, setCours] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [mescours, setMesCours] = useState([]);
  const [search, setSearch] = useState("");
  const [changed, isChanged] = useState(0);
  useEffect(() => {
    document.title = "Projets";
    axios
      .get("http://localhost:8080/api/projet/")
      .then((res) => {
        axios
          .get(`http://localhost:8080/api/utilisateur/joinedproject/${user.id}`)
          .then((secres1) => {
            // eslint-disable-next-line
              console.log(secres1.data);
            const s = new Set(res.data.map(({ id }) => id));
            setMesCours(secres1.data.filter(({ id }) => s.has(id)));
            // setMesCours(mescours.filter((x) => x.id));
            // eslint-disable-next-line
              console.log(mescours);
            if (activeTab) {
              if (res.data.length > 0) {
                isEmpty(false);
                setCours(res.data);
              } else {
                isEmpty(true);
              }
            } else if (secres1.data.length > 0) {
              isEmpty(false);
              setCours(secres1.data);
            } else {
              isEmpty(true);
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
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value !== "" && value.length > 2) {
      axios.get("http://localhost:8080/api/projet/").then((res) => {
        axios
          .get(`http://localhost:8080/api/utilisateur/joinedproject/${user.id}`)
          .then((secres1) => {
            if (activeTab) {
              isEmpty(false);
              if (
                res.data.filter((cour) =>
                  cour.titre.toLowerCase().includes(value.toLowerCase())
                ) !== []
              ) {
                setCours(
                  res.data.filter((cour) => cour.titre.toLowerCase().includes(value.toLowerCase()))
                );
                isChanged(changed + 1);
              } else {
                isEmpty(true);
              }
            } else if (secres1.data.length > 0) {
              isEmpty(false);
              if (
                secres1.data.filter((cour) =>
                  cour.titre.toLowerCase().includes(value.toLowerCase())
                ) !== []
              ) {
                setCours(
                  secres1.data.filter((cour) =>
                    cour.titre.toLowerCase().includes(value.toLowerCase())
                  )
                );
                isChanged(changed + 1);
              }
            } else {
              isEmpty(true);
            }
          });
      });
    } else {
      axios
        .get("http://localhost:8080/api/projet/")
        .then((res) => {
          axios
            .get(`http://localhost:8080/api/utilisateur/joinedproject/${user.id}`)
            .then((secres1) => {
              // eslint-disable-next-line
                        console.log(secres1.data);
              const s = new Set(res.data.map(({ id }) => id));
              setMesCours(secres1.data.filter(({ id }) => s.has(id)));
              // setMesCours(mescours.filter((x) => x.id));
              // eslint-disable-next-line
                        console.log(mescours);
              if (activeTab) {
                if (res.data.length > 0) {
                  isEmpty(false);
                  setCours(res.data);
                } else {
                  isEmpty(true);
                }
              } else if (secres1.data.length > 0) {
                isEmpty(false);
                setCours(secres1.data);
              } else {
                isEmpty(true);
              }
            });
        })
        // eslint-disable-next-line
            .catch((err) => console.log(err));
    }
    setSearch(value);
  };

  return (
    <>
      <DefaultNavbar routes={routes} transparent dark />
      <MKBox bgColor="#F5F5DC">
        <MKBox
          height="14em"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h2">
            {" "}
            <LibraryBooksIcon mr={2} />
            Projets{" "}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mr: 11,
            ml: 11,
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
                    <Tab label="Mes projets" />
                    <Tab label="Tous les projets" />
                  </Tabs>
                </AppBar>
                <MKBox position="static" sx={{ margin: 2 }}>
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
                      placeholder="recherche"
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
              </Grid>
            </Container>
          </MKBox>
          <MKBox component="section" py={2}>
            <Container>
              {empty ? (
                <MKTypography sx={{ textAlign: "center" }}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <pre>Aucun projet n'est disponible pour l' instant</pre>
                </MKTypography>
              ) : (
                <Grid container spacing={6}>
                  {cours.map((post) => (
                    <Grid item xs="6" sm="6" lg="6" key={post.id}>
                      <Accordion
                        sx={{ width: "100%", height: "100%" }}
                        bgcolor={
                          mescours.filter((cour) => cour.id === post.id).length > 0
                            ? "#a9a9a9"
                            : "#FFF"
                        }
                      >
                        <AccordionSummary
                          aria-controls="panel1a-content"
                          id="panel1a-header1"
                          sx={{ width: "100%" }}
                          bgcolor={
                            mescours.filter((cour) => cour.id === post.id).length > 0
                              ? "#a9a9a9"
                              : "#FFF"
                          }
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
                              {post.nom.substring(0, 2).toUpperCase()}
                            </MKTypography>
                          </div>{" "}
                          <Divider orientation="vertical" />
                          <br />
                          <div style={{ margin: "3", width: "100%" }}>
                            <span>
                              <MKTypography variant="h6">
                                <p
                                  style={{
                                    fontSize: "25px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {post.nom}
                                </p>
                              </MKTypography>{" "}
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
                            {activeTab ? (
                              <Button
                                onClick={() => {
                                  handleJoin(post.id);
                                }}
                                disabled={mescours.filter((cour) => cour.id === post.id).length > 0}
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
                                href={`contenuprojet/${post.id}`}
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

export default ProjetDetails;
