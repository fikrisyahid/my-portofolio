import Divider from "@mui/material/Divider";
import { useContext } from "react";
import MainCard from "../components/MainCard";
import { PageContext } from "../context/page-context";
import Aboutme from "./Aboutme";
import Certification from "./Certification";
import Experience from "./Experience";
import Stack from "./Stack";
import Tab from "./Tab";

export default function Content() {
  const { currentPage } = useContext(PageContext);
  return (
    <MainCard>
      <Tab />
      <Divider variant="fullWidth" sx={{ marginBottom: 5 }} />
      {currentPage === "stack" ? (
        <Stack />
      ) : currentPage === "experience" ? (
        <Experience />
      ) : currentPage === "certification" ? (
        <Certification />
      ) : (
        <Aboutme />
      )}
    </MainCard>
  );
}
