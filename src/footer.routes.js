// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "TrainYourDevSkills",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "Liens rapides",
      items: [
        { name: "Projets tutorés", href: "#" },
        { name: "Annonces", href: "#" },
        { name: "Cours", href: "#" },
        { name: "Forum", href: "#" },
      ],
    },
    {
      name: "Ressources",
      items: [
        { name: "illustrations", href: "#" },
        { name: "bits & snippets", href: "#" },
        { name: "affiliate program", href: "#" },
      ],
    },
    {
      name: "Aide et support",
      items: [
        { name: "Contactez-nous", href: "#" },
        { name: "Development", href: "#" },
        { name: "Sponsors", href: "#" },
      ],
    },
    {
      name: "Normes",
      items: [
        { name: "Termes et conditions", href: "#" },
        { name: "Politiques de confidentialité", href: "#" },
        { name: "Licences (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Tous droits reservés. Copyright &copy; {date} TrainYourDevSkills by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        TeamSoftLife
      </MKTypography>
      .
    </MKTypography>
  ),
};
