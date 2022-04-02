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
import { Chip, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import MKButton from "../../components/MKButton";
import MKTypography from "../../components/MKTypography";
import routes from "./menu";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
// import bgImage from "assets/images/bg-coworking.jpeg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "24px",
  border: "1px solid white",
  boxShadow: 24,
  p: 4,
};

function ContenuCours() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          Comment aborder la logique des composants reacts ?
          <Stack direction="row" spacing={2} mt={3}>
            <Button color="primary" startIcon={<EditIcon />} onClick={handleOpen}>
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
          <p>Le but de ce cours est de vous apprendre à utiliser les composants React.</p>
          <p>
            Les composants React sont des composants qui sont développés par des développeurs et qui
            sont utilisés dans des applications web. Nous atelerons ici sur la maniere de concevoir
            une achitecture efficace de composants reutilisables.
            <br />
            Le support principal dans la prochaine section contiendra tous les elements de base pour
            prendre en main ce concept.
            <br />
            D&apos autres ressources sont disponibles dans la sections ressources supplementaires.
          </p>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <box mb={5} mt={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
              Veuillez repondre a ces questions
            </Typography>
          </box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField required id="titre" label="Titre" defaultValue="Titre" />
              <TextField
                id="description"
                label="Description"
                defaultValue="Description"
                maxRows={8}
                multiline
              />
              <TextField id="cible" label="Cible" defaultValue="Cible" />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="principal">
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
                  Support Principal
                </Typography>
              </label>
              <input id="principal" name="principal" type="file" accept="*" />

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="optionnels">
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
                  Support Optionnels
                </Typography>
              </label>
              <input id="principal" name="principal" type="file" accept="*" />
            </div>
          </Box>
          <br />
          <Grid container item justifyContent="left" mx="auto">
            <MKButton variant="contained" color="success" startIcon={<SendIcon />}>
              Valider
            </MKButton>
          </Grid>
          <Grid container item justifyContent="right" mx="auto" mt={2}>
            <MKButton variant="contained" color="error" onClick={handleClose}>
              Annuler
            </MKButton>
          </Grid>
        </Card>
      </Modal>
    </>
  );
}
export default ContenuCours;
