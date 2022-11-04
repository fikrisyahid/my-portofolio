import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface MainCardProps {
  children: ReactNode;
  backgroundColor?: string;
  sx?: SxProps<Theme> | undefined
}

export default function MainCard({ children, backgroundColor, sx }: MainCardProps) {
  return (
    <Box
      sx={{
        ...sx,
        borderRadius: 3,
        backgroundColor: backgroundColor || "#172731",
        padding: 2,
      }}
    >
      {children}
    </Box>
  );
}
