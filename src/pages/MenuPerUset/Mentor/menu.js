// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// Pages
// Sections
const routes = [
  {
    name: "Accueil",
    icon: <Icon>dashboard</Icon>,
    href: "/presentation",
  },
  {
    name: "Projets",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Projets tuteurés",
        description: "Apprenez en pratiquant",
        href: "/projetsdetails",
      },
      {
        name: "Annonces",
        description: "Participez à de vrais projets",
        href: "/annonces-details",
      },
    ],
  },
  {
    name: "Cours",
    icon: <Icon>article</Icon>,
    href: "Coursdetails",
  },
  {
    type: "internal",
    label: "profil",
    icon: <Icon>person</Icon>,
    collapse: [
      {
        name: "Notifications",
        description: "Afficher les notifications",
        icon: <Icon>Notifications</Icon>,
        href: "/notifications",
      },
      {
        name: "Mon dashboard",
        description: "Afficher mes informations",
        href: "/dashboard",
      },
      {
        name: "Profil",
        description: "Modifier mes informations",
        href: "/profil",
      },
      {
        name: "Déconnexion",
        description: "Se déconnecter",
        href: "/logout",
      },
    ],
  },
];

export default routes;
