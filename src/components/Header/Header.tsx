import React from "react";
import { Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "green",
          marginBottom: "20px",
          padding: "10px",
          color: "white",
        }}>
        <Typography variant="h4">Feature Flag Manager</Typography>
      </Container>
    </>
  );
};

export default Header;
