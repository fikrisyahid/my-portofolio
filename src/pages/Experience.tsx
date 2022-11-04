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
      <Box display="flex" flexDirection="column" alignItems="center" gap={5}>
        <Item>
          <ExpCard
            title="System Development Engineering Intern"
            location="PT. Amerta Indah Otsuka"
            period="June - December 2022"
            jobdesc={[
              "Create engine downtime monitoring application using NodeJS for back-end and front-end.",
              "Create e-Training application front-end using NextJS and ReactJS.",
              "Collaborate with team on GitHub to update back-end API or front-end request.",
            ]}
          />
        </Item>
        <Item>
          <ExpCard
            title="Web Developer Intern"
            location="PT. Prima Duta Nusantara"
            period="March - April 2021"
            jobdesc={[
              "Create web based HRD application using PHP with CodeIgniter 4 framework.",
              "Design and create application database.",
              "Maintenance on the application based on HRD's request.",
            ]}
          />
        </Item>
        <Item>
          <ExpCard
            title="Web Developer Part Time"
            location="South Tangerang Public High School 8"
            period="February - July 2020"
            jobdesc={[
              "Create school website using WordPress CMS.",
              "Maintenance on the website's content according to school's request.",
              "Do a weekly database backup.",
            ]}
          />
        </Item>
      </Box>
    </Box>
  );
}
