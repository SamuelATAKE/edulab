import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";

export default function FloatingActionButtons() {
  return (
    <>
      {" "}
      <Box sx={{ "& > :not(style)": { m: 1, mb: 3 } }}>
        <Fab variant="extended">
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
          <p> Evenements</p>
        </Fab>
      </Box>
    </>
  );
}
