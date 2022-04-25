// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// Pages
// Sections
const routes = [
  {
    name: "Accueil",
    icon: <Icon>home</Icon>,
    href: "/presentation",
  },
  {
    name: "Projets",
    icon: <Icon>work</Icon>,
    collapse: [
      {
        name: "Projets tuteurés",
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
    icon: <Icon>school</Icon>,
    href: "/Cours",
  },
  {
    name: "A propos",
    icon: <Icon>info</Icon>,
    href: "/a-propos-de-nous",
  },
  {
    type: "internal",
    name: "Contact",
    icon: <Icon>mail</Icon>,
    href: "/contact",
  },
];

export default routes;
