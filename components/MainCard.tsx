import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface MainCardProps {
  children: ReactNode;
}

export default function MainCard({ children }: MainCardProps) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: "#172731",
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
}
