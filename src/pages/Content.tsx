import Divider from "@mui/material/Divider";
import { useContext } from "react";
import MainCard from "../components/MainCard";
import { PageContext } from "../context/page-context";
import Stack from "./stack";
import Tab from "./Tab";

export default function Content() {
  const { currentPage } = useContext(PageContext);
  return (
    <MainCard>
      <Tab />
      <Divider variant="fullWidth" sx={{marginBottom: 3}} />
      {currentPage === "stack"
        ? <Stack />
        : currentPage === "experience"
        ? "experience"
        : currentPage === "certification"
        ? "certification"
        : "about me"}
    </MainCard>
  );
}
