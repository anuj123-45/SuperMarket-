import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Link} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import {
   
    useNavigate
  } from "react-router-dom";
  

const First=()=>{
  const { loginWithRedirect , isAuthenticated} = useAuth0();
    const navigate = useNavigate();
    return(
        <>


    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#">Amazing Grocery Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div>
   <button type="button" className="btn btn-warning">
   <Link  className="text-decoration-none text-dark" onClick={() => loginWithRedirect()}>
            Login
          </Link>
        </button>
   </div>


   {
        isAuthenticated && 
         navigate("/home")
        
       
      }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>




        </>
    );
}

export default First;