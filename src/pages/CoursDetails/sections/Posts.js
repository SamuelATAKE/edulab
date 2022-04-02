// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import Typography from "@mui/material/Typography";

// import post4 from "assets/images/examples/blog2.jpg";
function CoursesListing() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <Accordion color="primary" bgcolor="dark">
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header1">
                <TransparentBlogCard
                  image={post1}
                  title="Un projet "
                  description="App mobile flutter"
                  action={{
                    type: "internal",
                    route: "",
                  }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Accordion color="primary" bgcolor="dark">
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header1">
                <TransparentBlogCard
                  image={post2}
                  title="Un autre"
                  description="Netflix clone avec vuejs"
                  action={{
                    type: "internal",
                    route: "",
                  }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="MateLabs machine learning"
              description="Creer son modele de machine learning"
              action={{
                type: "internal",
                route: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CoursesListing;
