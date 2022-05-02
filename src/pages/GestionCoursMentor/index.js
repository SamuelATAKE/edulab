/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";

// import Flip from "pages/Presentation/sections/Flip";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";

// import Download from "pages/Presentation/sections/Download";

// Presentation page components

// Routes
import footerRoutes from "footer.routes";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Chip } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MKTypography from "../../components/MKTypography";
import routes from "../MenuPerUset/Mentor/menu";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/bg-coworking.jpeg";

function ContenuCours() {
  const param = useParams();
  // const navigate = useNavigate();
  // const handleEdit = () => {
  //  navigate(`modifiercours/${param.id}`);
  // };
  const [cours, setCours] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/api/cours/${param.id}`).then((res) => {
      setCours(res.data);
    });
  });
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="5em"
        width="100%"
        display="flex"
        alignItems="center"
        sx={{
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: 1,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.9),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            p: 2,
            border: "0.5px solid darkgray",
            borderRadius: "0.4em",
          }}
        >
          {cours.titre}
          <Stack direction="row" spacing={2} mt={3}>
            <Button color="primary" href={`/modifiercours/${param.id}`} startIcon={<EditIcon />}>
              Modifier
            </Button>
            <Button color="secondary" endIcon={<DeleteIcon />} href="">
              Supprimer
            </Button>
          </Stack>
        </Typography>
        <hr />
        <MKBox bgColor="white" p="auto">
          {" "}
          <Divider color="secondary">
            <Chip color="secondary" label="Generalites" />
          </Divider>
        </MKBox>

        <MKTypography mt={2} mb={3}>
          <h3>Descriptif</h3>
          {cours.description}
        </MKTypography>
        <hr />
        <MKBox bgColor="white" p="auto">
          {" "}
          <Divider color="secondary">
            <Chip color="secondary" label="Supports et Ressources du cours" />
          </Divider>
        </MKBox>
        <MKTypography mt={5} mb={3}>
          <h3>Support Principal</h3>
        </MKTypography>
        <br />
        <br />
        <MKTypography mt={5} mb={3}>
          <h3>Ressources secondaires</h3>
        </MKTypography>
        <br />
        <br />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
export default ContenuCours;
