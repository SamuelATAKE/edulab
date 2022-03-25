import React, { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import routes from "menu";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FloatingButton from "pages/Dashboard/FloatingButton";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

function Notifications() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      <DefaultNavbar routes={routes} />
      <br />
      <br />
      <br />
      <br />
      <MKBox bgColor="#dadaf0">
        <MKBox variant="gradient" component="section" sx={{ mx: 15 }}>
          <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <h3 sx={{ mr: 10 }}>Remise de codes du projet Java</h3>
              <MKButton sx={{ ml: 10 }} variant="gradient" color="info" onClick={toggleModal}>
                Détails
              </MKButton>
            </Grid>
            <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
              <Slide direction="down" in={show} timeout={500}>
                <MKBox
                  position="relative"
                  width="500px"
                  display="flex"
                  flexDirection="column"
                  borderRadius="xl"
                  bgColor="white"
                  shadow="xl"
                >
                  <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                    <MKTypography variant="h5">Remise de projet Java</MKTypography>
                    <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox p={2}>
                    <MKTypography variant="body2" color="secondary" fontWeight="regular">
                      Vous êtes conviés à faire vos pushs sur vos différents dépôts Git et
                      n&apos;oubliez de bien vérifier si j&apos;y suis ajouté
                      <br />
                      <br />
                      Rédigez ensuite correctement le fichier ReadMe
                    </MKTypography>
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox display="flex" justifyContent="space-between" p={1.5}>
                    <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                      Fermer
                    </MKButton>
                    <MKButton variant="gradient" color="info">
                      Sauvegarder
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Slide>
            </Modal>
          </Container>
        </MKBox>
        <br />
        <MKBox variant="gradient" component="section" sx={{ mx: 15 }}>
          <Container>
            <Grid container item lg={12} justifyContent="center" mx="auto">
              <h3 sx={{ mr: 10 }}>Quizz sur les exceptions en Java</h3>
              <MKButton
                sx={{ ml: 10 }}
                variant="gradient"
                color="info"
                onClick={toggleModal}
                mx="auto"
              >
                Détails
              </MKButton>
            </Grid>
            <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
              <Slide direction="down" in={show} timeout={500}>
                <MKBox
                  position="relative"
                  width="500px"
                  display="flex"
                  flexDirection="column"
                  borderRadius="xl"
                  bgColor="white"
                  shadow="xl"
                >
                  <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                    <MKTypography variant="h5">Remise de projet Java</MKTypography>
                    <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox p={2}>
                    <MKTypography variant="body2" color="secondary" fontWeight="regular">
                      Salut cher apprenant. Je vous espère en forme. Juste pour vous rappeler de
                      terminer le Quizz sur les exceptions afin de vous permettre d&apos;être apte
                      pour la suite du cours.
                      <br />
                      <br />
                      N&apos;oubliez pas de le faire individuellement, afin d&apos;évaluer
                      personnelement vos compétences. Reprenez autant que vous pouvez pour avoir une
                      bonne note
                    </MKTypography>
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox display="flex" justifyContent="space-between" p={1.5}>
                    <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                      Fermer
                    </MKButton>
                    <MKButton variant="gradient" color="info">
                      Sauvegarder
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Slide>
            </Modal>
          </Container>
        </MKBox>
        <FloatingButton />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Notifications;
