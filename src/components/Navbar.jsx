import {AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

function NavBar(){
    return (
        <>
        <AppBar>
            <Toolbar>
                <IconButton edge="start">

                    <MenuIcon/>
                
                </IconButton>

                <Typography variant="h6">Mi App</Typography>
                <Button color="inherit">Cerrar Sesion</Button>
                <Button color="inherit">Iniciar Sesion</Button>

            </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={true}>
            <Box role="presentation">
                <List>
                    <ListItem>
                        <ListItemText primary="Inicio"> Hoola</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Ruta Protegida"> Hoola</ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Drawer>



        </>

    )
}


export default NavBar;