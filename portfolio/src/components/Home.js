import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
function Home(){
   const hello=()=>{
       alert("kyaa aata bolke soche they ree....")
   }
 
 
//  const loggedInUser=()=>{
//     let fname = document.getElementById("fname").value;
//     alert("loveU" +fname)
//    }
    return(
        <div className=" main-div">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" className="brand">Mohammed Shahbaz</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Button onClick={hello} className="button">Say Hello</Button>
    </Nav>
    <Nav>
    <Nav.Link href="#" className="navItem">Home</Nav.Link>
    <Nav.Link href="About" className="navItem">About</Nav.Link>
    <Nav.Link href="#" className="navItem">Projects</Nav.Link>
      <Nav.Link eventKey={2} href="Resume" className="navItem">
        Resume
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar><br></br>


{/* <div>
<label for="fname">First name:</label>
     <input type="text" id="fname" />
      <Button className="btn" onClick={ loggedInUser}></Button>
     {/* <h1> Hello {loggedInUser}</h1> */}
{/* </div> */} 

{/* Footer comp.. */}

<div>
<label className="edu"> EDUCATION</label>
  <Table striped hover bordered size="bg">
  <thead>
    <tr>
      <th id="tenth"></th>
      <th id=""> </th>
      <th id=""> </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
<td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
</div>



<footer className="footer" >
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3 >Design and develop by Mohammed Shahbaz</h3>
                        
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        
                        <h3>No copyright© Bindas use karo</h3>
                    </div>
                    <div class="col-md-6 item text">
                      <h3>Media links............</h3>

                    </div>
                </div>
              
            </div>
        </footer>

        
</div>

  
          
     
    )
}

export default Home