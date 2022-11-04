import Item from "./Item";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface CertBoxProps {
  src: string;
  url?: string;
  alt?: string;
}

export default function CertBox({ url, src, alt }: CertBoxProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Item hover>
        <Dialog
          fullWidth
          maxWidth="md"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <img alt={alt} src={src} style={{ width: "100%", height: "100%" }} />
        </Dialog>
        <img
          alt={alt}
          src={src}
          style={{ width: "20vw", height: "15vw", cursor: "pointer" }}
          onClick={() => setDialogOpen(true)}
        />
      </Item>
      {url && (
        <a href={url} target="_blank" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3f5465",
              color: "white",
              ":hover": {
                backgroundColor: "#4e708d",
              },
            }}
          >
            View Credential
          </Button>
        </a>
      )}
    </Box>
  );
}
