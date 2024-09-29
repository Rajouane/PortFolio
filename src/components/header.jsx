import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <Navbar bg="danger"  >
        <Container className='text-white'>
          <Navbar.Brand className='text-white' href="#home">MyPortFolio</Navbar.Brand>
          <Nav className="mr-auto ">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#features">Features</Nav.Link>
            <Nav.Link className='text-white' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
