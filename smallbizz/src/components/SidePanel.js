import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const SidePanel = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sidebar d-flex flex-column justify-content-between">
        <Container>
          <Navbar.Brand href="/home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
              <Nav.Link href="/home">Home Page</Nav.Link>
              <Nav.Link href="/product-analysis">Product Analysis</Nav.Link>
              <Nav.Link href="/transaction-history">Transaction History</Nav.Link>
              <Nav.Link href="/view-reviews">View Reviews</Nav.Link>
              <Nav.Link href="/achievements-promotions">Achievements/Promotions</Nav.Link>
              <Nav.Link href="/your-orders">Your Orders</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="p-3">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default SidePanel;
