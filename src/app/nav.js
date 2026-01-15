'use client';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React,{useEffect,useState, useContext } from "react";
import { useRouter } from 'next/navigation';
import { useToken } from './context/TokenContext';

const nav = () => {
    const { token } = useToken();
    const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     async function fetchToken() {
    //       const res = await fetch("/api/token");
    //       const data = await res.json();
    //       setToken(data.token || null);
    //     }
    //     fetchToken();
    //   }, []);
   
    const router = useRouter();
    // const [token, setToken] = useState(null);
    

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
          });
          window.location.href = "/"; // O a donde quieras llevar al usuario después de cerrar sesión
    };
    return (
        <Navbar bg="light" expand="lg">
             <Navbar.Brand href="#">Info 100</Navbar.Brand>
           {token ? (
              <>
                  <NavDropdown title="Redeco" id="basic-nav-dropdown" className="me-3">
                      <NavDropdown.Item href="/redeco/Queja">Enviar queja</NavDropdown.Item>
                      <NavDropdown.Item href="/redeco/Consulta">Ver quejas</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">Otra opción</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown title="Reune" id="basic-nav-dropdown" className="me-3">
                      <NavDropdown.Item href="/Reune/Aclaraciones">Enviar Aclaración</NavDropdown.Item>
                      <NavDropdown.Item href="/Reune/Aclaraciones/Ver">Ver Aclaraciones</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/Reune/Consultas">Enviar Consultas</NavDropdown.Item>
                      <NavDropdown.Item href="/Reune/Consultas/Ver">Ver Consultas</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/Reune/Reclamaciones">Enviar Reclamaciones</NavDropdown.Item>
                      <NavDropdown.Item href="/Reune/Reclamaciones/Ver">Ver Reclamaciones</NavDropdown.Item>
                  </NavDropdown>

                  <Button  className="btn btn-danger me-3" onClick={handleLogout}>Cerrar sesión</Button>
              </>
              ) : (
                  <Nav.Link href="/login">Inicio de Sesion</Nav.Link>
              )}
        </Navbar>
    );
}

export default nav;