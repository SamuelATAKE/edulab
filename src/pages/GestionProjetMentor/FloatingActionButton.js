import * as React from "react";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import Button from "@mui/material/Button";

export default function FloatingActionButtons() {
  return (
    <>
      {" "}
      <Box sx={{ "& > :not(style)": { m: 1, mb: 3 } }}>
        <Button
          variant="extended"
          startIcon={
            <Badge badgeContent={4} color="warning">
              <MailIcon color="action" />
            </Badge>
          }
        >
          <p>Notifications </p>
        </Button>
        <Button variant="extended" startIcon={<AddIcon color="action" />}>
          <p>Ajouter un evenement </p>
        </Button>
        <Button variant="extended" startIcon={<PeopleIcon />}>
          <p>Participants</p>
        </Button>
      </Box>
    </>
  );
}
