import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {Link}  from 'react-router-dom';
import React  from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import {
   
  useNavigate
} 

from "react-router-dom";



const Nav = (props) => {

  const {  logout, isAuthenticated , user,isLoading} = useAuth0();

  const navigate = useNavigate();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
<>

   <Container className="mt-2 ">

     <Row> 
     <Col lg={4}  className="d-flex justify-content-between">
      
     <div>
   <button type="button" className="btn btn-primary">
   <a href='/gotohome' className="text-decoration-none text-dark">
            Home
          </a>
        </button>
   </div>
      <div>
      
     
 <a href="#" style={{textDecoration:'none'}} id="main-head" onClick={()=>props.handleShow(false)}><h3>Online Groceries Store</h3></a>

      </div>


      </Col>

 <Col lg={4} className="justify-content-center ">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onKeyUp={(e)=>props.searchCat(e.target.value)}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i> 
          </span>
        </div>
      </Col>

<Col lg={4} className="d-flex justify-content-end align-items-center">

  <div>
 
   
     <div className="d-flex gap-3">
  
     <div className="d-flex">

{
  props.count>0 ? <><button onClick={() => props.handleShow(true)} style={{ height: 13 }}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                    </button><sup className="text-danger"><h4 style={{ fontWeight: 'bolder' }}>{props.count}</h4></sup></>
  :
  <button    style = {{height:13}}> <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
  </button>
}
      </div> 

      {
        isAuthenticated && (
          <> <input type="image" img src = {user.picture} alt="photo" style={{width:"40px",height:"40px"}}/>

          <p className="mt-2" ><b>Hi , {user.name}</b></p></>
        
        )
      }
     
      {
        isAuthenticated ?       <div>
        <button type="button" className="btn btn-danger">
           <Link  className="text-decoration-none text-dark" onClick={() => logout({ returnTo: window.location.origin })}>
             Logout
           </Link>
         </button>
        </div>
   :   
navigate("/")
      }
    
     
      
 


     </div>
     </div>
      </Col>

      </Row>
      </Container>

  </>
 
  );
};

export default Nav;