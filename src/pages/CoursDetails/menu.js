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
    type: "external",
    name: "Projets",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Projets tuteurés",
        description: "Apprenez en pratiquant",
        href: "/projets-details",
      },
      {
        name: "Annonces",
        description: "Participez à de vrais projets",
        href: "/annonces",
      },
    ],
  },
  {
    type: "internal",
    name: "Cours",
    icon: <Icon>article</Icon>,
    href: "Cours-details",
  },
  {
    type: "external",
    label: "profil",
    icon: <Icon>person</Icon>,
    collapse: [
      {
        type: "external",
        name: "Notifications",
        description: "Afficher les notifications",
        icon: <Icon>Notifications</Icon>,
        href: "/notifications",
      },
      {
        type: "external",
        name: "Mon dashboard",
        description: "Afficher mes informations",
        href: "/dashboard",
      },
      {
        type: "external",
        name: "Profil",
        description: "Modifier mon profil",
        href: "/profil",
      },
      {
        type: "external",
        name: "Déconnexion",
        description: "Se déconnecter",
        href: "/logout",
      },
    ],
  },
];

export default routes;
