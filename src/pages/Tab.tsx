import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { PageContext } from "../context/page-context";

export default function Tab() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            backgroundColor:
              currentPage === "stack" ? "#25343F" : "transparent",
          }}
          onClick={() => setCurrentPage("stack")}
        >
          My Stack
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            backgroundColor:
              currentPage === "experience" ? "#25343F" : "transparent",
          }}
          onClick={() => setCurrentPage("experience")}
        >
          Work Experience
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            backgroundColor:
              currentPage === "certification" ? "#25343F" : "transparent",
          }}
          onClick={() => setCurrentPage("certification")}
        >
          Certification
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            backgroundColor:
              currentPage === "about-me" ? "#25343F" : "transparent",
          }}
          onClick={() => setCurrentPage("about-me")}
        >
          About Me
        </Button>
      </Grid>
    </Grid>
  );
}
