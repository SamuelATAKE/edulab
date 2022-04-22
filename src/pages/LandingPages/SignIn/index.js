import { useState } from "react";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  email: "",
  password: "",
};

function SignInBasic() {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const [state, setState] = useState(initialState);

  const { email, password } = state;

  // const [logged, setLogged] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log("Submitting");
    // eslint-disable-next-line
    console.log(state);
    axios.get(`http://localhost:8080/api/utilisateur`).then((res) => {
      res.data.forEach((element) => {
        // eslint-disable-next-line
        console.log("element");
        // eslint-disable-next-line
        console.log(element);
        if (element.email === state.email && element.password === state.password) {
          // eslint-disable-next-line
          console.log(true);
          // setLogged(true);
          sessionStorage.setItem("user", JSON.stringify(element));
          if (element.role === "") {
            navigate("/profil", { replace: true });
          } else {
            navigate("/dashboard", { replace: true });
          }
        }
      });
    });
  };

  return (
    <>
      <MKBox position="absolute" top={0} left={0} zIndex={1} width="100%" minHeight="100vh" />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
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
                  Connectez-vous
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
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      label="Email"
                      fullWidth
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      label="Mot de passe"
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
                      Connexion
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Vous n avez pas de compte?{" "}
                      <MKTypography
                        component={Link}
                        to="/inscription"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Inscrivez-vous
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

export default SignInBasic;
