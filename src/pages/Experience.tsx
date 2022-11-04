import Box from "@mui/material/Box";
import React from "react";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";
import MainCard from "../components/MainCard";
import ExpCard from "../components/ExpCard";

export default function Experience() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Item>
          <Typography variant="h3" fontWeight={300} textAlign="center">
            I have worked here before
          </Typography>
        </Item>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
        <Item hover>
          <ExpCard
            title="Web Developer Part Time"
            location="South Tangerang Public High School 8"
            period="February - July 2020"
            jobdesc={["Make A", "Make B", "Make C"]}
          />
        </Item>
      </Box>
    </Box>
  );
}
