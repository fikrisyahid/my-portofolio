import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface MainCardProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function MainCard({ children, backgroundColor }: MainCardProps) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: backgroundColor || "#172731",
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
}
