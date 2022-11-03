import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

export default function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <Box sx={{ padding: 2 }} display="flex" flexDirection="column" gap={2}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Box>
  );
}
