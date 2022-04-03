import * as React from "react";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKButton from "../../components/MKButton";

export default function FloatingActionButtons() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  return (
    <>
      {" "}
      <Box sx={{ "& > :not(style)": { m: 1, mb: 3 } }}>
        <Button
          variant="extended"
          border="2px solid black"
          onClick={toggleModal}
          startIcon={
            <Badge badgeContent={4} color="warning">
              <MailIcon color="action" />
            </Badge>
          }
        >
          <p>Evenements </p>
        </Button>
      </Box>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <MKBox
            position="relative"
            width="500px"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">Evenements</MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <List
                sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Actuellement sur ce projet
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Remise de code" secondary="lorem ipsum dolor" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Deploiement" secondary="lorem ipsum dolor" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Revert fixing" secondary="lorem ipsum dolor" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Visioconference de fin de projet"
                    secondary="lorem ipsum dolor"
                  />
                </ListItemButton>
              </List>
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                Fermer
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
    </>
  );
}
