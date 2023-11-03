import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container style={centerStyle}> 
          <Navbar.Brand>Gerenciamento de Projetos</Navbar.Brand>
        </Container>
      </Navbar>
    );
}
 
export default Header;