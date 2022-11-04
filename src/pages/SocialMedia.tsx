import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Divider, SxProps, Theme } from "@mui/material";
import Item from "../components/Item";

interface SocialMediaProps {
  sx?: SxProps<Theme> | undefined;
}

export default function SocialMedia({ sx }: SocialMediaProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={sx}>
      <Box display="flex" justifyContent="center">
        <Item hover scale={1.2}>
          <a
            href="https://www.linkedin.com/in/muhammad-fikri-syahid/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <IconButton size="large">
              <LinkedInIcon />
            </IconButton>
          </a>
        </Item>
        <Item hover scale={1.2}>
          <a
            href="https://github.com/fikrisyahid"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <IconButton size="large">
              <GitHubIcon />
            </IconButton>
          </a>
        </Item>
        <Item hover scale={1.2}>
          <a
            href="https://t.me/fikrisyahid14"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <IconButton size="large">
              <TelegramIcon />
            </IconButton>
          </a>
        </Item>
      </Box>
      <Divider sx={{ width: "150px" }} />
    </Box>
  );
}
