import Box from "@mui/material/Box";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";

export default function Stack() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Item>
          <Typography variant="h3" fontWeight={100}>
            Stacks that I have used
          </Typography>
        </Item>
      </Box>
      <Box display="flex" flexDirection="column" gap={7}>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="nodejs"
              src="/assets/nodejs.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="js-html-css"
              src="/assets/trio.png"
              style={{ width: "25vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="react"
              src="/assets/react.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="nextjs"
              src="/assets/nextjs.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="express"
              src="/assets/express.png"
              style={{ width: "25vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="mysql"
              src="/assets/mysql.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="sequelize"
              src="/assets/sequelize.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="mui"
              src="/assets/mui.png"
              style={{ width: "25vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="bootstrap"
              src="/assets/bootstrap.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="ci"
              src="/assets/ci.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="django"
              src="/assets/django.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
          <Item hover>
            <img
              alt="php"
              src="/assets/php.png"
              style={{ width: "15vw", height: "15vw" }}
            />
          </Item>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Item hover>
            <img
              alt="github"
              src="/assets/github.png"
              style={{ width: "25vw", height: "15vw" }}
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
