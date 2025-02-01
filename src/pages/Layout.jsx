import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Container } from "@mui/material";

function Layout() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 10 }}> 
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
