import React from 'react';
import {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    const handleLogout = () =>{
        localStorage.clear();
        navigate("/login");
    }

    const getDataFromLocalStorage =() =>{
        if (localStorage.getItem("loginDetails") !== null) {
            let userCredentials = JSON.parse(localStorage.getItem("loginDetails"));
            setUserName(userCredentials.userName);            
          }
    }
    useEffect(()=>{
        getDataFromLocalStorage();
    },[]);
    return (
    <>
        <Navbar key="xs" bg="light" expand="xs" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Text>
                Good Day!
            Signed in as: <a href="javascript:void(0)">{userName} </a>
          </Navbar.Text>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xs`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xs`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
             
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
          </>
    )
}

export default HomePage;