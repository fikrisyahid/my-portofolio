import Grid from "@mui/material/Grid";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";

export default function Stack() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item alignSelf="center">
        <Typography variant="h4" fontWeight={300}>
          Stacks that I have used
        </Typography>
      </Grid>
      <Grid container item spacing={2} justifyContent="space-evenly">
        <Grid item>
          <Item hover>
            <img
              alt="nodejs"
              src="/assets/nodejs.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Grid>
        <Grid item>
          <Item hover>
            <img
              alt="nodejs"
              src="/assets/nodejs.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}
