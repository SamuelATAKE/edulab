import React, { useEffect, useState } from "react";

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
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import FloatingButton from "pages/Dashboard/FloatingButton";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import routeMentor from "../MenuPerUset/Mentor/menu";
import routeApprenant from "../MenuPerUset/Apprenant/menu";

function Notifications() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const toggleModal = () => setShow(!show);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  let isapprenant = false;
  if (user.role === "Apprenant") {
    isapprenant = true;
  }
  return (
    <>
      <DefaultNavbar routes={isapprenant ? routeApprenant : routeMentor} />
      <br />
      <br />
      <br />
      <br />
      <Container sx={{ m: "auto", mb: 2 }}>
        <Container
          sx={{
            borderRadius: "5px",
            border: "1px solid white",
            boxShadow: 10,
            backgroundColor: "white",
          }}
        >
          <Grid container item justifyContent="center" sx={{ m: 2, p: 1 }} mx="auto">
            <h3>Remise de codes du projet Java</h3>
            <MKButton variant="gradient" color="info" sx={{ ml: "auto" }} onClick={toggleModal}>
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
      </Container>
      <Container sx={{ m: "auto", mb: 2 }}>
        <Container
          sx={{
            borderRadius: "5px",
            border: "1px solid white",
            boxShadow: 10,
            backgroundColor: "white",
          }}
        >
          <Grid container item justifyContent="center" sx={{ m: 2, p: 1 }} mx="auto">
            <h3>Remise de codes du projet Java</h3>
            <MKButton variant="gradient" color="info" sx={{ ml: "auto" }} onClick={toggleModal}>
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
      </Container>
      <Container sx={{ m: "auto", mb: 2 }}>
        <Container
          sx={{
            borderRadius: "5px",
            border: "1px solid white",
            boxShadow: 10,
            backgroundColor: "white",
          }}
        >
          <Grid container item justifyContent="center" sx={{ m: 2, p: 1 }} mx="auto">
            <h3>Remise de codes du projet Java</h3>
            <MKButton variant="gradient" color="info" sx={{ ml: "auto" }} onClick={toggleModal}>
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
      </Container>
      <Container sx={{ m: "auto", mb: 2 }}>
        <Container
          sx={{
            borderRadius: "5px",
            border: "1px solid white",
            boxShadow: 10,
            backgroundColor: "white",
          }}
        >
          <Grid container item justifyContent="center" sx={{ m: 2, p: 1 }} mx="auto">
            <h3>Remise de codes du projet Java</h3>
            <MKButton variant="gradient" color="info" sx={{ ml: "auto" }} onClick={toggleModal}>
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
      </Container>
      <Container sx={{ m: "auto", mb: 2 }}>
        <Container
          sx={{
            borderRadius: "5px",
            border: "1px solid white",
            boxShadow: 10,
            backgroundColor: "white",
          }}
        >
          <Grid container item justifyContent="center" sx={{ m: 2, p: 1 }} mx="auto">
            <h3>Remise de codes du projet Java</h3>
            <MKButton variant="gradient" color="info" sx={{ ml: "auto" }} onClick={toggleModal}>
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
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Notifications;
