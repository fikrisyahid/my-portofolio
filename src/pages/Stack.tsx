import Grid from "@mui/material/Grid";
import Item from "../components/Item";

export default function Stack() {
  return (
    <Grid container direction="column">
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
