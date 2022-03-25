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
        name: "Projets tutorés",
        description: "Apprenez en pratiquant",
        href: "/Projets",
      },
      {
        name: "Annonces",
        description: "Participez à de vrais projets",
        href: "/Annonces",
      },
    ],
  },
  {
    name: "Cours",
    icon: <Icon>article</Icon>,
    href: "Cours",
  },
  {
    name: "A propos",
    icon: <Icon>article</Icon>,
    href: "/a-propos-de-nous",
  },
  {
    name: "Contact",
    icon: <Icon>article</Icon>,
    href: "/contact",
  },
];

export default routes;
