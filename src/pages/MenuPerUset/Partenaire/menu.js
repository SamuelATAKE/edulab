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
    name: "Annonces",
    icon: <Icon>view_day</Icon>,
    href: "/annoncesdetails",
  },
  {
    name: "Cours",
    icon: <Icon>article</Icon>,
    href: "/Cours-details",
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
