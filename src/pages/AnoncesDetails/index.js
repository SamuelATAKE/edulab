// @mui material components
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";

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
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";
import routes from "./menu";
import MKTypography from "../../components/MKTypography";

function AnnoncesDetails() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleJoin = (id) => {
    let item;
    axios.get(`https://edulab-backend.herokuapp.com/api/cours/${id}`).then((res) => {
      item = res.data;
      axios
        .put(
          `https://edulab-backend.herokuapp.com/api/utilisateur/joincourse/${user.id}`,
          res.data,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((secres) => {
          // eslint-disable-next-line
          console.log(secres.data);
          // eslint-disable-next-line
          console.log(item);
        });
    });

    axios.get(`https://edulab-backend.herokuapp.com/api/utilisateur/${user.id}`).then((secres1) => {
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
  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
    axios.get("https://edulab-backend.herokuapp.com/api/annonces/").then((res) => {
      setAnnonces(res.data);
      if (res.data.length === 0) {
        isEmpty(true);
      } else {
        isEmpty(false);
      }
    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value !== "" && value.length > 2) {
      axios.get(`https://edulab-backend.herokuapp.com/api/annonces/`).then((bd) => {
        if (
          bd.data.filter((cour) => cour.titre.toLowerCase().includes(value.toLowerCase())) !== []
        ) {
          setAnnonces(
            bd.data.filter((cour) => cour.titre.toLowerCase().includes(value.toLowerCase()))
          );
        }
      });
    } else {
      axios.get(`https://edulab-backend.herokuapp.com/api/annonces/`).then((bd) => {
        setAnnonces(bd.data);
      });
    }
    setSearch(value);

    // eslint-disable-next-line
    console.log(annonces);
  };
  return (
    <>
      <DefaultNavbar routes={routes} transparent />
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
            <CampaignIcon sx={{ marginRight: 2, fontSize: "medium" }} />
            Les Annonces{" "}
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
                <MKBox position="static">
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
                  {" "}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <pre>Aucun annonce n'est disponible pour l' instant</pre>
                </MKTypography>
              ) : (
                <Grid container spacing={6}>
                  {annonces.map((post) => (
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

export default AnnoncesDetails;
