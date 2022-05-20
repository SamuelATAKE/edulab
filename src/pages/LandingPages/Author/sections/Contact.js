import React, { useEffect } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "@mui/icons-material";
import { InputLabel, MenuItem, Select } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const userState = {
  nom: "",
  prenom: "",
  institut: "",
  pseudo: "",
  password: "",
  email: "",
  genre: "",
  bio: "",
  points: "",
  role: "",
};

const initialState = {
  nomp: "",
  prenomp: "",
  institutp: "",
  usernamep: "",
  genrep: "",
  emailp: "",
  biop: "",
  rolep: "",
};

function Contact() {
  const [state, setState] = React.useState(initialState);

  const { nomp, prenomp, institutp, genrep, usernamep, emailp, biop, rolep } = state;

  const [utilisateur, setUtilisateur] = React.useState(userState);

  const {
    id,
    nom,
    prenom,
    institut,
    pseudo,
    password,
    email,
    genre,
    bio,
    points,
    role,
    cours,
    imageUrl,
    emailVerified,
  } = utilisateur;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // const handleSelectChange = (e) => {
  //  e.preventDefault();
  //  setState({ ...state.genrep, [genrep]: state.genrep });
  // };

  useEffect(() => {
    setState({
      nomp: user.nom,
      prenomp: user.prenom,
      institutp: user.institut,
      usernamep: user.pseudo,
      genrep: user.genre,
      emailp: user.email,
      biop: user.bio,
      rolep: user.role,
    });
  }, []);

  const masculin = "Masculin";

  const feminin = "Féminin";

  const mentor = "Mentor";

  const apprenant = "Apprenant";

  const partenaire = "Partenaire";

  const onSubmit = (e) => {
    // eslint-disable-next-line
    console.log("entered");
    // eslint-disable-next-line
    console.log(user);
    e.preventDefault();
    setUtilisateur({ ...utilisateur, [id]: user.id });
    setUtilisateur({ ...utilisateur, [nom]: state.nomp });
    setUtilisateur({ ...utilisateur, [prenom]: state.prenomp });
    setUtilisateur({ ...utilisateur, [institut]: state.institutp });
    setUtilisateur({ ...utilisateur, [pseudo]: state.usernamep });
    setUtilisateur({ ...utilisateur, [password]: user.password });
    setUtilisateur({ ...utilisateur, [email]: state.emailp });
    setUtilisateur({ ...utilisateur, [genre]: state.genrep });
    setUtilisateur({ ...utilisateur, [bio]: state.biop });
    setUtilisateur({ ...utilisateur, [points]: user.points });
    setUtilisateur({ ...utilisateur, [role]: user.rolep });
    setUtilisateur({ ...utilisateur, [id]: user.id });
    setUtilisateur({ ...utilisateur, [cours]: user.cours });
    setUtilisateur({ ...utilisateur, [emailVerified]: user.emailVerified });
    setUtilisateur({ ...utilisateur, [imageUrl]: user.imageUrl });
    utilisateur.pseudo = state.usernamep;
    utilisateur.nom = state.nomp;
    utilisateur.prenom = state.prenomp;
    utilisateur.email = state.emailp;
    utilisateur.institut = state.institutp;
    utilisateur.genre = state.genrep;
    utilisateur.bio = state.biop;
    utilisateur.points = user.points;
    utilisateur.role = state.rolep;
    utilisateur.password = user.password;
    utilisateur.id = user.id;
    utilisateur.cours = user.cours;
    utilisateur.emailVerified = user.emailVerified;
    utilisateur.imageUrl = user.imageUrl;

    // eslint-disable-next-line
    console.log("L'état");
    // eslint-disable-next-line
    console.log(utilisateur);
    // eslint-disable-next-line
    console.log(state);

    axios
      // .put(`https://edulab-backend.herokuapp.com/api/utilisateur/${user.id}`, utilisateur, {
      .put(`https://edulab-backend.herokuapp.com/api/utilisateur/update/`, utilisateur, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        console.log(res);
        // eslint-disable-next-line
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Niveau 3 <br />
                      Particpez à plus de projets et remportez des points
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+228) 77210020
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@gmail.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Agoè Assiyéyé, Rue 010458
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="put" onSubmit={onSubmit}>
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Vos informations personnelles
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Modifier ou complètez votre profil
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Nom"
                          name="nomp"
                          value={nomp}
                          placeholder="Votre nom"
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Prénom(s)"
                          name="prenomp"
                          value={prenomp}
                          placeholder="Votre prénom"
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Pseudonyme"
                          name="usernamep"
                          value={usernamep}
                          placeholder="Votre pseudo"
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          name="emailp"
                          value={emailp}
                          placeholder="Votre adresse mail"
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          label="Adresse mail"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                        <Select
                          variant="standard"
                          name="genrep"
                          value={genrep}
                          onChange={handleInputChange}
                          label="Genre"
                          fullWidth
                        >
                          <MenuItem value={feminin}>Féminin</MenuItem>
                          <MenuItem value={masculin}>Masculin</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                          variant="standard"
                          name="rolep"
                          value={rolep}
                          onChange={handleInputChange}
                          label="Role"
                          fullWidth
                        >
                          <MenuItem value={apprenant}>Apprenant</MenuItem>
                          <MenuItem value={mentor}>Mentor</MenuItem>
                          <MenuItem value={partenaire}>Partenaire</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Institut"
                          name="institutp"
                          value={institutp}
                          placeholder="Votre institution de provenance"
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Biographie"
                          name="biop"
                          value={biop}
                          placeholder="Dites plus sur vous... Votre niveau d'études, vos technologies et langages préférés, vos projets réalisés..."
                          InputLabelProps={{ shrink: true }}
                          onChange={handleInputChange}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton type="submit" variant="gradient" color="info">
                        Enregistrer mon profil
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
