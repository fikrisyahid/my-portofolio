import Box from "@mui/material/Box";
import React from "react";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";

export default function Aboutme() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Item>
          <Typography variant="h3" fontWeight={300} textAlign="center">
            Know more about me
          </Typography>
        </Item>
      </Box>
    </Box>
  );
}
