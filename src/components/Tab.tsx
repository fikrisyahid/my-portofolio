import MainCard from "./Atoms/MainCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useContext } from "react";
import { PageContext } from "../context/page-context";

export default function Tab() {
  const { setCurrentPage } = useContext(PageContext);
  return (
    <MainCard>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="text"
            sx={{ fontSize: 16, fontWeight: 700, color: "white" }}
            onClick={() => setCurrentPage("project")}
          >
            My Projects
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ fontSize: 16, fontWeight: 700, color: "white" }}
            onClick={() => setCurrentPage("experience")}
          >
            Work Experience
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ fontSize: 16, fontWeight: 700, color: "white" }}
            onClick={() => setCurrentPage("stack")}
          >
            My Stack
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ fontSize: 16, fontWeight: 700, color: "white" }}
            onClick={() => setCurrentPage("certification")}
          >
            Certification
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ fontSize: 16, fontWeight: 700, color: "white" }}
            onClick={() => setCurrentPage("about-me")}
          >
            About Me
          </Button>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
    </MainCard>
  );
}
