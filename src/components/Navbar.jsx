import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>

          <Button color="inherit" component={Link} to="/login">
            Iniciar Sesión
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Inicio" />
            </ListItem>

            <ListItem button component={Link} to="/login">
              <ListItemText primary="Iniciar sesión" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
