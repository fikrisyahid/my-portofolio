import Box from "@mui/material/Box";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";

export default function Stack() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Item>
          <Typography variant="h3" fontWeight={300} textAlign="center">
            Stacks that I have used
          </Typography>
        </Item>
      </Box>
      <Box display="flex" flexDirection="column" gap={7}>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="nodejs"
              src="/assets/stack/nodejs.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Node JS")}
            />
          </Item>
          <Item hover>
            <img
              alt="js-html-css"
              src="/assets/stack/trio.png"
              style={{ width: "25vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("HTML, Java Script, CSS")}
            />
          </Item>
          <Item hover>
            <img
              alt="react"
              src="/assets/stack/react.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("React JS")}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="nextjs"
              src="/assets/stack/nextjs.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Next JS")}
            />
          </Item>
          <Item hover>
            <img
              alt="express"
              src="/assets/stack/express.png"
              style={{ width: "25vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Express JS")}
            />
          </Item>
          <Item hover>
            <img
              alt="mysql"
              src="/assets/stack/mysql.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("MySQL")}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="sequelize"
              src="/assets/stack/sequelize.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Sequelize")}
            />
          </Item>
          <Item hover>
            <img
              alt="mui"
              src="/assets/stack/mui.png"
              style={{ width: "25vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Material UI React")}
            />
          </Item>
          <Item hover>
            <img
              alt="bootstrap"
              src="/assets/stack/bootstrap.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Bootstrap")}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="ci"
              src="/assets/stack/ci.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("CodeIgniter")}
            />
          </Item>
          <Item hover>
            <img
              alt="django"
              src="/assets/stack/django.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Django")}
            />
          </Item>
          <Item hover>
            <img
              alt="php"
              src="/assets/stack/php.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("PHP")}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="ts"
              src="/assets/stack/ts.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Typescript")}
            />
          </Item>
          <Item hover>
            <img
              alt="github"
              src="/assets/stack/github.png"
              style={{ width: "25vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("GitHub")}
            />
          </Item>
          <Item hover>
            <img
              alt="chartjs"
              src="/assets/stack/chartjs.png"
              style={{ width: "15vw", height: "15vw", cursor: "pointer" }}
              onClick={() => enqueueSnackbar("Chart JS")}
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
