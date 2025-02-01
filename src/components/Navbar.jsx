import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../AuthContext";


function NavBar() {
  const [open, setOpen] = useState(false);  
  let {user, login, logout} = useAuth();
  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography>
            {user ? <p>Bienvenido {user.displayName}</p>: <></>}
          </Typography>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>

          <Button color="inherit" onClick={login}>Iniciar Sesión</Button>
          <Button color="inherit" onClick={logout}>Cerrar Sesión</Button>

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
