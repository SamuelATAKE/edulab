// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "menu";
import footerRoutes from "footer.routes";

// Images
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SearchIcon from "@mui/icons-material/Search";
import MKTypography from "../../components/MKTypography";

function Cours() {
  const [cours, setCours] = useState([]);
  const [empty, isEmpty] = useState(true);
  const DATE_OPTIONS = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
  useEffect(() => {
    axios
      .get("https://edulab-backend.herokuapp.com/api/cours/")
      .then((res) => {
        setCours(res.data);
      })
      // eslint-disable-next-line
            .catch((err) => console.log(err));

    if (Object.keys(cours).length === 0) {
      isEmpty(false);
    }
  }, []);
  return (
    <>
      <DefaultNavbar routes={routes} transparent />
      <MKBox bgColor="#F4F4F4">
        <MKBox
          height="18em"
          width="100%"
          sx={{
            display: "grid",
            placeItems: "center",
            bakgroundColor: "dark",
          }}
        >
          <MKTypography variant="h2">
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
                  placeholder="recherhe"
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
          <MKBox mb={3} />
          <MKBox component="section" py={2}>
            <Container>
              {empty ? (
                <MKTypography sx={{ textAlign: "center" }}>
                  {" "}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <pre>Aucun cours n'est disponible pour l' instant</pre>
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

export default Cours;
