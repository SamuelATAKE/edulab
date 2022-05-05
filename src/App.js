import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import SignIn from "layouts/pages/authentication/sign-in";
import SignUp from "layouts/pages/authentication/sign-up";
import ContactUs from "layouts/pages/landing-pages/contact-us";

// Material Kit 2 React routes
import routes from "menu";
// import Author from "pages/LandingPages/Author";
import Projetstutores from "pages/Projetstutores";
import Cours from "pages/Cours";
import Annonces from "pages/Annonces";
import Author from "pages/LandingPages/Author";
import EditAnnoncesForm from "pages/AnoncesDetailsPartenaire/EditAnnoncesForm";
import AnnoncesForm from "pages/AnoncesDetailsPartenaire/AnnoncesForm";
import GestionAnnonces from "pages/ContenuAnnoncesPartenaire";
import AboutUsPage from "./layouts/pages/landing-pages/about-us";
import Dashboard from "./pages/Dashboard";
import CoursDetails from "./pages/CoursDetails";
import ProjetsDetails from "./pages/ProjetsDetails";
import Notifications from "./pages/Notifications";
import CoursDetailsMentor from "./pages/CoursDetailsMentor";
import ProjetsDetailsMentor from "./pages/ProjetsDetailsMentor";
import ContenuCours from "./pages/ContenuCours";
import Forums from "./pages/Forums";
import Commentaires from "./pages/Forums/Commentaires";
import ContenuProjet from "./pages/ContenuProjet";
import GestionContenuCours from "./pages/GestionCoursMentor";
import GestionContenuProjet from "./pages/GestionProjetMentor";
import AnnoncesDetails from "./pages/AnoncesDetails";
import AnnoncesDetailsPartenaire from "./pages/AnoncesDetailsPartenaire";
import CoursForm from "./pages/CoursDetailsMentor/CoursForm";
import EditCoursForm from "./pages/CoursDetailsMentor/EditCoursForm";
import ProjetForm from "./pages/ProjetsDetailsMentor/ProjetForm";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}

        <Route path="/profil" element={<Author />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/commentaires" element={<Commentaires />} />
        <Route path="/contenucours/:id" element={<ContenuCours />} />
        <Route path="/gestioncours/:id" element={<GestionContenuCours />} />
        <Route path="/gestionannonces/:id" element={<GestionAnnonces />} />
        <Route path="/modifiercours/:id" element={<EditCoursForm />} />
        <Route path="/modifierannonces/:id" element={<EditAnnoncesForm />} />
        <Route path="/gestionprojet" element={<GestionContenuProjet />} />
        <Route path="/contenuprojet" element={<ContenuProjet />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/a-propos-de-nous" element={<AboutUsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connexion" element={<SignIn />} />
        <Route path="/Projets" element={<Projetstutores />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/Cours" element={<Cours />} />
        <Route path="/Coursform" element={<CoursForm />} />
        <Route path="/Projetform" element={<ProjetForm />} />
        <Route path="/annoncesform" element={<AnnoncesForm />} />
        <Route path="/Cours-details" element={<CoursDetails />} />
        <Route path="/Projets-details" element={<ProjetsDetails />} />
        <Route path="/CoursDetails" element={<CoursDetailsMentor />} />
        <Route path="/ProjetsDetails" element={<ProjetsDetailsMentor />} />
        <Route path="/Annonces" element={<Annonces />} />
        <Route path="/Annonces-details" element={<AnnoncesDetails />} />
        <Route path="/AnnoncesDetails" element={<AnnoncesDetailsPartenaire />} />
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
