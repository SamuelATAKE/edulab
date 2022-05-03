/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "menu";

const initialState = {
  username: "",
  aemail: "",
  upassword: "",
  passwordconfirm: "",
};

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

function SignUpBasic() {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [state, setState] = useState(initialState);

  const { username, aemail, upassword, passwordconfirm } = state;

  const [utilisateur, setUtilisateur] = useState(userState);

  const { nom, prenom, institut, pseudo, password, email, genre, bio, points, role } = utilisateur;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    // eslint-disable-next-line
    console.log("entered");
    e.preventDefault();
    setUtilisateur({ ...utilisateur, [nom]: null });
    setUtilisateur({ ...utilisateur, [prenom]: null });
    setUtilisateur({ ...utilisateur, [institut]: null });
    setUtilisateur({ ...utilisateur, [pseudo]: state.username });
    setUtilisateur({ ...utilisateur, [password]: state.upassword });
    setUtilisateur({ ...utilisateur, [email]: state.aemail });
    setUtilisateur({ ...utilisateur, [genre]: null });
    setUtilisateur({ ...utilisateur, [bio]: null });
    setUtilisateur({ ...utilisateur, [points]: null });
    setUtilisateur({ ...utilisateur, [role]: null });
    utilisateur.pseudo = state.username;
    utilisateur.email = state.aemail;
    utilisateur.password = state.upassword;
    // eslint-disable-next-line
    console.log("L'état");
    // eslint-disable-next-line
    console.log(utilisateur);
    // eslint-disable-next-line
    console.log(state);

    axios
      .post(`http://localhost:8080/api/utilisateur`, utilisateur, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        console.log(res);
        // eslint-disable-next-line
        console.log(res.data);
        navigate("/connexion", { replace: true });
      });
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={50}
        zIndex={1}
        width="100%"
        Height="50%"
        mx="auto"
        Color="dark"
      />
      <MKBox px={1} mt="500" top={50} position="relative" zIndex={4}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="auto">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Créer un compte!
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>

              <MKBox pt={4} pb={3} px={3}>
                <MKBox
                  component="form"
                  role="form"
                  autoComplete="off"
                  noValidate
                  onSubmit={onSubmit}
                >
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Nom d'utilisateur(Pseudo)"
                      name="username"
                      value={username}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      name="aemail"
                      value={aemail}
                      onChange={handleInputChange}
                      label="Adresse email"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      name="upassword"
                      value={upassword}
                      onChange={handleInputChange}
                      label="Mot de passe"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      name="passwordconfirm"
                      value={passwordconfirm}
                      onChange={handleInputChange}
                      label="Confirmez votre mot de passe"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Se souvenir
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" type="submit" color="info" fullWidth>
                      Inscription
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Vous avez déjà un compte?{" "}
                      <MKTypography
                        component={Link}
                        to="/connexion"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Connectez-vous
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignUpBasic;
