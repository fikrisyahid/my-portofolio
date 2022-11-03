import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SxProps, Theme } from "@mui/material";

interface ItemProps {
  children: ReactNode;
  hover?: boolean;
  align?: any;
  sx?: SxProps<Theme> | undefined;
}

export default function Item({ children, hover, align, sx }: ItemProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={align || "normal"}
      sx={sx}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={hover ? { scale: 1.1 } : undefined}
      >
        {children}
      </motion.div>
    </Box>
  );
}
