// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Author page sections
// import Profile from "pages/Projetstutores/sections/Profile";
// import Contact from "pages/Projetstutores/sections/Contact";

// Routes
import routes from "menu";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Projets/banniere.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TransparentBlogCard from "../../examples/Cards/BlogCards/TransparentBlogCard";
import post1 from "../../assets/images/examples/testimonial-6-2.jpg";
import MKTypography from "../../components/MKTypography";

function Projetstutores() {
  const [projets, setProjets] = useState([]);
  useEffect(() => {
    axios
      .get("https://edulab-backend.herokuapp.com/api/cours/")
      .then((res) => {
        setProjets(res.data);
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="#e0ffd6">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
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
          <MKBox component="section" py={2}>
            <Container>
              <Grid container item xs={12} lg={6}>
                <MKTypography variant="h3" mb={6}>
                  Projets
                </MKTypography>
              </Grid>
              <Grid container spacing={3}>
                {projets.map((post) => (
                  <Grid container item xs={3} lg={3} key={post.id}>
                    <TransparentBlogCard
                      image={post1}
                      title={post.titre}
                      description={post.description}
                      action={{
                        route: "connexion",
                        color: "info",
                        label: "Voir",
                      }}
                    />
                  </Grid>
                ))}
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

export default Projetstutores;
