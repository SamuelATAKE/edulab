import * as React from "react";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKButton from "../../components/MKButton";

export default function FloatingActionButtons() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showparticipants, setShowParticipants] = useState(false);
  const toggleModalparticipants = () => setShowParticipants(!showparticipants);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const participants = [
    {
      id: 1,
      name: "Mounir",
      email: "atiiii@ludov.com",
      phone: "4",
    },
    {
      id: 2,
      name: "vair",
      email: "atiiii@ludov.com",
      phone: "6",
    },
    {
      id: 3,
      name: "rytfuyghuji",
      email: "ertdfgyhuj@yyi.com",
      phone: "7",
    },
    {
      id: 4,
      name: "Mi9o8764ref",
      email: "ertdfgyhuj@yyi.com",
      phone: "8",
    },
  ];
  return (
    <>
      {" "}
      <Box sx={{ "& > :not(style)": { m: 1, mb: 3 } }} bgcolor="secondary">
        <Button
          onClick={toggleModal}
          variant="extended"
          startIcon={
            <Badge badgeContent={4} color="warning">
              <MailIcon color="action" fontSize="small" />
            </Badge>
          }
        >
          <p>Notifications </p>
        </Button>
        <Button
          variant="extended"
          startIcon={<AddIcon color="action" fontSize="medium" />}
          onClick={handleOpen}
        >
          <p>Ajouter un evenement </p>
        </Button>
        <Button
          variant="extended"
          onClick={toggleModalparticipants}
          startIcon={<PeopleIcon fontSize="medium" />}
        >
          <p>Participants</p>
        </Button>
        <Button
          variant="extended"
          onClick={handleOpenEdit}
          startIcon={<EditIcon fontSize="medium" />}
        >
          <p>Reglages du projet</p>
        </Button>
        <Button variant="extended" href="/projets/1" startIcon={<DeleteIcon fontSize="medium" />}>
          <p>Supprimer</p>
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
              <MKTypography variant="h5">Notifications</MKTypography>
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
      <Modal open={open} onClose={handleClose} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={open} timeout={500}>
          <MKBox
            position="relative"
            width="500px"
            maxHeight="100%"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">Ajouter un evenement</MKTypography>
              <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={handleClose} />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox p={2}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch", height: "5ch" },
                }}
                Validate
                autoComplete="off"
              >
                <div>
                  <TextField required id="nom" label="nom" defaultValue="nom" />
                  <TextField
                    id="description"
                    label="Description"
                    defaultValue="Description"
                    maxRows={8}
                    multiline
                  />
                </div>
                <div>
                  <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2020-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="heure"
                    label="Heure"
                    type="time"
                    defaultValue="12:00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="type"
                    label="Type"
                    defaultValue="Type"
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <option value="2" />
                    <option value="1">Lorem ipsum</option>
                    <option value="2">Lorem ipsum</option>
                  </TextField>
                </div>
              </Box>
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="secondary" onClick={handleClose}>
                Valider
              </MKButton>
              <MKButton variant="gradient" color="primary">
                Annuler
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
      <Modal
        open={showparticipants}
        onClose={toggleModalparticipants}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <Slide direction="down" in={showparticipants} timeout={500}>
          <MKBox
            position="relative"
            width="750px"
            maxHeight="100%"
            display="flex"
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
          >
            <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
              <MKTypography variant="h5">Les participants</MKTypography>
              <CloseIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
                onClick={toggleModalparticipants}
              />
            </MKBox>
            <Divider sx={{ my: 0 }} />
            <TableContainer mt={3} component={Paper}>
              <Table sx={{ Width: 700 }} aria-label="simple table">
                <TableBody>
                  {participants.map((participant) => (
                    <TableRow key={participant.id}>
                      <TableCell>{participant.name}</TableCell>
                      <TableCell>{participant.email}</TableCell>
                      <TableCell> Level {participant.phone}</TableCell>
                      <TableCell>
                        <Button color="secondary"> Retirer</Button>{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ my: 0 }} />
            <MKBox display="flex" justifyContent="space-between" p={1.5}>
              <MKButton variant="gradient" color="dark" onClick={toggleModalparticipants}>
                Fermer
              </MKButton>
            </MKBox>
          </MKBox>
        </Slide>
      </Modal>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            borderRadius: "24px",
            border: "1px solid white",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
            Veuillez repondre a ces questions
          </Typography>
          <Divider />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
          >
            <div>
              <TextField required id="titre" label="Titre" defaultValue="Titre" />
              <TextField
                id="description"
                label="Description"
                defaultValue="Description"
                maxRows={8}
                multiline
              />
              <TextField id="objectif" label="Objectif" defaultValue="Objectif" />
              <TextField id="technologies" label="Technologies" defaultValue="Technologies" />
              <TextField id="prerequis" label="Prerequis" defaultValue="Prerequis" />
              <TextField id="duree" label="Duree" defaultValue="Duree" />
              <TextField
                id="nbmax"
                label="Nombre de participants"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="principal">
                {" "}
                <Typography id="modal-modal-title" variant="h6" component="h2" bottom={15}>
                  Ressources
                </Typography>
              </label>
              <input id="principal" name="principal" type="file" accept="*" />
            </div>
          </Box>
          <Divider sx={{ my: 0, mt: 3 }} />
          <MKBox display="flex" justifyContent="space-between" p={1.5}>
            <MKButton
              variant="gradient"
              color="dark"
              onClick={handleCloseEdit}
              startIcon={<SendIcon />}
            >
              Enregistrer
            </MKButton>
            <MKButton variant="gradient" color="primary" onClick={handleCloseEdit}>
              Annuler
            </MKButton>
          </MKBox>
        </Card>
      </Modal>
    </>
  );
}
