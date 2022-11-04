import React from "react";
import MainCard from "./MainCard";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemIcon } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface ExpCardProps {
  title: string;
  location: string;
  period: string;
  jobdesc: string[];
}

export default function ExpCard({
  title,
  location,
  period,
  jobdesc,
}: ExpCardProps) {
  return (
    <MainCard backgroundColor="#28343E" sx={{ width: "70vw" }}>
      <Typography textAlign="center" variant="h5" fontWeight={700}>
        {title}
      </Typography>
      <Typography textAlign="center" variant="h6">
        {location}
      </Typography>
      <Typography textAlign="center" variant="body1" mb={2}>
        <b>{period}</b>
      </Typography>
      <Typography variant="h6" textAlign="center">
        Job Description:
      </Typography>
      {jobdesc.length > 0 && (
        <List>
          {jobdesc?.map((item) => (
            <ListItem>
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </MainCard>
  );
}
