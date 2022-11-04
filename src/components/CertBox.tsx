import Item from "./Item";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Button from "@mui/material/Button";

interface CertBoxProps {
  src: string;
  url?: string;
  alt?: string;
}

export default function CertBox({ url, src, alt }: CertBoxProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Item hover>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <img alt={alt} src={src} style={{ width: "100%", height: "100%" }} />
          {url && (
            <Button variant="contained" color="primary">
              View Credential
            </Button>
          )}
      </Dialog>
      <img
        alt={alt}
        src={src}
        style={{ width: "20vw", height: "15vw", cursor: "pointer" }}
        onClick={() => setDialogOpen(true)}
      />
    </Item>
  );
}
