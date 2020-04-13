import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends React.Component{
    render(){
        return(
            <div >
                <Navbar expand="md">
                    <Navbar.Brand href="#">DC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link>Heros</Nav.Link>
                            <Nav.Link>Villains</Nav.Link>
                            <Nav.Link>Comics</Nav.Link>
                            <Nav.Link>Animations</Nav.Link>
                            <NavDropdown title="Live Action">
                                <NavDropdown.Item href="#movies"><i className="fa fa-film" aria-hidden="true"></i> Movies</NavDropdown.Item>
                                <NavDropdown.Item href="#tv-series"><i className="fa fa-television" aria-hidden="true"></i> TV series</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>About</Nav.Link>
                            <NavDropdown title="Contact">
                                <NavDropdown.Item><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</NavDropdown.Item>
                                <NavDropdown.Item><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</NavDropdown.Item>
                                <NavDropdown.Item><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</NavDropdown.Item>
                                <NavDropdown.Item><i className="fa fa-linkedin-square" aria-hidden="true"></i> Linked In</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <InputGroup>
                            <FormControl type="text" placeholder="search" />
                            <InputGroup.Append><Button variant="outline-secondary"><i className="fa fa-search" aria-hidden="true"></i> Search</Button></InputGroup.Append>
                        </InputGroup>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;