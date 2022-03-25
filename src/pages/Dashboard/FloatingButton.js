import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";
import { MdDashboard } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
// import Fab from "@mui/material/Fab";
import { GiBlackBook } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";

const actions = [
  { icon: <BsFillBellFill />, name: "Notifications" },
  { icon: <GrPersonalComputer />, name: "Projets" },
  { icon: <GiBlackBook />, name: "Cours" },
  { icon: <MdDashboard />, name: "Dashboard" },
];

export default function FloatingButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRoute = () => {};

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Dashboard menu"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
